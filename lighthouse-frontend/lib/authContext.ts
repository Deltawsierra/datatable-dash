'use client';

import { createContext, useContext } from 'react';

export interface AuthContextValue {
  displayName: string | null;
  username: string | null;
  roles: string[];
  rolesLoading: boolean;
}

export const AuthContext = createContext<AuthContextValue>({
  displayName: null,
  username: null,
  roles: [],
  rolesLoading: true,
});

export function useAuth(): AuthContextValue {
  return useContext(AuthContext);
}

export interface AuthConfigContextValue {
  // Whether Azure AD auth is configured at runtime (resolved by AuthProvider
  // via /api/config). When false, AuthGuard renders the dev bypass.
  authConfigured: boolean;
}

export const AuthConfigContext = createContext<AuthConfigContextValue>({
  authConfigured: false,
});

export function useAuthConfig(): AuthConfigContextValue {
  return useContext(AuthConfigContext);
}
