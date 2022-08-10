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
import { context, TraceFlags } from '@opentelemetry/api';
import { ExportResultCode, globalErrorHandler, suppressTracing, } from '@opentelemetry/core';
/**
 * An implementation of the {@link SpanProcessor} that converts the {@link Span}
 * to {@link ReadableSpan} and passes it to the configured exporter.
 *
 * Only spans that are sampled are converted.
 */
var SimpleSpanProcessor = /** @class */ (function () {
    function SimpleSpanProcessor(_exporter) {
        this._exporter = _exporter;
        this._isShutdown = false;
        this._shuttingDownPromise = Promise.resolve();
    }
    SimpleSpanProcessor.prototype.forceFlush = function () {
        // do nothing as all spans are being exported without waiting
        return Promise.resolve();
    };
    // does nothing.
    SimpleSpanProcessor.prototype.onStart = function (_span) { };
    SimpleSpanProcessor.prototype.onEnd = function (span) {
        var _this = this;
        if (this._isShutdown) {
            return;
        }
        if ((span.spanContext().traceFlags & TraceFlags.SAMPLED) === 0) {
            return;
        }
        // prevent downstream exporter calls from generating spans
        context.with(suppressTracing(context.active()), function () {
            _this._exporter.export([span], function (result) {
                var _a;
                if (result.code !== ExportResultCode.SUCCESS) {
                    globalErrorHandler((_a = result.error) !== null && _a !== void 0 ? _a : new Error("SimpleSpanProcessor: span export failed (status " + result + ")"));
                }
            });
        });
    };
    SimpleSpanProcessor.prototype.shutdown = function () {
        var _this = this;
        if (this._isShutdown) {
            return this._shuttingDownPromise;
        }
        this._isShutdown = true;
        this._shuttingDownPromise = new Promise(function (resolve, reject) {
            Promise.resolve()
                .then(function () {
                return _this._exporter.shutdown();
            })
                .then(resolve)
                .catch(function (e) {
                reject(e);
            });
        });
        return this._shuttingDownPromise;
    };
    return SimpleSpanProcessor;
}());
export { SimpleSpanProcessor };
//# sourceMappingURL=SimpleSpanProcessor.js.map