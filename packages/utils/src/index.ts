import pino from 'pino';
import { APIError } from '@lcore/types';

// 1. Logger
const isProduction = process.env.NODE_ENV === 'production';

export const logger = pino({
    level: process.env.LOG_LEVEL || (isProduction ? 'info' : 'debug'),
    transport: isProduction
        ? undefined
        : {
              target: 'pino-pretty',
              options: {
                  colorize: true,
                  translateTime: 'SYS:standard',
                  ignore: 'pid,hostname',
              },
          },
});

// 2. Custom Error Class
export class AppError extends Error implements APIError {
    public readonly code: string;
    public readonly details?: unknown;

    constructor(code: string, message: string, details?: unknown) {
        super(message);
        this.code = code;
        this.details = details;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

// 3. Async Handler Utility (for Express-like apps)
type AsyncRequestHandler = (
    ...args: any[]
) => Promise<any>;

export const handleAsync = (fn: AsyncRequestHandler) => {
    return (...args: any[]) => {
        const fnReturn = fn(...args);
        const next = args[args.length - 1];
        return Promise.resolve(fnReturn).catch(next);
    };
}; 