import * as api from '@opentelemetry/api-metrics';
import { Observation } from '@opentelemetry/api-metrics';
import { InstrumentationLibrary } from '@opentelemetry/core';
import { Resource } from '@opentelemetry/resources';
import { BoundObserver } from './BoundInstrument';
import { Processor } from './export/Processor';
import { MetricKind, MetricRecord } from './export/types';
import { Metric } from './Metric';
import { ObserverResult } from './ObserverResult';
/**
 * This is a SDK implementation of Base Observer Metric.
 * All observers should extend this class
 */
export declare abstract class BaseObserverMetric extends Metric<BoundObserver> implements api.BaseObserver {
    private readonly _processor;
    protected _callback: (observerResult: api.ObserverResult) => unknown;
    constructor(name: string, options: api.MetricOptions, _processor: Processor, resource: Resource, metricKind: MetricKind, instrumentationLibrary: InstrumentationLibrary, callback?: (observerResult: api.ObserverResult) => unknown);
    protected _makeInstrument(labels: api.Labels): BoundObserver;
    getMetricRecord(): Promise<MetricRecord[]>;
    protected _processResults(observerResult: ObserverResult): void;
    observation(value: number): Observation;
}
//# sourceMappingURL=BaseObserverMetric.d.ts.map