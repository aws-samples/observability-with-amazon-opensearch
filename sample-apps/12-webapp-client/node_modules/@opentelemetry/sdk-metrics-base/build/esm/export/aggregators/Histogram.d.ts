import { HistogramAggregatorType, Point, Histogram, AggregatorKind } from '../types';
/**
 * Basic aggregator which observes events and counts them in pre-defined buckets
 * and provides the total sum and count of all observations.
 */
export declare class HistogramAggregator implements HistogramAggregatorType {
    kind: AggregatorKind.HISTOGRAM;
    private _current;
    private _lastUpdateTime;
    private readonly _boundaries;
    constructor(boundaries: number[]);
    update(value: number): void;
    toPoint(): Point<Histogram>;
    private _newEmptyCheckpoint;
}
//# sourceMappingURL=Histogram.d.ts.map