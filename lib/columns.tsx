import type { ColumnsType } from 'antd/es/table';
import type { State, Country, Department, TableName } from './types';

export const statesColumns: ColumnsType<State> = [
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
    width: 80,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 180,
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    width: 150,
  },
  {
    title: 'Capital',
    dataIndex: 'capital',
    key: 'capital',
    width: 150,
  },
  {
    title: 'Population',
    dataIndex: 'population',
    key: 'population',
    width: 140,
    align: 'right',
    render: (value: number) => value.toLocaleString(),
  },
];

export const countriesColumns: ColumnsType<Country> = [
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
    width: 80,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 180,
  },
  {
    title: 'Continent',
    dataIndex: 'continent',
    key: 'continent',
    width: 140,
  },
  {
    title: 'Capital',
    dataIndex: 'capital',
    key: 'capital',
    width: 150,
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency',
    width: 100,
    align: 'center',
  },
  {
    title: 'Population',
    dataIndex: 'population',
    key: 'population',
    width: 160,
    align: 'right',
    render: (value: number) => value.toLocaleString(),
  },
];

export const departmentsColumns: ColumnsType<Department> = [
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
    width: 80,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 160,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: 280,
    ellipsis: true,
  },
  {
    title: 'Manager',
    dataIndex: 'manager',
    key: 'manager',
    width: 150,
  },
  {
    title: 'Head Count',
    dataIndex: 'headCount',
    key: 'headCount',
    width: 110,
    align: 'right',
  },
  {
    title: 'Budget',
    dataIndex: 'budget',
    key: 'budget',
    width: 130,
    align: 'right',
    render: (value: number) => `$${value.toLocaleString()}`,
  },
];

export function getColumns(tableName: TableName): ColumnsType<{ id: string }> {
  switch (tableName) {
    case 'states':
      return statesColumns as ColumnsType<{ id: string }>;
    case 'countries':
      return countriesColumns as ColumnsType<{ id: string }>;
    case 'departments':
      return departmentsColumns as ColumnsType<{ id: string }>;
    default:
      return [];
  }
}
