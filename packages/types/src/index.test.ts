/// <reference types="jest" />

import {
  DeviceIdentifier,
  DeviceCredential,
  EncryptedData,
  DataPayload,
  APIResponse,
  ContractConfig,
  CartesiConfig
} from './index';

// Jest will automatically provide these globals
declare const describe: jest.Describe;
declare const it: jest.It;
declare const expect: jest.Expect;

describe('Type Definitions', () => {
  it('should create valid DeviceIdentifier', () => {
    const device: DeviceIdentifier = {
      did: 'did:example:123',
      publicKey: '0x123abc',
      metadata: {
        manufacturer: 'Test Corp',
        model: 'Test-1000'
      }
    };
    expect(device.did).toBe('did:example:123');
  });

  it('should create valid DeviceCredential', () => {
    const cred: DeviceCredential = {
      did: 'did:example:123',
      signature: '0xabc123',
      timestamp: Date.now(),
      nonce: 'test-nonce'
    };
    expect(cred.signature).toBe('0xabc123');
  });

  it('should create valid EncryptedData', () => {
    const data: EncryptedData = {
      ciphertext: 'encrypted',
      iv: 'iv-data',
      tag: 'auth-tag'
    };
    expect(data.ciphertext).toBe('encrypted');
  });

  it('should create valid DataPayload', () => {
    const payload: DataPayload = {
      deviceId: 'device-123',
      timestamp: Date.now(),
      data: {
        ciphertext: 'encrypted',
        iv: 'iv-data',
        tag: 'auth-tag'
      },
      signature: '0xdef456'
    };
    expect(payload.deviceId).toBe('device-123');
  });

  it('should create valid APIResponse', () => {
    const response: APIResponse<string> = {
      success: true,
      data: 'test-data'
    };
    expect(response.success).toBe(true);
  });

  it('should create valid ContractConfig', () => {
    const config: ContractConfig = {
      address: '0x789def',
      chainId: 1,
      abi: []
    };
    expect(config.chainId).toBe(1);
  });

  it('should create valid CartesiConfig', () => {
    const config: CartesiConfig = {
      endpoints: {
        http: 'http://localhost:8080',
        ws: 'ws://localhost:8081',
        graphql: 'http://localhost:8082'
      },
      contracts: {}
    };
    expect(config.endpoints.http).toBe('http://localhost:8080');
  });
}); 