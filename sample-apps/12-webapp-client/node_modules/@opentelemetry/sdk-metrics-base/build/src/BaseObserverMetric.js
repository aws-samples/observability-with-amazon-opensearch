"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseObserverMetric = void 0;
const BoundInstrument_1 = require("./BoundInstrument");
const Metric_1 = require("./Metric");
const ObserverResult_1 = require("./ObserverResult");
const NOOP_CALLBACK = () => { };
/**
 * This is a SDK implementation of Base Observer Metric.
 * All observers should extend this class
 */
class BaseObserverMetric extends Metric_1.Metric {
    constructor(name, options, _processor, resource, metricKind, instrumentationLibrary, callback) {
        super(name, options, metricKind, resource, instrumentationLibrary);
        this._processor = _processor;
        this._callback = callback || NOOP_CALLBACK;
    }
    _makeInstrument(labels) {
        return new BoundInstrument_1.BoundObserver(labels, this._disabled, this._valueType, this._processor.aggregatorFor(this._descriptor));
    }
    async getMetricRecord() {
        const observerResult = new ObserverResult_1.ObserverResult();
        await this._callback(observerResult);
        this._processResults(observerResult);
        return super.getMetricRecord();
    }
    _processResults(observerResult) {
        observerResult.values.forEach((value, labels) => {
            const instrument = this.bind(labels);
            instrument.update(value);
        });
    }
    observation(value) {
        return {
            value,
            observer: this,
        };
    }
}
exports.BaseObserverMetric = BaseObserverMetric;
//# sourceMappingURL=BaseObserverMetric.js.map