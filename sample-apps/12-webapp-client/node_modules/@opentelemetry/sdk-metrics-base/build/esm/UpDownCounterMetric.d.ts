import * as api from '@opentelemetry/api-metrics';
import { Resource } from '@opentelemetry/resources';
import { InstrumentationLibrary } from '@opentelemetry/core';
import { BoundUpDownCounter } from './BoundInstrument';
import { Processor } from './export/Processor';
import { Metric } from './Metric';
/** This is a SDK implementation of UpDownCounter Metric. */
export declare class UpDownCounterMetric extends Metric<BoundUpDownCounter> implements api.UpDownCounter {
    private readonly _processor;
    constructor(name: string, options: api.MetricOptions, _processor: Processor, resource: Resource, instrumentationLibrary: InstrumentationLibrary);
    protected _makeInstrument(labels: api.Labels): BoundUpDownCounter;
    /**
     * Adds the given value to the current value. Values cannot be negative.
     * @param value the value to add.
     * @param [labels = {}] key-values pairs that are associated with a specific
     *     metric that you want to record.
     */
    add(value: number, labels?: api.Labels): void;
}
//# sourceMappingURL=UpDownCounterMetric.d.ts.map