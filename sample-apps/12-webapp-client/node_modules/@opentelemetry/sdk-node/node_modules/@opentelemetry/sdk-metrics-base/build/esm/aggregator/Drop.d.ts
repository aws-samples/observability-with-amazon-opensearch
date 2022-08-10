import { HrTime } from '@opentelemetry/api';
import { AggregationTemporality } from '../export/AggregationTemporality';
import { MetricData } from '../export/MetricData';
import { InstrumentDescriptor } from '../InstrumentDescriptor';
import { Maybe } from '../utils';
import { AggregatorKind, Aggregator, AccumulationRecord } from './types';
/** Basic aggregator for None which keeps no recorded value. */
export declare class DropAggregator implements Aggregator<undefined> {
    kind: AggregatorKind.DROP;
    createAccumulation(): undefined;
    merge(_previous: undefined, _delta: undefined): undefined;
    diff(_previous: undefined, _current: undefined): undefined;
    toMetricData(_descriptor: InstrumentDescriptor, _aggregationTemporality: AggregationTemporality, _accumulationByAttributes: AccumulationRecord<undefined>[], _endTime: HrTime): Maybe<MetricData>;
}
//# sourceMappingURL=Drop.d.ts.map