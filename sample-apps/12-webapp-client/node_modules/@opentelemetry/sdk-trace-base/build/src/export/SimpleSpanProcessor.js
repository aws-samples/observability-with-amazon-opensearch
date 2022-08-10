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
exports.SimpleSpanProcessor = void 0;
const api_1 = require("@opentelemetry/api");
const core_1 = require("@opentelemetry/core");
/**
 * An implementation of the {@link SpanProcessor} that converts the {@link Span}
 * to {@link ReadableSpan} and passes it to the configured exporter.
 *
 * Only spans that are sampled are converted.
 */
class SimpleSpanProcessor {
    constructor(_exporter) {
        this._exporter = _exporter;
        this._isShutdown = false;
        this._shuttingDownPromise = Promise.resolve();
    }
    forceFlush() {
        // do nothing as all spans are being exported without waiting
        return Promise.resolve();
    }
    // does nothing.
    onStart(_span) { }
    onEnd(span) {
        if (this._isShutdown) {
            return;
        }
        if ((span.spanContext().traceFlags & api_1.TraceFlags.SAMPLED) === 0) {
            return;
        }
        // prevent downstream exporter calls from generating spans
        api_1.context.with(core_1.suppressTracing(api_1.context.active()), () => {
            this._exporter.export([span], result => {
                var _a;
                if (result.code !== core_1.ExportResultCode.SUCCESS) {
                    core_1.globalErrorHandler((_a = result.error) !== null && _a !== void 0 ? _a : new Error(`SimpleSpanProcessor: span export failed (status ${result})`));
                }
            });
        });
    }
    shutdown() {
        if (this._isShutdown) {
            return this._shuttingDownPromise;
        }
        this._isShutdown = true;
        this._shuttingDownPromise = new Promise((resolve, reject) => {
            Promise.resolve()
                .then(() => {
                return this._exporter.shutdown();
            })
                .then(resolve)
                .catch(e => {
                reject(e);
            });
        });
        return this._shuttingDownPromise;
    }
}
exports.SimpleSpanProcessor = SimpleSpanProcessor;
//# sourceMappingURL=SimpleSpanProcessor.js.map