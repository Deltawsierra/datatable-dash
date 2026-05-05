import { PublicClientApplication, type Configuration } from '@azure/msal-browser';

function createMsalConfig(): Configuration {
  return {
    auth: {
      clientId: process.env.NEXT_PUBLIC_AZURE_CLIENT_ID ?? 'placeholder-client-id',
      authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_TENANT_ID ?? 'common'}`,
      redirectUri: window.location.origin,
      postLogoutRedirectUri: window.location.origin,
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: false,
    },
  };
}

export const loginRequest = {
  scopes: ['openid', 'profile', 'email'],
};

let _instance: PublicClientApplication | null = null;

export function getMsalInstance(): PublicClientApplication {
  if (!_instance) {
    _instance = new PublicClientApplication(createMsalConfig());
  }
  return _instance;
}

export async function getAccessToken(): Promise<string | null> {
  if (typeof window === 'undefined') return null;
  try {
    const instance = getMsalInstance();
    const accounts = instance.getAllAccounts();
    if (!accounts.length) return null;
    const result = await instance.acquireTokenSilent({
      ...loginRequest,
      account: accounts[0],
    });
    return result.accessToken;
  } catch {
    return null;
  }
}
