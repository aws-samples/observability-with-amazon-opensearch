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
import * as api from '@opentelemetry/api';
import { RandomIdGenerator, sanitizeAttributes, isTracingSuppressed, } from '@opentelemetry/core';
import { Span } from './Span';
import { mergeConfig } from './utility';
/**
 * This class represents a basic tracer.
 */
var Tracer = /** @class */ (function () {
    /**
     * Constructs a new Tracer instance.
     */
    function Tracer(instrumentationLibrary, config, _tracerProvider) {
        this._tracerProvider = _tracerProvider;
        var localConfig = mergeConfig(config);
        this._sampler = localConfig.sampler;
        this._generalLimits = localConfig.generalLimits;
        this._spanLimits = localConfig.spanLimits;
        this._idGenerator = config.idGenerator || new RandomIdGenerator();
        this.resource = _tracerProvider.resource;
        this.instrumentationLibrary = instrumentationLibrary;
    }
    /**
     * Starts a new Span or returns the default NoopSpan based on the sampling
     * decision.
     */
    Tracer.prototype.startSpan = function (name, options, context) {
        var _a, _b;
        if (options === void 0) { options = {}; }
        if (context === void 0) { context = api.context.active(); }
        if (isTracingSuppressed(context)) {
            api.diag.debug('Instrumentation suppressed, returning Noop Span');
            return api.trace.wrapSpanContext(api.INVALID_SPAN_CONTEXT);
        }
        var parentContext = getParent(options, context);
        var spanId = this._idGenerator.generateSpanId();
        var traceId;
        var traceState;
        var parentSpanId;
        if (!parentContext || !api.trace.isSpanContextValid(parentContext)) {
            // New root span.
            traceId = this._idGenerator.generateTraceId();
        }
        else {
            // New child span.
            traceId = parentContext.traceId;
            traceState = parentContext.traceState;
            parentSpanId = parentContext.spanId;
        }
        var spanKind = (_a = options.kind) !== null && _a !== void 0 ? _a : api.SpanKind.INTERNAL;
        var links = (_b = options.links) !== null && _b !== void 0 ? _b : [];
        var attributes = sanitizeAttributes(options.attributes);
        // make sampling decision
        var samplingResult = this._sampler.shouldSample(options.root
            ? api.trace.setSpanContext(context, api.INVALID_SPAN_CONTEXT)
            : context, traceId, name, spanKind, attributes, links);
        var traceFlags = samplingResult.decision === api.SamplingDecision.RECORD_AND_SAMPLED
            ? api.TraceFlags.SAMPLED
            : api.TraceFlags.NONE;
        var spanContext = { traceId: traceId, spanId: spanId, traceFlags: traceFlags, traceState: traceState };
        if (samplingResult.decision === api.SamplingDecision.NOT_RECORD) {
            api.diag.debug('Recording is off, propagating context in a non-recording span');
            return api.trace.wrapSpanContext(spanContext);
        }
        var span = new Span(this, context, name, spanContext, spanKind, parentSpanId, links, options.startTime);
        // Set default attributes
        span.setAttributes(Object.assign(attributes, samplingResult.attributes));
        return span;
    };
    Tracer.prototype.startActiveSpan = function (name, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) {
            return;
        }
        else if (arguments.length === 2) {
            fn = arg2;
        }
        else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        }
        else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : api.context.active();
        var span = this.startSpan(name, opts, parentContext);
        var contextWithSpanSet = api.trace.setSpan(parentContext, span);
        return api.context.with(contextWithSpanSet, fn, undefined, span);
    };
    /** Returns the active {@link GeneralLimits}. */
    Tracer.prototype.getGeneralLimits = function () {
        return this._generalLimits;
    };
    /** Returns the active {@link SpanLimits}. */
    Tracer.prototype.getSpanLimits = function () {
        return this._spanLimits;
    };
    Tracer.prototype.getActiveSpanProcessor = function () {
        return this._tracerProvider.getActiveSpanProcessor();
    };
    return Tracer;
}());
export { Tracer };
/**
 * Get the parent to assign to a started span. If options.parent is null,
 * do not assign a parent.
 *
 * @param options span options
 * @param context context to check for parent
 */
function getParent(options, context) {
    if (options.root)
        return undefined;
    return api.trace.getSpanContext(context);
}
//# sourceMappingURL=Tracer.js.map