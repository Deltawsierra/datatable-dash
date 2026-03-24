'use client';

import { useState } from 'react';
import { Layout, Typography, Avatar, Dropdown, Modal } from 'antd';
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SunOutlined, MoonOutlined, BgColorsOutlined, SettingOutlined } from '@ant-design/icons';
import { useTheme, COLOR_SCHEMES, type ColorScheme, type ThemeCategory } from './ThemeProvider';
import type { MenuProps } from 'antd';

const { Header } = Layout;
const { Text } = Typography;

interface DashboardHeaderProps {
  collapsed: boolean;
  onToggle: () => void;
}

type CategoryFilter = 'all' | ThemeCategory;

const CATEGORY_LABELS: Record<CategoryFilter, string> = {
  all:       'All',
  classic:   'Classic',
  seasonal:  'Seasonal',
  nature:    'Nature',
  sports:    'Sports',
  holiday:   'Holiday',
  aesthetic: 'Aesthetic',
  special:   'Special',
  tech:      'Tech',
};

const CATEGORY_EMOJIS: Record<CategoryFilter, string> = {
  all:       '🎨',
  classic:   '🖼️',
  seasonal:  '🌿',
  nature:    '🌍',
  sports:    '🏆',
  holiday:   '🎉',
  aesthetic: '✨',
  special:   '⚡',
  tech:      '💻',
};

const CATEGORY_ORDER: CategoryFilter[] = [
  'all', 'classic', 'seasonal', 'nature', 'sports', 'holiday', 'aesthetic', 'special', 'tech',
];

export default function DashboardHeader({ collapsed, onToggle }: DashboardHeaderProps) {
  const { colorMode, colorScheme, toggleColorMode, setColorScheme, currentScheme } = useTheme();
  const [themeModalOpen, setThemeModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [modeKey, setModeKey] = useState(0);

  const hasGlow = !!currentScheme.glowColor;
  const hasFont = !!currentScheme.fontOverride;
  const isFlat  = !!currentScheme.flatHeader;

  const titleClass =
    currentScheme.key === 'aurora'          ? 'aurora-text' :
    currentScheme.key === 'terminal-amber'  ? 'typewriter-cursor' :
    hasGlow                                 ? 'neon-glow' :
    (hasFont || isFlat)                     ? '' :
    'shiny-text';

  const btnStyle = { background: 'rgba(255,255,255,0.15)', color: 'var(--header-text)' };
  const btnHover = (e: React.MouseEvent<HTMLButtonElement>, hover: boolean) => {
    e.currentTarget.style.background = hover ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.15)';
  };

  const handleToggleMode = () => {
    toggleColorMode();
    setModeKey((k) => k + 1);
  };

  const filteredSchemes = activeCategory === 'all'
    ? COLOR_SCHEMES
    : COLOR_SCHEMES.filter(s => s.category === activeCategory);

  const userMenuItems: MenuProps['items'] = [
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
        style={{ background: 'var(--header-bg)', borderBottom: 'none', height: 64, padding: '0 24px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
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
          <Text
            strong
            className={titleClass}
            style={{
              fontSize: hasFont ? 14 : 16,
              color: (hasGlow && currentScheme.key !== 'aurora' && currentScheme.key !== 'terminal-amber')
                ? 'var(--glow-color)'
                : titleClass === '' ? 'var(--header-text)' : undefined,
              fontFamily: hasFont ? 'var(--theme-font)' : undefined,
              letterSpacing: hasFont ? '0.04em' : undefined,
              lineHeight: hasFont ? '1.6' : undefined,
            }}
          >
            Reference Data Management
          </Text>
        </div>

        <div className="flex items-center gap-2">
          {/* Animated light/dark mode toggle */}
          <button
            onClick={handleToggleMode}
            className="flex items-center justify-center w-9 h-9 rounded-md transition-all cursor-pointer border-none"
            style={btnStyle}
            onMouseEnter={(e) => btnHover(e, true)}
            onMouseLeave={(e) => btnHover(e, false)}
            data-testid="button-toggle-mode"
            aria-label={colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            title={colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            <span key={modeKey} className="toggle-icon-enter" style={{ display: 'flex', alignItems: 'center', fontSize: 17 }}>
              {colorMode === 'light' ? <MoonOutlined /> : <SunOutlined />}
            </span>
          </button>

          <Dropdown
            menu={{ items: userMenuItems }}
            trigger={['click']}
            placement="bottomRight"
          >
            <Avatar
              icon={<UserOutlined />}
              style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.3)', cursor: 'pointer' }}
              data-testid="avatar-user"
            />
          </Dropdown>
        </div>
      </Header>

      {/* Theme picker modal */}
      <Modal
        title="Choose a Theme"
        open={themeModalOpen}
        onCancel={() => setThemeModalOpen(false)}
        footer={null}
        width={620}
        data-testid="modal-theme-picker"
        styles={{ body: { padding: 0 } }}
      >
        <div style={{ display: 'flex', minHeight: 400 }}>
          {/* Left category sidebar */}
          <div
            style={{
              width: 110,
              borderRight: '1px solid var(--border-color, #e2e8f0)',
              paddingTop: 8,
              paddingBottom: 8,
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              overflowY: 'auto',
            }}
          >
            {CATEGORY_ORDER.map((cat) => {
              const isActive = activeCategory === cat;
              const count = cat === 'all' ? COLOR_SCHEMES.length : COLOR_SCHEMES.filter(s => s.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  data-testid={`button-category-${cat}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    padding: '8px 6px',
                    margin: '0 6px',
                    borderRadius: 8,
                    border: 'none',
                    cursor: 'pointer',
                    background: isActive ? 'var(--table-row-hover, rgba(59,130,246,0.08))' : 'transparent',
                    borderLeft: isActive ? '3px solid var(--primary, #3b82f6)' : '3px solid transparent',
                    transition: 'all 0.15s',
                    color: isActive ? 'var(--primary, #3b82f6)' : 'var(--foreground-muted, #64748b)',
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  <span style={{ fontSize: 16, lineHeight: 1 }}>{CATEGORY_EMOJIS[cat]}</span>
                  <span style={{ fontSize: 10 }}>{CATEGORY_LABELS[cat]}</span>
                  <span
                    style={{
                      fontSize: 9,
                      background: isActive ? 'var(--primary, #3b82f6)' : 'var(--border-color, #e2e8f0)',
                      color: isActive ? '#fff' : 'var(--foreground-muted, #64748b)',
                      borderRadius: 10,
                      padding: '1px 5px',
                      fontWeight: 600,
                      lineHeight: 1.4,
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right scheme list */}
          <div
            style={{ flex: 1, overflowY: 'auto', padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 3 }}
            data-testid="theme-scheme-list"
          >
            {filteredSchemes.map((scheme) => {
              const isSelected = colorScheme === scheme.key;
              const isSchemeFlat = scheme.flatHeader || scheme.cardStyle === 'flat';
              const swatchBg = isSchemeFlat
                ? scheme.gradientStart
                : `linear-gradient(135deg, ${scheme.gradientStart} 0%, ${scheme.gradientMid} 50%, ${scheme.gradientEnd} 100%)`;

              return (
                <button
                  key={scheme.key}
                  onClick={() => { setColorScheme(scheme.key as ColorScheme); setThemeModalOpen(false); }}
                  data-testid={`button-scheme-${scheme.key}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '8px 10px',
                    borderRadius: 8,
                    border: isSelected ? `2px solid ${scheme.primaryAccent}` : '2px solid transparent',
                    background: isSelected ? `${scheme.primaryAccent}18` : 'transparent',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left',
                    transition: 'all 0.15s',
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 24,
                      borderRadius: isSchemeFlat ? 3 : 5,
                      background: swatchBg,
                      flexShrink: 0,
                      boxShadow: scheme.glowColor
                        ? `0 0 6px ${scheme.glowColor}, 0 2px 4px rgba(0,0,0,0.3)`
                        : '0 2px 4px rgba(0,0,0,0.18)',
                      border: scheme.cardStyle === 'neon' ? `1px solid ${scheme.primaryAccent}` : undefined,
                    }}
                    data-testid={`swatch-${scheme.key}`}
                  />
                  <span style={{ fontWeight: isSelected ? 600 : 400, fontSize: 13, color: 'var(--foreground)', flex: 1 }}>
                    {scheme.emoji} {scheme.name}
                  </span>
                  {isSelected && (
                    <span style={{ color: scheme.primaryAccent, fontWeight: 600, fontSize: 11, flexShrink: 0 }}>Active</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
}
