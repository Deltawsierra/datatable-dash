'use client';

import { useEffect, useState } from 'react';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { loginRequest, getAccessToken } from '~/lib/auth';
import { AuthContext } from '~/lib/authContext';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts, inProgress } = useMsal();
  const [roles, setRoles] = useState<string[]>([]);
  const [rolesLoading, setRolesLoading] = useState(true);

  const account = accounts[0] ?? null;
  const displayName = account?.name ?? null;
  const username = account?.username ?? null;

  useEffect(() => {
    if (!isAuthenticated && inProgress === InteractionStatus.None) {
      instance.loginRedirect(loginRequest);
    }
  }, [isAuthenticated, inProgress, instance]);

  useEffect(() => {
    if (!isAuthenticated) return;

    (async () => {
      try {
        const token = await getAccessToken();
        const headers: Record<string, string> = { 'Content-Type': 'application/json' };
        if (token) headers['Authorization'] = `Bearer ${token}`;

        const res = await fetch('/api/proxy/v1/user/roles', { headers });
        const data = res.ok ? await res.json() : { roles: [] };
        setRoles(data.roles ?? []);
      } catch {
        setRoles([]);
      } finally {
        setRolesLoading(false);
      }
    })();
  }, [isAuthenticated]);

  if (!isAuthenticated || inProgress !== InteractionStatus.None) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          background: 'var(--content-bg, #f8fafc)',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            border: '3px solid #e2e8f0',
            borderTopColor: '#1677ff',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }}
        />
        <span style={{ fontSize: 14, color: '#64748b' }}>
          {inProgress !== InteractionStatus.None ? 'Signing in...' : 'Redirecting to login...'}
        </span>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ displayName, username, roles, rolesLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
