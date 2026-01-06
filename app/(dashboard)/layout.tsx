'use client';

import { useState } from 'react';
import { Layout } from 'antd';
import DashboardSidebar from '../../components/DashboardSidebar';
import DashboardHeader from '../../components/DashboardHeader';
import { ThemeProvider } from '../../components/ThemeProvider';

const { Content } = Layout;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ThemeProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <DashboardSidebar 
          collapsed={collapsed} 
          onCollapse={setCollapsed} 
        />
        <Layout style={{ background: 'transparent' }}>
          <DashboardHeader 
            collapsed={collapsed}
            onToggle={() => setCollapsed(!collapsed)}
          />
          <Content 
            style={{ 
              background: 'var(--content-bg)',
              minHeight: 'calc(100vh - 64px)',
              transition: 'background-color 0.3s ease',
            }}
            data-testid="main-content"
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
}
