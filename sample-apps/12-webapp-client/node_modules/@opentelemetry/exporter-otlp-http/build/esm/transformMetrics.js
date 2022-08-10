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
import { ValueType } from '@opentelemetry/api-metrics';
import * as core from '@opentelemetry/core';
import { AggregatorKind, MetricKind, } from '@opentelemetry/sdk-metrics-base';
import { toCollectorResource } from './transform';
import { opentelemetryProto } from './types';
/**
 * Converts labels
 * @param labels
 */
export function toCollectorLabels(labels) {
    return Object.entries(labels).map(function (_a) {
        var key = _a[0], value = _a[1];
        return { key: key, value: String(value) };
    });
}
/**
 * Given a MetricDescriptor, return its temporality in a compatible format with the collector
 * @param descriptor
 */
export function toAggregationTemporality(metric) {
    if (metric.descriptor.metricKind === MetricKind.VALUE_OBSERVER) {
        return opentelemetryProto.metrics.v1.AggregationTemporality
            .AGGREGATION_TEMPORALITY_UNSPECIFIED;
    }
    return metric.aggregationTemporality;
}
/**
 * Returns an DataPoint which can have integers or doublle values
 * @param metric
 * @param startTime
 */
export function toDataPoint(metric, startTime) {
    return {
        labels: toCollectorLabels(metric.labels),
        value: metric.aggregator.toPoint().value,
        startTimeUnixNano: startTime,
        timeUnixNano: core.hrTimeToNanoseconds(metric.aggregator.toPoint().timestamp),
    };
}
/**
 * Returns a HistogramPoint to the collector
 * @param metric
 * @param startTime
 */
export function toHistogramPoint(metric, startTime) {
    var _a = metric.aggregator.toPoint(), value = _a.value, timestamp = _a.timestamp;
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
/**
 * Converts a metric to be compatible with the collector
 * @param metric
 * @param startTime start time in nanoseconds
 */
export function toCollectorMetric(metric, startTime) {
    var metricCollector = {
        name: metric.descriptor.name,
        description: metric.descriptor.description,
        unit: metric.descriptor.unit,
    };
    if (metric.aggregator.kind === AggregatorKind.SUM ||
        metric.descriptor.metricKind === MetricKind.SUM_OBSERVER ||
        metric.descriptor.metricKind === MetricKind.UP_DOWN_SUM_OBSERVER) {
        var result = {
            dataPoints: [toDataPoint(metric, startTime)],
            isMonotonic: metric.descriptor.metricKind === MetricKind.COUNTER ||
                metric.descriptor.metricKind === MetricKind.SUM_OBSERVER,
            aggregationTemporality: toAggregationTemporality(metric),
        };
        if (metric.descriptor.valueType === ValueType.INT) {
            metricCollector.intSum = result;
        }
        else {
            metricCollector.doubleSum = result;
        }
    }
    else if (metric.aggregator.kind === AggregatorKind.LAST_VALUE) {
        var result = {
            dataPoints: [toDataPoint(metric, startTime)],
        };
        if (metric.descriptor.valueType === ValueType.INT) {
            metricCollector.intGauge = result;
        }
        else {
            metricCollector.doubleGauge = result;
        }
    }
    else if (metric.aggregator.kind === AggregatorKind.HISTOGRAM) {
        var result = {
            dataPoints: [toHistogramPoint(metric, startTime)],
            aggregationTemporality: toAggregationTemporality(metric),
        };
        if (metric.descriptor.valueType === ValueType.INT) {
            metricCollector.intHistogram = result;
        }
        else {
            metricCollector.doubleHistogram = result;
        }
    }
    return metricCollector;
}
/**
 * Prepares metric service request to be sent to collector
 * @param metrics metrics
 * @param startTime start time of the metric in nanoseconds
 * @param collectorMetricExporterBase
 */
export function toOTLPExportMetricServiceRequest(metrics, startTime, collectorExporterBase) {
    var groupedMetrics = groupMetricsByResourceAndLibrary(metrics);
    var additionalAttributes = Object.assign({}, collectorExporterBase.attributes);
    return {
        resourceMetrics: toCollectorResourceMetrics(groupedMetrics, additionalAttributes, startTime),
    };
}
/**
 * Takes an array of metrics and groups them by resource and instrumentation
 * library
 * @param metrics metrics
 */
export function groupMetricsByResourceAndLibrary(metrics) {
    return metrics.reduce(function (metricMap, metric) {
        //group by resource
        var resourceMetrics = metricMap.get(metric.resource);
        if (!resourceMetrics) {
            resourceMetrics = new Map();
            metricMap.set(metric.resource, resourceMetrics);
        }
        //group by instrumentation library
        var libMetrics = resourceMetrics.get(metric.instrumentationLibrary);
        if (!libMetrics) {
            libMetrics = new Array();
            resourceMetrics.set(metric.instrumentationLibrary, libMetrics);
        }
        libMetrics.push(metric);
        return metricMap;
    }, new Map());
}
/**
 * Convert to InstrumentationLibraryMetrics
 * @param instrumentationLibrary
 * @param metrics
 * @param startTime
 */
function toCollectorInstrumentationLibraryMetrics(instrumentationLibrary, metrics, startTime) {
    return {
        metrics: metrics.map(function (metric) { return toCollectorMetric(metric, startTime); }),
        instrumentationLibrary: instrumentationLibrary,
    };
}
/**
 * Returns a list of resource metrics which will be exported to the collector
 * @param groupedSpans
 * @param baseAttributes
 */
function toCollectorResourceMetrics(groupedMetrics, baseAttributes, startTime) {
    return Array.from(groupedMetrics, function (_a) {
        var resource = _a[0], libMetrics = _a[1];
        return {
            resource: toCollectorResource(resource, baseAttributes),
            instrumentationLibraryMetrics: Array.from(libMetrics, function (_a) {
                var instrumentationLibrary = _a[0], metrics = _a[1];
                return toCollectorInstrumentationLibraryMetrics(instrumentationLibrary, metrics, startTime);
            }),
        };
    });
}
//# sourceMappingURL=transformMetrics.js.map