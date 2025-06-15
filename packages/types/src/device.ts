// Device Authentication Types
export interface DeviceAuthRequest {
  did: string;
  nonce: string;
  timestamp: number;
  signature: string;
}

export interface DeviceAuthResponse {
  token: string;
  expiresAt: number;
}

// Device Registration Types
export interface DeviceRegistrationRequest {
  did: string;
  publicKey: string;
  metadata: {
    manufacturer: string;
    model: string;
    serialNumber: string;
    firmwareVersion: string;
    [key: string]: unknown;
  };
}

export interface DeviceRegistrationResponse {
  did: string;
  status: 'active' | 'pending' | 'rejected';
  registeredAt: number;
}

// Device Status Types
export interface DeviceStatus {
  did: string;
  status: 'online' | 'offline' | 'error';
  lastSeen: number;
  errorDetails?: string;
} 