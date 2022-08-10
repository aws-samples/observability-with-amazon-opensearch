import { HrTime } from '@opentelemetry/api';
import { Labels, AggregationTemporality, ValueType } from '@opentelemetry/api-metrics';
import { ExportResult, InstrumentationLibrary } from '@opentelemetry/core';
import { Resource } from '@opentelemetry/resources';
/** The kind of metric. */
export declare enum MetricKind {
    COUNTER = 0,
    UP_DOWN_COUNTER = 1,
    VALUE_RECORDER = 2,
    SUM_OBSERVER = 3,
    UP_DOWN_SUM_OBSERVER = 4,
    VALUE_OBSERVER = 5,
    BATCH_OBSERVER = 6
}
export declare const MetricKindValues: (string | MetricKind)[];
/** The kind of aggregator. */
export declare enum AggregatorKind {
    SUM = 0,
    LAST_VALUE = 1,
    HISTOGRAM = 2
}
/** Sum returns an aggregated sum. */
export declare type Sum = number;
/** LastValue returns last value. */
export declare type LastValue = number;
export interface Histogram {
    /**
     * Buckets are implemented using two different arrays:
     *  - boundaries: contains every finite bucket boundary, which are inclusive lower bounds
     *  - counts: contains event counts for each bucket
     *
     * Note that we'll always have n+1 buckets, where n is the number of boundaries.
     * This is because we need to count events that are below the lowest boundary.
     *
     * Example: if we measure the values: [5, 30, 5, 40, 5, 15, 15, 15, 25]
     *  with the boundaries [ 10, 20, 30 ], we will have the following state:
     *
     * buckets: {
     *	boundaries: [10, 20, 30],
     *	counts: [3, 3, 1, 2],
     * }
     */
    buckets: {
        boundaries: number[];
        counts: number[];
    };
    sum: number;
    count: number;
}
export declare type PointValueType = Sum | LastValue | Histogram;
export interface MetricRecord {
    readonly descriptor: MetricDescriptor;
    readonly labels: Labels;
    readonly aggregator: Aggregator;
    readonly aggregationTemporality: AggregationTemporality;
    readonly resource: Resource;
    readonly instrumentationLibrary: InstrumentationLibrary;
}
export interface MetricDescriptor {
    readonly name: string;
    readonly description: string;
    readonly unit: string;
    readonly metricKind: MetricKind;
    readonly valueType: ValueType;
    readonly boundaries?: number[];
}
/**
 * Base interface that represents a metric exporter
 */
export interface MetricExporter {
    /** Exports the list of a given {@link MetricRecord} */
    export(metrics: MetricRecord[], resultCallback: (result: ExportResult) => void): void;
    /** Stops the exporter. */
    shutdown(): Promise<void>;
}
/**
 * Base interface for aggregators. Aggregators are responsible for holding
 * aggregated values and taking a snapshot of these values upon export.
 *
 * Use {@link Aggregator} instead of this BaseAggregator.
 */
interface BaseAggregator {
    /** The kind of the aggregator. */
    kind: AggregatorKind;
    /** Updates the current with the new value. */
    update(value: number): void;
}
/** SumAggregatorType aggregate values into a {@link Sum} point type. */
export interface SumAggregatorType extends BaseAggregator {
    kind: AggregatorKind.SUM;
    /** Returns snapshot of the current point (value with timestamp). */
    toPoint(): Point<Sum>;
}
/**
 * LastValueAggregatorType aggregate values into a {@link LastValue} point
 * type.
 */
export interface LastValueAggregatorType extends BaseAggregator {
    kind: AggregatorKind.LAST_VALUE;
    /** Returns snapshot of the current point (value with timestamp). */
    toPoint(): Point<LastValue>;
}
/**
 * HistogramAggregatorType aggregate values into a {@link Histogram} point
 * type.
 */
export interface HistogramAggregatorType extends BaseAggregator {
    kind: AggregatorKind.HISTOGRAM;
    /** Returns snapshot of the current point (value with timestamp). */
    toPoint(): Point<Histogram>;
}
export declare type Aggregator = SumAggregatorType | LastValueAggregatorType | HistogramAggregatorType;
/**
 * Point represents a snapshot of aggregated values of aggregators.
 */
export interface Point<T extends PointValueType> {
    value: T;
    timestamp: HrTime;
}
export {};
//# sourceMappingURL=types.d.ts.map