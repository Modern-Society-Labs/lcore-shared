# @lcore/utils

Shared utilities for the IoT-L{CORE} SDK ecosystem.

## Overview

This package provides common utility functions used across the IoT-L{CORE} SDK repositories, including:

-   **Logger**: A structured logger using `pino`.
-   **Error Handling**: Standardized error classes and handlers.
-   **Configuration**: Utilities for managing environment and service configurations.

## Installation

```bash
npm install @lcore/utils
```

## Usage

Import utilities directly from the package:

```typescript
import { logger, AppError } from '@lcore/utils';

logger.info('Service started successfully.');

try {
    throw new AppError('api_error', 'Something went wrong!');
} catch (error) {
    if (error instanceof AppError) {
        logger.error({ code: error.code }, error.message);
    }
}
```

## Available Utilities

### Logger
A pre-configured `pino` logger instance for structured, performant logging. It includes `pino-pretty` for development environments.

### Error Handling
-   `AppError`: A custom error class for application-specific errors, including an error code.
-   `handleAsync`: A wrapper for async functions to simplify error handling in Express-style route handlers.

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

1.  Create reusable, well-documented functions.
2.  Add comprehensive unit tests.
3.  Avoid introducing dependencies on other `@lcore` packages besides `@lcore/types`.

## License

MIT 