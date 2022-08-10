import { SpanAttributes } from '@opentelemetry/api';
import { ExportResult } from '@opentelemetry/core';
import { OTLPExporterError, OTLPExporterConfigBase } from './types';
/**
 * Collector Exporter abstract base class
 */
export declare abstract class OTLPExporterBase<T extends OTLPExporterConfigBase, ExportItem, ServiceRequest> {
    readonly url: string;
    readonly hostname: string | undefined;
    readonly attributes?: SpanAttributes;
    protected _concurrencyLimit: number;
    protected _isShutdown: boolean;
    private _shuttingDownPromise;
    protected _sendingPromises: Promise<unknown>[];
    /**
     * @param config
     */
    constructor(config?: T);
    /**
     * Export items.
     * @param items
     * @param resultCallback
     */
    export(items: ExportItem[], resultCallback: (result: ExportResult) => void): void;
    private _export;
    /**
     * Shutdown the exporter.
     */
    shutdown(): Promise<void>;
    abstract onShutdown(): void;
    abstract onInit(config: T): void;
    abstract send(items: ExportItem[], onSuccess: () => void, onError: (error: OTLPExporterError) => void): void;
    abstract getDefaultUrl(config: T): string;
    abstract convert(objects: ExportItem[]): ServiceRequest;
}
//# sourceMappingURL=OTLPExporterBase.d.ts.map