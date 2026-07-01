'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { fetchTableList } from '~/lib/api';
import { tableConfigs } from '~/lib/tableRegistry';

const DEV_TABLE_NAMES = tableConfigs.map((t) => t.key);

type ApiStatus = 'checking' | 'connected' | 'disconnected';

interface TablesContextValue {
  tableNames: string[];
  tableCount: number | null;
  tablesLoading: boolean;
  apiStatus: ApiStatus;
}

const TablesContext = createContext<TablesContextValue>({
  tableNames: [],
  tableCount: null,
  tablesLoading: true,
  apiStatus: 'checking',
});

export function TablesProvider({ children }: { children: React.ReactNode }) {
  const [tableNames, setTableNames] = useState<string[]>([]);
  const [tableCount, setTableCount] = useState<number | null>(null);
  const [tablesLoading, setTablesLoading] = useState(true);
  const [apiStatus, setApiStatus] = useState<ApiStatus>('checking');

  useEffect(() => {
    fetchTableList()
      .then((res) => {
        setTableNames(res.tables);
        setTableCount(res.count);
        setApiStatus('connected');
      })
      .catch(() => {
        setTableNames(DEV_TABLE_NAMES);
        setTableCount(DEV_TABLE_NAMES.length);
        setApiStatus('disconnected');
      })
      .finally(() => setTablesLoading(false));
  }, []);

  return (
    <TablesContext.Provider value={{ tableNames, tableCount, tablesLoading, apiStatus }}>
      {children}
    </TablesContext.Provider>
  );
}

export function useTables() {
  return useContext(TablesContext);
}
