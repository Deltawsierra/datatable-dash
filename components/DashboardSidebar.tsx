'use client';

import { Layout, Menu, Typography } from 'antd';
import { TableOutlined, DatabaseOutlined } from '@ant-design/icons';
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
  
  const currentTable = pathname.split('/').pop() || 'states';
  
  const menuItems = tableConfigs.map((config) => ({
    key: config.key,
    icon: <TableOutlined />,
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
      style={{
        background: '#f5f5f5',
        borderRight: '1px solid #e8e8e8',
      }}
      data-testid="sidebar"
    >
      <div className="p-4 mb-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div 
            className="flex items-center justify-center w-10 h-10 rounded-lg"
            style={{ background: '#1677ff' }}
          >
            <DatabaseOutlined style={{ color: 'white', fontSize: 20 }} />
          </div>
          {!collapsed && (
            <div>
              <Title level={5} style={{ margin: 0, fontSize: 16 }}>
                RDM Dashboard
              </Title>
              <span className="text-xs text-gray-500">Reference Data</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="px-2">
        {!collapsed && (
          <div className="px-4 py-2 mb-2">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Tables
            </span>
          </div>
        )}
        <Menu
          mode="inline"
          selectedKeys={[currentTable]}
          items={menuItems}
          style={{ border: 'none' }}
          data-testid="sidebar-menu"
        />
      </div>
    </Sider>
  );
}
