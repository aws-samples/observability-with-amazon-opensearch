import * as api from '@opentelemetry/api-metrics';
import { InstrumentationLibrary } from '@opentelemetry/core';
import { BatchObserver } from './BatchObserver';
import { Processor } from './export/Processor';
import { MeterConfig } from './types';
/**
 * Meter is an implementation of the {@link Meter} interface.
 */
export declare class Meter implements api.Meter {
    private readonly _batchObservers;
    private readonly _metrics;
    private readonly _processor;
    private readonly _resource;
    private readonly _instrumentationLibrary;
    private readonly _controller;
    private _isShutdown;
    private _shuttingDownPromise;
    /**
     * Constructs a new Meter instance.
     */
    constructor(instrumentationLibrary: InstrumentationLibrary, config?: MeterConfig);
    /**
     * Creates and returns a new {@link ValueRecorder}.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    createValueRecorder(name: string, options?: api.MetricOptions): api.ValueRecorder;
    /**
     * Creates a new counter metric. Generally, this kind of metric when the
     * value is a quantity, the sum is of primary interest, and the event count
     * and value distribution are not of primary interest.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    createCounter(name: string, options?: api.MetricOptions): api.Counter;
    /**
     * Creates a new `UpDownCounter` metric. UpDownCounter is a synchronous
     * instrument and very similar to Counter except that Add(increment)
     * supports negative increments. It is generally useful for capturing changes
     * in an amount of resources used, or any quantity that rises and falls
     * during a request.
     *
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    createUpDownCounter(name: string, options?: api.MetricOptions): api.UpDownCounter;
    /**
     * Creates a new `ValueObserver` metric.
     * @param name the name of the metric.
     * @param [options] the metric options.
     * @param [callback] the value observer callback
     */
    createValueObserver(name: string, options?: api.MetricOptions, callback?: (observerResult: api.ObserverResult) => unknown): api.ValueObserver;
    createSumObserver(name: string, options?: api.MetricOptions, callback?: (observerResult: api.ObserverResult) => unknown): api.SumObserver;
    /**
     * Creates a new `UpDownSumObserver` metric.
     * @param name the name of the metric.
     * @param [options] the metric options.
     * @param [callback] the value observer callback
     */
    createUpDownSumObserver(name: string, options?: api.MetricOptions, callback?: (observerResult: api.ObserverResult) => unknown): api.UpDownSumObserver;
    /**
     * Creates a new batch observer.
     * @param callback the batch observer callback
     * @param [options] the batch options.
     */
    createBatchObserver(callback: (observerResult: api.BatchObserverResult) => void, options?: api.BatchObserverOptions): BatchObserver;
    /**
     * Collects all the metrics created with this `Meter` for export.
     *
     * Utilizes the processor to create checkpoints of the current values in
     * each aggregator belonging to the metrics that were created with this
     * meter instance.
     */
    collect(): Promise<void>;
    getProcessor(): Processor;
    shutdown(): Promise<void>;
    /**
     * Registers metric to register.
     * @param name The name of the metric.
     * @param metric The metric to register.
     */
    private _registerMetric;
    /**
     * Ensure a metric name conforms to the following rules:
     *
     * 1. They are non-empty strings
     *
     * 2. The first character must be non-numeric, non-space, non-punctuation
     *
     * 3. Subsequent characters must be belong to the alphanumeric characters,
     *    '_', '.', and '-'.
     *
     * Names are case insensitive
     *
     * @param name Name of metric to be created
     */
    private _isValidName;
}
//# sourceMappingURL=Meter.d.ts.map