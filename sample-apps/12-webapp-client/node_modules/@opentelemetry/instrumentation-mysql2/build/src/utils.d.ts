import { SpanAttributes } from '@opentelemetry/api';
import type { Query, QueryOptions } from 'mysql2';
interface Config {
    host?: string;
    port?: number;
    database?: string;
    user?: string;
    connectionConfig?: Config;
}
/**
 * Get an SpanAttributes map from a mysql connection config object
 *
 * @param config ConnectionConfig
 */
export declare function getConnectionAttributes(config: Config): SpanAttributes;
/**
 * Conjures up the value for the db.statement attribute by formatting a SQL query.
 *
 * @returns the database statement being executed.
 */
export declare function getDbStatement(query: string | Query | QueryOptions, format: (sql: string, values: any[], stringifyObjects?: boolean, timeZone?: string) => string, values?: any[]): string;
/**
 * The span name SHOULD be set to a low cardinality value
 * representing the statement executed on the database.
 *
 * @returns SQL statement without variable arguments or SQL verb
 */
export declare function getSpanName(query: string | Query | QueryOptions): string;
export declare const once: (fn: Function) => (...args: unknown[]) => any;
export {};
//# sourceMappingURL=utils.d.ts.map