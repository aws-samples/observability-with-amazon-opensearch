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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { diag } from '@opentelemetry/api';
import * as api from '@opentelemetry/api-metrics';
import { Resource } from '@opentelemetry/resources';
import { BatchObserver } from './BatchObserver';
import { CounterMetric } from './CounterMetric';
import { PushController } from './export/Controller';
import { NoopExporter } from './export/NoopExporter';
import { UngroupedProcessor } from './export/Processor';
import { SumObserverMetric } from './SumObserverMetric';
import { DEFAULT_CONFIG, DEFAULT_METRIC_OPTIONS } from './types';
import { UpDownCounterMetric } from './UpDownCounterMetric';
import { UpDownSumObserverMetric } from './UpDownSumObserverMetric';
import { ValueObserverMetric } from './ValueObserverMetric';
import { ValueRecorderMetric } from './ValueRecorderMetric';
// eslint-disable-next-line @typescript-eslint/no-var-requires
var merge = require('lodash.merge');
/**
 * Meter is an implementation of the {@link Meter} interface.
 */
var Meter = /** @class */ (function () {
    /**
     * Constructs a new Meter instance.
     */
    function Meter(instrumentationLibrary, config) {
        if (config === void 0) { config = {}; }
        var _a;
        this._batchObservers = [];
        this._metrics = new Map();
        this._isShutdown = false;
        this._shuttingDownPromise = Promise.resolve();
        var mergedConfig = merge({}, DEFAULT_CONFIG, config);
        this._processor = (_a = mergedConfig.processor) !== null && _a !== void 0 ? _a : new UngroupedProcessor();
        this._resource =
            mergedConfig.resource || Resource.empty();
        this._instrumentationLibrary = instrumentationLibrary;
        // start the push controller
        var exporter = mergedConfig.exporter || new NoopExporter();
        var interval = mergedConfig.interval;
        this._controller = new PushController(this, exporter, interval);
    }
    /**
     * Creates and returns a new {@link ValueRecorder}.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    Meter.prototype.createValueRecorder = function (name, options) {
        if (!this._isValidName(name)) {
            diag.warn("Invalid metric name " + name + ". Defaulting to noop metric implementation.");
            return api.NOOP_VALUE_RECORDER_METRIC;
        }
        var opt = __assign(__assign({}, DEFAULT_METRIC_OPTIONS), options);
        var valueRecorder = new ValueRecorderMetric(name, opt, this._processor, this._resource, this._instrumentationLibrary);
        this._registerMetric(name, valueRecorder);
        return valueRecorder;
    };
    /**
     * Creates a new counter metric. Generally, this kind of metric when the
     * value is a quantity, the sum is of primary interest, and the event count
     * and value distribution are not of primary interest.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    Meter.prototype.createCounter = function (name, options) {
        if (!this._isValidName(name)) {
            diag.warn("Invalid metric name " + name + ". Defaulting to noop metric implementation.");
            return api.NOOP_COUNTER_METRIC;
        }
        var opt = __assign(__assign({}, DEFAULT_METRIC_OPTIONS), options);
        var counter = new CounterMetric(name, opt, this._processor, this._resource, this._instrumentationLibrary);
        this._registerMetric(name, counter);
        return counter;
    };
    /**
     * Creates a new `UpDownCounter` metric. UpDownCounter is a synchronous
     * instrument and very similar to Counter except that Add(increment)
     * supports negative increments. It is generally useful for capturing changes
     * in an amount of resources used, or any quantity that rises and falls
     * during a request.
     *
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    Meter.prototype.createUpDownCounter = function (name, options) {
        if (!this._isValidName(name)) {
            diag.warn("Invalid metric name " + name + ". Defaulting to noop metric implementation.");
            return api.NOOP_COUNTER_METRIC;
        }
        var opt = __assign(__assign({}, DEFAULT_METRIC_OPTIONS), options);
        var upDownCounter = new UpDownCounterMetric(name, opt, this._processor, this._resource, this._instrumentationLibrary);
        this._registerMetric(name, upDownCounter);
        return upDownCounter;
    };
    /**
     * Creates a new `ValueObserver` metric.
     * @param name the name of the metric.
     * @param [options] the metric options.
     * @param [callback] the value observer callback
     */
    Meter.prototype.createValueObserver = function (name, options, callback) {
        if (options === void 0) { options = {}; }
        if (!this._isValidName(name)) {
            diag.warn("Invalid metric name " + name + ". Defaulting to noop metric implementation.");
            return api.NOOP_VALUE_OBSERVER_METRIC;
        }
        var opt = __assign(__assign({}, DEFAULT_METRIC_OPTIONS), options);
        var valueObserver = new ValueObserverMetric(name, opt, this._processor, this._resource, this._instrumentationLibrary, callback);
        this._registerMetric(name, valueObserver);
        return valueObserver;
    };
    Meter.prototype.createSumObserver = function (name, options, callback) {
        if (options === void 0) { options = {}; }
        if (!this._isValidName(name)) {
            diag.warn("Invalid metric name " + name + ". Defaulting to noop metric implementation.");
            return api.NOOP_SUM_OBSERVER_METRIC;
        }
        var opt = __assign(__assign({}, DEFAULT_METRIC_OPTIONS), options);
        var sumObserver = new SumObserverMetric(name, opt, this._processor, this._resource, this._instrumentationLibrary, callback);
        this._registerMetric(name, sumObserver);
        return sumObserver;
    };
    /**
     * Creates a new `UpDownSumObserver` metric.
     * @param name the name of the metric.
     * @param [options] the metric options.
     * @param [callback] the value observer callback
     */
    Meter.prototype.createUpDownSumObserver = function (name, options, callback) {
        if (options === void 0) { options = {}; }
        if (!this._isValidName(name)) {
            diag.warn("Invalid metric name " + name + ". Defaulting to noop metric implementation.");
            return api.NOOP_UP_DOWN_SUM_OBSERVER_METRIC;
        }
        var opt = __assign(__assign({}, DEFAULT_METRIC_OPTIONS), options);
        var upDownSumObserver = new UpDownSumObserverMetric(name, opt, this._processor, this._resource, this._instrumentationLibrary, callback);
        this._registerMetric(name, upDownSumObserver);
        return upDownSumObserver;
    };
    /**
     * Creates a new batch observer.
     * @param callback the batch observer callback
     * @param [options] the batch options.
     */
    Meter.prototype.createBatchObserver = function (callback, options) {
        if (options === void 0) { options = {}; }
        var opt = __assign({}, options);
        var batchObserver = new BatchObserver(opt, callback);
        this._batchObservers.push(batchObserver);
        return batchObserver;
    };
    /**
     * Collects all the metrics created with this `Meter` for export.
     *
     * Utilizes the processor to create checkpoints of the current values in
     * each aggregator belonging to the metrics that were created with this
     * meter instance.
     */
    Meter.prototype.collect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var observations, metricsRecords;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        observations = this._batchObservers.map(function (observer) {
                            return observer.collect();
                        });
                        return [4 /*yield*/, Promise.all(observations)];
                    case 1:
                        _a.sent();
                        metricsRecords = Array.from(this._metrics.values()).map(function (metric) {
                            return metric.getMetricRecord();
                        });
                        return [4 /*yield*/, Promise.all(metricsRecords).then(function (records) {
                                records.forEach(function (metrics) {
                                    metrics.forEach(function (metric) { return _this._processor.process(metric); });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Meter.prototype.getProcessor = function () {
        return this._processor;
    };
    Meter.prototype.shutdown = function () {
        var _this = this;
        if (this._isShutdown) {
            return this._shuttingDownPromise;
        }
        this._isShutdown = true;
        this._shuttingDownPromise = new Promise(function (resolve, reject) {
            Promise.resolve()
                .then(function () {
                return _this._controller.shutdown();
            })
                .then(resolve)
                .catch(function (e) {
                reject(e);
            });
        });
        return this._shuttingDownPromise;
    };
    /**
     * Registers metric to register.
     * @param name The name of the metric.
     * @param metric The metric to register.
     */
    Meter.prototype._registerMetric = function (name, metric) {
        if (this._metrics.has(name)) {
            diag.error("A metric with the name " + name + " has already been registered.");
            return;
        }
        this._metrics.set(name, metric);
    };
    /**
     * Ensure a metric name conforms to the following rules:
     *
     * 1. They are non-empty strings
     *
     * 2. The first character must be non-numeric, non-space, non-punctuation
     *
     * 3. Subsequent characters must be belong to the alphanumeric characters,
     *    '_', '.', and '-'.
     *
     * Names are case insensitive
     *
     * @param name Name of metric to be created
     */
    Meter.prototype._isValidName = function (name) {
        return Boolean(name.match(/^[a-z][a-z0-9_.-]*$/i));
    };
    return Meter;
}());
export { Meter };
//# sourceMappingURL=Meter.js.map