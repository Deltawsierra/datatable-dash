export interface State {
  id: string;
  code: string;
  name: string;
  country: string;
  population: number;
  capital: string;
}

export interface Country {
  id: string;
  code: string;
  name: string;
  continent: string;
  population: number;
  capital: string;
  currency: string;
}

export interface Department {
  id: string;
  code: string;
  name: string;
  description: string;
  headCount: number;
  budget: number;
  manager: string;
}

export type TableName = 'states' | 'countries' | 'departments';

export interface TableConfig {
  key: TableName;
  label: string;
  path: string;
}

export const tableConfigs: TableConfig[] = [
  { key: 'states', label: 'States', path: '/tables/states' },
  { key: 'countries', label: 'Countries', path: '/tables/countries' },
  { key: 'departments', label: 'Departments', path: '/tables/departments' },
];
