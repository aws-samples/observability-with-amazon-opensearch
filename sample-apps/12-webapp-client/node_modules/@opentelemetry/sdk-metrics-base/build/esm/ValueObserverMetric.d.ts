import * as api from '@opentelemetry/api-metrics';
import { InstrumentationLibrary } from '@opentelemetry/core';
import { Resource } from '@opentelemetry/resources';
import { BaseObserverMetric } from './BaseObserverMetric';
import { Processor } from './export/Processor';
/** This is a SDK implementation of Value Observer Metric. */
export declare class ValueObserverMetric extends BaseObserverMetric implements api.ValueObserver {
    constructor(name: string, options: api.MetricOptions, processor: Processor, resource: Resource, instrumentationLibrary: InstrumentationLibrary, callback?: (observerResult: api.ObserverResult) => unknown);
}
//# sourceMappingURL=ValueObserverMetric.d.ts.map