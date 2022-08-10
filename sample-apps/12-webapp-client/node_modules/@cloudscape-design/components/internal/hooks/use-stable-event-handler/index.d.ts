/**
 * A callback that stays stable between renders even as the dependencies change.
 * Not a recommended React pattern, so it should be used sparingly and only if
 * the callback is an event handler (i.e. not used during rendering) and causing
 * clear performance issues.
 *
 * @see https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
 */
export declare function useStableEventHandler<T extends (...args: any[]) => any>(fn: T): T;
//# sourceMappingURL=index.d.ts.map