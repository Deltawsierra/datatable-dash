'use client';

import { useParams, notFound } from 'next/navigation';
import DataTable from '../../../../components/DataTable';
import { getTableData } from '../../../../lib/mockData';
import { getColumns } from '../../../../lib/columns';
import { tableConfigs, type TableName } from '../../../../lib/types';

export default function TablePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const validTables = tableConfigs.map(t => t.key);
  if (!validTables.includes(slug as TableName)) {
    notFound();
  }
  
  const data = getTableData(slug as TableName);
  const columns = getColumns(slug as TableName);
  
  return (
    <DataTable
      title={slug}
      data={data as Array<{ id: string }>}
      columns={columns as Array<{ key: string; dataIndex: string; title: string }>}
    />
  );
}
