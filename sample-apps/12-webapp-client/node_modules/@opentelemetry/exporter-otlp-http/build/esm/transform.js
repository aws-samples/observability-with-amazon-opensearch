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
import * as core from '@opentelemetry/core';
import { OTLP_SPAN_KIND_MAPPING, opentelemetryProto, } from './types';
var MAX_INTEGER_VALUE = 2147483647;
var MIN_INTEGER_VALUE = -2147483648;
/**
 * Converts attributes to KeyValue array
 * @param attributes
 */
export function toCollectorAttributes(attributes) {
    return Object.keys(attributes).map(function (key) {
        return toCollectorAttributeKeyValue(key, attributes[key]);
    });
}
/**
 * Converts array of unknown value to ArrayValue
 * @param values
 */
export function toCollectorArrayValue(values) {
    return {
        values: values.map(function (value) { return toCollectorAnyValue(value); }),
    };
}
/**
 * Converts attributes to KeyValueList
 * @param attributes
 */
export function toCollectorKeyValueList(attributes) {
    return {
        values: toCollectorAttributes(attributes),
    };
}
/**
 * Converts key and unknown value to KeyValue
 * @param value event value
 */
export function toCollectorAttributeKeyValue(key, value) {
    var anyValue = toCollectorAnyValue(value);
    return {
        key: key,
        value: anyValue,
    };
}
/**
 * Converts unknown value to AnyValue
 * @param value
 */
export function toCollectorAnyValue(value) {
    var anyValue = {};
    if (typeof value === 'string') {
        anyValue.stringValue = value;
    }
    else if (typeof value === 'boolean') {
        anyValue.boolValue = value;
    }
    else if (typeof value === 'number' &&
        value <= MAX_INTEGER_VALUE &&
        value >= MIN_INTEGER_VALUE &&
        Number.isInteger(value)) {
        anyValue.intValue = value;
    }
    else if (typeof value === 'number') {
        anyValue.doubleValue = value;
    }
    else if (Array.isArray(value)) {
        anyValue.arrayValue = toCollectorArrayValue(value);
    }
    else if (value) {
        anyValue.kvlistValue = toCollectorKeyValueList(value);
    }
    return anyValue;
}
/**
 *
 * Converts events
 * @param events array of events
 */
export function toCollectorEvents(timedEvents) {
    return timedEvents.map(function (timedEvent) {
        var timeUnixNano = core.hrTimeToNanoseconds(timedEvent.time);
        var name = timedEvent.name;
        var attributes = toCollectorAttributes(timedEvent.attributes || {});
        var droppedAttributesCount = 0;
        var protoEvent = {
            timeUnixNano: timeUnixNano,
            name: name,
            attributes: attributes,
            droppedAttributesCount: droppedAttributesCount,
        };
        return protoEvent;
    });
}
/**
 * Converts links
 * @param span
 * @param useHex - if ids should be kept as hex without converting to base64
 */
function toCollectorLinks(span, useHex) {
    return span.links.map(function (link) {
        var protoLink = {
            traceId: useHex
                ? link.context.traceId
                : core.hexToBase64(link.context.traceId),
            spanId: useHex
                ? link.context.spanId
                : core.hexToBase64(link.context.spanId),
            attributes: toCollectorAttributes(link.attributes || {}),
            droppedAttributesCount: 0,
        };
        return protoLink;
    });
}
/**
 * Converts span
 * @param span
 * @param useHex - if ids should be kept as hex without converting to base64
 */
export function toCollectorSpan(span, useHex) {
    return {
        traceId: useHex
            ? span.spanContext().traceId
            : core.hexToBase64(span.spanContext().traceId),
        spanId: useHex
            ? span.spanContext().spanId
            : core.hexToBase64(span.spanContext().spanId),
        parentSpanId: span.parentSpanId
            ? useHex
                ? span.parentSpanId
                : core.hexToBase64(span.parentSpanId)
            : undefined,
        traceState: toCollectorTraceState(span.spanContext().traceState),
        name: span.name,
        kind: toCollectorKind(span.kind),
        startTimeUnixNano: core.hrTimeToNanoseconds(span.startTime),
        endTimeUnixNano: core.hrTimeToNanoseconds(span.endTime),
        attributes: toCollectorAttributes(span.attributes),
        droppedAttributesCount: 0,
        events: toCollectorEvents(span.events),
        droppedEventsCount: 0,
        status: toCollectorStatus(span.status),
        links: toCollectorLinks(span, useHex),
        droppedLinksCount: 0,
    };
}
/**
 * Converts status
 * @param status
 */
export function toCollectorStatus(status) {
    var spanStatus = {
        code: status.code,
    };
    if (typeof status.message !== 'undefined') {
        spanStatus.message = status.message;
    }
    return spanStatus;
}
/**
 * Converts resource
 * @param resource
 * @param additionalAttributes
 */
export function toCollectorResource(resource, additionalAttributes) {
    if (additionalAttributes === void 0) { additionalAttributes = {}; }
    var attr = Object.assign({}, additionalAttributes, resource ? resource.attributes : {});
    var resourceProto = {
        attributes: toCollectorAttributes(attr),
        droppedAttributesCount: 0,
    };
    return resourceProto;
}
/**
 * Converts span kind
 * @param kind
 */
export function toCollectorKind(kind) {
    var collectorKind = OTLP_SPAN_KIND_MAPPING[kind];
    return typeof collectorKind === 'number'
        ? collectorKind
        : opentelemetryProto.trace.v1.Span.SpanKind.SPAN_KIND_UNSPECIFIED;
}
/**
 * Converts traceState
 * @param traceState
 */
export function toCollectorTraceState(traceState) {
    if (!traceState)
        return undefined;
    return traceState.serialize();
}
/**
 * Prepares trace service request to be sent to collector
 * @param spans spans
 * @param collectorExporterBase
 * @param useHex - if ids should be kept as hex without converting to base64
 */
export function toOTLPExportTraceServiceRequest(spans, collectorTraceExporterBase, useHex) {
    var groupedSpans = groupSpansByResourceAndLibrary(spans);
    var additionalAttributes = Object.assign({}, collectorTraceExporterBase.attributes);
    return {
        resourceSpans: toCollectorResourceSpans(groupedSpans, additionalAttributes, useHex),
    };
}
/**
 * Takes an array of spans and groups them by resource and instrumentation
 * library
 * @param spans spans
 */
export function groupSpansByResourceAndLibrary(spans) {
    return spans.reduce(function (spanMap, span) {
        //group by resource
        var resourceSpans = spanMap.get(span.resource);
        if (!resourceSpans) {
            resourceSpans = new Map();
            spanMap.set(span.resource, resourceSpans);
        }
        //group by instrumentation library
        var libSpans = resourceSpans.get(span.instrumentationLibrary);
        if (!libSpans) {
            libSpans = new Array();
            resourceSpans.set(span.instrumentationLibrary, libSpans);
        }
        libSpans.push(span);
        return spanMap;
    }, new Map());
}
/**
 * Convert to InstrumentationLibrarySpans
 * @param instrumentationLibrary
 * @param spans
 * @param useHex - if ids should be kept as hex without converting to base64
 */
function toCollectorInstrumentationLibrarySpans(instrumentationLibrary, spans, useHex) {
    return {
        spans: spans.map(function (span) { return toCollectorSpan(span, useHex); }),
        instrumentationLibrary: instrumentationLibrary,
    };
}
/**
 * Returns a list of resource spans which will be exported to the collector
 * @param groupedSpans
 * @param baseAttributes
 * @param useHex - if ids should be kept as hex without converting to base64
 */
function toCollectorResourceSpans(groupedSpans, baseAttributes, useHex) {
    return Array.from(groupedSpans, function (_a) {
        var resource = _a[0], libSpans = _a[1];
        return {
            resource: toCollectorResource(resource, baseAttributes),
            instrumentationLibrarySpans: Array.from(libSpans, function (_a) {
                var instrumentationLibrary = _a[0], spans = _a[1];
                return toCollectorInstrumentationLibrarySpans(instrumentationLibrary, spans, useHex);
            }),
        };
    });
}
//# sourceMappingURL=transform.js.map