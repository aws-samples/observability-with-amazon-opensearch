import * as api from '@opentelemetry/api-metrics';
import { InstrumentationLibrary } from '@opentelemetry/core';
import { Resource } from '@opentelemetry/resources';
import { BaseObserverMetric } from './BaseObserverMetric';
import { Processor } from './export/Processor';
import { ObserverResult } from './ObserverResult';
/** This is a SDK implementation of SumObserver Metric. */
export declare class SumObserverMetric extends BaseObserverMetric implements api.SumObserver {
    constructor(name: string, options: api.MetricOptions, processor: Processor, resource: Resource, instrumentationLibrary: InstrumentationLibrary, callback?: (observerResult: api.ObserverResult) => unknown);
    protected _processResults(observerResult: ObserverResult): void;
}
//# sourceMappingURL=SumObserverMetric.d.ts.map