'use client';

import { useParams, notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import DataTable from '../../../../components/DataTable';
import { getTableData, getColumns, tableConfigs, type TableName } from '../../../../lib/tableRegistry';
import { fetchTableData, fetchTableMetadata } from '../../../../lib/api';
import type { ColumnsType } from 'antd/es/table';

export default function TablePage() {
  const params = useParams();
  const slug = params.slug as string;

  const validTables = tableConfigs.map(t => t.key);
  if (!validTables.includes(slug as TableName)) {
    notFound();
  }

  const [data, setData] = useState<Array<Record<string, unknown>>>([]);
  const [columns, setColumns] = useState<ColumnsType<Record<string, unknown>>>([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [usingApi, setUsingApi] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      setLoading(true);
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
          id: (row as Record<string, unknown>).id || String(index + 1),
        }));

        setColumns(apiColumns);
        setData(apiData);
        setTotalRows(metadataResponse.total_rows);
        setUsingApi(true);
      } catch {
        if (cancelled) return;
        const fallbackData = getTableData(slug as TableName);
        const fallbackColumns = getColumns(slug as TableName);
        setData(fallbackData as Array<Record<string, unknown>>);
        setColumns(fallbackColumns as ColumnsType<Record<string, unknown>>);
        setTotalRows(fallbackData.length);
        setUsingApi(false);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadData();
    return () => { cancelled = true; };
  }, [slug]);

  return (
    <DataTable
      title={slug}
      data={data as Array<{ id: string }>}
      columns={columns as ColumnsType<{ id: string }>}
      loading={loading}
      totalRows={totalRows}
      usingApi={usingApi}
    />
  );
}
