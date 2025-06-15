import { logger, AppError, handleAsync } from './index';

describe('Logger', () => {
    it('should be an object', () => {
        expect(typeof logger).toBe('object');
    });

    it('should have info, warn, error, and debug methods', () => {
        expect(typeof logger.info).toBe('function');
        expect(typeof logger.warn).toBe('function');
        expect(typeof logger.error).toBe('function');
        expect(typeof logger.debug).toBe('function');
    });
});

describe('AppError', () => {
    it('should create an instance of AppError', () => {
        const error = new AppError('test_code', 'Test message');
        expect(error).toBeInstanceOf(AppError);
        expect(error).toBeInstanceOf(Error);
    });

    it('should have the correct properties', () => {
        const details = { info: 'extra' };
        const error = new AppError('test_code', 'Test message', details);
        expect(error.message).toBe('Test message');
        expect(error.code).toBe('test_code');
        expect(error.details).toBe(details);
    });
});

describe('handleAsync', () => {
    it('should call the function and resolve', async () => {
        const myFn = jest.fn().mockResolvedValue('Success');
        const wrapped = handleAsync(myFn);
        const next = jest.fn();

        await wrapped('arg1', next);

        expect(myFn).toHaveBeenCalledWith('arg1', next);
        expect(next).not.toHaveBeenCalled();
    });

    it('should call next with the error if the function rejects', async () => {
        const error = new Error('Async error');
        const myFn = jest.fn().mockRejectedValue(error);
        const wrapped = handleAsync(myFn);
        const next = jest.fn();

        await wrapped('arg1', next);

        expect(myFn).toHaveBeenCalledWith('arg1', next);
        expect(next).toHaveBeenCalledWith(error);
    });
}); 