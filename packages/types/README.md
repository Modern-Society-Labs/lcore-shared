# @lcore/types

Core type definitions for the IoT-L{CORE} SDK ecosystem.

## Overview

This package contains TypeScript type definitions used across the IoT-L{CORE} SDK repositories. It provides:

- Device authentication and registration types
- Encryption and security types
- API request/response types
- Smart contract interaction types
- Cartesi integration types (MVP placeholders)

## Installation

```bash
npm install @lcore/types
```

## Usage

Import types directly from the package:

```typescript
import { DeviceIdentifier, EncryptedData, APIResponse } from '@lcore/types';

// Use in your code
const device: DeviceIdentifier = {
  did: 'did:example:123',
  publicKey: '0x...',
  metadata: {
    manufacturer: 'Example Corp',
    model: 'IoT-1000'
  }
};
```

## Type Categories

### Device Types

- `DeviceIdentifier`: Core device identity information
- `DeviceCredential`: Authentication credentials
- `DeviceAuthRequest/Response`: Authentication flow types
- `DeviceRegistrationRequest/Response`: Registration flow types

### Encryption Types

- `EncryptedData`: Encrypted payload structure
- `EncryptionConfig`: Encryption algorithm configuration
- `DualEncryptionConfig`: Two-stage encryption setup (MVP)

### API Types

- `APIRequest/Response`: Core API communication types
- `PaginationParams`: Standard pagination parameters
- `APIHealthCheck`: Service health monitoring

### Contract Types

- `ContractConfig`: Smart contract configuration
- `ContractEvent`: Blockchain event structures
- `ContractState`: On-chain state management

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Run tests
npm test

# Lint
npm run lint
```

## Contributing

1. Follow TypeScript best practices
2. Maintain backward compatibility
3. Add JSDoc comments for complex types
4. Update tests for new type definitions

## License

MIT
