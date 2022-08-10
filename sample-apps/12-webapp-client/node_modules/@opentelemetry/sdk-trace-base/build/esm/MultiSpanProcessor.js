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
import { globalErrorHandler } from '@opentelemetry/core';
/**
 * Implementation of the {@link SpanProcessor} that simply forwards all
 * received events to a list of {@link SpanProcessor}s.
 */
var MultiSpanProcessor = /** @class */ (function () {
    function MultiSpanProcessor(_spanProcessors) {
        this._spanProcessors = _spanProcessors;
    }
    MultiSpanProcessor.prototype.forceFlush = function () {
        var promises = [];
        for (var _i = 0, _a = this._spanProcessors; _i < _a.length; _i++) {
            var spanProcessor = _a[_i];
            promises.push(spanProcessor.forceFlush());
        }
        return new Promise(function (resolve) {
            Promise.all(promises)
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                globalErrorHandler(error || new Error('MultiSpanProcessor: forceFlush failed'));
                resolve();
            });
        });
    };
    MultiSpanProcessor.prototype.onStart = function (span, context) {
        for (var _i = 0, _a = this._spanProcessors; _i < _a.length; _i++) {
            var spanProcessor = _a[_i];
            spanProcessor.onStart(span, context);
        }
    };
    MultiSpanProcessor.prototype.onEnd = function (span) {
        for (var _i = 0, _a = this._spanProcessors; _i < _a.length; _i++) {
            var spanProcessor = _a[_i];
            spanProcessor.onEnd(span);
        }
    };
    MultiSpanProcessor.prototype.shutdown = function () {
        var promises = [];
        for (var _i = 0, _a = this._spanProcessors; _i < _a.length; _i++) {
            var spanProcessor = _a[_i];
            promises.push(spanProcessor.shutdown());
        }
        return new Promise(function (resolve, reject) {
            Promise.all(promises).then(function () {
                resolve();
            }, reject);
        });
    };
    return MultiSpanProcessor;
}());
export { MultiSpanProcessor };
//# sourceMappingURL=MultiSpanProcessor.js.map