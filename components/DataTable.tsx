'use client';

import { useState, useMemo, useCallback, useRef } from 'react';
import { Table, Card, Typography, Empty, Spin, Tag, Input, Space } from 'antd';
import { TableOutlined, DownloadOutlined, SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { BorderBeam } from './magicui/BorderBeam';
import { useTheme } from './ThemeProvider';

const { Title, Text } = Typography;

interface DataTableProps<T extends { id: string }> {
  title: string;
  data: T[];
  columns: ColumnsType<T>;
  loading?: boolean;
  totalRows?: number;
  usingApi?: boolean;
}

function escapeCSV(value: unknown): string {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export default function DataTable<T extends { id: string }>({ title, data, columns, loading = false, totalRows, usingApi }: DataTableProps<T>) {
  const [searchText, setSearchText] = useState('');
  const { currentScheme } = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);

  const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  const filteredData = useMemo(() => {
    if (!searchText.trim()) return data;
    const query = searchText.toLowerCase();
    return data.filter((row) =>
      Object.values(row).some((val) => val !== null && val !== undefined && String(val).toLowerCase().includes(query))
    );
  }, [data, searchText]);

  const handleDownloadCSV = useCallback(() => {
    if (data.length === 0) return;
    const columnKeys = columns
      .map((col) => {
        const c = col as Record<string, unknown>;
        return (c.dataIndex as string) || (c.key as string) || '';
      })
      .filter(Boolean);
    const columnTitles = columns.map((col) => String((col as Record<string, unknown>).title ?? ''));

    const header = columnTitles.map(escapeCSV).join(',');
    const rows = data.map((row) =>
      columnKeys.map((key) => escapeCSV((row as Record<string, unknown>)[key])).join(',')
    );
    const csvContent = [header, ...rows].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }, [data, columns, title]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mouse-x', `${x}%`);
    el.style.setProperty('--mouse-y', `${y}%`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--mouse-x', '50%');
    el.style.setProperty('--mouse-y', '50%');
  }, []);

  const totalCount = totalRows ?? data.length;
  const filteredCount = filteredData.length;
  const isFiltered = searchText.trim().length > 0;
  const countLabel = isFiltered
    ? `${filteredCount} of ${totalCount} records`
    : `${totalCount} records`;

  const beamFrom = currentScheme.primaryAccent;
  const beamTo = currentScheme.gradientMid !== currentScheme.primaryAccent
    ? currentScheme.gradientMid
    : '#8b5cf6';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
      {/* Header area */}
      <div style={{ padding: '20px 24px 12px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <TableOutlined style={{ fontSize: 24, color: 'var(--primary)' }} />
            <Title level={3} style={{ margin: 0 }} data-testid={`title-${title}`}>{formattedTitle}</Title>
            {usingApi !== undefined && (
              <Tag color={usingApi ? 'green' : 'default'} data-testid={`tag-source-${title}`}>
                {usingApi ? 'Live' : 'Sample Data'}
              </Tag>
            )}
          </div>
          <Space>
            <button
              className="shimmer-btn"
              onClick={handleDownloadCSV}
              disabled={data.length === 0 || loading}
              data-testid={`button-download-csv-${title}`}
            >
              <DownloadOutlined style={{ fontSize: 13 }} />
              Download as CSV
            </button>
          </Space>
        </div>

        {/* Search bar + count */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12, gap: 12, flexWrap: 'wrap' }}>
          <Input
            placeholder="Search all columns…"
            prefix={<SearchOutlined style={{ color: '#94a3b8' }} />}
            suffix={searchText ? (
              <CloseCircleOutlined
                style={{ color: '#94a3b8', cursor: 'pointer' }}
                onClick={() => setSearchText('')}
                data-testid={`button-clear-search-${title}`}
              />
            ) : null}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ maxWidth: 360 }}
            allowClear={false}
            data-testid={`input-search-${title}`}
          />
          <Text type="secondary" data-testid={`text-count-${title}`}>{countLabel}</Text>
        </div>
      </div>

      {/* Table card - fills remaining height */}
      <div
        ref={cardRef}
        className="magic-card-wrap"
        style={{ flex: 1, overflow: 'hidden', padding: '0 24px 24px' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Card
          className="shadow-sm"
          styles={{ body: { padding: 0, height: '100%' } }}
          style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}
          data-testid={`card-table-${title}`}
        >
          <BorderBeam colorFrom={beamFrom} colorTo={beamTo} duration={9} borderWidth={1.5} />
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Spin size="large" data-testid="loading-spinner" />
            </div>
          ) : data.length === 0 ? (
            <div className="py-20">
              <Empty description="No data available" data-testid="empty-state" />
            </div>
          ) : filteredData.length === 0 ? (
            <div className="py-20">
              <Empty description={`No results for "${searchText}"`} data-testid="empty-search-state" />
            </div>
          ) : (
            <Table
              columns={columns}
              dataSource={filteredData}
              rowKey="id"
              pagination={false}
              scroll={{ x: 'max-content', y: 'calc(100vh - 260px)' }}
              data-testid={`table-${title}`}
              style={{ height: '100%' }}
            />
          )}
        </Card>
      </div>
    </div>
  );
}
