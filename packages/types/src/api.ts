// API Request Types
export interface APIRequest<T = unknown> {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  query?: Record<string, string>;
  body?: T;
}

// API Response Types
export interface APIError {
  code: string;
  message: string;
  details?: unknown;
  stack?: string;
}

export interface APIResponseMeta {
  timestamp: number;
  requestId: string;
  processingTime?: number;
}

export interface APIResponseWrapper<T> {
  success: boolean;
  data?: T;
  error?: APIError;
  meta: APIResponseMeta;
}

// Pagination Types
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// API Status Types
export interface APIHealthCheck {
  status: 'healthy' | 'degraded' | 'unhealthy';
  version: string;
  timestamp: number;
  services: Record<string, {
    status: 'up' | 'down';
    latency: number;
  }>;
} 