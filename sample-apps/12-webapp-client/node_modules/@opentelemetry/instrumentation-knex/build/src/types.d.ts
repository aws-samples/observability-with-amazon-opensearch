import { InstrumentationConfig } from '@opentelemetry/instrumentation';
export interface KnexInstrumentationConfig extends InstrumentationConfig {
    /** max query length in db.statement attribute ".." is added to the end when query is truncated  */
    maxQueryLength?: number;
}
//# sourceMappingURL=types.d.ts.map