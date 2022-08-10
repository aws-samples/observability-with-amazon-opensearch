import { MetricExporter, MetricRecord } from './types';
import { ExportResult } from '@opentelemetry/core';
export declare class NoopExporter implements MetricExporter {
    export(_metrics: MetricRecord[], _resultCallback: (result: ExportResult) => void): void;
    shutdown(): Promise<void>;
}
//# sourceMappingURL=NoopExporter.d.ts.map