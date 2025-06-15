// Device Types
export interface DeviceIdentifier {
  did: string;
  publicKey: string;
  metadata: Record<string, unknown>;
}

export interface DeviceCredential {
  did: string;
  signature: string;
  timestamp: number;
  nonce: string;
}

// Data Types
export interface EncryptedData {
  ciphertext: string;
  iv: string;
  tag: string;
  encryptedKey?: string;
}

export interface DataPayload {
  deviceId: string;
  timestamp: number;
  data: EncryptedData;
  signature: string;
}

// API Types
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
}

// Smart Contract Types
export interface ContractConfig {
  address: string;
  chainId: number;
  abi: unknown[];
}

// Cartesi Integration Types (Placeholder for MVP)
export interface CartesiConfig {
  endpoints: {
    http: string;
    ws: string;
    graphql: string;
  };
  contracts: Record<string, ContractConfig>;
}

// Export all types
export * from './device';
export * from './encryption';
export * from './api';
export * from './contracts'; 