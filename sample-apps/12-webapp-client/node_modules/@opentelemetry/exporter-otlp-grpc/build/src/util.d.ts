import { otlpTypes } from '@opentelemetry/exporter-otlp-http';
import { OTLPExporterNodeBase } from './OTLPExporterNodeBase';
import { OTLPExporterConfigNode } from './types';
export declare function onInit<ExportItem, ServiceRequest>(collector: OTLPExporterNodeBase<ExportItem, ServiceRequest>, config: OTLPExporterConfigNode): void;
export declare function send<ExportItem, ServiceRequest>(collector: OTLPExporterNodeBase<ExportItem, ServiceRequest>, objects: ExportItem[], onSuccess: () => void, onError: (error: otlpTypes.OTLPExporterError) => void): void;
export declare function validateAndNormalizeUrl(url: string): string;
//# sourceMappingURL=util.d.ts.map