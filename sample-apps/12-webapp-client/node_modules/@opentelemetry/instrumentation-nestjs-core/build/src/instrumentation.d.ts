import { InstrumentationBase, InstrumentationConfig, InstrumentationNodeModuleDefinition, InstrumentationNodeModuleFile } from '@opentelemetry/instrumentation';
export declare class Instrumentation extends InstrumentationBase<any> {
    static readonly COMPONENT = "@nestjs/core";
    static readonly COMMON_ATTRIBUTES: {
        component: string;
    };
    constructor(config?: InstrumentationConfig);
    init(): InstrumentationNodeModuleDefinition<any>;
    getNestFactoryFileInstrumentation(versions: string[]): InstrumentationNodeModuleFile<any>;
    getRouterExecutionContextFileInstrumentation(versions: string[]): InstrumentationNodeModuleFile<any>;
    private ensureWrapped;
}
//# sourceMappingURL=instrumentation.d.ts.map