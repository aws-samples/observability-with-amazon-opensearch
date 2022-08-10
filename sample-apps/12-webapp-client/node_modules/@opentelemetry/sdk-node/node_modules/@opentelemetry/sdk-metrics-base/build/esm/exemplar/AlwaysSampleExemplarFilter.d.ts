import { MetricAttributes } from '@opentelemetry/api-metrics';
import { Context, HrTime } from '@opentelemetry/api';
import { ExemplarFilter } from './ExemplarFilter';
export declare class AlwaysSampleExemplarFilter implements ExemplarFilter {
    shouldSample(_value: number, _timestamp: HrTime, _attributes: MetricAttributes, _ctx: Context): boolean;
}
//# sourceMappingURL=AlwaysSampleExemplarFilter.d.ts.map