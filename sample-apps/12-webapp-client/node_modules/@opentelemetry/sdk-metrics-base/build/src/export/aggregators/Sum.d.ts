import { Point, Sum, AggregatorKind, SumAggregatorType } from '../types';
/** Basic aggregator which calculates a Sum from individual measurements. */
export declare class SumAggregator implements SumAggregatorType {
    kind: AggregatorKind.SUM;
    private _current;
    private _lastUpdateTime;
    update(value: number): void;
    toPoint(): Point<Sum>;
}
//# sourceMappingURL=Sum.d.ts.map