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
import { diag } from '@opentelemetry/api';
import { BatchObserverResult } from './BatchObserverResult';
var NOOP_CALLBACK = function () { };
var MAX_TIMEOUT_UPDATE_MS = 500;
/** This is a SDK implementation of Batch Observer. */
var BatchObserver = /** @class */ (function () {
    function BatchObserver(options, callback) {
        var _a;
        this._maxTimeoutUpdateMS =
            (_a = options.maxTimeoutUpdateMS) !== null && _a !== void 0 ? _a : MAX_TIMEOUT_UPDATE_MS;
        this._callback = callback || NOOP_CALLBACK;
    }
    BatchObserver.prototype.collect = function () {
        var _this = this;
        diag.debug('getMetricRecord - start');
        return new Promise(function (resolve) {
            var observerResult = new BatchObserverResult();
            // cancels after MAX_TIMEOUT_MS - no more waiting for results
            var timer = setTimeout(function () {
                observerResult.cancelled = true;
                // remove callback to prevent user from updating the values later if
                // for any reason the observerBatchResult will be referenced
                observerResult.onObserveCalled();
                resolve();
                diag.debug('getMetricRecord - timeout');
            }, _this._maxTimeoutUpdateMS);
            // sets callback for each "observe" method
            observerResult.onObserveCalled(function () {
                clearTimeout(timer);
                resolve();
                diag.debug('getMetricRecord - end');
            });
            // calls the BatchObserverResult callback
            _this._callback(observerResult);
        });
    };
    return BatchObserver;
}());
export { BatchObserver };
//# sourceMappingURL=BatchObserver.js.map