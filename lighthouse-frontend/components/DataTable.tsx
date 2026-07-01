'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { Table, Card, Typography, Empty, Spin, Tag, Input, Space, Modal, message, Popover, Checkbox, Tooltip } from 'antd';
import {
  TableOutlined,
  DownloadOutlined,
  SearchOutlined,
  CloseCircleOutlined,
  MenuOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  ControlOutlined,
  StarFilled,
  StarOutlined,
} from '@ant-design/icons';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import { BorderBeam } from '~/components/magicui/BorderBeam';
import { useTheme } from '~/components/ThemeProvider';
import EditDrawer, { type ColumnDef, type DrawerAction } from '~/components/EditDrawer';
import { createTableRow, updateTableRow, deleteTableRow } from '~/lib/api';
import { useUserTables } from '~/lib/userTables';

const { Title, Text } = Typography;

// The backend (api/v1/routes/tables.py) currently exposes only GET routes —
// there are no create/update/delete endpoints. Until write routes exist, edits
// stay local (DataTable already has a local-only fallback path with messaging).
// Flip this to true once the backend gains write support.
const WRITE_API_ENABLED = false;

// Reference-data schema conventions. `_current_` marks a row as live (true) or
// archived/historical (false); `_last_edited_` is the audit timestamp.
const CURRENT_COLUMN = '_current_';
const LAST_EDITED_COLUMN = '_last_edited_';

// Admin columns are not defined yet. Populate this list once admin roles/columns
// exist — every key listed here is hidden by default and grouped under the
// "Admin" toggle in the View menu.
const ADMIN_COLUMNS: string[] = [];

// Friendlier labels for system columns in the View menu.
const COLUMN_LABELS: Record<string, string> = {
  [CURRENT_COLUMN]: 'Live status',
  [LAST_EDITED_COLUMN]: 'Last Edited on',
};

interface DataTableProps<T extends { id: string }> {
  title: string;
  data: T[];
  columns: ColumnsType<T>;
  loading?: boolean;
  totalRows?: number;
  usingApi?: boolean;
  tableName?: string;
  hasRowKey?: boolean;
  onRefresh?: () => void | Promise<void>;
}

interface ContextMenuState {
  x: number;
  y: number;
  rowId: string;
}

function colKeyOf(col: unknown): string {
  const c = col as Record<string, unknown>;
  return (c.key as string) || (c.dataIndex as string) || '';
}

function isLiveValue(value: unknown): boolean {
  return value === true || value === 'true' || value === 'True' || value === 1;
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
  usingApi,
  tableName,
  hasRowKey = false,
  onRefresh,
}: DataTableProps<T>) {
  const [searchText, setSearchText] = useState('');
  const { currentScheme } = useTheme();
  const { isFavorite, toggleFavorite } = useUserTables();

  const [localData, setLocalData] = useState<T[]>(data);
  const [localColumns, setLocalColumns] = useState<ColumnsType<T>>(columns);
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerAction, setDrawerAction] = useState<DrawerAction>('edit');
  const [drawerRowId, setDrawerRowId] = useState<string | null>(null);
  const [hoveredActionBtn, setHoveredActionBtn] = useState<string | null>(null);
  const [dirty, setDirty] = useState(false);
  // Row view: which rows to show based on the `_current_` flag (item 5).
  const [rowView, setRowView] = useState<{ live: boolean; archived: boolean }>({ live: true, archived: false });
  // Columns hidden via the View menu. Admin columns start hidden (item 6).
  const [hiddenColumns, setHiddenColumns] = useState<Set<string>>(() => new Set(ADMIN_COLUMNS));
  const contextMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLocalData(data);
    setDirty(false);
  }, [data]);

  useEffect(() => {
    setLocalColumns(columns);
  }, [columns]);

  useEffect(() => {
    if (!contextMenu) return;
    const handler = (e: MouseEvent) => {
      if (contextMenuRef.current?.contains(e.target as Node)) return;
      setContextMenu(null);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [contextMenu]);

  // Metadata for every column: friendly label + whether it is an admin column.
  const columnMeta = useMemo(
    () =>
      localColumns
        .map(col => {
          const key = colKeyOf(col);
          const rawTitle = (col as Record<string, unknown>).title;
          const label = COLUMN_LABELS[key] ?? (typeof rawTitle === 'string' && rawTitle ? rawTitle : key);
          return { key, label, admin: ADMIN_COLUMNS.includes(key) };
        })
        .filter(m => m.key),
    [localColumns],
  );

  const dataColumnMeta = useMemo(() => columnMeta.filter(m => !m.admin), [columnMeta]);
  const adminColumnMeta = useMemo(() => columnMeta.filter(m => m.admin), [columnMeta]);
  const hasCurrentColumn = useMemo(() => columnMeta.some(m => m.key === CURRENT_COLUMN), [columnMeta]);

  const rowLiveMap = useCallback(
    (row: T) => isLiveValue((row as Record<string, unknown>)[CURRENT_COLUMN]),
    [],
  );

  const toggleColumn = useCallback((key: string, checked: boolean) => {
    setHiddenColumns(prev => {
      const next = new Set(prev);
      if (checked) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const toggleAdminColumns = useCallback(
    (checked: boolean) => {
      setHiddenColumns(prev => {
        const next = new Set(prev);
        adminColumnMeta.forEach(m => {
          if (checked) next.delete(m.key);
          else next.add(m.key);
        });
        return next;
      });
    },
    [adminColumnMeta],
  );

  const openDrawer = useCallback(
    (action: DrawerAction) => {
      if (!contextMenu) return;
      setDrawerAction(action);
      setDrawerRowId(contextMenu.rowId);
      setDrawerOpen(true);
      setContextMenu(null);
    },
    [contextMenu],
  );

  const openAddRow = useCallback(() => {
    setDrawerAction('add');
    setDrawerRowId(null);
    setDrawerOpen(true);
    setContextMenu(null);
  }, []);

  const handleDeleteRow = useCallback(() => {
    if (!contextMenu?.rowId) return;
    const rowId = contextMenu.rowId;
    const firstCol = localColumns[0] as Record<string, unknown> | undefined;
    const firstKey = (firstCol?.dataIndex as string) || (firstCol?.key as string) || '';
    const row = localData.find(r => r.id === rowId) as Record<string, unknown> | undefined;
    const rowLabel = firstKey && row ? String(row[firstKey] ?? rowId) : rowId;
    const persisted = Boolean(usingApi && tableName && WRITE_API_ENABLED);
    if (persisted && !hasRowKey) {
      setContextMenu(null);
      message.error('Cannot delete: this table has no primary key (_id_column).');
      return;
    }
    setContextMenu(null);
    Modal.confirm({
      title: 'Delete this row?',
      icon: <ExclamationCircleOutlined style={{ color: '#ff4d4f' }} />,
      content: (
        <span>
          You are about to delete <strong>{rowLabel}</strong>.{' '}
          {persisted
            ? 'This permanently removes the row from the database and cannot be undone.'
            : 'This change is local until a backend write API is connected, but it cannot be undone here.'}
        </span>
      ),
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk: async () => {
        if (persisted) {
          try {
            await deleteTableRow(tableName as string, rowId);
            message.success('Row deleted');
            if (onRefresh) await onRefresh();
            else {
              setLocalData(prev => prev.filter(r => r.id !== rowId));
              setDirty(true);
            }
          } catch (err) {
            message.error(err instanceof Error ? err.message : 'Failed to delete row');
            throw err;
          }
          return;
        }
        setLocalData(prev => prev.filter(r => r.id !== rowId));
        setDirty(true);
      },
    });
  }, [contextMenu, localData, localColumns, usingApi, tableName, hasRowKey, onRefresh]);

  const handleSave = useCallback(
    async (values: Record<string, unknown>, isNew: boolean) => {
      const rowId = drawerRowId;
      const applyLocalAdd = () => {
        const newRow = { id: `local-${Date.now()}`, ...values } as T;
        setLocalData(prev => [newRow, ...prev]);
        setDirty(true);
      };
      const applyLocalEdit = (id: string) => {
        setLocalData(prev =>
          prev.map(row => (row.id === id ? ({ ...row, ...values } as T) : row)),
        );
        setDirty(true);
      };

      if (usingApi && tableName && WRITE_API_ENABLED) {
        if (!isNew && !hasRowKey) {
          message.error('Cannot save: this table has no primary key (_id_column).');
          throw new Error('Missing primary key');
        }
        try {
          if (isNew) {
            await createTableRow(tableName, values);
            message.success('Row added');
          } else if (rowId) {
            await updateTableRow(tableName, rowId, values);
            message.success('Changes saved');
          }
          if (onRefresh) await onRefresh();
          else if (isNew) applyLocalAdd();
          else if (rowId) applyLocalEdit(rowId);
        } catch (err) {
          message.error(err instanceof Error ? err.message : 'Failed to save changes');
          throw err;
        }
        return;
      }

      if (isNew) applyLocalAdd();
      else if (rowId) applyLocalEdit(rowId);
    },
    [drawerRowId, usingApi, tableName, hasRowKey, onRefresh],
  );

  const columnDefs = useMemo<ColumnDef[]>(
    () =>
      localColumns
        .map(col => ({
          key: colKeyOf(col),
          title: String((col as Record<string, unknown>).title ?? ''),
        }))
        .filter(c => c.key),
    [localColumns],
  );

  const selectedRowData = useMemo<Record<string, unknown> | null>(() => {
    if (!drawerRowId) return null;
    return (localData.find(row => row.id === drawerRowId) as Record<string, unknown>) ?? null;
  }, [localData, drawerRowId]);

  // Only columns not hidden via the View menu are rendered.
  const visibleColumns = useMemo(
    () => localColumns.filter(col => !hiddenColumns.has(colKeyOf(col))),
    [localColumns, hiddenColumns],
  );

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
            setContextMenu({ x: e.clientX, y: e.clientY, rowId: record.id });
          }}
          title="Row actions"
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

    return [rowSelectorCol, ...visibleColumns] as ColumnsType<T>;
  }, [visibleColumns]);

  const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  // Row-view filter (live vs archived) then free-text search.
  const rowViewData = useMemo(() => {
    if (!hasCurrentColumn) return localData;
    return localData.filter(row => (rowLiveMap(row) ? rowView.live : rowView.archived));
  }, [localData, hasCurrentColumn, rowView, rowLiveMap]);

  const filteredData = useMemo(() => {
    if (!searchText.trim()) return rowViewData;
    const query = searchText.toLowerCase();
    return rowViewData.filter(row =>
      Object.values(row).some(
        val => val !== null && val !== undefined && String(val).toLowerCase().includes(query),
      ),
    );
  }, [rowViewData, searchText]);

  const handleDownloadCSV = useCallback(() => {
    if (filteredData.length === 0) return;
    const columnKeys = visibleColumns
      .map(col => (col as Record<string, unknown>).dataIndex as string || colKeyOf(col))
      .filter(Boolean);
    const columnTitles = visibleColumns.map(col => String((col as Record<string, unknown>).title ?? ''));

    const header = columnTitles.map(escapeCSV).join(',');
    const rows = filteredData.map(row =>
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
  }, [filteredData, visibleColumns, title]);

  const viewCount = rowViewData.length;
  const filteredCount = filteredData.length;
  const isFiltered = searchText.trim().length > 0;
  const hasLocalChanges = dirty || localData.length !== data.length;
  const countLabel = isFiltered
    ? `${filteredCount} of ${viewCount} records`
    : `${viewCount} records`;

  const beamFrom = currentScheme.primaryAccent;
  const beamTo =
    currentScheme.gradientMid !== currentScheme.primaryAccent
      ? currentScheme.gradientMid
      : '#8b5cf6';

  // Item 7: only live rows are editable.
  const menuRow = contextMenu ? localData.find(r => r.id === contextMenu.rowId) : null;
  const menuRowIsLive = !hasCurrentColumn || (menuRow ? rowLiveMap(menuRow) : true);

  const favorited = tableName ? isFavorite(tableName) : false;

  const viewMenu = (
    <div style={{ minWidth: 220, maxHeight: 360, overflowY: 'auto' }} data-testid="view-menu">
      {hasCurrentColumn && (
        <>
          <div style={sectionLabelStyle}>Rows</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '2px 4px 8px' }}>
            <Checkbox
              checked={rowView.live}
              onChange={e => setRowView(v => ({ ...v, live: e.target.checked }))}
              data-testid="checkbox-view-live"
            >
              Live
            </Checkbox>
            <Checkbox
              checked={rowView.archived}
              onChange={e => setRowView(v => ({ ...v, archived: e.target.checked }))}
              data-testid="checkbox-view-archived"
            >
              Archived <Text type="secondary" style={{ fontSize: 12 }}>(history)</Text>
            </Checkbox>
          </div>
          <div style={dividerStyle} />
        </>
      )}

      <div style={sectionLabelStyle}>Columns</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '2px 4px 8px' }}>
        {dataColumnMeta.map(m => (
          <Checkbox
            key={m.key}
            checked={!hiddenColumns.has(m.key)}
            onChange={e => toggleColumn(m.key, e.target.checked)}
            data-testid={`checkbox-col-${m.key}`}
          >
            {m.label}
          </Checkbox>
        ))}
        {dataColumnMeta.length === 0 && (
          <Text type="secondary" style={{ fontSize: 12 }}>No columns</Text>
        )}
      </div>

      <div style={dividerStyle} />
      <div style={sectionLabelStyle}>Admin</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '2px 4px 4px' }}>
        {adminColumnMeta.length > 0 ? (
          <>
            <Checkbox
              checked={adminColumnMeta.every(m => !hiddenColumns.has(m.key))}
              indeterminate={
                adminColumnMeta.some(m => !hiddenColumns.has(m.key)) &&
                !adminColumnMeta.every(m => !hiddenColumns.has(m.key))
              }
              onChange={e => toggleAdminColumns(e.target.checked)}
              data-testid="checkbox-admin-all"
            >
              Admin columns
            </Checkbox>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingLeft: 22 }}>
              {adminColumnMeta.map(m => (
                <Checkbox
                  key={m.key}
                  checked={!hiddenColumns.has(m.key)}
                  onChange={e => toggleColumn(m.key, e.target.checked)}
                  data-testid={`checkbox-col-${m.key}`}
                >
                  {m.label}
                </Checkbox>
              ))}
            </div>
          </>
        ) : (
          <Tooltip title="Admin roles and columns aren't set up yet — this will unlock once they are configured.">
            <span>
              <Checkbox disabled data-testid="checkbox-admin-all">
                Admin columns
              </Checkbox>
            </span>
          </Tooltip>
        )}
      </div>
    </div>
  );

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
            {tableName && (
              <Tooltip title={favorited ? 'Remove from favorites' : 'Add to favorites'}>
                <button
                  onClick={() => toggleFavorite(tableName)}
                  aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
                  data-testid={`button-favorite-${title}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, lineHeight: 0 }}
                >
                  {favorited ? (
                    <StarFilled style={{ fontSize: 18, color: '#faad14' }} />
                  ) : (
                    <StarOutlined style={{ fontSize: 18, color: 'var(--text-secondary, #94a3b8)' }} />
                  )}
                </button>
              </Tooltip>
            )}
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
            <Popover content={viewMenu} trigger="click" placement="bottomRight">
              <button
                className="shimmer-btn"
                disabled={loading}
                data-testid={`button-view-${title}`}
              >
                <ControlOutlined style={{ fontSize: 13 }} />
                View
              </button>
            </Popover>
            <button
              className="shimmer-btn"
              onClick={openAddRow}
              disabled={loading}
              data-testid={`button-add-row-${title}`}
              style={{ background: '#1677ff', color: '#fff', borderColor: '#1677ff' }}
            >
              <PlusOutlined style={{ fontSize: 13 }} />
              Add Row
            </button>
            <button
              className="shimmer-btn"
              onClick={handleDownloadCSV}
              disabled={filteredData.length === 0 || loading}
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
      <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: '0 24px 24px' }}>
        <div style={{ borderRadius: 8, position: 'relative' }}>
          <Card
            className="shadow-sm"
            styles={{ body: { padding: 0 } }}
            style={{
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
                  description={
                    isFiltered
                      ? `No results for "${searchText}"`
                      : 'No rows match the current view — adjust Live/Archived in the View menu'
                  }
                  data-testid="empty-search-state"
                />
              </div>
            ) : (
              <Table
                columns={augmentedColumns}
                dataSource={filteredData}
                rowKey="id"
                pagination={false}
                scroll={{ x: 'max-content', y: 'calc(100vh - 300px)' }}
                data-testid={`table-${title}`}
              />
            )}
          </Card>
        </div>
      </div>

      {/* Context action menu (row only) */}
      {contextMenu && (
        <div
          ref={contextMenuRef}
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
            {menuRowIsLive ? 'Row selected' : 'Archived row'}
          </div>
          <button
            data-testid="button-action-edit"
            onClick={() => menuRowIsLive && openDrawer('edit')}
            onMouseEnter={() => setHoveredActionBtn('edit')}
            onMouseLeave={() => setHoveredActionBtn(null)}
            style={{
              ...actionBtnStyle,
              background: hoveredActionBtn === 'edit' && menuRowIsLive ? 'rgba(0,0,0,0.04)' : 'transparent',
              color: menuRowIsLive ? 'inherit' : '#94a3b8',
              cursor: menuRowIsLive ? 'pointer' : 'not-allowed',
            }}
            disabled={!menuRowIsLive}
            title={menuRowIsLive ? undefined : 'Archived rows cannot be edited'}
          >
            <EditOutlined />
            Edit row
          </button>
          <button
            data-testid="button-action-delete"
            onClick={handleDeleteRow}
            onMouseEnter={() => setHoveredActionBtn('delete')}
            onMouseLeave={() => setHoveredActionBtn(null)}
            style={{
              ...actionBtnStyle,
              background: hoveredActionBtn === 'delete' ? 'rgba(255,77,79,0.08)' : 'transparent',
              color: '#ff4d4f',
            }}
          >
            <DeleteOutlined />
            Delete row
          </button>
        </div>
      )}

      {/* Edit / Add drawer */}
      <EditDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        action={drawerAction}
        selectedRow={selectedRowData}
        columns={columnDefs}
        onSave={handleSave}
        persisted={Boolean(usingApi && tableName && WRITE_API_ENABLED)}
      />
    </div>
  );
}

const sectionLabelStyle: React.CSSProperties = {
  padding: '2px 4px 4px',
  fontSize: 11,
  color: '#94a3b8',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
};

const dividerStyle: React.CSSProperties = {
  height: 1,
  background: 'var(--border-color, rgba(0,0,0,0.08))',
  margin: '4px 0',
};
