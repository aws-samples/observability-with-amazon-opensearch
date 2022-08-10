import { OTLPExporterConfigBase } from '../../types';
import { OTLPExporterBrowserBase } from './OTLPExporterBrowserBase';
import { ReadableSpan, SpanExporter } from '@opentelemetry/sdk-trace-base';
import * as otlpTypes from '../../types';
/**
 * Collector Trace Exporter for Web
 */
export declare class OTLPTraceExporter extends OTLPExporterBrowserBase<ReadableSpan, otlpTypes.opentelemetryProto.collector.trace.v1.ExportTraceServiceRequest> implements SpanExporter {
    constructor(config?: OTLPExporterConfigBase);
    convert(spans: ReadableSpan[]): otlpTypes.opentelemetryProto.collector.trace.v1.ExportTraceServiceRequest;
    getDefaultUrl(config: OTLPExporterConfigBase): string;
}
//# sourceMappingURL=OTLPTraceExporter.d.ts.map