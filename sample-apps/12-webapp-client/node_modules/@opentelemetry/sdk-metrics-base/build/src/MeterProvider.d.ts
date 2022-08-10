import * as api from '@opentelemetry/api-metrics';
import { Resource } from '@opentelemetry/resources';
import { Meter } from '.';
import { MeterConfig } from './types';
/**
 * This class represents a meter provider which platform libraries can extend
 */
export declare class MeterProvider implements api.MeterProvider {
    private readonly _config;
    private readonly _meters;
    private _shuttingDownPromise;
    private _isShutdown;
    readonly resource: Resource;
    constructor(config?: MeterConfig);
    /**
     * Returns a Meter, creating one if one with the given name and version is not already created
     *
     * @returns Meter A Meter with the given name and version
     */
    getMeter(name: string, version?: string, config?: MeterConfig): Meter;
    shutdown(): Promise<void>;
}
//# sourceMappingURL=MeterProvider.d.ts.map