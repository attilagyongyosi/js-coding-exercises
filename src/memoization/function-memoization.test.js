import { memoize } from './function-memoization.task';

describe('memoize()', () => {
    const sum = vi.fn((...n) => n.reduce((sum, number) => sum + number));

    it('should accept a function parameter and return with another function', () => {
        const memoizedSum = memoize(sum);
        expect(memoizedSum).toBeTypeOf('function');
    });

    it('should throw when non-function parameter is provided', () => {
        const expectedErrorMessage = 'Invalid parameter! Please provide a callback function.';
        expect(() => memoize(12)).toThrowError(expectedErrorMessage);
        expect(() => memoize('string')).toThrowError(expectedErrorMessage);
        expect(() => memoize(true)).toThrowError(expectedErrorMessage);
        expect(() => memoize(new Date())).toThrowError(expectedErrorMessage);
        expect(() => memoize()).toThrowError(expectedErrorMessage);
    });

    it('should memoize a sum function and cache result of first execution with given parameters', () => {
        const parameters = [ 1, 2 ];
        const memoizedSum = memoize(sum);

        memoizedSum(...parameters);
        memoizedSum(...parameters);
        memoizedSum(...parameters);

        expect(sum).toHaveBeenCalledWith(...parameters);
        expect(sum).not.toHaveBeenCalledWith(1);
    });

    it('should memoize multiple set of parameters for a n-sum function', () => {
        const parameters1 = [ 1, 3, 4 ];
        const parameters2 = [ 1, 2, 4, 6 ];

        const memoizedSum = memoize(sum);

        memoizedSum(...parameters1);
        memoizedSum(...parameters1);
        memoizedSum(...parameters2);
        memoizedSum(...parameters2);

        expect(sum).toHaveBeenCalledWith(...parameters1);
        expect(sum).toHaveBeenCalledWith(...parameters2);
        expect(sum).not.toHaveBeenCalledWith(2);
    });
});
