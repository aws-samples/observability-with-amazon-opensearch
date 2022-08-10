"use strict";
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupMetricsByResourceAndLibrary = exports.toOTLPExportMetricServiceRequest = exports.toCollectorMetric = exports.toHistogramPoint = exports.toDataPoint = exports.toAggregationTemporality = exports.toCollectorLabels = void 0;
const api_metrics_1 = require("@opentelemetry/api-metrics");
const core = require("@opentelemetry/core");
const sdk_metrics_base_1 = require("@opentelemetry/sdk-metrics-base");
const transform_1 = require("./transform");
const types_1 = require("./types");
/**
 * Converts labels
 * @param labels
 */
function toCollectorLabels(labels) {
    return Object.entries(labels).map(([key, value]) => {
        return { key, value: String(value) };
    });
}
exports.toCollectorLabels = toCollectorLabels;
/**
 * Given a MetricDescriptor, return its temporality in a compatible format with the collector
 * @param descriptor
 */
function toAggregationTemporality(metric) {
    if (metric.descriptor.metricKind === sdk_metrics_base_1.MetricKind.VALUE_OBSERVER) {
        return types_1.opentelemetryProto.metrics.v1.AggregationTemporality
            .AGGREGATION_TEMPORALITY_UNSPECIFIED;
    }
    return metric.aggregationTemporality;
}
exports.toAggregationTemporality = toAggregationTemporality;
/**
 * Returns an DataPoint which can have integers or doublle values
 * @param metric
 * @param startTime
 */
function toDataPoint(metric, startTime) {
    return {
        labels: toCollectorLabels(metric.labels),
        value: metric.aggregator.toPoint().value,
        startTimeUnixNano: startTime,
        timeUnixNano: core.hrTimeToNanoseconds(metric.aggregator.toPoint().timestamp),
    };
}
exports.toDataPoint = toDataPoint;
/**
 * Returns a HistogramPoint to the collector
 * @param metric
 * @param startTime
 */
function toHistogramPoint(metric, startTime) {
    const { value, timestamp } = metric.aggregator.toPoint();
    return {
        labels: toCollectorLabels(metric.labels),
        sum: value.sum,
        count: value.count,
        startTimeUnixNano: startTime,
        timeUnixNano: core.hrTimeToNanoseconds(timestamp),
        bucketCounts: value.buckets.counts,
        explicitBounds: value.buckets.boundaries,
    };
}
exports.toHistogramPoint = toHistogramPoint;
/**
 * Converts a metric to be compatible with the collector
 * @param metric
 * @param startTime start time in nanoseconds
 */
function toCollectorMetric(metric, startTime) {
    const metricCollector = {
        name: metric.descriptor.name,
        description: metric.descriptor.description,
        unit: metric.descriptor.unit,
    };
    if (metric.aggregator.kind === sdk_metrics_base_1.AggregatorKind.SUM ||
        metric.descriptor.metricKind === sdk_metrics_base_1.MetricKind.SUM_OBSERVER ||
        metric.descriptor.metricKind === sdk_metrics_base_1.MetricKind.UP_DOWN_SUM_OBSERVER) {
        const result = {
            dataPoints: [toDataPoint(metric, startTime)],
            isMonotonic: metric.descriptor.metricKind === sdk_metrics_base_1.MetricKind.COUNTER ||
                metric.descriptor.metricKind === sdk_metrics_base_1.MetricKind.SUM_OBSERVER,
            aggregationTemporality: toAggregationTemporality(metric),
        };
        if (metric.descriptor.valueType === api_metrics_1.ValueType.INT) {
            metricCollector.intSum = result;
        }
        else {
            metricCollector.doubleSum = result;
        }
    }
    else if (metric.aggregator.kind === sdk_metrics_base_1.AggregatorKind.LAST_VALUE) {
        const result = {
            dataPoints: [toDataPoint(metric, startTime)],
        };
        if (metric.descriptor.valueType === api_metrics_1.ValueType.INT) {
            metricCollector.intGauge = result;
        }
        else {
            metricCollector.doubleGauge = result;
        }
    }
    else if (metric.aggregator.kind === sdk_metrics_base_1.AggregatorKind.HISTOGRAM) {
        const result = {
            dataPoints: [toHistogramPoint(metric, startTime)],
            aggregationTemporality: toAggregationTemporality(metric),
        };
        if (metric.descriptor.valueType === api_metrics_1.ValueType.INT) {
            metricCollector.intHistogram = result;
        }
        else {
            metricCollector.doubleHistogram = result;
        }
    }
    return metricCollector;
}
exports.toCollectorMetric = toCollectorMetric;
/**
 * Prepares metric service request to be sent to collector
 * @param metrics metrics
 * @param startTime start time of the metric in nanoseconds
 * @param collectorMetricExporterBase
 */
function toOTLPExportMetricServiceRequest(metrics, startTime, collectorExporterBase) {
    const groupedMetrics = groupMetricsByResourceAndLibrary(metrics);
    const additionalAttributes = Object.assign({}, collectorExporterBase.attributes);
    return {
        resourceMetrics: toCollectorResourceMetrics(groupedMetrics, additionalAttributes, startTime),
    };
}
exports.toOTLPExportMetricServiceRequest = toOTLPExportMetricServiceRequest;
/**
 * Takes an array of metrics and groups them by resource and instrumentation
 * library
 * @param metrics metrics
 */
function groupMetricsByResourceAndLibrary(metrics) {
    return metrics.reduce((metricMap, metric) => {
        //group by resource
        let resourceMetrics = metricMap.get(metric.resource);
        if (!resourceMetrics) {
            resourceMetrics = new Map();
            metricMap.set(metric.resource, resourceMetrics);
        }
        //group by instrumentation library
        let libMetrics = resourceMetrics.get(metric.instrumentationLibrary);
        if (!libMetrics) {
            libMetrics = new Array();
            resourceMetrics.set(metric.instrumentationLibrary, libMetrics);
        }
        libMetrics.push(metric);
        return metricMap;
    }, new Map());
}
exports.groupMetricsByResourceAndLibrary = groupMetricsByResourceAndLibrary;
/**
 * Convert to InstrumentationLibraryMetrics
 * @param instrumentationLibrary
 * @param metrics
 * @param startTime
 */
function toCollectorInstrumentationLibraryMetrics(instrumentationLibrary, metrics, startTime) {
    return {
        metrics: metrics.map(metric => toCollectorMetric(metric, startTime)),
        instrumentationLibrary,
    };
}
/**
 * Returns a list of resource metrics which will be exported to the collector
 * @param groupedSpans
 * @param baseAttributes
 */
function toCollectorResourceMetrics(groupedMetrics, baseAttributes, startTime) {
    return Array.from(groupedMetrics, ([resource, libMetrics]) => {
        return {
            resource: transform_1.toCollectorResource(resource, baseAttributes),
            instrumentationLibraryMetrics: Array.from(libMetrics, ([instrumentationLibrary, metrics]) => toCollectorInstrumentationLibraryMetrics(instrumentationLibrary, metrics, startTime)),
        };
    });
}
//# sourceMappingURL=transformMetrics.js.map