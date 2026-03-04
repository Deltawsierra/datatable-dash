const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

export interface TableListResponse {
  count: number;
  tables: string[];
}

export interface TableDataResponse {
  limit: number;
  offset: number;
  row_count: number;
  data: Record<string, unknown>[];
}

export interface ColumnInfo {
  name: string;
  data_type: string;
}

export interface TableMetadataResponse {
  table: string;
  total_rows: number;
  column_count: number;
  columns: ColumnInfo[];
}

export interface HealthResponse {
  Status: string;
}

async function apiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

export async function fetchHealth(): Promise<HealthResponse> {
  return apiFetch<HealthResponse>('/v1/health');
}

export async function fetchTableList(): Promise<TableListResponse> {
  return apiFetch<TableListResponse>('/v1/tables/list');
}

export async function fetchTableData(
  tableName: string,
  limit: number = 1000,
  offset: number = 0
): Promise<TableDataResponse> {
  return apiFetch<TableDataResponse>(
    `/v1/tables/${encodeURIComponent(tableName)}?limit=${limit}&offset=${offset}`
  );
}

export async function fetchTableMetadata(
  tableName: string
): Promise<TableMetadataResponse> {
  return apiFetch<TableMetadataResponse>(
    `/v1/tables/${encodeURIComponent(tableName)}/info`
  );
}

export async function isApiAvailable(): Promise<boolean> {
  try {
    await fetchHealth();
    return true;
  } catch {
    return false;
  }
}
