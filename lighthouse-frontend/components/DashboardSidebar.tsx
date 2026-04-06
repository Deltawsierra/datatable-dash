'use client';

import { useState, useMemo } from 'react';
import { Layout, Menu, Input, Popover, Radio, Spin } from 'antd';
import { TableOutlined, DatabaseOutlined, HomeOutlined, SearchOutlined, SortAscendingOutlined, LoadingOutlined } from '@ant-design/icons';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from '~/components/ThemeProvider';
import { useTables } from '~/components/TablesProvider';

const { Sider } = Layout;

type SortOption = 'az' | 'za';

interface DashboardSidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

function toLabel(tableName: string): string {
  return tableName
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function DashboardSidebar({ collapsed, onCollapse }: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { currentScheme } = useTheme();
  const { tableNames, tablesLoading } = useTables();
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('az');
  const [sortOpen, setSortOpen] = useState(false);

  const getSelectedKey = () => {
    if (pathname === '/') return 'home';
    return pathname.split('/').pop() || 'home';
  };

  const filteredTableItems = useMemo(() => {
    const query = searchText.toLowerCase().trim();
    let filtered = query
      ? tableNames.filter((name) => name.toLowerCase().includes(query))
      : [...tableNames];

    filtered.sort((a, b) =>
      sortOption === 'az' ? a.localeCompare(b) : b.localeCompare(a)
    );

    return filtered.map((name) => ({
      key: name,
      icon: <TableOutlined style={{ fontSize: 16 }} />,
      label: toLabel(name),
      onClick: () => router.push(`/tables/${encodeURIComponent(name)}`),
    }));
  }, [tableNames, searchText, sortOption, router]);

  const sortLabels: Record<SortOption, string> = {
    az: 'A → Z',
    za: 'Z → A',
  };

  const sortContent = (
    <div style={{ width: 180 }} data-testid="popup-sort">
      <div className="mb-2">
        <span style={{ fontWeight: 600, fontSize: 13 }}>Sort Tables</span>
      </div>
      <Radio.Group
        value={sortOption}
        onChange={(e) => { setSortOption(e.target.value); setSortOpen(false); }}
        className="flex flex-col gap-1"
      >
        <Radio value="az" data-testid="radio-sort-az"><span style={{ fontSize: 13 }}>Alphabetical A → Z</span></Radio>
        <Radio value="za" data-testid="radio-sort-za"><span style={{ fontSize: 13 }}>Alphabetical Z → A</span></Radio>
      </Radio.Group>
    </div>
  );

  const homeItem = {
    key: 'home',
    icon: <HomeOutlined style={{ fontSize: 16 }} />,
    label: 'Home',
    onClick: () => router.push('/'),
  };

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
              <span
                style={{
                  display: 'block',
                  margin: 0,
                  fontWeight: 600,
                  fontSize: currentScheme.fontOverride ? 12 : 16,
                  color: 'var(--sidebar-text)',
                  fontFamily: currentScheme.fontOverride ? 'var(--theme-font)' : undefined,
                  letterSpacing: currentScheme.fontOverride ? '0.03em' : undefined,
                  lineHeight: currentScheme.fontOverride ? '1.6' : undefined,
                }}
              >
                RDM Lighthouse
              </span>
              <span style={{ fontSize: 12, color: 'var(--sidebar-text-muted)' }}>Data Governance</span>
            </div>
          )}
        </div>
      </div>

      {/* Home nav */}
      <div className="px-2">
        <Menu
          mode="inline"
          selectedKeys={[getSelectedKey()]}
          items={[homeItem]}
          style={{ border: 'none', background: 'transparent' }}
          data-testid="sidebar-home-menu"
        />
      </div>

      {/* Tables section */}
      <div className="px-2 mt-1 flex flex-col" style={{ minHeight: 0, flex: 1 }}>
        {!collapsed && (
          <>
            <div className="px-4 py-2 mb-1 flex items-center justify-between">
              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--sidebar-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Tables
              </span>
              {!tablesLoading && tableNames.length > 0 && (
                <span style={{ fontSize: 11, color: 'var(--sidebar-text-muted)' }}>
                  {tableNames.length}
                </span>
              )}
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

            {/* Sort control */}
            <div className="px-3 mb-2 flex items-center">
              <Popover
                content={sortContent}
                trigger="click"
                open={sortOpen}
                onOpenChange={setSortOpen}
                placement="rightTop"
              >
                <button
                  className="flex items-center gap-1 sidebar-clickable-link"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2px 0',
                    fontSize: 12,
                    fontWeight: 500,
                    color: sortOption !== 'az' ? '#3b82f6' : 'var(--sidebar-text-muted)',
                    transition: 'color 0.2s',
                  }}
                  data-testid="button-sort"
                >
                  <SortAscendingOutlined style={{ fontSize: 12 }} />
                  <span style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>Sort: {sortLabels[sortOption]}</span>
                </button>
              </Popover>
            </div>
          </>
        )}

        {/* Scrollable table list */}
        <div className="overflow-y-auto" style={{ flex: 1 }}>
          {tablesLoading ? (
            !collapsed && (
              <div className="flex items-center justify-center py-6" data-testid="spinner-tables-loading">
                <Spin indicator={<LoadingOutlined style={{ fontSize: 18, color: 'var(--sidebar-text-muted)' }} spin />} />
              </div>
            )
          ) : filteredTableItems.length > 0 ? (
            <Menu
              mode="inline"
              selectedKeys={[getSelectedKey()]}
              items={filteredTableItems}
              style={{ border: 'none', background: 'transparent' }}
              data-testid="sidebar-table-menu"
            />
          ) : (
            !collapsed && (
              <div className="px-4 py-3 text-center" style={{ color: 'var(--sidebar-text-muted)', fontSize: 13 }} data-testid="text-no-tables-found">
                {tableNames.length === 0 ? 'No tables available' : 'No tables found'}
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
        .sidebar-clickable-link { opacity: 0.85; transition: opacity 0.2s, color 0.2s; }
        .sidebar-clickable-link:hover { opacity: 1; color: #3b82f6 !important; }
      `}</style>
    </Sider>
  );
}
