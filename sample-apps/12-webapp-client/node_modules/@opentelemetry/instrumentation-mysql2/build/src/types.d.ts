import { InstrumentationConfig } from '@opentelemetry/instrumentation';
import type { Span } from '@opentelemetry/api';
export interface MySQL2ResponseHookInformation {
    queryResults: any;
}
export interface MySQL2InstrumentationExecutionResponseHook {
    (span: Span, responseHookInfo: MySQL2ResponseHookInformation): void;
}
export interface MySQL2InstrumentationConfig extends InstrumentationConfig {
    /**
     * Hook that allows adding custom span attributes based on the data
     * returned MySQL2 queries.
     *
     * @default undefined
     */
    responseHook?: MySQL2InstrumentationExecutionResponseHook;
}
//# sourceMappingURL=types.d.ts.map