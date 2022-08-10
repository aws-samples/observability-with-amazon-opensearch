/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * NoopMeter is a noop implementation of the {@link Meter} interface. It reuses
 * constant NoopMetrics for all of its methods.
 */
var NoopMeter = /** @class */ (function () {
    function NoopMeter() {
    }
    /**
     * Returns constant noop value recorder.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    NoopMeter.prototype.createValueRecorder = function (_name, _options) {
        return NOOP_VALUE_RECORDER_METRIC;
    };
    /**
     * Returns a constant noop counter.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    NoopMeter.prototype.createCounter = function (_name, _options) {
        return NOOP_COUNTER_METRIC;
    };
    /**
     * Returns a constant noop UpDownCounter.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    NoopMeter.prototype.createUpDownCounter = function (_name, _options) {
        return NOOP_COUNTER_METRIC;
    };
    /**
     * Returns constant noop value observer.
     * @param name the name of the metric.
     * @param [options] the metric options.
     * @param [callback] the value observer callback
     */
    NoopMeter.prototype.createValueObserver = function (_name, _options, _callback) {
        return NOOP_VALUE_OBSERVER_METRIC;
    };
    /**
     * Returns constant noop sum observer.
     * @param name the name of the metric.
     * @param [options] the metric options.
     * @param [callback] the sum observer callback
     */
    NoopMeter.prototype.createSumObserver = function (_name, _options, _callback) {
        return NOOP_SUM_OBSERVER_METRIC;
    };
    /**
     * Returns constant noop up down sum observer.
     * @param name the name of the metric.
     * @param [options] the metric options.
     * @param [callback] the up down sum observer callback
     */
    NoopMeter.prototype.createUpDownSumObserver = function (_name, _options, _callback) {
        return NOOP_UP_DOWN_SUM_OBSERVER_METRIC;
    };
    /**
     * Returns constant noop batch observer.
     * @param name the name of the metric.
     * @param callback the batch observer callback
     */
    NoopMeter.prototype.createBatchObserver = function (_callback) {
        return NOOP_BATCH_OBSERVER;
    };
    return NoopMeter;
}());
export { NoopMeter };
var NoopMetric = /** @class */ (function () {
    function NoopMetric(instrument) {
        this._instrument = instrument;
    }
    /**
     * Returns a Bound Instrument associated with specified Labels.
     * It is recommended to keep a reference to the Bound Instrument instead of
     * always calling this method for every operations.
     * @param labels key-values pairs that are associated with a specific metric
     *     that you want to record.
     */
    NoopMetric.prototype.bind = function (_labels) {
        return this._instrument;
    };
    /**
     * Removes the Binding from the metric, if it is present.
     * @param labels key-values pairs that are associated with a specific metric.
     */
    NoopMetric.prototype.unbind = function (_labels) {
        return;
    };
    /**
     * Clears all timeseries from the Metric.
     */
    NoopMetric.prototype.clear = function () {
        return;
    };
    return NoopMetric;
}());
export { NoopMetric };
var NoopCounterMetric = /** @class */ (function (_super) {
    __extends(NoopCounterMetric, _super);
    function NoopCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopCounterMetric.prototype.add = function (value, labels) {
        this.bind(labels).add(value);
    };
    return NoopCounterMetric;
}(NoopMetric));
export { NoopCounterMetric };
var NoopValueRecorderMetric = /** @class */ (function (_super) {
    __extends(NoopValueRecorderMetric, _super);
    function NoopValueRecorderMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopValueRecorderMetric.prototype.record = function (value, labels) {
        this.bind(labels).record(value);
    };
    return NoopValueRecorderMetric;
}(NoopMetric));
export { NoopValueRecorderMetric };
var NoopBaseObserverMetric = /** @class */ (function (_super) {
    __extends(NoopBaseObserverMetric, _super);
    function NoopBaseObserverMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopBaseObserverMetric.prototype.observation = function () {
        return {
            observer: this,
            value: 0,
        };
    };
    return NoopBaseObserverMetric;
}(NoopMetric));
export { NoopBaseObserverMetric };
var NoopBatchObserver = /** @class */ (function () {
    function NoopBatchObserver() {
    }
    return NoopBatchObserver;
}());
export { NoopBatchObserver };
var NoopBoundCounter = /** @class */ (function () {
    function NoopBoundCounter() {
    }
    NoopBoundCounter.prototype.add = function (_value) {
        return;
    };
    return NoopBoundCounter;
}());
export { NoopBoundCounter };
var NoopBoundValueRecorder = /** @class */ (function () {
    function NoopBoundValueRecorder() {
    }
    NoopBoundValueRecorder.prototype.record = function (_value, _baggage, _spanContext) {
        return;
    };
    return NoopBoundValueRecorder;
}());
export { NoopBoundValueRecorder };
var NoopBoundBaseObserver = /** @class */ (function () {
    function NoopBoundBaseObserver() {
    }
    NoopBoundBaseObserver.prototype.update = function (_value) { };
    return NoopBoundBaseObserver;
}());
export { NoopBoundBaseObserver };
export var NOOP_METER = new NoopMeter();
export var NOOP_BOUND_COUNTER = new NoopBoundCounter();
export var NOOP_COUNTER_METRIC = new NoopCounterMetric(NOOP_BOUND_COUNTER);
export var NOOP_BOUND_VALUE_RECORDER = new NoopBoundValueRecorder();
export var NOOP_VALUE_RECORDER_METRIC = new NoopValueRecorderMetric(NOOP_BOUND_VALUE_RECORDER);
export var NOOP_BOUND_BASE_OBSERVER = new NoopBoundBaseObserver();
export var NOOP_VALUE_OBSERVER_METRIC = new NoopBaseObserverMetric(NOOP_BOUND_BASE_OBSERVER);
export var NOOP_UP_DOWN_SUM_OBSERVER_METRIC = new NoopBaseObserverMetric(NOOP_BOUND_BASE_OBSERVER);
export var NOOP_SUM_OBSERVER_METRIC = new NoopBaseObserverMetric(NOOP_BOUND_BASE_OBSERVER);
export var NOOP_BATCH_OBSERVER = new NoopBatchObserver();
//# sourceMappingURL=NoopMeter.js.map