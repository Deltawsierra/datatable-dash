import type { State, Country, Department, TableName } from './types';

export const statesData: State[] = [
  { id: '1', code: 'CA', name: 'California', country: 'United States', population: 39538223, capital: 'Sacramento' },
  { id: '2', code: 'TX', name: 'Texas', country: 'United States', population: 29145505, capital: 'Austin' },
  { id: '3', code: 'FL', name: 'Florida', country: 'United States', population: 21538187, capital: 'Tallahassee' },
  { id: '4', code: 'NY', name: 'New York', country: 'United States', population: 20201249, capital: 'Albany' },
  { id: '5', code: 'PA', name: 'Pennsylvania', country: 'United States', population: 13002700, capital: 'Harrisburg' },
  { id: '6', code: 'IL', name: 'Illinois', country: 'United States', population: 12812508, capital: 'Springfield' },
  { id: '7', code: 'OH', name: 'Ohio', country: 'United States', population: 11799448, capital: 'Columbus' },
  { id: '8', code: 'GA', name: 'Georgia', country: 'United States', population: 10711908, capital: 'Atlanta' },
  { id: '9', code: 'NC', name: 'North Carolina', country: 'United States', population: 10439388, capital: 'Raleigh' },
  { id: '10', code: 'MI', name: 'Michigan', country: 'United States', population: 10077331, capital: 'Lansing' },
  { id: '11', code: 'NJ', name: 'New Jersey', country: 'United States', population: 9288994, capital: 'Trenton' },
  { id: '12', code: 'VA', name: 'Virginia', country: 'United States', population: 8631393, capital: 'Richmond' },
];

export const countriesData: Country[] = [
  { id: '1', code: 'US', name: 'United States', continent: 'North America', population: 331002651, capital: 'Washington D.C.', currency: 'USD' },
  { id: '2', code: 'CN', name: 'China', continent: 'Asia', population: 1439323776, capital: 'Beijing', currency: 'CNY' },
  { id: '3', code: 'IN', name: 'India', continent: 'Asia', population: 1380004385, capital: 'New Delhi', currency: 'INR' },
  { id: '4', code: 'BR', name: 'Brazil', continent: 'South America', population: 212559417, capital: 'Brasilia', currency: 'BRL' },
  { id: '5', code: 'RU', name: 'Russia', continent: 'Europe', population: 145934462, capital: 'Moscow', currency: 'RUB' },
  { id: '6', code: 'JP', name: 'Japan', continent: 'Asia', population: 126476461, capital: 'Tokyo', currency: 'JPY' },
  { id: '7', code: 'DE', name: 'Germany', continent: 'Europe', population: 83783942, capital: 'Berlin', currency: 'EUR' },
  { id: '8', code: 'GB', name: 'United Kingdom', continent: 'Europe', population: 67886011, capital: 'London', currency: 'GBP' },
  { id: '9', code: 'FR', name: 'France', continent: 'Europe', population: 65273511, capital: 'Paris', currency: 'EUR' },
  { id: '10', code: 'IT', name: 'Italy', continent: 'Europe', population: 60461826, capital: 'Rome', currency: 'EUR' },
  { id: '11', code: 'CA', name: 'Canada', continent: 'North America', population: 37742154, capital: 'Ottawa', currency: 'CAD' },
  { id: '12', code: 'AU', name: 'Australia', continent: 'Oceania', population: 25499884, capital: 'Canberra', currency: 'AUD' },
];

export const departmentsData: Department[] = [
  { id: '1', code: 'ENG', name: 'Engineering', description: 'Software development and infrastructure', headCount: 150, budget: 5000000, manager: 'John Smith' },
  { id: '2', code: 'MKT', name: 'Marketing', description: 'Brand management and customer acquisition', headCount: 45, budget: 2000000, manager: 'Sarah Johnson' },
  { id: '3', code: 'SAL', name: 'Sales', description: 'Revenue generation and client relationships', headCount: 80, budget: 3000000, manager: 'Michael Brown' },
  { id: '4', code: 'HR', name: 'Human Resources', description: 'Talent acquisition and employee relations', headCount: 25, budget: 800000, manager: 'Emily Davis' },
  { id: '5', code: 'FIN', name: 'Finance', description: 'Financial planning and accounting', headCount: 30, budget: 1200000, manager: 'Robert Wilson' },
  { id: '6', code: 'OPS', name: 'Operations', description: 'Business operations and logistics', headCount: 60, budget: 1500000, manager: 'Jennifer Martinez' },
  { id: '7', code: 'LEG', name: 'Legal', description: 'Legal compliance and contracts', headCount: 15, budget: 600000, manager: 'David Anderson' },
  { id: '8', code: 'CUS', name: 'Customer Support', description: 'Customer service and success', headCount: 100, budget: 1800000, manager: 'Lisa Thompson' },
  { id: '9', code: 'PRD', name: 'Product', description: 'Product management and strategy', headCount: 35, budget: 1000000, manager: 'James Garcia' },
  { id: '10', code: 'DAT', name: 'Data Science', description: 'Analytics and machine learning', headCount: 40, budget: 2500000, manager: 'Amanda Lee' },
];

export function getTableData(tableName: TableName): Array<{ id: string }> {
  switch (tableName) {
    case 'states':
      return statesData;
    case 'countries':
      return countriesData;
    case 'departments':
      return departmentsData;
    default:
      return [];
  }
}
