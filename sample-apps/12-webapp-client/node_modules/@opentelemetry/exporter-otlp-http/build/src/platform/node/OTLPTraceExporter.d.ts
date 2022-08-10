import { ReadableSpan, SpanExporter } from '@opentelemetry/sdk-trace-base';
import { OTLPExporterNodeBase } from './OTLPExporterNodeBase';
import { OTLPExporterNodeConfigBase } from './types';
import * as otlpTypes from '../../types';
/**
 * Collector Trace Exporter for Node
 */
export declare class OTLPTraceExporter extends OTLPExporterNodeBase<ReadableSpan, otlpTypes.opentelemetryProto.collector.trace.v1.ExportTraceServiceRequest> implements SpanExporter {
    constructor(config?: OTLPExporterNodeConfigBase);
    convert(spans: ReadableSpan[]): otlpTypes.opentelemetryProto.collector.trace.v1.ExportTraceServiceRequest;
    getDefaultUrl(config: OTLPExporterNodeConfigBase): string;
}
//# sourceMappingURL=OTLPTraceExporter.d.ts.map