'use client';

import { useEffect, useState } from 'react';
import { MsalProvider } from '@azure/msal-react';
import type { PublicClientApplication } from '@azure/msal-browser';
import { getMsalInstance } from '~/lib/auth';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [instance, setInstance] = useState<PublicClientApplication | null>(null);

  useEffect(() => {
    const msalInstance = getMsalInstance();
    msalInstance.initialize().then(() => setInstance(msalInstance));
  }, []);

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

  return <MsalProvider instance={instance}>{children}</MsalProvider>;
}
