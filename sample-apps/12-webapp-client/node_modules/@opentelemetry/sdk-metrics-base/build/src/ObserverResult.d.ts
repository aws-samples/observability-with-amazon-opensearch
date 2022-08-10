import { ObserverResult as TypeObserverResult, Labels } from '@opentelemetry/api-metrics';
/**
 * Implementation of {@link TypeObserverResult}
 */
export declare class ObserverResult implements TypeObserverResult {
    values: Map<Labels, number>;
    observe(value: number, labels: Labels): void;
}
//# sourceMappingURL=ObserverResult.d.ts.map