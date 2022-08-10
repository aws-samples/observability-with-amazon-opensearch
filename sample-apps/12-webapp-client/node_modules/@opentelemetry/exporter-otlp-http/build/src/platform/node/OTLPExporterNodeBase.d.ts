/// <reference types="node" />
import type * as http from 'http';
import type * as https from 'https';
import { OTLPExporterBase } from '../../OTLPExporterBase';
import { OTLPExporterNodeConfigBase, CompressionAlgorithm } from './types';
import * as otlpTypes from '../../types';
/**
 * Collector Metric Exporter abstract base class
 */
export declare abstract class OTLPExporterNodeBase<ExportItem, ServiceRequest> extends OTLPExporterBase<OTLPExporterNodeConfigBase, ExportItem, ServiceRequest> {
    DEFAULT_HEADERS: Record<string, string>;
    headers: Record<string, string>;
    agent: http.Agent | https.Agent | undefined;
    compression: CompressionAlgorithm;
    constructor(config?: OTLPExporterNodeConfigBase);
    onInit(_config: OTLPExporterNodeConfigBase): void;
    send(objects: ExportItem[], onSuccess: () => void, onError: (error: otlpTypes.OTLPExporterError) => void): void;
    onShutdown(): void;
}
//# sourceMappingURL=OTLPExporterNodeBase.d.ts.map