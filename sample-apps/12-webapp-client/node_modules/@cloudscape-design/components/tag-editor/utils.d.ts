/**
 * Ponyfill for Array.prototype.findIndex.
 */
export declare function findIndex<T>(array: ReadonlyArray<T>, condition: (t: T) => unknown): number;
export declare function useMemoizedArray<T>(array: ReadonlyArray<T>, isEqual: (prev: T, next: T) => boolean): ReadonlyArray<T>;
//# sourceMappingURL=utils.d.ts.map