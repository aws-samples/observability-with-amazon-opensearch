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
/**
 * Implementation of api BatchObserverResult
 */
var BatchObserverResult = /** @class */ (function () {
    function BatchObserverResult() {
        /**
         * Cancels the further updates.
         * This is used to prevent updating the value of result that took too
         * long to update. For example to avoid update after timeout.
         * See {@link BatchObserver.collect}
         */
        this.cancelled = false;
    }
    /**
     * used to save a callback that will be called after the observations are
     *     updated
     * @param [callback]
     */
    BatchObserverResult.prototype.onObserveCalled = function (callback) {
        this._callback = callback;
    };
    BatchObserverResult.prototype.observe = function (labels, observations) {
        var _this = this;
        if (this.cancelled || !this._callback) {
            return;
        }
        observations.forEach(function (observation) {
            observation.observer.bind(labels).update(observation.value);
        });
        if (!this._immediate) {
            this._immediate = setImmediate(function () {
                if (typeof _this._callback === 'function') {
                    _this._callback();
                    // prevent user from updating the values later if for any reason
                    // the observerBatchResult will be referenced and then try to use
                    _this._callback = undefined;
                }
            });
        }
    };
    return BatchObserverResult;
}());
export { BatchObserverResult };
//# sourceMappingURL=BatchObserverResult.js.map