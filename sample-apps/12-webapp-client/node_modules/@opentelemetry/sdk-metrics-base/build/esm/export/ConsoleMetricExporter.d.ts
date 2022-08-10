import { MetricExporter, MetricRecord } from './types';
import { ExportResult } from '@opentelemetry/core';
/**
 * This is implementation of {@link MetricExporter} that prints metrics data to
 * the console. This class can be used for diagnostic purposes.
 */
export declare class ConsoleMetricExporter implements MetricExporter {
    export(metrics: MetricRecord[], resultCallback: (result: ExportResult) => void): void;
    shutdown(): Promise<void>;
}
//# sourceMappingURL=ConsoleMetricExporter.d.ts.map