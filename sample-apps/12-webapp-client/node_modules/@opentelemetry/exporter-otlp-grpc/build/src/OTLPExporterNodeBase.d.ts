import { OTLPExporterBase, otlpTypes } from '@opentelemetry/exporter-otlp-http';
import { Metadata } from '@grpc/grpc-js';
import { OTLPExporterConfigNode, GRPCQueueItem, ServiceClientType } from './types';
import { ServiceClient } from './types';
/**
 * OTLP Metric Exporter abstract base class
 */
export declare abstract class OTLPExporterNodeBase<ExportItem, ServiceRequest> extends OTLPExporterBase<OTLPExporterConfigNode, ExportItem, ServiceRequest> {
    grpcQueue: GRPCQueueItem<ExportItem>[];
    metadata?: Metadata;
    serviceClient?: ServiceClient;
    private _send;
    constructor(config?: OTLPExporterConfigNode);
    private _sendPromise;
    onInit(config: OTLPExporterConfigNode): void;
    send(objects: ExportItem[], onSuccess: () => void, onError: (error: otlpTypes.OTLPExporterError) => void): void;
    onShutdown(): void;
    abstract getServiceProtoPath(): string;
    abstract getServiceClientType(): ServiceClientType;
}
//# sourceMappingURL=OTLPExporterNodeBase.d.ts.map