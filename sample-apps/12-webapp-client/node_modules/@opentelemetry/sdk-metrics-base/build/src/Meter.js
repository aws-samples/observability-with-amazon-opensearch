"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meter = void 0;
const api_1 = require("@opentelemetry/api");
const api = require("@opentelemetry/api-metrics");
const resources_1 = require("@opentelemetry/resources");
const BatchObserver_1 = require("./BatchObserver");
const CounterMetric_1 = require("./CounterMetric");
const Controller_1 = require("./export/Controller");
const NoopExporter_1 = require("./export/NoopExporter");
const Processor_1 = require("./export/Processor");
const SumObserverMetric_1 = require("./SumObserverMetric");
const types_1 = require("./types");
const UpDownCounterMetric_1 = require("./UpDownCounterMetric");
const UpDownSumObserverMetric_1 = require("./UpDownSumObserverMetric");
const ValueObserverMetric_1 = require("./ValueObserverMetric");
const ValueRecorderMetric_1 = require("./ValueRecorderMetric");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const merge = require('lodash.merge');
/**
 * Meter is an implementation of the {@link Meter} interface.
 */
class Meter {
    /**
     * Constructs a new Meter instance.
     */
    constructor(instrumentationLibrary, config = {}) {
        var _a;
        this._batchObservers = [];
        this._metrics = new Map();
        this._isShutdown = false;
        this._shuttingDownPromise = Promise.resolve();
        const mergedConfig = merge({}, types_1.DEFAULT_CONFIG, config);
        this._processor = (_a = mergedConfig.processor) !== null && _a !== void 0 ? _a : new Processor_1.UngroupedProcessor();
        this._resource =
            mergedConfig.resource || resources_1.Resource.empty();
        this._instrumentationLibrary = instrumentationLibrary;
        // start the push controller
        const exporter = mergedConfig.exporter || new NoopExporter_1.NoopExporter();
        const interval = mergedConfig.interval;
        this._controller = new Controller_1.PushController(this, exporter, interval);
    }
    /**
     * Creates and returns a new {@link ValueRecorder}.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    createValueRecorder(name, options) {
        if (!this._isValidName(name)) {
            api_1.diag.warn(`Invalid metric name ${name}. Defaulting to noop metric implementation.`);
            return api.NOOP_VALUE_RECORDER_METRIC;
        }
        const opt = Object.assign(Object.assign({}, types_1.DEFAULT_METRIC_OPTIONS), options);
        const valueRecorder = new ValueRecorderMetric_1.ValueRecorderMetric(name, opt, this._processor, this._resource, this._instrumentationLibrary);
        this._registerMetric(name, valueRecorder);
        return valueRecorder;
    }
    /**
     * Creates a new counter metric. Generally, this kind of metric when the
     * value is a quantity, the sum is of primary interest, and the event count
     * and value distribution are not of primary interest.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    createCounter(name, options) {
        if (!this._isValidName(name)) {
            api_1.diag.warn(`Invalid metric name ${name}. Defaulting to noop metric implementation.`);
            return api.NOOP_COUNTER_METRIC;
        }
        const opt = Object.assign(Object.assign({}, types_1.DEFAULT_METRIC_OPTIONS), options);
        const counter = new CounterMetric_1.CounterMetric(name, opt, this._processor, this._resource, this._instrumentationLibrary);
        this._registerMetric(name, counter);
        return counter;
    }
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
    createUpDownCounter(name, options) {
        if (!this._isValidName(name)) {
            api_1.diag.warn(`Invalid metric name ${name}. Defaulting to noop metric implementation.`);
            return api.NOOP_COUNTER_METRIC;
        }
        const opt = Object.assign(Object.assign({}, types_1.DEFAULT_METRIC_OPTIONS), options);
        const upDownCounter = new UpDownCounterMetric_1.UpDownCounterMetric(name, opt, this._processor, this._resource, this._instrumentationLibrary);
        this._registerMetric(name, upDownCounter);
        return upDownCounter;
    }
    /**
     * Creates a new `ValueObserver` metric.
     * @param name the name of the metric.
     * @param [options] the metric options.
     * @param [callback] the value observer callback
     */
    createValueObserver(name, options = {}, callback) {
        if (!this._isValidName(name)) {
            api_1.diag.warn(`Invalid metric name ${name}. Defaulting to noop metric implementation.`);
            return api.NOOP_VALUE_OBSERVER_METRIC;
        }
        const opt = Object.assign(Object.assign({}, types_1.DEFAULT_METRIC_OPTIONS), options);
        const valueObserver = new ValueObserverMetric_1.ValueObserverMetric(name, opt, this._processor, this._resource, this._instrumentationLibrary, callback);
        this._registerMetric(name, valueObserver);
        return valueObserver;
    }
    createSumObserver(name, options = {}, callback) {
        if (!this._isValidName(name)) {
            api_1.diag.warn(`Invalid metric name ${name}. Defaulting to noop metric implementation.`);
            return api.NOOP_SUM_OBSERVER_METRIC;
        }
        const opt = Object.assign(Object.assign({}, types_1.DEFAULT_METRIC_OPTIONS), options);
        const sumObserver = new SumObserverMetric_1.SumObserverMetric(name, opt, this._processor, this._resource, this._instrumentationLibrary, callback);
        this._registerMetric(name, sumObserver);
        return sumObserver;
    }
    /**
     * Creates a new `UpDownSumObserver` metric.
     * @param name the name of the metric.
     * @param [options] the metric options.
     * @param [callback] the value observer callback
     */
    createUpDownSumObserver(name, options = {}, callback) {
        if (!this._isValidName(name)) {
            api_1.diag.warn(`Invalid metric name ${name}. Defaulting to noop metric implementation.`);
            return api.NOOP_UP_DOWN_SUM_OBSERVER_METRIC;
        }
        const opt = Object.assign(Object.assign({}, types_1.DEFAULT_METRIC_OPTIONS), options);
        const upDownSumObserver = new UpDownSumObserverMetric_1.UpDownSumObserverMetric(name, opt, this._processor, this._resource, this._instrumentationLibrary, callback);
        this._registerMetric(name, upDownSumObserver);
        return upDownSumObserver;
    }
    /**
     * Creates a new batch observer.
     * @param callback the batch observer callback
     * @param [options] the batch options.
     */
    createBatchObserver(callback, options = {}) {
        const opt = Object.assign({}, options);
        const batchObserver = new BatchObserver_1.BatchObserver(opt, callback);
        this._batchObservers.push(batchObserver);
        return batchObserver;
    }
    /**
     * Collects all the metrics created with this `Meter` for export.
     *
     * Utilizes the processor to create checkpoints of the current values in
     * each aggregator belonging to the metrics that were created with this
     * meter instance.
     */
    async collect() {
        // call batch observers first
        const observations = this._batchObservers.map(observer => {
            return observer.collect();
        });
        await Promise.all(observations);
        // after this all remaining metrics can be run
        const metricsRecords = Array.from(this._metrics.values()).map(metric => {
            return metric.getMetricRecord();
        });
        await Promise.all(metricsRecords).then(records => {
            records.forEach(metrics => {
                metrics.forEach(metric => this._processor.process(metric));
            });
        });
    }
    getProcessor() {
        return this._processor;
    }
    shutdown() {
        if (this._isShutdown) {
            return this._shuttingDownPromise;
        }
        this._isShutdown = true;
        this._shuttingDownPromise = new Promise((resolve, reject) => {
            Promise.resolve()
                .then(() => {
                return this._controller.shutdown();
            })
                .then(resolve)
                .catch(e => {
                reject(e);
            });
        });
        return this._shuttingDownPromise;
    }
    /**
     * Registers metric to register.
     * @param name The name of the metric.
     * @param metric The metric to register.
     */
    _registerMetric(name, metric) {
        if (this._metrics.has(name)) {
            api_1.diag.error(`A metric with the name ${name} has already been registered.`);
            return;
        }
        this._metrics.set(name, metric);
    }
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
    _isValidName(name) {
        return Boolean(name.match(/^[a-z][a-z0-9_.-]*$/i));
    }
}
exports.Meter = Meter;
//# sourceMappingURL=Meter.js.map