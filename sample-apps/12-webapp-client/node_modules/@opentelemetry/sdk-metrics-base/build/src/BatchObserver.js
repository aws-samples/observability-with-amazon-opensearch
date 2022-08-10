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
exports.BatchObserver = void 0;
const api_1 = require("@opentelemetry/api");
const BatchObserverResult_1 = require("./BatchObserverResult");
const NOOP_CALLBACK = () => { };
const MAX_TIMEOUT_UPDATE_MS = 500;
/** This is a SDK implementation of Batch Observer. */
class BatchObserver {
    constructor(options, callback) {
        var _a;
        this._maxTimeoutUpdateMS =
            (_a = options.maxTimeoutUpdateMS) !== null && _a !== void 0 ? _a : MAX_TIMEOUT_UPDATE_MS;
        this._callback = callback || NOOP_CALLBACK;
    }
    collect() {
        api_1.diag.debug('getMetricRecord - start');
        return new Promise(resolve => {
            const observerResult = new BatchObserverResult_1.BatchObserverResult();
            // cancels after MAX_TIMEOUT_MS - no more waiting for results
            const timer = setTimeout(() => {
                observerResult.cancelled = true;
                // remove callback to prevent user from updating the values later if
                // for any reason the observerBatchResult will be referenced
                observerResult.onObserveCalled();
                resolve();
                api_1.diag.debug('getMetricRecord - timeout');
            }, this._maxTimeoutUpdateMS);
            // sets callback for each "observe" method
            observerResult.onObserveCalled(() => {
                clearTimeout(timer);
                resolve();
                api_1.diag.debug('getMetricRecord - end');
            });
            // calls the BatchObserverResult callback
            this._callback(observerResult);
        });
    }
}
exports.BatchObserver = BatchObserver;
//# sourceMappingURL=BatchObserver.js.map