import * as api from '@opentelemetry/api-metrics';
/**
 * Implementation of api BatchObserverResult
 */
export declare class BatchObserverResult implements api.BatchObserverResult {
    private _callback;
    private _immediate;
    /**
     * Cancels the further updates.
     * This is used to prevent updating the value of result that took too
     * long to update. For example to avoid update after timeout.
     * See {@link BatchObserver.collect}
     */
    cancelled: boolean;
    /**
     * used to save a callback that will be called after the observations are
     *     updated
     * @param [callback]
     */
    onObserveCalled(callback?: () => void): void;
    observe(labels: api.Labels, observations: api.Observation[]): void;
}
//# sourceMappingURL=BatchObserverResult.d.ts.map