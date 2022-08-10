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
import * as aggregators from './aggregators';
import { MetricKind, } from './types';
/**
 * Base class for all processor types.
 *
 * The processor is responsible for storing the aggregators and aggregated
 * values received from updates from metrics in the meter. The stored values
 * will be sent to an exporter for exporting.
 */
var Processor = /** @class */ (function () {
    function Processor() {
        this._batchMap = new Map();
    }
    Processor.prototype.checkPointSet = function () {
        return Array.from(this._batchMap.values());
    };
    return Processor;
}());
export { Processor };
/**
 * Processor which retains all dimensions/labels. It accepts all records and
 * passes them for exporting.
 */
var UngroupedProcessor = /** @class */ (function (_super) {
    __extends(UngroupedProcessor, _super);
    function UngroupedProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UngroupedProcessor.prototype.aggregatorFor = function (metricDescriptor) {
        switch (metricDescriptor.metricKind) {
            case MetricKind.COUNTER:
            case MetricKind.UP_DOWN_COUNTER:
                return new aggregators.SumAggregator();
            case MetricKind.SUM_OBSERVER:
            case MetricKind.UP_DOWN_SUM_OBSERVER:
            case MetricKind.VALUE_OBSERVER:
                return new aggregators.LastValueAggregator();
            case MetricKind.VALUE_RECORDER:
                return new aggregators.HistogramAggregator(metricDescriptor.boundaries || [Infinity]);
            default:
                return new aggregators.LastValueAggregator();
        }
    };
    UngroupedProcessor.prototype.process = function (record) {
        var labels = Object.keys(record.labels)
            .map(function (k) { return k + "=" + record.labels[k]; })
            .join(',');
        this._batchMap.set(record.descriptor.name + labels, record);
    };
    return UngroupedProcessor;
}(Processor));
export { UngroupedProcessor };
//# sourceMappingURL=Processor.js.map