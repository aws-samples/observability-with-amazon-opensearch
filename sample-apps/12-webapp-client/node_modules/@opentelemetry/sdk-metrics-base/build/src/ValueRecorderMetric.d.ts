import * as api from '@opentelemetry/api-metrics';
import { InstrumentationLibrary } from '@opentelemetry/core';
import { Resource } from '@opentelemetry/resources';
import { BoundValueRecorder } from './BoundInstrument';
import { Processor } from './export/Processor';
import { Metric } from './Metric';
/** This is a SDK implementation of Value Recorder Metric. */
export declare class ValueRecorderMetric extends Metric<BoundValueRecorder> implements api.ValueRecorder {
    private readonly _processor;
    constructor(name: string, options: api.MetricOptions, _processor: Processor, resource: Resource, instrumentationLibrary: InstrumentationLibrary);
    protected _makeInstrument(labels: api.Labels): BoundValueRecorder;
    record(value: number, labels?: api.Labels): void;
}
//# sourceMappingURL=ValueRecorderMetric.d.ts.map