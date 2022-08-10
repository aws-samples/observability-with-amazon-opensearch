import { MetricRecord, Aggregator, MetricDescriptor } from './types';
/**
 * Base class for all processor types.
 *
 * The processor is responsible for storing the aggregators and aggregated
 * values received from updates from metrics in the meter. The stored values
 * will be sent to an exporter for exporting.
 */
export declare abstract class Processor {
    protected readonly _batchMap: Map<string, MetricRecord>;
    /** Returns an aggregator based off metric descriptor. */
    abstract aggregatorFor(metricKind: MetricDescriptor): Aggregator;
    /** Stores record information to be ready for exporting. */
    abstract process(record: MetricRecord): void;
    checkPointSet(): MetricRecord[];
}
/**
 * Processor which retains all dimensions/labels. It accepts all records and
 * passes them for exporting.
 */
export declare class UngroupedProcessor extends Processor {
    aggregatorFor(metricDescriptor: MetricDescriptor): Aggregator;
    process(record: MetricRecord): void;
}
//# sourceMappingURL=Processor.d.ts.map