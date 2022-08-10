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
import { AggregatorKind, } from '../types';
import { hrTime } from '@opentelemetry/core';
/** Basic aggregator for LastValue which keeps the last recorded value. */
var LastValueAggregator = /** @class */ (function () {
    function LastValueAggregator() {
        this._current = 0;
        this._lastUpdateTime = [0, 0];
        this.kind = AggregatorKind.LAST_VALUE;
    }
    LastValueAggregator.prototype.update = function (value) {
        this._current = value;
        this._lastUpdateTime = hrTime();
    };
    LastValueAggregator.prototype.toPoint = function () {
        return {
            value: this._current,
            timestamp: this._lastUpdateTime,
        };
    };
    return LastValueAggregator;
}());
export { LastValueAggregator };
//# sourceMappingURL=LastValue.js.map