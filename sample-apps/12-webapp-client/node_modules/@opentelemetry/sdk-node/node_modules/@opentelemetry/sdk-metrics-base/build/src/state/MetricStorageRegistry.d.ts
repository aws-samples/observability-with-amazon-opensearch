import { MetricStorage } from './MetricStorage';
import { Maybe } from '../utils';
/**
 * Internal class for storing {@link MetricStorage}
 */
export declare class MetricStorageRegistry {
    private readonly _metricStorageRegistry;
    static create(): MetricStorageRegistry;
    getStorages(): MetricStorage[];
    register<T extends MetricStorage>(storage: T): Maybe<T>;
}
//# sourceMappingURL=MetricStorageRegistry.d.ts.map