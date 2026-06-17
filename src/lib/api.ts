const BASE_URL = (import.meta.env.VITE_API_BASE_URL as string)?.replace(/\/$/, '');

// Wraps fetch to return { data: json }, mirroring axios response shape so that
// callers can unwrap the backend envelope with .data.data
async function _fetch(url: string, options: RequestInit) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  return { data };
}

async function post<T>(path: string, body: unknown): Promise<T> {
  const response = await _fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  // Backend wraps all responses: { message: string, data: T } — unwrap here
  return response.data.data as T;
}

export const api = { post };
