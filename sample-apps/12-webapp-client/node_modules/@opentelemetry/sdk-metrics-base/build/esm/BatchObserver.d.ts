import * as api from '@opentelemetry/api-metrics';
/** This is a SDK implementation of Batch Observer. */
export declare class BatchObserver {
    private _callback;
    private _maxTimeoutUpdateMS;
    constructor(options: api.BatchObserverOptions, callback?: (observerResult: api.BatchObserverResult) => void);
    collect(): Promise<void>;
}
//# sourceMappingURL=BatchObserver.d.ts.map