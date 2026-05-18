'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { Table, Card, Typography, Empty, Spin, Tag, Input, Space } from 'antd';
import {
  TableOutlined,
  DownloadOutlined,
  SearchOutlined,
  CloseCircleOutlined,
  MenuOutlined,
  PlusOutlined,
  EditOutlined,
} from '@ant-design/icons';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import { BorderBeam } from '~/components/magicui/BorderBeam';
import { useTheme } from '~/components/ThemeProvider';
import EditDrawer, { type ColumnDef, type DrawerAction, type SelectionType } from '~/components/EditDrawer';

const { Title, Text } = Typography;

interface DataTableProps<T extends { id: string }> {
  title: string;
  data: T[];
  columns: ColumnsType<T>;
  loading?: boolean;
  totalRows?: number;
  usingApi?: boolean;
}

interface ContextMenuState {
  x: number;
  y: number;
  type: SelectionType;
  rowId: string | null;
  columnKey: string | null;
}

function escapeCSV(value: unknown): string {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

const actionBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  borderRadius: 6,
  padding: '7px 12px',
  fontSize: 13,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  width: '100%',
  textAlign: 'left',
  color: 'inherit',
  transition: 'background 0.15s',
};

export default function DataTable<T extends { id: string }>({
  title,
  data,
  columns,
  loading = false,
  totalRows,
  usingApi,
}: DataTableProps<T>) {
  const [searchText, setSearchText] = useState('');
  const { currentScheme } = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);

  const [localData, setLocalData] = useState<T[]>(data);
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerAction, setDrawerAction] = useState<DrawerAction>('edit');
  const [drawerSelection, setDrawerSelection] = useState<{
    type: SelectionType;
    rowId: string | null;
    columnKey: string | null;
  } | null>(null);
  const [hoveredActionBtn, setHoveredActionBtn] = useState<string | null>(null);

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  useEffect(() => {
    if (!contextMenu) return;
    const handler = () => setContextMenu(null);
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [contextMenu]);

  const openDrawer = useCallback(
    (action: DrawerAction) => {
      if (!contextMenu) return;
      setDrawerAction(action);
      setDrawerSelection({
        type: contextMenu.type,
        rowId: contextMenu.rowId,
        columnKey: contextMenu.columnKey,
      });
      setDrawerOpen(true);
      setContextMenu(null);
    },
    [contextMenu],
  );

  const handleSave = useCallback(
    (values: Record<string, unknown>, isNew: boolean) => {
      if (isNew) {
        const newRow = { id: `local-${Date.now()}`, ...values } as T;
        setLocalData(prev => [newRow, ...prev]);
      } else if (drawerSelection?.rowId) {
        const rowId = drawerSelection.rowId;
        setLocalData(prev =>
          prev.map(row => (row.id === rowId ? ({ ...row, ...values } as T) : row)),
        );
      }
    },
    [drawerSelection],
  );

  const columnDefs = useMemo<ColumnDef[]>(
    () =>
      columns
        .map(col => {
          const c = col as Record<string, unknown>;
          return {
            key: (c.key as string) || (c.dataIndex as string) || '',
            title: String(c.title ?? ''),
          };
        })
        .filter(c => c.key),
    [columns],
  );

  const selectedRowData = useMemo<Record<string, unknown> | null>(() => {
    if (!drawerSelection?.rowId) return null;
    return (localData.find(row => row.id === drawerSelection.rowId) as Record<string, unknown>) ?? null;
  }, [localData, drawerSelection]);

  const augmentedColumns = useMemo<ColumnsType<T>>(() => {
    const rowSelectorCol: ColumnType<T> = {
      key: '_row_selector',
      title: '',
      width: 40,
      fixed: 'left',
      render: (_, record: T) => (
        <button
          data-testid={`button-row-select-${record.id}`}
          onMouseDown={e => e.stopPropagation()}
          onClick={e => {
            e.stopPropagation();
            setContextMenu({
              x: e.clientX,
              y: e.clientY,
              type: 'row',
              rowId: record.id,
              columnKey: null,
            });
          }}
          title="Select row"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-secondary, #94a3b8)',
            padding: '2px 6px',
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MenuOutlined style={{ fontSize: 11 }} />
        </button>
      ),
    };

    const dataCols = columns.map(col => {
      const c = col as Record<string, unknown>;
      const colKey = (c.key as string) || (c.dataIndex as string) || '';
      const originalTitle = col.title;

      return {
        ...col,
        title: (
          <span
            data-testid={`header-col-${colKey}`}
            onMouseDown={e => e.stopPropagation()}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              setContextMenu({
                x: e.clientX,
                y: e.clientY,
                type: 'column',
                rowId: null,
                columnKey: colKey,
              });
            }}
            style={{ cursor: 'pointer', display: 'block', userSelect: 'none' }}
          >
            {originalTitle as React.ReactNode}
          </span>
        ),
        onCell: (record: T) => ({
          onMouseDown: (e: React.MouseEvent) => e.stopPropagation(),
          onClick: (e: React.MouseEvent) => {
            e.stopPropagation();
            setContextMenu({
              x: e.clientX,
              y: e.clientY,
              type: 'cell',
              rowId: record.id,
              columnKey: colKey,
            });
          },
          style: { cursor: 'pointer' },
        }),
      };
    });

    return [rowSelectorCol, ...dataCols] as ColumnsType<T>;
  }, [columns]);

  const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  const filteredData = useMemo(() => {
    if (!searchText.trim()) return localData;
    const query = searchText.toLowerCase();
    return localData.filter(row =>
      Object.values(row).some(
        val => val !== null && val !== undefined && String(val).toLowerCase().includes(query),
      ),
    );
  }, [localData, searchText]);

  const handleDownloadCSV = useCallback(() => {
    if (localData.length === 0) return;
    const columnKeys = columns
      .map(col => {
        const c = col as Record<string, unknown>;
        return (c.dataIndex as string) || (c.key as string) || '';
      })
      .filter(Boolean);
    const columnTitles = columns.map(col => String((col as Record<string, unknown>).title ?? ''));

    const header = columnTitles.map(escapeCSV).join(',');
    const rows = localData.map(row =>
      columnKeys.map(key => escapeCSV((row as Record<string, unknown>)[key])).join(','),
    );
    const csvContent = [header, ...rows].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }, [localData, columns, title]);

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

  const totalCount = totalRows ?? localData.length;
  const filteredCount = filteredData.length;
  const isFiltered = searchText.trim().length > 0;
  const localCount = localData.length;
  const hasLocalChanges = localCount !== data.length;
  const countLabel = isFiltered
    ? `${filteredCount} of ${localCount} records`
    : `${localCount} records`;

  const beamFrom = currentScheme.primaryAccent;
  const beamTo =
    currentScheme.gradientMid !== currentScheme.primaryAccent
      ? currentScheme.gradientMid
      : '#8b5cf6';

  const contextMenuSelectionLabel =
    contextMenu?.type === 'cell'
      ? 'cell'
      : contextMenu?.type === 'column'
        ? 'column'
        : 'row';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
      {/* Header area */}
      <div style={{ padding: '20px 24px 12px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <TableOutlined style={{ fontSize: 24, color: 'var(--primary)' }} />
            <Title level={3} style={{ margin: 0 }} data-testid={`title-${title}`}>
              {formattedTitle}
            </Title>
            {usingApi !== undefined && (
              <Tag color={usingApi ? 'green' : 'default'} data-testid={`tag-source-${title}`}>
                {usingApi ? 'Live' : 'Sample Data'}
              </Tag>
            )}
            {hasLocalChanges && (
              <Tag color="orange" data-testid="tag-local-changes">
                Unsaved local changes
              </Tag>
            )}
          </div>
          <Space>
            <button
              className="shimmer-btn"
              onClick={handleDownloadCSV}
              disabled={localData.length === 0 || loading}
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
            suffix={
              searchText ? (
                <CloseCircleOutlined
                  style={{ color: '#94a3b8', cursor: 'pointer' }}
                  onClick={() => setSearchText('')}
                  data-testid={`button-clear-search-${title}`}
                />
              ) : null
            }
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            style={{ maxWidth: 360 }}
            allowClear={false}
            data-testid={`input-search-${title}`}
          />
          <Text type="secondary" data-testid={`text-count-${title}`}>
            {countLabel}
          </Text>
        </div>
      </div>

      {/* Table card */}
      <div style={{ flex: 1, overflow: 'hidden', padding: '0 24px 24px' }}>
        <div
          ref={cardRef}
          className="magic-card-wrap"
          style={{ height: '100%', borderRadius: 8 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Card
            className="shadow-sm"
            styles={{ body: { padding: 0, height: '100%' } }}
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'visible',
              position: 'relative',
            }}
            data-testid={`card-table-${title}`}
          >
            <BorderBeam colorFrom={beamFrom} colorTo={beamTo} duration={9} borderWidth={1.5} />
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Spin size="large" data-testid="loading-spinner" />
              </div>
            ) : localData.length === 0 ? (
              <div className="py-20">
                <Empty description="No data available" data-testid="empty-state" />
              </div>
            ) : filteredData.length === 0 ? (
              <div className="py-20">
                <Empty
                  description={`No results for "${searchText}"`}
                  data-testid="empty-search-state"
                />
              </div>
            ) : (
              <Table
                columns={augmentedColumns}
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

      {/* Context action menu */}
      {contextMenu && (
        <div
          onMouseDown={e => e.stopPropagation()}
          style={{
            position: 'fixed',
            left: contextMenu.x + 6,
            top: contextMenu.y + 6,
            zIndex: 9999,
            background: 'var(--card-bg, #ffffff)',
            borderRadius: 10,
            boxShadow: '0 8px 32px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.06)',
            padding: 6,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            minWidth: 160,
            border: '1px solid var(--border-color, rgba(0,0,0,0.08))',
          }}
          data-testid="context-action-menu"
        >
          <div
            style={{
              padding: '4px 12px 6px',
              fontSize: 11,
              color: '#94a3b8',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {contextMenuSelectionLabel} selected
          </div>
          <button
            data-testid="button-action-add"
            onClick={() => openDrawer('add')}
            onMouseEnter={() => setHoveredActionBtn('add')}
            onMouseLeave={() => setHoveredActionBtn(null)}
            style={{
              ...actionBtnStyle,
              background: hoveredActionBtn === 'add' ? 'rgba(22,119,255,0.08)' : 'transparent',
              color: '#1677ff',
            }}
          >
            <PlusOutlined />
            Add New Row
          </button>
          <button
            data-testid="button-action-edit"
            onClick={() => openDrawer('edit')}
            onMouseEnter={() => setHoveredActionBtn('edit')}
            onMouseLeave={() => setHoveredActionBtn(null)}
            style={{
              ...actionBtnStyle,
              background: hoveredActionBtn === 'edit' ? 'rgba(0,0,0,0.04)' : 'transparent',
              color: contextMenu.type === 'column' ? '#94a3b8' : 'inherit',
              cursor: contextMenu.type === 'column' ? 'not-allowed' : 'pointer',
            }}
            disabled={contextMenu.type === 'column'}
            title={contextMenu.type === 'column' ? 'Select a cell or row to edit' : undefined}
          >
            <EditOutlined />
            Edit {contextMenuSelectionLabel === 'column' ? '(select a row)' : contextMenuSelectionLabel}
          </button>
        </div>
      )}

      {/* Edit / Add drawer */}
      <EditDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        action={drawerAction}
        selectionType={drawerSelection?.type ?? 'row'}
        selectedRow={selectedRowData}
        selectedColumnKey={drawerSelection?.columnKey ?? null}
        columns={columnDefs}
        onSave={handleSave}
      />
    </div>
  );
}
