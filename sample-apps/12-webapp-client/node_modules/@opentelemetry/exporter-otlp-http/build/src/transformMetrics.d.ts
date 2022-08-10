import { Labels } from '@opentelemetry/api-metrics';
import * as core from '@opentelemetry/core';
import { MetricRecord } from '@opentelemetry/sdk-metrics-base';
import { Resource } from '@opentelemetry/resources';
import { OTLPExporterBase } from './OTLPExporterBase';
import { OTLPExporterConfigBase, opentelemetryProto } from './types';
/**
 * Converts labels
 * @param labels
 */
export declare function toCollectorLabels(labels: Labels): opentelemetryProto.common.v1.StringKeyValue[];
/**
 * Given a MetricDescriptor, return its temporality in a compatible format with the collector
 * @param descriptor
 */
export declare function toAggregationTemporality(metric: MetricRecord): opentelemetryProto.metrics.v1.AggregationTemporality;
/**
 * Returns an DataPoint which can have integers or doublle values
 * @param metric
 * @param startTime
 */
export declare function toDataPoint(metric: MetricRecord, startTime: number): opentelemetryProto.metrics.v1.DataPoint;
/**
 * Returns a HistogramPoint to the collector
 * @param metric
 * @param startTime
 */
export declare function toHistogramPoint(metric: MetricRecord, startTime: number): opentelemetryProto.metrics.v1.HistogramDataPoint;
/**
 * Converts a metric to be compatible with the collector
 * @param metric
 * @param startTime start time in nanoseconds
 */
export declare function toCollectorMetric(metric: MetricRecord, startTime: number): opentelemetryProto.metrics.v1.Metric;
/**
 * Prepares metric service request to be sent to collector
 * @param metrics metrics
 * @param startTime start time of the metric in nanoseconds
 * @param collectorMetricExporterBase
 */
export declare function toOTLPExportMetricServiceRequest<T extends OTLPExporterConfigBase>(metrics: MetricRecord[], startTime: number, collectorExporterBase: OTLPExporterBase<T, MetricRecord, opentelemetryProto.collector.metrics.v1.ExportMetricsServiceRequest>): opentelemetryProto.collector.metrics.v1.ExportMetricsServiceRequest;
/**
 * Takes an array of metrics and groups them by resource and instrumentation
 * library
 * @param metrics metrics
 */
export declare function groupMetricsByResourceAndLibrary(metrics: MetricRecord[]): Map<Resource, Map<core.InstrumentationLibrary, MetricRecord[]>>;
//# sourceMappingURL=transformMetrics.d.ts.map