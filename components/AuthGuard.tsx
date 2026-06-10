'use client';

import { useEffect, useState } from 'react';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { getLoginRequest } from '~/lib/auth';
import { fetchUserInfo, deriveRoles } from '~/lib/api';
import { AuthContext, useAuthConfig } from '~/lib/authContext';

function inIframe(): boolean {
  try {
    return typeof window !== 'undefined' && window.self !== window.top;
  } catch {
    return true;
  }
}

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  // Single source of truth: AuthProvider resolves /api/config and tells us
  // whether Azure auth is configured. When it isn't, we render the dev bypass.
  const { authConfigured } = useAuthConfig();
  const devBypass = !authConfigured;

  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts, inProgress } = useMsal();
  const [roles, setRoles] = useState<string[]>([]);
  const [rolesLoading, setRolesLoading] = useState(true);
  const [iframeDetected, setIframeDetected] = useState(false);

  const account = accounts[0] ?? null;
  const displayName = account?.name ?? null;
  const username = account?.username ?? null;

  useEffect(() => {
    if (devBypass) return;
    if (!isAuthenticated && inProgress === InteractionStatus.None) {
      if (inIframe()) {
        setIframeDetected(true);
      } else {
        instance.loginRedirect(getLoginRequest());
      }
    }
  }, [devBypass, isAuthenticated, inProgress, instance]);

  useEffect(() => {
    if (devBypass || !isAuthenticated) return;

    (async () => {
      try {
        // Roles/permissions come from /v1/user/info — the backend hydrates them
        // into request.state.user. There is no separate /v1/user/roles route.
        const info = await fetchUserInfo();
        setRoles(deriveRoles(info));
      } catch {
        setRoles([]);
      } finally {
        setRolesLoading(false);
      }
    })();
  }, [devBypass, isAuthenticated]);

  if (devBypass) {
    return (
      <AuthContext.Provider
        value={{
          displayName: 'Dev User',
          username: 'dev@genworth.net',
          roles: ['admin'],
          rolesLoading: false,
        }}
      >
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'fixed',
              bottom: 16,
              right: 16,
              zIndex: 9998,
              background: '#f59e0b',
              color: '#1c1917',
              fontSize: 11,
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: 20,
              letterSpacing: '0.04em',
              boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
              userSelect: 'none',
            }}
          >
            DEV MODE — Auth bypassed
          </div>
          {children}
        </div>
      </AuthContext.Provider>
    );
  }

  if (!isAuthenticated || inProgress !== InteractionStatus.None) {
    if (iframeDetected) {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            background: 'var(--content-bg, #f8fafc)',
            flexDirection: 'column',
            gap: 16,
            textAlign: 'center',
            padding: '0 24px',
          }}
        >
          <svg width="40" height="40" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="10" fill="#F25022" />
            <rect x="11" width="10" height="10" fill="#7FBA00" />
            <rect y="11" width="10" height="10" fill="#00A4EF" />
            <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
          </svg>
          <span style={{ fontSize: 16, fontWeight: 600, color: '#1e293b' }}>
            Sign in with Microsoft
          </span>
          <span style={{ fontSize: 13, color: '#64748b', maxWidth: 280 }}>
            Open the app in a new tab to sign in with your Genworth Microsoft account.
          </span>
          <a
            href={typeof window !== 'undefined' ? window.location.href : '/'}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 4,
              padding: '8px 20px',
              background: '#1677ff',
              color: '#fff',
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Open in new tab →
          </a>
        </div>
      );
    }

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
