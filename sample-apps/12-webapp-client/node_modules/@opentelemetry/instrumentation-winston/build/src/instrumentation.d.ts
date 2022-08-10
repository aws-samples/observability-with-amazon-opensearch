import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import type { WinstonInstrumentationConfig } from './types';
export declare class WinstonInstrumentation extends InstrumentationBase {
    constructor(config?: WinstonInstrumentationConfig);
    protected init(): InstrumentationNodeModuleDefinition<{}>[];
    getConfig(): WinstonInstrumentationConfig;
    setConfig(config: WinstonInstrumentationConfig): void;
    private _callHook;
    private _getPatchedWrite;
    private _getPatchedLog;
}
//# sourceMappingURL=instrumentation.d.ts.map