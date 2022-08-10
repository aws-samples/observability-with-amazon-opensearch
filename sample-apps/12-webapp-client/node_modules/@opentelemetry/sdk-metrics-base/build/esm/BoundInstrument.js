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
import { diag } from '@opentelemetry/api';
import * as api from '@opentelemetry/api-metrics';
/**
 * This class represent the base to BoundInstrument, which is responsible for generating
 * the TimeSeries.
 */
var BaseBoundInstrument = /** @class */ (function () {
    function BaseBoundInstrument(labels, _disabled, _valueType, _aggregator) {
        this._disabled = _disabled;
        this._valueType = _valueType;
        this._aggregator = _aggregator;
        this._labels = labels;
    }
    BaseBoundInstrument.prototype.update = function (value) {
        if (this._disabled)
            return;
        if (typeof value !== 'number') {
            diag.error("Metric cannot accept a non-number value for " + Object.values(this._labels) + ".");
            return;
        }
        if (this._valueType === api.ValueType.INT && !Number.isInteger(value)) {
            diag.warn("INT value type cannot accept a floating-point value for " + Object.values(this._labels) + ", ignoring the fractional digits.");
            value = Math.trunc(value);
        }
        this._aggregator.update(value);
    };
    BaseBoundInstrument.prototype.getLabels = function () {
        return this._labels;
    };
    BaseBoundInstrument.prototype.getAggregator = function () {
        return this._aggregator;
    };
    return BaseBoundInstrument;
}());
export { BaseBoundInstrument };
/**
 * BoundCounter allows the SDK to observe/record a single metric event. The
 * value of single instrument in the `Counter` associated with specified Labels.
 */
var BoundCounter = /** @class */ (function (_super) {
    __extends(BoundCounter, _super);
    function BoundCounter(labels, disabled, valueType, aggregator) {
        return _super.call(this, labels, disabled, valueType, aggregator) || this;
    }
    BoundCounter.prototype.add = function (value) {
        if (value < 0) {
            diag.error("Counter cannot descend for " + Object.values(this._labels));
            return;
        }
        this.update(value);
    };
    return BoundCounter;
}(BaseBoundInstrument));
export { BoundCounter };
/**
 * BoundUpDownCounter allows the SDK to observe/record a single metric event.
 * The value of single instrument in the `UpDownCounter` associated with
 * specified Labels.
 */
var BoundUpDownCounter = /** @class */ (function (_super) {
    __extends(BoundUpDownCounter, _super);
    function BoundUpDownCounter(labels, disabled, valueType, aggregator) {
        return _super.call(this, labels, disabled, valueType, aggregator) || this;
    }
    BoundUpDownCounter.prototype.add = function (value) {
        this.update(value);
    };
    return BoundUpDownCounter;
}(BaseBoundInstrument));
export { BoundUpDownCounter };
/**
 * BoundMeasure is an implementation of the {@link BoundMeasure} interface.
 */
var BoundValueRecorder = /** @class */ (function (_super) {
    __extends(BoundValueRecorder, _super);
    function BoundValueRecorder(labels, disabled, valueType, aggregator) {
        return _super.call(this, labels, disabled, valueType, aggregator) || this;
    }
    BoundValueRecorder.prototype.record = function (value) {
        this.update(value);
    };
    return BoundValueRecorder;
}(BaseBoundInstrument));
export { BoundValueRecorder };
/**
 * BoundObserver is an implementation of the {@link BoundObserver} interface.
 */
var BoundObserver = /** @class */ (function (_super) {
    __extends(BoundObserver, _super);
    function BoundObserver(labels, disabled, valueType, aggregator) {
        return _super.call(this, labels, disabled, valueType, aggregator) || this;
    }
    return BoundObserver;
}(BaseBoundInstrument));
export { BoundObserver };
//# sourceMappingURL=BoundInstrument.js.map