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
exports.ValueRecorderMetric = void 0;
const BoundInstrument_1 = require("./BoundInstrument");
const types_1 = require("./export/types");
const Metric_1 = require("./Metric");
/** This is a SDK implementation of Value Recorder Metric. */
class ValueRecorderMetric extends Metric_1.Metric {
    constructor(name, options, _processor, resource, instrumentationLibrary) {
        super(name, options, types_1.MetricKind.VALUE_RECORDER, resource, instrumentationLibrary);
        this._processor = _processor;
    }
    _makeInstrument(labels) {
        return new BoundInstrument_1.BoundValueRecorder(labels, this._disabled, this._valueType, this._processor.aggregatorFor(this._descriptor));
    }
    record(value, labels = {}) {
        this.bind(labels).record(value);
    }
}
exports.ValueRecorderMetric = ValueRecorderMetric;
//# sourceMappingURL=ValueRecorderMetric.js.map