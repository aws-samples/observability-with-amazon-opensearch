import { Labels } from '@opentelemetry/api-metrics';
/**
 * Type guard to remove nulls from arrays
 *
 * @param value value to be checked for null equality
 */
export declare function notNull<T>(value: T | null): value is T;
/**
 * Converting the unordered labels into unique identifier string.
 * @param labels user provided unordered Labels.
 */
export declare function hashLabels(labels: Labels): string;
//# sourceMappingURL=Utils.d.ts.map