import { getAccessToken } from '~/lib/auth';

const API_BASE_URL = '/api/proxy';

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

export interface UserInfoResponse {
  id: string;
  username: string | null;
  display_name: string | null;
  email: string | null;
  groups: string[];
  permissions: unknown;
  loaded_at?: string;
}

/**
 * Best-effort mapping of the backend's permission payload to a list of role
 * labels for display/gating. The backend hydrates request.state.user with a
 * `permissions` object (shape defined server-side) and `groups` (Azure group
 * claims). We only surface clearly role-like values and avoid showing raw
 * group GUIDs. Refine this once the permissions shape is finalized.
 */
export function deriveRoles(info: UserInfoResponse): string[] {
  const perms = info.permissions;
  if (Array.isArray(perms) && perms.every((p) => typeof p === 'string')) {
    return perms as string[];
  }
  if (perms && typeof perms === 'object') {
    const maybeRoles = (perms as Record<string, unknown>).roles;
    if (Array.isArray(maybeRoles)) {
      return maybeRoles.filter((r): r is string => typeof r === 'string');
    }
  }
  return [];
}

async function apiFetch<T>(path: string): Promise<T> {
  const token = await getAccessToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE_URL}${path}`, { headers });
  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

async function apiMutate<T>(
  path: string,
  method: 'POST' | 'PUT' | 'DELETE',
  body?: unknown
): Promise<T> {
  const token = await getAccessToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    let detail = res.statusText;
    try {
      const errBody = (await res.json()) as { detail?: string };
      if (errBody?.detail) detail = errBody.detail;
    } catch {
      // response had no JSON body; keep statusText
    }
    throw new Error(`API error ${res.status}: ${detail}`);
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
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

export async function fetchUserInfo(): Promise<UserInfoResponse> {
  return apiFetch<UserInfoResponse>('/v1/user/info');
}

export interface MutationResponse {
  status: string;
  [key: string]: unknown;
}

export async function createTableRow(
  tableName: string,
  values: Record<string, unknown>
): Promise<MutationResponse> {
  return apiMutate<MutationResponse>(
    `/v1/tables/${encodeURIComponent(tableName)}`,
    'POST',
    { values }
  );
}

export async function updateTableRow(
  tableName: string,
  rowKey: string,
  values: Record<string, unknown>
): Promise<MutationResponse> {
  return apiMutate<MutationResponse>(
    `/v1/tables/${encodeURIComponent(tableName)}/${encodeURIComponent(rowKey)}`,
    'PUT',
    { values }
  );
}

export async function deleteTableRow(
  tableName: string,
  rowKey: string
): Promise<MutationResponse> {
  return apiMutate<MutationResponse>(
    `/v1/tables/${encodeURIComponent(tableName)}/${encodeURIComponent(rowKey)}`,
    'DELETE'
  );
}

export async function deleteTableColumn(
  tableName: string,
  columnName: string
): Promise<MutationResponse> {
  return apiMutate<MutationResponse>(
    `/v1/tables/${encodeURIComponent(tableName)}/columns/${encodeURIComponent(columnName)}`,
    'DELETE'
  );
}

export async function isApiAvailable(): Promise<boolean> {
  try {
    await fetchTableList();
    return true;
  } catch {
    return false;
  }
}
