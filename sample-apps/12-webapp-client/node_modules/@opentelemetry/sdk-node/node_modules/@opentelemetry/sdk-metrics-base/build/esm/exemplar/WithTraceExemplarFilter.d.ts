import { MetricAttributes } from '@opentelemetry/api-metrics';
import { Context, HrTime } from '@opentelemetry/api';
import { ExemplarFilter } from './ExemplarFilter';
export declare class WithTraceExemplarFilter implements ExemplarFilter {
    shouldSample(value: number, timestamp: HrTime, attributes: MetricAttributes, ctx: Context): boolean;
}
//# sourceMappingURL=WithTraceExemplarFilter.d.ts.map