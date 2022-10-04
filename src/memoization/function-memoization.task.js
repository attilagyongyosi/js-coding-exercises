/**
 * Given an input function, this function creates a new functions which has
 * the same signature as the input one, but uses memoization internally
 * to cache results calculated for a given set of input parameters to `fn`.
 *
 * @param fn a function to create a memoized equivalent from.
 *
 * @example
 * const sum = (a, b) => a + b;
 * const memoizedSum = memoize(sum);
 * const firstSum = memoizedSum(1, 2); // result is calculated, original sum() is called
 * const secondSum = memoizedSum(1, 2); // result coming from cache
 */
export function memoize(fn) {
    // @TODO: implement function.
}
