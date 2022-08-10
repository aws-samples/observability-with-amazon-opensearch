import { Meter } from '../Meter';
import { MetricExporter } from './types';
export declare class Controller {
}
/** Controller organizes a periodic push of metric data. */
export declare class PushController extends Controller {
    private readonly _meter;
    private readonly _exporter;
    private _timer;
    constructor(_meter: Meter, _exporter: MetricExporter, interval?: number);
    shutdown(): Promise<void>;
    private _collect;
}
//# sourceMappingURL=Controller.d.ts.map