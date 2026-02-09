'use client';

import { useState, useMemo } from 'react';
import { Layout, Menu, Input, Typography, Popover, Checkbox, Radio, Badge } from 'antd';
import { TableOutlined, DatabaseOutlined, DashboardOutlined, SearchOutlined, FilterOutlined, SortAscendingOutlined } from '@ant-design/icons';
import { usePathname, useRouter } from 'next/navigation';
import { tableConfigs, allDepartments, allDataTypes } from '../lib/tableRegistry';
import type { TableDepartment, TableDataType, TableConfig } from '../lib/tableRegistry';

const { Sider } = Layout;
const { Title } = Typography;

type SortOption = 'az' | 'za' | 'most-used' | 'newest';

interface DashboardSidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

// Collapsible sidebar navigation
export default function DashboardSidebar({ collapsed, onCollapse }: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [selectedDepartments, setSelectedDepartments] = useState<TableDepartment[]>([]);
  const [selectedDataTypes, setSelectedDataTypes] = useState<TableDataType[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('az');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  // Get selected menu key from URL
  const getSelectedKey = () => {
    if (pathname === '/') return 'overview';
    return pathname.split('/').pop() || 'overview';
  };

  // Active filter count
  const activeFilterCount = selectedDepartments.length + selectedDataTypes.length;

  // Sort helper
  const sortTables = (tables: TableConfig[]): TableConfig[] => {
    const sorted = [...tables];
    switch (sortOption) {
      case 'az':
        return sorted.sort((a, b) => a.label.localeCompare(b.label));
      case 'za':
        return sorted.sort((a, b) => b.label.localeCompare(a.label));
      case 'most-used':
        return sorted.sort((a, b) => b.usageCount - a.usageCount);
      case 'newest':
        return sorted.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
      default:
        return sorted;
    }
  };

  // Filter and sort tables
  const filteredTableItems = useMemo(() => {
    let filtered = tableConfigs;

    const query = searchText.toLowerCase().trim();
    if (query) {
      filtered = filtered.filter((config) =>
        config.label.toLowerCase().includes(query) ||
        config.key.toLowerCase().includes(query)
      );
    }

    if (selectedDepartments.length > 0) {
      filtered = filtered.filter((config) => selectedDepartments.includes(config.department));
    }

    if (selectedDataTypes.length > 0) {
      filtered = filtered.filter((config) => selectedDataTypes.includes(config.dataType));
    }

    return sortTables(filtered);
  }, [searchText, selectedDepartments, selectedDataTypes, sortOption]);

  // Toggle department filter
  const toggleDepartment = (dept: TableDepartment) => {
    setSelectedDepartments((prev) =>
      prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept]
    );
  };

  // Toggle data type filter
  const toggleDataType = (dt: TableDataType) => {
    setSelectedDataTypes((prev) =>
      prev.includes(dt) ? prev.filter((d) => d !== dt) : [...prev, dt]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedDepartments([]);
    setSelectedDataTypes([]);
  };

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

  // Sort label
  const sortLabels: Record<SortOption, string> = {
    'az': 'A → Z',
    'za': 'Z → A',
    'most-used': 'Most Used',
    'newest': 'Newest Added',
  };

  // Filter popup content
  const filterContent = (
    <div style={{ width: 220 }} data-testid="popup-filter">
      <div className="flex items-center justify-between mb-3">
        <span style={{ fontWeight: 600, fontSize: 13 }}>Filter Tables</span>
        {activeFilterCount > 0 && (
          <button
            onClick={clearFilters}
            style={{ fontSize: 12, color: '#3b82f6', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            data-testid="button-clear-filters"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="mb-3">
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6, color: '#888' }}>
          Department
        </div>
        <div className="flex flex-col gap-1">
          {allDepartments.map((dept) => (
            <Checkbox
              key={dept}
              checked={selectedDepartments.includes(dept)}
              onChange={() => toggleDepartment(dept)}
              data-testid={`checkbox-dept-${dept.toLowerCase()}`}
            >
              <span style={{ fontSize: 13 }}>{dept}</span>
            </Checkbox>
          ))}
        </div>
      </div>

      <div>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6, color: '#888' }}>
          Data Type
        </div>
        <div className="flex flex-col gap-1">
          {allDataTypes.map((dt) => (
            <Checkbox
              key={dt}
              checked={selectedDataTypes.includes(dt)}
              onChange={() => toggleDataType(dt)}
              data-testid={`checkbox-type-${dt.toLowerCase()}`}
            >
              <span style={{ fontSize: 13 }}>{dt}</span>
            </Checkbox>
          ))}
        </div>
      </div>
    </div>
  );

  // Sort popup content
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
        <Radio value="most-used" data-testid="radio-sort-most-used"><span style={{ fontSize: 13 }}>Most Used</span></Radio>
        <Radio value="newest" data-testid="radio-sort-newest"><span style={{ fontSize: 13 }}>Newest Added</span></Radio>
      </Radio.Group>
    </div>
  );

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

      {/* Tables section */}
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

            {/* Filter and Sort controls */}
            <div className="px-3 mb-2 flex items-center gap-3">
              <Popover
                content={filterContent}
                trigger="click"
                open={filterOpen}
                onOpenChange={setFilterOpen}
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
                    color: activeFilterCount > 0 ? '#3b82f6' : 'var(--sidebar-text-muted)',
                    transition: 'color 0.2s',
                  }}
                  data-testid="button-filter"
                >
                  <FilterOutlined style={{ fontSize: 12 }} />
                  <span style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>Filter</span>
                  {activeFilterCount > 0 && (
                    <Badge
                      count={activeFilterCount}
                      size="small"
                      style={{ marginLeft: 2 }}
                      data-testid="badge-filter-count"
                    />
                  )}
                </button>
              </Popover>

              <span style={{ color: 'var(--sidebar-border)', fontSize: 12 }}>|</span>

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
                No tables found
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
