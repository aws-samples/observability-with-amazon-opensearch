import * as api from '@opentelemetry/api-metrics';
import { InstrumentationLibrary } from '@opentelemetry/core';
import { Resource } from '@opentelemetry/resources';
import { BaseBoundInstrument } from './BoundInstrument';
import { MetricDescriptor, MetricKind, MetricRecord } from './export/types';
/** This is a SDK implementation of {@link Metric} interface. */
export declare abstract class Metric<T extends BaseBoundInstrument> implements api.UnboundMetric<T> {
    private readonly _name;
    private readonly _options;
    private readonly _kind;
    readonly resource: Resource;
    readonly instrumentationLibrary: InstrumentationLibrary;
    protected readonly _disabled: boolean;
    protected readonly _valueType: api.ValueType;
    protected readonly _descriptor: MetricDescriptor;
    protected readonly _boundaries: number[] | undefined;
    protected readonly _aggregationTemporality: api.AggregationTemporality;
    private readonly _instruments;
    constructor(_name: string, _options: api.MetricOptions, _kind: MetricKind, resource: Resource, instrumentationLibrary: InstrumentationLibrary);
    /**
     * Returns an Instrument associated with specified Labels.
     * It is recommended to keep a reference to the Instrument instead of always
     * calling this method for each operation.
     * @param labels key-values pairs that are associated with a specific metric
     *     that you want to record.
     */
    bind(labels: api.Labels): T;
    /**
     * Removes the Instrument from the metric, if it is present.
     * @param labels key-values pairs that are associated with a specific metric.
     */
    unbind(labels: api.Labels): void;
    /**
     * Clears all Instruments from the Metric.
     */
    clear(): void;
    /**
     * Returns kind of metric
     */
    getKind(): MetricKind;
    getAggregationTemporality(): api.AggregationTemporality;
    getMetricRecord(): Promise<MetricRecord[]>;
    private _getMetricDescriptor;
    protected abstract _makeInstrument(labels: api.Labels): T;
}
//# sourceMappingURL=Metric.d.ts.map