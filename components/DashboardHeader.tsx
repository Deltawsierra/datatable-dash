'use client';

import { useState } from 'react';
import { Layout, Typography, Avatar, Dropdown, Modal } from 'antd';
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SunOutlined, MoonOutlined, BgColorsOutlined, SettingOutlined } from '@ant-design/icons';
import { useTheme, COLOR_SCHEMES, type ColorScheme } from './ThemeProvider';
import type { MenuProps } from 'antd';

const { Header } = Layout;
const { Text } = Typography;

interface DashboardHeaderProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function DashboardHeader({ collapsed, onToggle }: DashboardHeaderProps) {
  const { colorMode, colorScheme, toggleColorMode, setColorScheme } = useTheme();
  const [themeModalOpen, setThemeModalOpen] = useState(false);

  const btnStyle = { background: 'rgba(255, 255, 255, 0.15)', color: 'var(--header-text)' };
  const btnHover = (e: React.MouseEvent<HTMLButtonElement>, hover: boolean) => {
    e.currentTarget.style.background = hover ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.15)';
  };

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'toggle-mode',
      icon: colorMode === 'light' ? <MoonOutlined /> : <SunOutlined />,
      label: colorMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode',
      onClick: toggleColorMode,
    },
    {
      type: 'divider',
    },
    {
      key: 'theme',
      icon: <BgColorsOutlined />,
      label: 'Theme',
      onClick: () => setThemeModalOpen(true),
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
      disabled: true,
    },
  ];

  return (
    <>
      <Header
        className="flex items-center justify-between px-6 sticky top-0 z-50 animate-gradient"
        style={{ background: 'var(--header-bg)', borderBottom: 'none', height: 64, padding: '0 24px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
        data-testid="header"
      >
        <div className="flex items-center gap-4">
          <button
            onClick={onToggle}
            className="flex items-center justify-center w-9 h-9 rounded-md transition-all cursor-pointer border-none"
            style={btnStyle}
            onMouseEnter={(e) => btnHover(e, true)}
            onMouseLeave={(e) => btnHover(e, false)}
            data-testid="button-toggle-sidebar"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <MenuUnfoldOutlined style={{ fontSize: 18 }} /> : <MenuFoldOutlined style={{ fontSize: 18 }} />}
          </button>
          <Text strong style={{ fontSize: 16, color: 'var(--header-text)' }}>Reference Data Management</Text>
        </div>

        <div className="flex items-center gap-3">
          {/* User avatar dropdown — contains theme, light/dark, settings */}
          <Dropdown
            menu={{ items: userMenuItems }}
            trigger={['click']}
            placement="bottomRight"
          >
            <Avatar
              icon={<UserOutlined />}
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', border: '2px solid rgba(255, 255, 255, 0.3)', cursor: 'pointer' }}
              data-testid="avatar-user"
            />
          </Dropdown>
        </div>
      </Header>

      {/* Theme picker modal */}
      <Modal
        title="Choose a Color Scheme"
        open={themeModalOpen}
        onCancel={() => setThemeModalOpen(false)}
        footer={null}
        width={480}
        data-testid="modal-theme-picker"
      >
        <div className="flex flex-col gap-3 mt-4" data-testid="theme-scheme-list">
          {COLOR_SCHEMES.map((scheme) => {
            const isSelected = colorScheme === scheme.key;
            return (
              <button
                key={scheme.key}
                onClick={() => { setColorScheme(scheme.key as ColorScheme); setThemeModalOpen(false); }}
                data-testid={`button-scheme-${scheme.key}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '12px 16px',
                  borderRadius: 10,
                  border: isSelected ? `2px solid ${scheme.primaryAccent}` : '2px solid transparent',
                  background: isSelected ? `${scheme.primaryAccent}15` : 'transparent',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                }}
              >
                {/* Gradient swatch */}
                <div
                  style={{
                    width: 56,
                    height: 32,
                    borderRadius: 6,
                    background: `linear-gradient(135deg, ${scheme.gradientStart} 0%, ${scheme.gradientMid} 50%, ${scheme.gradientEnd} 100%)`,
                    flexShrink: 0,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  }}
                  data-testid={`swatch-${scheme.key}`}
                />
                <span style={{ fontWeight: isSelected ? 600 : 400, fontSize: 15 }}>{scheme.name}</span>
                {isSelected && (
                  <span style={{ marginLeft: 'auto', color: scheme.primaryAccent, fontWeight: 600, fontSize: 13 }}>Active</span>
                )}
              </button>
            );
          })}
        </div>
      </Modal>
    </>
  );
}
