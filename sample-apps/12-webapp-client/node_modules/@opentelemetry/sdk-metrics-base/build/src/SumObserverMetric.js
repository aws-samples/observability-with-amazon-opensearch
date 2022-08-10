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
exports.SumObserverMetric = void 0;
const BaseObserverMetric_1 = require("./BaseObserverMetric");
const types_1 = require("./export/types");
/** This is a SDK implementation of SumObserver Metric. */
class SumObserverMetric extends BaseObserverMetric_1.BaseObserverMetric {
    constructor(name, options, processor, resource, instrumentationLibrary, callback) {
        super(name, options, processor, resource, types_1.MetricKind.SUM_OBSERVER, instrumentationLibrary, callback);
    }
    _processResults(observerResult) {
        observerResult.values.forEach((value, labels) => {
            const instrument = this.bind(labels);
            // SumObserver is monotonic which means it should only accept values
            // greater or equal then previous value
            const previous = instrument.getAggregator().toPoint();
            let previousValue = -Infinity;
            if (previous.timestamp[0] !== 0 || previous.timestamp[1] !== 0) {
                previousValue = previous.value;
            }
            if (value >= previousValue) {
                instrument.update(value);
            }
        });
    }
}
exports.SumObserverMetric = SumObserverMetric;
//# sourceMappingURL=SumObserverMetric.js.map