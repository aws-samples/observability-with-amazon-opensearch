import { otlpTypes } from '@opentelemetry/exporter-otlp-http';
import * as grpc from '@grpc/grpc-js';
/**
 * Queue item to be used to save temporary spans/metrics in case the GRPC service
 * hasn't been fully initialized yet
 */
export interface GRPCQueueItem<ExportedItem> {
    objects: ExportedItem[];
    onSuccess: () => void;
    onError: (error: otlpTypes.OTLPExporterError) => void;
}
/**
 * Service Client for sending spans or metrics
 */
export interface ServiceClient extends grpc.Client {
    export: (request: any, metadata: grpc.Metadata, callback: Function) => {};
}
/**
 * OTLP Exporter Config for Node
 */
export interface OTLPExporterConfigNode extends otlpTypes.OTLPExporterConfigBase {
    credentials?: grpc.ChannelCredentials;
    metadata?: grpc.Metadata;
}
export declare enum ServiceClientType {
    SPANS = 0,
    METRICS = 1
}
//# sourceMappingURL=types.d.ts.map