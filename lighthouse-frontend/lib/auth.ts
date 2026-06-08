import { PublicClientApplication, type Configuration } from '@azure/msal-browser';

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

export const loginRequest = {
  scopes: ['openid', 'profile', 'email'],
};

let _instance: PublicClientApplication | null = null;

export function getMsalInstance(clientId: string, tenantId: string): PublicClientApplication {
  if (!_instance) {
    _instance = new PublicClientApplication(createMsalConfig(clientId, tenantId));
  }
  return _instance;
}

export async function getAccessToken(): Promise<string | null> {
  if (typeof window === 'undefined' || !_instance) return null;
  try {
    const accounts = _instance.getAllAccounts();
    if (!accounts.length) return null;
    const result = await _instance.acquireTokenSilent({
      ...loginRequest,
      account: accounts[0],
    });
    return result.accessToken;
  } catch {
    return null;
  }
}