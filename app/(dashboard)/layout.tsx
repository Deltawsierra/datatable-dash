'use client';

import { useState } from 'react';
import { Layout } from 'antd';
import DashboardSidebar from '../../components/DashboardSidebar';
import DashboardHeader from '../../components/DashboardHeader';

const { Content } = Layout;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <DashboardSidebar 
        collapsed={collapsed} 
        onCollapse={setCollapsed} 
      />
      <Layout>
        <DashboardHeader 
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        />
        <Content 
          style={{ 
            background: '#ffffff',
            minHeight: 'calc(100vh - 64px)',
          }}
          data-testid="main-content"
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
