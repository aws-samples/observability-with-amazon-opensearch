export declare class PromiseCancelledSignal {
}
/**
 * Wrap and provide a handle for a promise to provide cancellation information inside
 * callbacks. Takes a similar approach to how an AbortController works in modern fetch.
 *
 * @see https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
 */
export declare function makeCancellable<T>(promise: Promise<T>): {
    promise: Promise<T>;
    cancel: () => void;
    isCancelled: () => boolean;
};
//# sourceMappingURL=promises.d.ts.map