import * as api from '@opentelemetry/api-metrics';
import { Resource } from '@opentelemetry/resources';
import { Processor } from './export/Processor';
import { MetricExporter } from './export/types';
/** MeterConfig provides an interface for configuring a Meter. */
export interface MeterConfig {
    /** Metric exporter. */
    exporter?: MetricExporter;
    /** Metric collect interval */
    interval?: number;
    /** Resource associated with metric telemetry */
    resource?: Resource;
    /** Metric Processor. */
    processor?: Processor;
}
/** Default Meter configuration. */
export declare const DEFAULT_CONFIG: {};
/** The default metric creation options value. */
export declare const DEFAULT_METRIC_OPTIONS: {
    disabled: boolean;
    description: string;
    unit: string;
    valueType: api.ValueType;
};
//# sourceMappingURL=types.d.ts.map