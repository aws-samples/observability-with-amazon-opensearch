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
import { BaseObserverMetric } from './BaseObserverMetric';
import { MetricKind } from './export/types';
/** This is a SDK implementation of SumObserver Metric. */
var SumObserverMetric = /** @class */ (function (_super) {
    __extends(SumObserverMetric, _super);
    function SumObserverMetric(name, options, processor, resource, instrumentationLibrary, callback) {
        return _super.call(this, name, options, processor, resource, MetricKind.SUM_OBSERVER, instrumentationLibrary, callback) || this;
    }
    SumObserverMetric.prototype._processResults = function (observerResult) {
        var _this = this;
        observerResult.values.forEach(function (value, labels) {
            var instrument = _this.bind(labels);
            // SumObserver is monotonic which means it should only accept values
            // greater or equal then previous value
            var previous = instrument.getAggregator().toPoint();
            var previousValue = -Infinity;
            if (previous.timestamp[0] !== 0 || previous.timestamp[1] !== 0) {
                previousValue = previous.value;
            }
            if (value >= previousValue) {
                instrument.update(value);
            }
        });
    };
    return SumObserverMetric;
}(BaseObserverMetric));
export { SumObserverMetric };
//# sourceMappingURL=SumObserverMetric.js.map