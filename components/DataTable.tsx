'use client';

import { Table, Card, Typography, Empty, Spin } from 'antd';
import { TableOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

const { Title, Text } = Typography;

interface DataTableProps<T extends { id: string }> {
  title: string;
  data: T[];
  columns: ColumnsType<T>;
  loading?: boolean;
}

export default function DataTable<T extends { id: string }>({
  title,
  data,
  columns,
  loading = false,
}: DataTableProps<T>) {
  const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);
  
  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <TableOutlined style={{ fontSize: 24, color: '#1677ff' }} />
          <Title level={3} style={{ margin: 0 }} data-testid={`title-${title}`}>
            {formattedTitle}
          </Title>
        </div>
        <Text type="secondary" data-testid={`text-count-${title}`}>
          {data.length} records
        </Text>
      </div>
      
      <Card 
        className="shadow-sm"
        styles={{ body: { padding: 0 } }}
        data-testid={`card-table-${title}`}
      >
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Spin size="large" data-testid="loading-spinner" />
          </div>
        ) : data.length === 0 ? (
          <div className="py-20">
            <Empty 
              description="No data available"
              data-testid="empty-state"
            />
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={data}
            rowKey="id"
            pagination={{
              align: 'end',
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
              pageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: ['10', '20', '50'],
            }}
            scroll={{ x: 'max-content' }}
            style={{ minHeight: 400 }}
            data-testid={`table-${title}`}
          />
        )}
      </Card>
    </div>
  );
}
