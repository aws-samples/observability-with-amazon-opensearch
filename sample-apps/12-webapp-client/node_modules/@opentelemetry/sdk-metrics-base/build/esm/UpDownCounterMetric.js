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
import { BoundUpDownCounter } from './BoundInstrument';
import { MetricKind } from './export/types';
import { Metric } from './Metric';
/** This is a SDK implementation of UpDownCounter Metric. */
var UpDownCounterMetric = /** @class */ (function (_super) {
    __extends(UpDownCounterMetric, _super);
    function UpDownCounterMetric(name, options, _processor, resource, instrumentationLibrary) {
        var _this = _super.call(this, name, options, MetricKind.UP_DOWN_COUNTER, resource, instrumentationLibrary) || this;
        _this._processor = _processor;
        return _this;
    }
    UpDownCounterMetric.prototype._makeInstrument = function (labels) {
        return new BoundUpDownCounter(labels, this._disabled, this._valueType, this._processor.aggregatorFor(this._descriptor));
    };
    /**
     * Adds the given value to the current value. Values cannot be negative.
     * @param value the value to add.
     * @param [labels = {}] key-values pairs that are associated with a specific
     *     metric that you want to record.
     */
    UpDownCounterMetric.prototype.add = function (value, labels) {
        if (labels === void 0) { labels = {}; }
        this.bind(labels).add(value);
    };
    return UpDownCounterMetric;
}(Metric));
export { UpDownCounterMetric };
//# sourceMappingURL=UpDownCounterMetric.js.map