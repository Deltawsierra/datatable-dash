'use client';

import { useParams, notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import DataTable from '../../../../components/DataTable';
import { fetchTableData, fetchTableMetadata } from '../../../../lib/api';
import type { ColumnsType } from 'antd/es/table';

export default function TablePage() {
  const params = useParams();
  const slug = params.slug as string;

  const [data, setData] = useState<Array<Record<string, unknown>>>([]);
  const [columns, setColumns] = useState<ColumnsType<Record<string, unknown>>>([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [notFoundError, setNotFoundError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      setLoading(true);
      setNotFoundError(false);
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
      } catch (err: unknown) {
        if (cancelled) return;
        const status = (err as { status?: number })?.status;
        if (status === 404) {
          setNotFoundError(true);
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
      usingApi={true}
    />
  );
}
