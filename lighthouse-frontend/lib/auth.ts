import { PublicClientApplication, InteractionRequiredAuthError, type Configuration } from '@azure/msal-browser';

const OIDC_SCOPES = ['openid', 'profile', 'email'];

function createMsalConfig(clientId: string, tenantId: string): Configuration {
  return {
    auth: {
      clientId,
      authority: `https://login.microsoftonline.com/${tenantId}`,
      redirectUri: window.location.origin,
      postLogoutRedirectUri: window.location.origin,
    },
    cache: {
      cacheLocation: 'sessionStorage',
    },
  };
}

// The backend (AuthMiddleware -> validate_and_decode_jwt) only accepts an access
// token whose audience is THIS app's API. Requesting only OIDC scopes
// (openid/profile/email) yields a Microsoft Graph token, which the backend
// rejects with 401 "Invalid token". So we must acquire a token for the app's
// own exposed API scope.
//
// The scope is resolved at runtime from /api/config (server env AZURE_API_SCOPE).
// When unset we default to "api://<clientId>/access_as_user". Override it to
// match your App ID URI / exposed scope (for example "<clientId>/.default").
function resolveApiScope(clientId: string, apiScope?: string | null): string | null {
  if (apiScope && apiScope.trim()) return apiScope.trim();
  if (!clientId) return null;
  return `api://${clientId}/access_as_user`;
}

let _instance: PublicClientApplication | null = null;
let _apiScope: string | null = null;

export function getMsalInstance(
  clientId: string,
  tenantId: string,
  apiScope?: string | null,
): PublicClientApplication {
  if (!_instance) {
    _instance = new PublicClientApplication(createMsalConfig(clientId, tenantId));
    _apiScope = resolveApiScope(clientId, apiScope);
  }
  return _instance;
}

// OIDC-only request (sign-in identity).
export const loginRequest = {
  scopes: OIDC_SCOPES,
};

// Interactive login request: OIDC scopes for sign-in PLUS the API scope, so the
// user consents to the backend API up front and later silent token acquisition
// for that scope succeeds.
export function getLoginRequest(): { scopes: string[] } {
  return { scopes: _apiScope ? [...OIDC_SCOPES, _apiScope] : OIDC_SCOPES };
}

export async function getAccessToken(): Promise<string | null> {
  if (typeof window === 'undefined' || !_instance) return null;
  const accounts = _instance.getAllAccounts();
  if (!accounts.length) return null;
  const scopes = _apiScope ? [_apiScope] : OIDC_SCOPES;
  try {
    const result = await _instance.acquireTokenSilent({ scopes, account: accounts[0] });
    return result.accessToken;
  } catch (err) {
    console.error('[auth] acquireTokenSilent failed', err);
    if (err instanceof InteractionRequiredAuthError) {
      await _instance.acquireTokenRedirect({ scopes });
    }
    return null;
  }
}
