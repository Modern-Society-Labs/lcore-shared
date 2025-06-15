// Encryption Configuration Types
export interface EncryptionConfig {
  algorithm: 'AES-256-GCM' | 'ChaCha20-Poly1305';
  keySize: 256 | 512;
}

// Key Management Types
export interface KeyPair {
  publicKey: string;
  privateKey: string;
}

export interface SymmetricKey {
  key: string;
  iv: string;
}

// Encryption Result Types
export interface EncryptionResult {
  ciphertext: string;
  iv: string;
  tag: string;
  algorithm: string;
}

export interface DecryptionResult {
  plaintext: string;
  verified: boolean;
}

// Dual Encryption Types (MVP - Pre-Cartesi)
export interface DualEncryptionConfig {
  stage1: EncryptionConfig;
  stage2: EncryptionConfig;
}

export interface DualEncryptionResult {
  stage1: EncryptionResult;
  stage2: EncryptionResult;
  metadata: {
    timestamp: number;
    version: string;
  };
} 