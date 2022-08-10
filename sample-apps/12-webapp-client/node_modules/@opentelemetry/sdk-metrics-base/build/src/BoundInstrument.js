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
exports.BoundObserver = exports.BoundValueRecorder = exports.BoundUpDownCounter = exports.BoundCounter = exports.BaseBoundInstrument = void 0;
const api_1 = require("@opentelemetry/api");
const api = require("@opentelemetry/api-metrics");
/**
 * This class represent the base to BoundInstrument, which is responsible for generating
 * the TimeSeries.
 */
class BaseBoundInstrument {
    constructor(labels, _disabled, _valueType, _aggregator) {
        this._disabled = _disabled;
        this._valueType = _valueType;
        this._aggregator = _aggregator;
        this._labels = labels;
    }
    update(value) {
        if (this._disabled)
            return;
        if (typeof value !== 'number') {
            api_1.diag.error(`Metric cannot accept a non-number value for ${Object.values(this._labels)}.`);
            return;
        }
        if (this._valueType === api.ValueType.INT && !Number.isInteger(value)) {
            api_1.diag.warn(`INT value type cannot accept a floating-point value for ${Object.values(this._labels)}, ignoring the fractional digits.`);
            value = Math.trunc(value);
        }
        this._aggregator.update(value);
    }
    getLabels() {
        return this._labels;
    }
    getAggregator() {
        return this._aggregator;
    }
}
exports.BaseBoundInstrument = BaseBoundInstrument;
/**
 * BoundCounter allows the SDK to observe/record a single metric event. The
 * value of single instrument in the `Counter` associated with specified Labels.
 */
class BoundCounter extends BaseBoundInstrument {
    constructor(labels, disabled, valueType, aggregator) {
        super(labels, disabled, valueType, aggregator);
    }
    add(value) {
        if (value < 0) {
            api_1.diag.error(`Counter cannot descend for ${Object.values(this._labels)}`);
            return;
        }
        this.update(value);
    }
}
exports.BoundCounter = BoundCounter;
/**
 * BoundUpDownCounter allows the SDK to observe/record a single metric event.
 * The value of single instrument in the `UpDownCounter` associated with
 * specified Labels.
 */
class BoundUpDownCounter extends BaseBoundInstrument {
    constructor(labels, disabled, valueType, aggregator) {
        super(labels, disabled, valueType, aggregator);
    }
    add(value) {
        this.update(value);
    }
}
exports.BoundUpDownCounter = BoundUpDownCounter;
/**
 * BoundMeasure is an implementation of the {@link BoundMeasure} interface.
 */
class BoundValueRecorder extends BaseBoundInstrument {
    constructor(labels, disabled, valueType, aggregator) {
        super(labels, disabled, valueType, aggregator);
    }
    record(value) {
        this.update(value);
    }
}
exports.BoundValueRecorder = BoundValueRecorder;
/**
 * BoundObserver is an implementation of the {@link BoundObserver} interface.
 */
class BoundObserver extends BaseBoundInstrument {
    constructor(labels, disabled, valueType, aggregator) {
        super(labels, disabled, valueType, aggregator);
    }
}
exports.BoundObserver = BoundObserver;
//# sourceMappingURL=BoundInstrument.js.map