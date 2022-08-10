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
exports.groupSpansByResourceAndLibrary = exports.toOTLPExportTraceServiceRequest = exports.toCollectorTraceState = exports.toCollectorKind = exports.toCollectorResource = exports.toCollectorStatus = exports.toCollectorSpan = exports.toCollectorEvents = exports.toCollectorAnyValue = exports.toCollectorAttributeKeyValue = exports.toCollectorKeyValueList = exports.toCollectorArrayValue = exports.toCollectorAttributes = void 0;
const core = require("@opentelemetry/core");
const types_1 = require("./types");
const MAX_INTEGER_VALUE = 2147483647;
const MIN_INTEGER_VALUE = -2147483648;
/**
 * Converts attributes to KeyValue array
 * @param attributes
 */
function toCollectorAttributes(attributes) {
    return Object.keys(attributes).map(key => {
        return toCollectorAttributeKeyValue(key, attributes[key]);
    });
}
exports.toCollectorAttributes = toCollectorAttributes;
/**
 * Converts array of unknown value to ArrayValue
 * @param values
 */
function toCollectorArrayValue(values) {
    return {
        values: values.map(value => toCollectorAnyValue(value)),
    };
}
exports.toCollectorArrayValue = toCollectorArrayValue;
/**
 * Converts attributes to KeyValueList
 * @param attributes
 */
function toCollectorKeyValueList(attributes) {
    return {
        values: toCollectorAttributes(attributes),
    };
}
exports.toCollectorKeyValueList = toCollectorKeyValueList;
/**
 * Converts key and unknown value to KeyValue
 * @param value event value
 */
function toCollectorAttributeKeyValue(key, value) {
    const anyValue = toCollectorAnyValue(value);
    return {
        key,
        value: anyValue,
    };
}
exports.toCollectorAttributeKeyValue = toCollectorAttributeKeyValue;
/**
 * Converts unknown value to AnyValue
 * @param value
 */
function toCollectorAnyValue(value) {
    const anyValue = {};
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
exports.toCollectorAnyValue = toCollectorAnyValue;
/**
 *
 * Converts events
 * @param events array of events
 */
function toCollectorEvents(timedEvents) {
    return timedEvents.map(timedEvent => {
        const timeUnixNano = core.hrTimeToNanoseconds(timedEvent.time);
        const name = timedEvent.name;
        const attributes = toCollectorAttributes(timedEvent.attributes || {});
        const droppedAttributesCount = 0;
        const protoEvent = {
            timeUnixNano,
            name,
            attributes,
            droppedAttributesCount,
        };
        return protoEvent;
    });
}
exports.toCollectorEvents = toCollectorEvents;
/**
 * Converts links
 * @param span
 * @param useHex - if ids should be kept as hex without converting to base64
 */
function toCollectorLinks(span, useHex) {
    return span.links.map((link) => {
        const protoLink = {
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
function toCollectorSpan(span, useHex) {
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
exports.toCollectorSpan = toCollectorSpan;
/**
 * Converts status
 * @param status
 */
function toCollectorStatus(status) {
    const spanStatus = {
        code: status.code,
    };
    if (typeof status.message !== 'undefined') {
        spanStatus.message = status.message;
    }
    return spanStatus;
}
exports.toCollectorStatus = toCollectorStatus;
/**
 * Converts resource
 * @param resource
 * @param additionalAttributes
 */
function toCollectorResource(resource, additionalAttributes = {}) {
    const attr = Object.assign({}, additionalAttributes, resource ? resource.attributes : {});
    const resourceProto = {
        attributes: toCollectorAttributes(attr),
        droppedAttributesCount: 0,
    };
    return resourceProto;
}
exports.toCollectorResource = toCollectorResource;
/**
 * Converts span kind
 * @param kind
 */
function toCollectorKind(kind) {
    const collectorKind = types_1.OTLP_SPAN_KIND_MAPPING[kind];
    return typeof collectorKind === 'number'
        ? collectorKind
        : types_1.opentelemetryProto.trace.v1.Span.SpanKind.SPAN_KIND_UNSPECIFIED;
}
exports.toCollectorKind = toCollectorKind;
/**
 * Converts traceState
 * @param traceState
 */
function toCollectorTraceState(traceState) {
    if (!traceState)
        return undefined;
    return traceState.serialize();
}
exports.toCollectorTraceState = toCollectorTraceState;
/**
 * Prepares trace service request to be sent to collector
 * @param spans spans
 * @param collectorExporterBase
 * @param useHex - if ids should be kept as hex without converting to base64
 */
function toOTLPExportTraceServiceRequest(spans, collectorTraceExporterBase, useHex) {
    const groupedSpans = groupSpansByResourceAndLibrary(spans);
    const additionalAttributes = Object.assign({}, collectorTraceExporterBase.attributes);
    return {
        resourceSpans: toCollectorResourceSpans(groupedSpans, additionalAttributes, useHex),
    };
}
exports.toOTLPExportTraceServiceRequest = toOTLPExportTraceServiceRequest;
/**
 * Takes an array of spans and groups them by resource and instrumentation
 * library
 * @param spans spans
 */
function groupSpansByResourceAndLibrary(spans) {
    return spans.reduce((spanMap, span) => {
        //group by resource
        let resourceSpans = spanMap.get(span.resource);
        if (!resourceSpans) {
            resourceSpans = new Map();
            spanMap.set(span.resource, resourceSpans);
        }
        //group by instrumentation library
        let libSpans = resourceSpans.get(span.instrumentationLibrary);
        if (!libSpans) {
            libSpans = new Array();
            resourceSpans.set(span.instrumentationLibrary, libSpans);
        }
        libSpans.push(span);
        return spanMap;
    }, new Map());
}
exports.groupSpansByResourceAndLibrary = groupSpansByResourceAndLibrary;
/**
 * Convert to InstrumentationLibrarySpans
 * @param instrumentationLibrary
 * @param spans
 * @param useHex - if ids should be kept as hex without converting to base64
 */
function toCollectorInstrumentationLibrarySpans(instrumentationLibrary, spans, useHex) {
    return {
        spans: spans.map(span => toCollectorSpan(span, useHex)),
        instrumentationLibrary,
    };
}
/**
 * Returns a list of resource spans which will be exported to the collector
 * @param groupedSpans
 * @param baseAttributes
 * @param useHex - if ids should be kept as hex without converting to base64
 */
function toCollectorResourceSpans(groupedSpans, baseAttributes, useHex) {
    return Array.from(groupedSpans, ([resource, libSpans]) => {
        return {
            resource: toCollectorResource(resource, baseAttributes),
            instrumentationLibrarySpans: Array.from(libSpans, ([instrumentationLibrary, spans]) => toCollectorInstrumentationLibrarySpans(instrumentationLibrary, spans, useHex)),
        };
    });
}
//# sourceMappingURL=transform.js.map