import * as api from '@opentelemetry/api-metrics';
import { Aggregator } from './export/types';
/**
 * This class represent the base to BoundInstrument, which is responsible for generating
 * the TimeSeries.
 */
export declare class BaseBoundInstrument {
    private readonly _disabled;
    private readonly _valueType;
    private readonly _aggregator;
    protected _labels: api.Labels;
    constructor(labels: api.Labels, _disabled: boolean, _valueType: api.ValueType, _aggregator: Aggregator);
    update(value: number): void;
    getLabels(): api.Labels;
    getAggregator(): Aggregator;
}
/**
 * BoundCounter allows the SDK to observe/record a single metric event. The
 * value of single instrument in the `Counter` associated with specified Labels.
 */
export declare class BoundCounter extends BaseBoundInstrument implements api.BoundCounter {
    constructor(labels: api.Labels, disabled: boolean, valueType: api.ValueType, aggregator: Aggregator);
    add(value: number): void;
}
/**
 * BoundUpDownCounter allows the SDK to observe/record a single metric event.
 * The value of single instrument in the `UpDownCounter` associated with
 * specified Labels.
 */
export declare class BoundUpDownCounter extends BaseBoundInstrument implements api.BoundCounter {
    constructor(labels: api.Labels, disabled: boolean, valueType: api.ValueType, aggregator: Aggregator);
    add(value: number): void;
}
/**
 * BoundMeasure is an implementation of the {@link BoundMeasure} interface.
 */
export declare class BoundValueRecorder extends BaseBoundInstrument implements api.BoundValueRecorder {
    constructor(labels: api.Labels, disabled: boolean, valueType: api.ValueType, aggregator: Aggregator);
    record(value: number): void;
}
/**
 * BoundObserver is an implementation of the {@link BoundObserver} interface.
 */
export declare class BoundObserver extends BaseBoundInstrument implements api.BoundBaseObserver {
    constructor(labels: api.Labels, disabled: boolean, valueType: api.ValueType, aggregator: Aggregator);
}
//# sourceMappingURL=BoundInstrument.d.ts.map