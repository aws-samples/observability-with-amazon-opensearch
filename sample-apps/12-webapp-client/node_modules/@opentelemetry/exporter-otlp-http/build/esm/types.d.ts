import { SpanAttributes, SpanStatusCode } from '@opentelemetry/api';
export declare namespace opentelemetryProto {
    namespace collector {
        namespace trace.v1 {
            interface TraceService {
                service: opentelemetryProto.collector.trace.v1.TraceService;
            }
            interface ExportTraceServiceRequest {
                resourceSpans: opentelemetryProto.trace.v1.ResourceSpans[];
            }
        }
        namespace metrics.v1 {
            interface ExportMetricsServiceRequest {
                resourceMetrics: opentelemetryProto.metrics.v1.ResourceMetrics[];
            }
        }
    }
    namespace resource.v1 {
        interface Resource {
            attributes: opentelemetryProto.common.v1.KeyValue[];
            droppedAttributesCount: number;
        }
    }
    namespace metrics.v1 {
        interface Metric {
            name: string;
            description: string;
            unit: string;
            intGauge?: opentelemetryProto.metrics.v1.Gauge;
            doubleGauge?: opentelemetryProto.metrics.v1.Gauge;
            intSum?: opentelemetryProto.metrics.v1.Sum;
            doubleSum?: opentelemetryProto.metrics.v1.Sum;
            intHistogram?: opentelemetryProto.metrics.v1.Histogram;
            doubleHistogram?: opentelemetryProto.metrics.v1.Histogram;
        }
        interface Gauge {
            dataPoints: opentelemetryProto.metrics.v1.DataPoint[];
        }
        interface Sum {
            dataPoints: opentelemetryProto.metrics.v1.DataPoint[];
            aggregationTemporality: opentelemetryProto.metrics.v1.AggregationTemporality;
            isMonotonic: boolean;
        }
        interface Histogram {
            dataPoints: opentelemetryProto.metrics.v1.HistogramDataPoint[];
            aggregationTemporality: opentelemetryProto.metrics.v1.AggregationTemporality;
        }
        interface DataPoint {
            labels: opentelemetryProto.common.v1.StringKeyValue[];
            startTimeUnixNano: number;
            timeUnixNano: number;
            value: number;
            exemplars?: opentelemetryProto.metrics.v1.Exemplar[];
        }
        interface Exemplar {
            filteredLabels: opentelemetryProto.common.v1.StringKeyValue[];
            timeUnixNano: number;
            value: number;
            spanId: Uint8Array;
            traceId: Uint8Array;
        }
        interface HistogramDataPoint {
            labels: opentelemetryProto.common.v1.StringKeyValue[];
            startTimeUnixNano: number;
            timeUnixNano: number;
            count: number;
            sum: number;
            bucketCounts?: number[];
            explicitBounds?: number[];
            exemplars?: opentelemetryProto.metrics.v1.Exemplar[][];
        }
        interface InstrumentationLibraryMetrics {
            instrumentationLibrary?: opentelemetryProto.common.v1.InstrumentationLibrary;
            metrics: opentelemetryProto.metrics.v1.Metric[];
        }
        interface ResourceMetrics {
            resource?: opentelemetryProto.resource.v1.Resource;
            instrumentationLibraryMetrics: opentelemetryProto.metrics.v1.InstrumentationLibraryMetrics[];
        }
        enum AggregationTemporality {
            AGGREGATION_TEMPORALITY_UNSPECIFIED = 0,
            AGGREGATION_TEMPORALITY_DELTA = 1,
            AGGREGATION_TEMPORALITY_CUMULATIVE = 2
        }
    }
    namespace trace.v1 {
        namespace ConstantSampler {
            enum ConstantDecision {
                ALWAYS_OFF = 0,
                ALWAYS_ON = 1,
                ALWAYS_PARENT = 2
            }
        }
        namespace Span {
            interface Event {
                timeUnixNano: number;
                name: string;
                attributes?: opentelemetryProto.common.v1.KeyValue[];
                droppedAttributesCount: number;
            }
            interface Link {
                traceId: string;
                spanId: string;
                traceState?: opentelemetryProto.trace.v1.Span.TraceState;
                attributes?: opentelemetryProto.common.v1.KeyValue[];
                droppedAttributesCount: number;
            }
            enum SpanKind {
                SPAN_KIND_UNSPECIFIED = 0,
                SPAN_KIND_INTERNAL = 1,
                SPAN_KIND_SERVER = 2,
                SPAN_KIND_CLIENT = 3,
                SPAN_KIND_PRODUCER = 4,
                SPAN_KIND_CONSUMER = 5
            }
            type TraceState = string | undefined;
        }
        interface ConstantSampler {
            decision?: opentelemetryProto.trace.v1.ConstantSampler.ConstantDecision;
        }
        interface InstrumentationLibrarySpans {
            instrumentationLibrary?: opentelemetryProto.common.v1.InstrumentationLibrary;
            spans: opentelemetryProto.trace.v1.Span[];
        }
        interface ProbabilitySampler {
            samplingProbability?: number | null;
        }
        interface RateLimitingSampler {
            qps?: number | null;
        }
        interface ResourceSpans {
            resource?: opentelemetryProto.resource.v1.Resource;
            instrumentationLibrarySpans: opentelemetryProto.trace.v1.InstrumentationLibrarySpans[];
        }
        interface Span {
            traceId: string;
            spanId: string;
            traceState: opentelemetryProto.trace.v1.Span.TraceState;
            parentSpanId?: string;
            name?: string;
            kind?: opentelemetryProto.trace.v1.Span.SpanKind;
            startTimeUnixNano?: number;
            endTimeUnixNano?: number;
            attributes?: opentelemetryProto.common.v1.KeyValue[];
            droppedAttributesCount: number;
            events?: opentelemetryProto.trace.v1.Span.Event[];
            droppedEventsCount: number;
            links?: opentelemetryProto.trace.v1.Span.Link[];
            droppedLinksCount: number;
            status?: SpanStatus;
        }
        interface SpanStatus {
            /** The status code of this message. */
            code: SpanStatusCode;
            /** A developer-facing error message. */
            message?: string;
        }
        interface TraceConfig {
            constantSampler?: ConstantSampler | null;
            probabilitySampler?: ProbabilitySampler | null;
            rateLimitingSampler?: RateLimitingSampler | null;
        }
    }
    namespace common.v1 {
        interface KeyValue {
            key: string;
            value: AnyValue;
        }
        type ArrayValue = {
            values: AnyValue[];
        };
        interface KeyValueList {
            values: KeyValue[];
        }
        type AnyValue = {
            stringValue?: string;
            boolValue?: boolean;
            intValue?: number;
            doubleValue?: number;
            arrayValue?: ArrayValue;
            kvlistValue?: KeyValueList;
        };
        interface InstrumentationLibrary {
            name: string;
            version?: string;
        }
        interface StringKeyValue {
            key: string;
            value: string;
        }
        enum ValueType {
            STRING = 0,
            INT = 1,
            DOUBLE = 2,
            BOOL = 3
        }
    }
}
/**
 * Interface for handling error
 */
export declare class OTLPExporterError extends Error {
    readonly code?: number;
    readonly name: string;
    readonly data?: string;
    constructor(message?: string, code?: number, data?: string);
}
/**
 * Interface for handling export service errors
 */
export interface ExportServiceError {
    name: string;
    code: number;
    details: string;
    metadata: {
        [key: string]: unknown;
    };
    message: string;
    stack: string;
}
/**
 * Collector Exporter base config
 */
export interface OTLPExporterConfigBase {
    headers?: Partial<Record<string, unknown>>;
    hostname?: string;
    attributes?: SpanAttributes;
    url?: string;
    concurrencyLimit?: number;
}
/**
 * Mapping between api SpanKind and proto SpanKind
 */
export declare const OTLP_SPAN_KIND_MAPPING: {
    0: opentelemetryProto.trace.v1.Span.SpanKind;
    1: opentelemetryProto.trace.v1.Span.SpanKind;
    2: opentelemetryProto.trace.v1.Span.SpanKind;
    3: opentelemetryProto.trace.v1.Span.SpanKind;
    4: opentelemetryProto.trace.v1.Span.SpanKind;
};
//# sourceMappingURL=types.d.ts.map