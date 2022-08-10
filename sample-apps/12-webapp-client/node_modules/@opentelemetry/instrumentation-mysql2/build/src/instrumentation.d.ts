import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import type * as mysqlTypes from 'mysql2';
import { MySQL2InstrumentationConfig } from './types';
export declare class MySQL2Instrumentation extends InstrumentationBase<typeof mysqlTypes> {
    static readonly COMMON_ATTRIBUTES: {
        [x: string]: "mysql";
    };
    constructor(config?: MySQL2InstrumentationConfig);
    protected init(): InstrumentationNodeModuleDefinition<typeof mysqlTypes>[];
    private _patchQuery;
    private _patchCallbackQuery;
}
//# sourceMappingURL=instrumentation.d.ts.map