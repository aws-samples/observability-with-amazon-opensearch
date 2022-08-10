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
import * as api from '@opentelemetry/api-metrics';
import { hashLabels } from './Utils';
/** This is a SDK implementation of {@link Metric} interface. */
var Metric = /** @class */ (function () {
    function Metric(_name, _options, _kind, resource, instrumentationLibrary) {
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
    Metric.prototype.bind = function (labels) {
        var hash = hashLabels(labels);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (this._instruments.has(hash))
            return this._instruments.get(hash);
        var instrument = this._makeInstrument(labels);
        this._instruments.set(hash, instrument);
        return instrument;
    };
    /**
     * Removes the Instrument from the metric, if it is present.
     * @param labels key-values pairs that are associated with a specific metric.
     */
    Metric.prototype.unbind = function (labels) {
        this._instruments.delete(hashLabels(labels));
    };
    /**
     * Clears all Instruments from the Metric.
     */
    Metric.prototype.clear = function () {
        this._instruments.clear();
    };
    /**
     * Returns kind of metric
     */
    Metric.prototype.getKind = function () {
        return this._kind;
    };
    Metric.prototype.getAggregationTemporality = function () {
        return this._aggregationTemporality;
    };
    Metric.prototype.getMetricRecord = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(Array.from(_this._instruments.values()).map(function (instrument) { return ({
                descriptor: _this._descriptor,
                labels: instrument.getLabels(),
                aggregator: instrument.getAggregator(),
                aggregationTemporality: _this.getAggregationTemporality(),
                resource: _this.resource,
                instrumentationLibrary: _this.instrumentationLibrary,
            }); }));
        });
    };
    Metric.prototype._getMetricDescriptor = function () {
        return __assign({ name: this._name, description: this._options.description || '', unit: this._options.unit || '1', metricKind: this._kind, valueType: this._valueType }, (this._boundaries && { boundaries: this._boundaries }));
    };
    return Metric;
}());
export { Metric };
//# sourceMappingURL=Metric.js.map