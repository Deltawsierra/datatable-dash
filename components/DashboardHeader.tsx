'use client';

import { Layout, Typography, Avatar, Space } from 'antd';
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Text } = Typography;

interface DashboardHeaderProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function DashboardHeader({ collapsed, onToggle }: DashboardHeaderProps) {
  return (
    <Header
      className="flex items-center justify-between px-6 sticky top-0 z-50"
      style={{
        background: '#ffffff',
        borderBottom: '1px solid #e8e8e8',
        height: 64,
        padding: '0 24px',
      }}
      data-testid="header"
    >
      <div className="flex items-center gap-4">
        <button
          onClick={onToggle}
          className="flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-100 transition-colors cursor-pointer border-none bg-transparent"
          data-testid="button-toggle-sidebar"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? (
            <MenuUnfoldOutlined style={{ fontSize: 18 }} />
          ) : (
            <MenuFoldOutlined style={{ fontSize: 18 }} />
          )}
        </button>
        <Text strong style={{ fontSize: 16 }}>
          Reference Data Management
        </Text>
      </div>
      
      <Space size="middle">
        <Avatar 
          icon={<UserOutlined />} 
          style={{ backgroundColor: '#1677ff' }}
          data-testid="avatar-user"
        />
      </Space>
    </Header>
  );
}
