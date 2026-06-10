'use client';

import { useEffect, useState } from 'react';
import { MsalProvider } from '@azure/msal-react';
import type { PublicClientApplication } from '@azure/msal-browser';
import { getMsalInstance } from '~/lib/auth';
import { AuthConfigContext } from '~/lib/authContext';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [instance, setInstance] = useState<PublicClientApplication | null>(null);
  const [configMissing, setConfigMissing] = useState(false);
  const [initError, setInitError] = useState(false);

  useEffect(() => {
    fetch('/api/config')
      .then((res) => res.json())
      .then(({ clientId, tenantId }) => {
        if (!clientId || !tenantId) {
          setConfigMissing(true);
          return;
        }
        const msalInstance = getMsalInstance(clientId, tenantId);
        msalInstance
          .initialize()
          .then(() => msalInstance.handleRedirectPromise())
          .then(() => setInstance(msalInstance))
          .catch(() => setInitError(true));
      })
      .catch(() => setConfigMissing(true));
  }, []);

  if (configMissing) {
    // No Azure credentials configured — AuthGuard renders the dev bypass.
    return (
      <AuthConfigContext.Provider value={{ authConfigured: false }}>
        {children}
      </AuthConfigContext.Provider>
    );
  }

  if (initError) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          background: '#f8fafc',
          flexDirection: 'column',
          gap: 8,
          textAlign: 'center',
          padding: '0 24px',
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: '#b91c1c' }}>
          Sign-in failed to initialize
        </span>
        <span style={{ fontSize: 13, color: '#64748b', maxWidth: 320 }}>
          The authentication service could not start. Please refresh the page or
          try again later.
        </span>
      </div>
    );
  }

  if (!instance) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          background: '#f8fafc',
        }}
      >
        <span style={{ fontSize: 14, color: '#64748b' }}>Loading...</span>
      </div>
    );
  }

  return (
    <MsalProvider instance={instance}>
      <AuthConfigContext.Provider value={{ authConfigured: true }}>
        {children}
      </AuthConfigContext.Provider>
    </MsalProvider>
  );
}
