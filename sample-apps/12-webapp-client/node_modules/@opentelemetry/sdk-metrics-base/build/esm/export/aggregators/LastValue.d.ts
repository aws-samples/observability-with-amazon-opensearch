import { AggregatorKind, LastValue, LastValueAggregatorType, Point } from '../types';
/** Basic aggregator for LastValue which keeps the last recorded value. */
export declare class LastValueAggregator implements LastValueAggregatorType {
    private _current;
    private _lastUpdateTime;
    kind: AggregatorKind.LAST_VALUE;
    update(value: number): void;
    toPoint(): Point<LastValue>;
}
//# sourceMappingURL=LastValue.d.ts.map