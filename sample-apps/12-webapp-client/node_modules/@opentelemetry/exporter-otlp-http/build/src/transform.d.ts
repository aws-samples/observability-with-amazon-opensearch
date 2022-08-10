import { SpanAttributes, SpanKind, SpanStatus, TraceState } from '@opentelemetry/api';
import * as core from '@opentelemetry/core';
import { Resource } from '@opentelemetry/resources';
import { ReadableSpan, TimedEvent } from '@opentelemetry/sdk-trace-base';
import { OTLPExporterBase } from './OTLPExporterBase';
import { opentelemetryProto, OTLPExporterConfigBase } from './types';
/**
 * Converts attributes to KeyValue array
 * @param attributes
 */
export declare function toCollectorAttributes(attributes: SpanAttributes): opentelemetryProto.common.v1.KeyValue[];
/**
 * Converts array of unknown value to ArrayValue
 * @param values
 */
export declare function toCollectorArrayValue(values: unknown[]): opentelemetryProto.common.v1.ArrayValue;
/**
 * Converts attributes to KeyValueList
 * @param attributes
 */
export declare function toCollectorKeyValueList(attributes: SpanAttributes): opentelemetryProto.common.v1.KeyValueList;
/**
 * Converts key and unknown value to KeyValue
 * @param value event value
 */
export declare function toCollectorAttributeKeyValue(key: string, value: unknown): opentelemetryProto.common.v1.KeyValue;
/**
 * Converts unknown value to AnyValue
 * @param value
 */
export declare function toCollectorAnyValue(value: unknown): opentelemetryProto.common.v1.AnyValue;
/**
 *
 * Converts events
 * @param events array of events
 */
export declare function toCollectorEvents(timedEvents: TimedEvent[]): opentelemetryProto.trace.v1.Span.Event[];
/**
 * Converts span
 * @param span
 * @param useHex - if ids should be kept as hex without converting to base64
 */
export declare function toCollectorSpan(span: ReadableSpan, useHex?: boolean): opentelemetryProto.trace.v1.Span;
/**
 * Converts status
 * @param status
 */
export declare function toCollectorStatus(status: SpanStatus): opentelemetryProto.trace.v1.SpanStatus;
/**
 * Converts resource
 * @param resource
 * @param additionalAttributes
 */
export declare function toCollectorResource(resource?: Resource, additionalAttributes?: {
    [key: string]: unknown;
}): opentelemetryProto.resource.v1.Resource;
/**
 * Converts span kind
 * @param kind
 */
export declare function toCollectorKind(kind: SpanKind): opentelemetryProto.trace.v1.Span.SpanKind;
/**
 * Converts traceState
 * @param traceState
 */
export declare function toCollectorTraceState(traceState?: TraceState): opentelemetryProto.trace.v1.Span.TraceState | undefined;
/**
 * Prepares trace service request to be sent to collector
 * @param spans spans
 * @param collectorExporterBase
 * @param useHex - if ids should be kept as hex without converting to base64
 */
export declare function toOTLPExportTraceServiceRequest<T extends OTLPExporterConfigBase>(spans: ReadableSpan[], collectorTraceExporterBase: OTLPExporterBase<T, ReadableSpan, opentelemetryProto.collector.trace.v1.ExportTraceServiceRequest>, useHex?: boolean): opentelemetryProto.collector.trace.v1.ExportTraceServiceRequest;
/**
 * Takes an array of spans and groups them by resource and instrumentation
 * library
 * @param spans spans
 */
export declare function groupSpansByResourceAndLibrary(spans: ReadableSpan[]): Map<Resource, Map<core.InstrumentationLibrary, ReadableSpan[]>>;
//# sourceMappingURL=transform.d.ts.map