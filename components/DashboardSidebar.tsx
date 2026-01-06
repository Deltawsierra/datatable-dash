'use client';

import { Layout, Menu, Typography } from 'antd';
import { TableOutlined, DatabaseOutlined, DashboardOutlined } from '@ant-design/icons';
import { usePathname, useRouter } from 'next/navigation';
import { tableConfigs } from '../lib/types';

const { Sider } = Layout;
const { Title } = Typography;

interface DashboardSidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

export default function DashboardSidebar({ collapsed, onCollapse }: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  
  const getSelectedKey = () => {
    if (pathname === '/') return 'overview';
    return pathname.split('/').pop() || 'overview';
  };
  
  const overviewItem = {
    key: 'overview',
    icon: <DashboardOutlined style={{ fontSize: 16 }} />,
    label: 'Overview',
    onClick: () => router.push('/'),
  };
  
  const tableItems = tableConfigs.map((config) => ({
    key: config.key,
    icon: <TableOutlined style={{ fontSize: 16 }} />,
    label: config.label,
    onClick: () => router.push(config.path),
  }));
  
  const menuItems = [overviewItem, ...tableItems];

  return (
    <Sider
      width={280}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      breakpoint="lg"
      collapsedWidth={80}
      className="h-screen sticky top-0 left-0"
      style={{
        background: 'var(--sidebar-bg)',
        borderRight: '1px solid var(--sidebar-border)',
      }}
      data-testid="sidebar"
      trigger={null}
    >
      <div 
        className="p-4 mb-2"
        style={{ 
          borderBottom: '1px solid var(--sidebar-border)',
        }}
      >
        <div className="flex items-center gap-3">
          <div 
            className="flex items-center justify-center w-10 h-10 rounded-lg"
            style={{ 
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
            }}
          >
            <DatabaseOutlined style={{ color: 'white', fontSize: 20 }} />
          </div>
          {!collapsed && (
            <div>
              <Title level={5} style={{ margin: 0, fontSize: 16, color: 'var(--sidebar-text)' }}>
                RDM Dashboard
              </Title>
              <span style={{ fontSize: 12, color: 'var(--sidebar-text-muted)' }}>
                Reference Data
              </span>
            </div>
          )}
        </div>
      </div>
      
      <div className="px-2">
        {!collapsed && (
          <div className="px-4 py-2 mb-2">
            <span style={{ 
              fontSize: 11, 
              fontWeight: 600, 
              color: 'var(--sidebar-text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Navigation
            </span>
          </div>
        )}
        <Menu
          mode="inline"
          selectedKeys={[getSelectedKey()]}
          items={menuItems}
          style={{ 
            border: 'none',
            background: 'transparent',
          }}
          data-testid="sidebar-menu"
        />
      </div>
      
      <style jsx global>{`
        .ant-layout-sider {
          background: var(--sidebar-bg) !important;
        }
        
        .ant-layout-sider .ant-menu {
          background: transparent !important;
        }
        
        .ant-layout-sider .ant-menu-item {
          color: var(--sidebar-text) !important;
          margin: 4px 8px !important;
          border-radius: 8px !important;
          transition: all 0.2s ease !important;
        }
        
        .ant-layout-sider .ant-menu-item:hover {
          background: var(--sidebar-hover) !important;
        }
        
        .ant-layout-sider .ant-menu-item-selected {
          background: var(--sidebar-active) !important;
          color: #ffffff !important;
        }
        
        .ant-layout-sider .ant-menu-item-selected::after {
          display: none !important;
        }
        
        .ant-layout-sider .ant-menu-item .anticon {
          color: inherit !important;
        }
        
        .ant-layout-sider-trigger {
          background: var(--sidebar-hover) !important;
          color: var(--sidebar-text) !important;
        }
      `}</style>
    </Sider>
  );
}
