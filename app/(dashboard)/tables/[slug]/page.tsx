'use client';

import { useParams, notFound } from 'next/navigation';
import DataTable from '../../../../components/DataTable';
import { getTableData } from '../../../../lib/mockData';
import { getColumns } from '../../../../lib/columns';
import { tableConfigs } from '../../../../lib/types';

export default function TablePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const validTables = tableConfigs.map(t => t.key);
  if (!validTables.includes(slug as typeof validTables[number])) {
    notFound();
  }
  
  const data = getTableData(slug);
  const columns = getColumns(slug);
  
  return (
    <DataTable
      title={slug}
      data={data}
      columns={columns}
    />
  );
}
