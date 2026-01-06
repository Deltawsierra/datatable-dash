'use client';

import { Layout, Typography, Avatar, Space, Tooltip } from 'antd';
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useTheme } from './ThemeProvider';

const { Header } = Layout;
const { Text } = Typography;

interface DashboardHeaderProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function DashboardHeader({ collapsed, onToggle }: DashboardHeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Header
      className="flex items-center justify-between px-6 sticky top-0 z-50 animate-gradient"
      style={{
        background: 'var(--header-bg)',
        borderBottom: 'none',
        height: 64,
        padding: '0 24px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      }}
      data-testid="header"
    >
      <div className="flex items-center gap-4">
        <button
          onClick={onToggle}
          className="flex items-center justify-center w-9 h-9 rounded-md transition-all cursor-pointer border-none"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            color: 'var(--header-text)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
          }}
          data-testid="button-toggle-sidebar"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? (
            <MenuUnfoldOutlined style={{ fontSize: 18 }} />
          ) : (
            <MenuFoldOutlined style={{ fontSize: 18 }} />
          )}
        </button>
        <Text strong style={{ fontSize: 16, color: 'var(--header-text)' }}>
          Reference Data Management
        </Text>
      </div>
      
      <Space size="middle">
        <Tooltip title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-md transition-all cursor-pointer border-none"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              color: 'var(--header-text)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            }}
            data-testid="button-toggle-theme"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? (
              <MoonOutlined style={{ fontSize: 18 }} />
            ) : (
              <SunOutlined style={{ fontSize: 18 }} />
            )}
          </button>
        </Tooltip>
        <Avatar 
          icon={<UserOutlined />} 
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
          }}
          data-testid="avatar-user"
        />
      </Space>
    </Header>
  );
}
