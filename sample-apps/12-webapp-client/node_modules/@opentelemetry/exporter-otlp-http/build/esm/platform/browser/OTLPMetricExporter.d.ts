import { MetricRecord, MetricExporter } from '@opentelemetry/sdk-metrics-base';
import { OTLPExporterConfigBase } from '../../types';
import * as otlpTypes from '../../types';
import { OTLPExporterBrowserBase } from './OTLPExporterBrowserBase';
/**
 * Collector Metric Exporter for Web
 */
export declare class OTLPMetricExporter extends OTLPExporterBrowserBase<MetricRecord, otlpTypes.opentelemetryProto.collector.metrics.v1.ExportMetricsServiceRequest> implements MetricExporter {
    private readonly _startTime;
    constructor(config?: OTLPExporterConfigBase);
    convert(metrics: MetricRecord[]): otlpTypes.opentelemetryProto.collector.metrics.v1.ExportMetricsServiceRequest;
    getDefaultUrl(config: OTLPExporterConfigBase): string;
}
//# sourceMappingURL=OTLPMetricExporter.d.ts.map