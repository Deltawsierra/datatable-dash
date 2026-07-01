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
