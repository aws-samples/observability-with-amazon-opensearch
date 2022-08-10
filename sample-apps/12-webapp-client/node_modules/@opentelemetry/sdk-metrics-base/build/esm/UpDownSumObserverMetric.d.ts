import * as api from '@opentelemetry/api-metrics';
import { InstrumentationLibrary } from '@opentelemetry/core';
import { Resource } from '@opentelemetry/resources';
import { BaseObserverMetric } from './BaseObserverMetric';
import { Processor } from './export/Processor';
/** This is a SDK implementation of UpDownSumObserver Metric. */
export declare class UpDownSumObserverMetric extends BaseObserverMetric implements api.UpDownSumObserver {
    constructor(name: string, options: api.MetricOptions, processor: Processor, resource: Resource, instrumentationLibrary: InstrumentationLibrary, callback?: (observerResult: api.ObserverResult) => unknown);
}
//# sourceMappingURL=UpDownSumObserverMetric.d.ts.map