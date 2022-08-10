"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metric = void 0;
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
const api = require("@opentelemetry/api-metrics");
const Utils_1 = require("./Utils");
/** This is a SDK implementation of {@link Metric} interface. */
class Metric {
    constructor(_name, _options, _kind, resource, instrumentationLibrary) {
        this._name = _name;
        this._options = _options;
        this._kind = _kind;
        this.resource = resource;
        this.instrumentationLibrary = instrumentationLibrary;
        this._instruments = new Map();
        this._disabled = !!_options.disabled;
        this._valueType =
            typeof _options.valueType === 'number'
                ? _options.valueType
                : api.ValueType.DOUBLE;
        this._boundaries = _options.boundaries;
        this._descriptor = this._getMetricDescriptor();
        this._aggregationTemporality =
            _options.aggregationTemporality === undefined
                ? api.AggregationTemporality.AGGREGATION_TEMPORALITY_CUMULATIVE
                : _options.aggregationTemporality;
    }
    /**
     * Returns an Instrument associated with specified Labels.
     * It is recommended to keep a reference to the Instrument instead of always
     * calling this method for each operation.
     * @param labels key-values pairs that are associated with a specific metric
     *     that you want to record.
     */
    bind(labels) {
        const hash = Utils_1.hashLabels(labels);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (this._instruments.has(hash))
            return this._instruments.get(hash);
        const instrument = this._makeInstrument(labels);
        this._instruments.set(hash, instrument);
        return instrument;
    }
    /**
     * Removes the Instrument from the metric, if it is present.
     * @param labels key-values pairs that are associated with a specific metric.
     */
    unbind(labels) {
        this._instruments.delete(Utils_1.hashLabels(labels));
    }
    /**
     * Clears all Instruments from the Metric.
     */
    clear() {
        this._instruments.clear();
    }
    /**
     * Returns kind of metric
     */
    getKind() {
        return this._kind;
    }
    getAggregationTemporality() {
        return this._aggregationTemporality;
    }
    getMetricRecord() {
        return new Promise(resolve => {
            resolve(Array.from(this._instruments.values()).map(instrument => ({
                descriptor: this._descriptor,
                labels: instrument.getLabels(),
                aggregator: instrument.getAggregator(),
                aggregationTemporality: this.getAggregationTemporality(),
                resource: this.resource,
                instrumentationLibrary: this.instrumentationLibrary,
            })));
        });
    }
    _getMetricDescriptor() {
        return Object.assign({ name: this._name, description: this._options.description || '', unit: this._options.unit || '1', metricKind: this._kind, valueType: this._valueType }, (this._boundaries && { boundaries: this._boundaries }));
    }
}
exports.Metric = Metric;
//# sourceMappingURL=Metric.js.map