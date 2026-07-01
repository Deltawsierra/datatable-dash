'use client';

import { useParams, notFound } from 'next/navigation';
import { useEffect, useState, useCallback, useRef, type ReactNode } from 'react';
import { Tag } from 'antd';
import DataTable from '~/components/DataTable';
import { fetchTableData, fetchTableMetadata } from '~/lib/api';
import { getTableData, getColumns, type TableName } from '~/lib/tableRegistry';
import { recordVisit } from '~/lib/userTables';
import type { ColumnsType } from 'antd/es/table';

const DEV_TABLES = new Set<string>(['states', 'countries', 'departments']);

// Ant Design renders a cell's raw value directly, and React renders a raw
// boolean (true/false) as nothing — so boolean columns like `_current_` show up
// blank. This formats values for display: booleans become a labeled tag, nulls
// become a muted dash, and objects are stringified.
function renderCellValue(value: unknown): ReactNode {
  if (typeof value === 'boolean') {
    return (
      <Tag color={value ? 'green' : 'default'} style={{ margin: 0 }}>
        {value ? 'True' : 'False'}
      </Tag>
    );
  }
  if (value === null || value === undefined) {
    return <span style={{ color: '#cbd5e1' }}>—</span>;
  }
  if (typeof value === 'object') {
    return (
      <span style={{ fontFamily: 'monospace', fontSize: 12 }}>
        {JSON.stringify(value)}
      </span>
    );
  }
  return String(value);
}

export default function TablePage() {
  const params = useParams();
  const slug = params.slug as string;

  const [data, setData] = useState<Array<Record<string, unknown>>>([]);
  const [columns, setColumns] = useState<ColumnsType<Record<string, unknown>>>([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [notFoundError, setNotFoundError] = useState(false);
  const [usingMock, setUsingMock] = useState(false);
  const [hasPrimaryKey, setHasPrimaryKey] = useState(false);
  const loadIdRef = useRef(0);

  const loadData = useCallback(async () => {
    const myId = ++loadIdRef.current;
    setLoading(true);
    setNotFoundError(false);
    setUsingMock(false);
    try {
      const [tableResponse, metadataResponse] = await Promise.all([
        fetchTableData(slug),
        fetchTableMetadata(slug),
      ]);

      if (myId !== loadIdRef.current) return;

      const apiColumns: ColumnsType<Record<string, unknown>> = metadataResponse.columns.map((col) => ({
        title: col.name,
        dataIndex: col.name,
        key: col.name,
        width: 160,
        ellipsis: true,
        render: (value: unknown) => renderCellValue(value),
      }));

      const apiData = tableResponse.data.map((row, index) => {
        const r = row as Record<string, unknown>;
        const pk = r._id_column;
        return {
          ...r,
          id: pk !== undefined && pk !== null ? String(pk) : (r.id ?? String(index + 1)),
        };
      });

      const apiHasRowKey =
        tableResponse.data.length > 0 &&
        tableResponse.data.every((r) => {
          const pk = (r as Record<string, unknown>)._id_column;
          return pk !== undefined && pk !== null;
        });

      setColumns(apiColumns);
      setData(apiData);
      setTotalRows(metadataResponse.total_rows);
      setHasPrimaryKey(apiHasRowKey);
      recordVisit(slug);
    } catch {
      if (myId !== loadIdRef.current) return;

      if (DEV_TABLES.has(slug)) {
        const mockData = getTableData(slug as TableName) as Array<Record<string, unknown>>;
        const mockColumns = getColumns(slug as TableName) as ColumnsType<Record<string, unknown>>;
        setData(mockData);
        setColumns(mockColumns);
        setTotalRows(mockData.length);
        setUsingMock(true);
        setHasPrimaryKey(false);
        recordVisit(slug);
      } else {
        setNotFoundError(true);
      }
    } finally {
      if (myId === loadIdRef.current) setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (notFoundError && !loading) {
    notFound();
  }

  return (
    <DataTable
      title={slug}
      tableName={slug}
      data={data as Array<{ id: string }>}
      columns={columns as ColumnsType<{ id: string }>}
      loading={loading}
      totalRows={totalRows}
      usingApi={!usingMock}
      hasRowKey={hasPrimaryKey}
      onRefresh={loadData}
    />
  );
}
