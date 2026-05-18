'use client';

import { useParams, notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import DataTable from '~/components/DataTable';
import { fetchTableData, fetchTableMetadata } from '~/lib/api';
import { getTableData, getColumns, type TableName } from '~/lib/tableRegistry';
import type { ColumnsType } from 'antd/es/table';

const DEV_TABLES = new Set<string>(['states', 'countries', 'departments']);

export default function TablePage() {
  const params = useParams();
  const slug = params.slug as string;

  const [data, setData] = useState<Array<Record<string, unknown>>>([]);
  const [columns, setColumns] = useState<ColumnsType<Record<string, unknown>>>([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [notFoundError, setNotFoundError] = useState(false);
  const [usingMock, setUsingMock] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      setLoading(true);
      setNotFoundError(false);
      setUsingMock(false);
      try {
        const [tableResponse, metadataResponse] = await Promise.all([
          fetchTableData(slug),
          fetchTableMetadata(slug),
        ]);

        if (cancelled) return;

        const apiColumns: ColumnsType<Record<string, unknown>> = metadataResponse.columns.map((col) => ({
          title: col.name,
          dataIndex: col.name,
          key: col.name,
          width: 160,
          ellipsis: true,
        }));

        const apiData = tableResponse.data.map((row, index) => ({
          ...row,
          id: (row as Record<string, unknown>).id ?? String(index + 1),
        }));

        setColumns(apiColumns);
        setData(apiData);
        setTotalRows(metadataResponse.total_rows);
      } catch {
        if (cancelled) return;

        if (DEV_TABLES.has(slug)) {
          const mockData = getTableData(slug as TableName) as Array<Record<string, unknown>>;
          const mockColumns = getColumns(slug as TableName) as ColumnsType<Record<string, unknown>>;
          setData(mockData);
          setColumns(mockColumns);
          setTotalRows(mockData.length);
          setUsingMock(true);
        } else {
          setNotFoundError(true);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadData();
    return () => { cancelled = true; };
  }, [slug]);

  if (notFoundError && !loading) {
    notFound();
  }

  return (
    <DataTable
      title={slug}
      data={data as Array<{ id: string }>}
      columns={columns as ColumnsType<{ id: string }>}
      loading={loading}
      totalRows={totalRows}
      usingApi={!usingMock}
    />
  );
}
