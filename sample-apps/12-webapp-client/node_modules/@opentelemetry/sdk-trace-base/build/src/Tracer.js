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
exports.Tracer = void 0;
const api = require("@opentelemetry/api");
const core_1 = require("@opentelemetry/core");
const Span_1 = require("./Span");
const utility_1 = require("./utility");
/**
 * This class represents a basic tracer.
 */
class Tracer {
    /**
     * Constructs a new Tracer instance.
     */
    constructor(instrumentationLibrary, config, _tracerProvider) {
        this._tracerProvider = _tracerProvider;
        const localConfig = utility_1.mergeConfig(config);
        this._sampler = localConfig.sampler;
        this._generalLimits = localConfig.generalLimits;
        this._spanLimits = localConfig.spanLimits;
        this._idGenerator = config.idGenerator || new core_1.RandomIdGenerator();
        this.resource = _tracerProvider.resource;
        this.instrumentationLibrary = instrumentationLibrary;
    }
    /**
     * Starts a new Span or returns the default NoopSpan based on the sampling
     * decision.
     */
    startSpan(name, options = {}, context = api.context.active()) {
        var _a, _b;
        if (core_1.isTracingSuppressed(context)) {
            api.diag.debug('Instrumentation suppressed, returning Noop Span');
            return api.trace.wrapSpanContext(api.INVALID_SPAN_CONTEXT);
        }
        const parentContext = getParent(options, context);
        const spanId = this._idGenerator.generateSpanId();
        let traceId;
        let traceState;
        let parentSpanId;
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
        const spanKind = (_a = options.kind) !== null && _a !== void 0 ? _a : api.SpanKind.INTERNAL;
        const links = (_b = options.links) !== null && _b !== void 0 ? _b : [];
        const attributes = core_1.sanitizeAttributes(options.attributes);
        // make sampling decision
        const samplingResult = this._sampler.shouldSample(options.root
            ? api.trace.setSpanContext(context, api.INVALID_SPAN_CONTEXT)
            : context, traceId, name, spanKind, attributes, links);
        const traceFlags = samplingResult.decision === api.SamplingDecision.RECORD_AND_SAMPLED
            ? api.TraceFlags.SAMPLED
            : api.TraceFlags.NONE;
        const spanContext = { traceId, spanId, traceFlags, traceState };
        if (samplingResult.decision === api.SamplingDecision.NOT_RECORD) {
            api.diag.debug('Recording is off, propagating context in a non-recording span');
            return api.trace.wrapSpanContext(spanContext);
        }
        const span = new Span_1.Span(this, context, name, spanContext, spanKind, parentSpanId, links, options.startTime);
        // Set default attributes
        span.setAttributes(Object.assign(attributes, samplingResult.attributes));
        return span;
    }
    startActiveSpan(name, arg2, arg3, arg4) {
        let opts;
        let ctx;
        let fn;
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
        const parentContext = ctx !== null && ctx !== void 0 ? ctx : api.context.active();
        const span = this.startSpan(name, opts, parentContext);
        const contextWithSpanSet = api.trace.setSpan(parentContext, span);
        return api.context.with(contextWithSpanSet, fn, undefined, span);
    }
    /** Returns the active {@link GeneralLimits}. */
    getGeneralLimits() {
        return this._generalLimits;
    }
    /** Returns the active {@link SpanLimits}. */
    getSpanLimits() {
        return this._spanLimits;
    }
    getActiveSpanProcessor() {
        return this._tracerProvider.getActiveSpanProcessor();
    }
}
exports.Tracer = Tracer;
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