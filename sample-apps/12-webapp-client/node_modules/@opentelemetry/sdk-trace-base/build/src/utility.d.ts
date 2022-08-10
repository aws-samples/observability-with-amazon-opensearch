import { Sampler } from '@opentelemetry/api';
import { SpanLimits, TracerConfig, GeneralLimits } from './types';
/**
 * Function to merge Default configuration (as specified in './config') with
 * user provided configurations.
 */
export declare function mergeConfig(userConfig: TracerConfig): TracerConfig & {
    sampler: Sampler;
    spanLimits: SpanLimits;
    generalLimits: GeneralLimits;
};
//# sourceMappingURL=utility.d.ts.map