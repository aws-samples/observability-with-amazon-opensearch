import { otlpTypes } from '@opentelemetry/exporter-otlp-http';
import { MetricRecord, MetricExporter } from '@opentelemetry/sdk-metrics-base';
import { OTLPExporterConfigNode, ServiceClientType } from './types';
import { OTLPExporterNodeBase } from './OTLPExporterNodeBase';
/**
 * OTLP Metric Exporter for Node
 */
export declare class OTLPMetricExporter extends OTLPExporterNodeBase<MetricRecord, otlpTypes.opentelemetryProto.collector.metrics.v1.ExportMetricsServiceRequest> implements MetricExporter {
    protected readonly _startTime: number;
    constructor(config?: OTLPExporterConfigNode);
    convert(metrics: MetricRecord[]): otlpTypes.opentelemetryProto.collector.metrics.v1.ExportMetricsServiceRequest;
    getDefaultUrl(config: OTLPExporterConfigNode): string;
    getServiceClientType(): ServiceClientType;
    getServiceProtoPath(): string;
}
//# sourceMappingURL=OTLPMetricExporter.d.ts.map