import { ReadableSpan, SpanExporter } from '@opentelemetry/sdk-trace-base';
import { OTLPExporterNodeBase } from './OTLPExporterNodeBase';
import { otlpTypes } from '@opentelemetry/exporter-otlp-http';
import { OTLPExporterConfigNode, ServiceClientType } from './types';
/**
 * OTLP Trace Exporter for Node
 */
export declare class OTLPTraceExporter extends OTLPExporterNodeBase<ReadableSpan, otlpTypes.opentelemetryProto.collector.trace.v1.ExportTraceServiceRequest> implements SpanExporter {
    constructor(config?: OTLPExporterConfigNode);
    convert(spans: ReadableSpan[]): otlpTypes.opentelemetryProto.collector.trace.v1.ExportTraceServiceRequest;
    getDefaultUrl(config: OTLPExporterConfigNode): string;
    getServiceClientType(): ServiceClientType;
    getServiceProtoPath(): string;
}
//# sourceMappingURL=OTLPTraceExporter.d.ts.map