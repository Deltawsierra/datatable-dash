'use client';

import { useState, useMemo } from 'react';
import { Layout, Menu, Input, Typography } from 'antd';
import { TableOutlined, DatabaseOutlined, DashboardOutlined, SearchOutlined } from '@ant-design/icons';
import { usePathname, useRouter } from 'next/navigation';
import { tableConfigs } from '../lib/tableRegistry';

const { Sider } = Layout;
const { Title } = Typography;

interface DashboardSidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

// Collapsible sidebar navigation
export default function DashboardSidebar({ collapsed, onCollapse }: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  
  // Get selected menu key from URL
  const getSelectedKey = () => {
    if (pathname === '/') return 'overview';
    return pathname.split('/').pop() || 'overview';
  };
  
  // Filter tables by search text
  const filteredTableItems = useMemo(() => {
    const query = searchText.toLowerCase().trim();
    if (!query) return tableConfigs;
    return tableConfigs.filter((config) =>
      config.label.toLowerCase().includes(query) ||
      config.key.toLowerCase().includes(query)
    );
  }, [searchText]);

  // Overview menu item
  const overviewItem = {
    key: 'overview',
    icon: <DashboardOutlined style={{ fontSize: 16 }} />,
    label: 'Overview',
    onClick: () => router.push('/'),
  };

  // Filtered table menu items
  const tableMenuItems = filteredTableItems.map((config) => ({
    key: config.key,
    icon: <TableOutlined style={{ fontSize: 16 }} />,
    label: config.label,
    onClick: () => router.push(config.path),
  }));

  return (
    <Sider
      width={280}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      breakpoint="lg"
      collapsedWidth={80}
      className="h-screen sticky top-0 left-0"
      style={{ background: 'var(--sidebar-bg)', borderRight: '1px solid var(--sidebar-border)' }}
      data-testid="sidebar"
      trigger={null}
    >
      {/* Logo and branding */}
      <div className="p-4 mb-2" style={{ borderBottom: '1px solid var(--sidebar-border)' }}>
        <div className="flex items-center gap-3">
          <div 
            className="flex items-center justify-center w-10 h-10 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)' }}
          >
            <DatabaseOutlined style={{ color: 'white', fontSize: 20 }} />
          </div>
          {!collapsed && (
            <div>
              <Title level={5} style={{ margin: 0, fontSize: 16, color: 'var(--sidebar-text)' }}>RDM Lighthouse</Title>
              <span style={{ fontSize: 12, color: 'var(--sidebar-text-muted)' }}>Data Governance</span>
            </div>
          )}
        </div>
      </div>

      {/* Overview nav */}
      <div className="px-2">
        <Menu
          mode="inline"
          selectedKeys={[getSelectedKey()]}
          items={[overviewItem]}
          style={{ border: 'none', background: 'transparent' }}
          data-testid="sidebar-overview-menu"
        />
      </div>

      {/* Tables section with search */}
      <div className="px-2 mt-1 flex flex-col" style={{ minHeight: 0, flex: 1 }}>
        {!collapsed && (
          <>
            <div className="px-4 py-2 mb-1">
              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--sidebar-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Tables
              </span>
            </div>
            {/* Search input */}
            <div className="px-2 mb-2">
              <Input
                placeholder="Search tables..."
                prefix={<SearchOutlined style={{ color: 'var(--sidebar-text-muted)' }} />}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                allowClear
                size="small"
                data-testid="input-table-search"
                style={{
                  background: 'var(--sidebar-hover)',
                  borderColor: 'var(--sidebar-border)',
                  color: 'var(--sidebar-text)',
                }}
              />
            </div>
          </>
        )}

        {/* Scrollable table list */}
        <div className="overflow-y-auto" style={{ flex: 1 }}>
          {tableMenuItems.length > 0 ? (
            <Menu
              mode="inline"
              selectedKeys={[getSelectedKey()]}
              items={tableMenuItems}
              style={{ border: 'none', background: 'transparent' }}
              data-testid="sidebar-table-menu"
            />
          ) : (
            !collapsed && (
              <div className="px-4 py-3 text-center" style={{ color: 'var(--sidebar-text-muted)', fontSize: 13 }} data-testid="text-no-tables-found">
                No tables match &ldquo;{searchText}&rdquo;
              </div>
            )
          )}
        </div>
      </div>
      
      {/* Sidebar theme overrides */}
      <style jsx global>{`
        .ant-layout-sider { background: var(--sidebar-bg) !important; }
        .ant-layout-sider .ant-menu { background: transparent !important; }
        .ant-layout-sider .ant-menu-item { color: var(--sidebar-text) !important; margin: 4px 8px !important; border-radius: 8px !important; transition: all 0.2s ease !important; }
        .ant-layout-sider .ant-menu-item:hover { background: var(--sidebar-hover) !important; }
        .ant-layout-sider .ant-menu-item-selected { background: var(--sidebar-active) !important; color: #ffffff !important; }
        .ant-layout-sider .ant-menu-item-selected::after { display: none !important; }
        .ant-layout-sider .ant-menu-item .anticon { color: inherit !important; }
        .ant-layout-sider-trigger { background: var(--sidebar-hover) !important; color: var(--sidebar-text) !important; }
        .ant-layout-sider .ant-input-affix-wrapper { background: var(--sidebar-hover) !important; border-color: var(--sidebar-border) !important; }
        .ant-layout-sider .ant-input-affix-wrapper .ant-input { background: transparent !important; color: var(--sidebar-text) !important; }
        .ant-layout-sider .ant-input-affix-wrapper .ant-input::placeholder { color: var(--sidebar-text-muted) !important; }
        .ant-layout-sider .ant-input-affix-wrapper .ant-input-clear-icon { color: var(--sidebar-text-muted) !important; }
      `}</style>
    </Sider>
  );
}
