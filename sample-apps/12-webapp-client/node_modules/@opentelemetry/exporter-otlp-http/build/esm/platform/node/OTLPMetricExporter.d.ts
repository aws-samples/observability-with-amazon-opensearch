import { MetricRecord, MetricExporter } from '@opentelemetry/sdk-metrics-base';
import * as otlpTypes from '../../types';
import { OTLPExporterNodeConfigBase } from './types';
import { OTLPExporterNodeBase } from './OTLPExporterNodeBase';
/**
 * Collector Metric Exporter for Node
 */
export declare class OTLPMetricExporter extends OTLPExporterNodeBase<MetricRecord, otlpTypes.opentelemetryProto.collector.metrics.v1.ExportMetricsServiceRequest> implements MetricExporter {
    protected readonly _startTime: number;
    constructor(config?: OTLPExporterNodeConfigBase);
    convert(metrics: MetricRecord[]): otlpTypes.opentelemetryProto.collector.metrics.v1.ExportMetricsServiceRequest;
    getDefaultUrl(config: OTLPExporterNodeConfigBase): string;
}
//# sourceMappingURL=OTLPMetricExporter.d.ts.map