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
exports.Span = void 0;
const api = require("@opentelemetry/api");
const core_1 = require("@opentelemetry/core");
const semantic_conventions_1 = require("@opentelemetry/semantic-conventions");
const enums_1 = require("./enums");
/**
 * This class represents a span.
 */
class Span {
    /** Constructs a new Span instance. */
    constructor(parentTracer, context, spanName, spanContext, kind, parentSpanId, links = [], startTime = core_1.hrTime()) {
        this.attributes = {};
        this.links = [];
        this.events = [];
        this.status = {
            code: api.SpanStatusCode.UNSET,
        };
        this.endTime = [0, 0];
        this._ended = false;
        this._duration = [-1, -1];
        this.name = spanName;
        this._spanContext = spanContext;
        this.parentSpanId = parentSpanId;
        this.kind = kind;
        this.links = links;
        this.startTime = core_1.timeInputToHrTime(startTime);
        this.resource = parentTracer.resource;
        this.instrumentationLibrary = parentTracer.instrumentationLibrary;
        this._spanLimits = parentTracer.getSpanLimits();
        this._spanProcessor = parentTracer.getActiveSpanProcessor();
        this._spanProcessor.onStart(this, context);
        this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0;
    }
    spanContext() {
        return this._spanContext;
    }
    setAttribute(key, value) {
        if (value == null || this._isSpanEnded())
            return this;
        if (key.length === 0) {
            api.diag.warn(`Invalid attribute key: ${key}`);
            return this;
        }
        if (!core_1.isAttributeValue(value)) {
            api.diag.warn(`Invalid attribute value set for key: ${key}`);
            return this;
        }
        if (Object.keys(this.attributes).length >=
            this._spanLimits.attributeCountLimit &&
            !Object.prototype.hasOwnProperty.call(this.attributes, key)) {
            return this;
        }
        this.attributes[key] = this._truncateToSize(value);
        return this;
    }
    setAttributes(attributes) {
        for (const [k, v] of Object.entries(attributes)) {
            this.setAttribute(k, v);
        }
        return this;
    }
    /**
     *
     * @param name Span Name
     * @param [attributesOrStartTime] Span attributes or start time
     *     if type is {@type TimeInput} and 3rd param is undefined
     * @param [startTime] Specified start time for the event
     */
    addEvent(name, attributesOrStartTime, startTime) {
        if (this._isSpanEnded())
            return this;
        if (this.events.length >= this._spanLimits.eventCountLimit) {
            api.diag.warn('Dropping extra events.');
            this.events.shift();
        }
        if (core_1.isTimeInput(attributesOrStartTime)) {
            if (typeof startTime === 'undefined') {
                startTime = attributesOrStartTime;
            }
            attributesOrStartTime = undefined;
        }
        if (typeof startTime === 'undefined') {
            startTime = core_1.hrTime();
        }
        this.events.push({
            name,
            attributes: attributesOrStartTime,
            time: core_1.timeInputToHrTime(startTime),
        });
        return this;
    }
    setStatus(status) {
        if (this._isSpanEnded())
            return this;
        this.status = status;
        return this;
    }
    updateName(name) {
        if (this._isSpanEnded())
            return this;
        this.name = name;
        return this;
    }
    end(endTime = core_1.hrTime()) {
        if (this._isSpanEnded()) {
            api.diag.error('You can only call end() on a span once.');
            return;
        }
        this._ended = true;
        this.endTime = core_1.timeInputToHrTime(endTime);
        this._duration = core_1.hrTimeDuration(this.startTime, this.endTime);
        if (this._duration[0] < 0) {
            api.diag.warn('Inconsistent start and end time, startTime > endTime', this.startTime, this.endTime);
        }
        this._spanProcessor.onEnd(this);
    }
    isRecording() {
        return this._ended === false;
    }
    recordException(exception, time = core_1.hrTime()) {
        const attributes = {};
        if (typeof exception === 'string') {
            attributes[semantic_conventions_1.SemanticAttributes.EXCEPTION_MESSAGE] = exception;
        }
        else if (exception) {
            if (exception.code) {
                attributes[semantic_conventions_1.SemanticAttributes.EXCEPTION_TYPE] = exception.code.toString();
            }
            else if (exception.name) {
                attributes[semantic_conventions_1.SemanticAttributes.EXCEPTION_TYPE] = exception.name;
            }
            if (exception.message) {
                attributes[semantic_conventions_1.SemanticAttributes.EXCEPTION_MESSAGE] = exception.message;
            }
            if (exception.stack) {
                attributes[semantic_conventions_1.SemanticAttributes.EXCEPTION_STACKTRACE] = exception.stack;
            }
        }
        // these are minimum requirements from spec
        if (attributes[semantic_conventions_1.SemanticAttributes.EXCEPTION_TYPE] ||
            attributes[semantic_conventions_1.SemanticAttributes.EXCEPTION_MESSAGE]) {
            this.addEvent(enums_1.ExceptionEventName, attributes, time);
        }
        else {
            api.diag.warn(`Failed to record an exception ${exception}`);
        }
    }
    get duration() {
        return this._duration;
    }
    get ended() {
        return this._ended;
    }
    _isSpanEnded() {
        if (this._ended) {
            api.diag.warn(`Can not execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`);
        }
        return this._ended;
    }
    // Utility function to truncate given value within size
    // for value type of string, will truncate to given limit
    // for type of non-string, will return same value
    _truncateToLimitUtil(value, limit) {
        if (value.length <= limit) {
            return value;
        }
        return value.substr(0, limit);
    }
    /**
     * If the given attribute value is of type string and has more characters than given {@code attributeValueLengthLimit} then
     * return string with trucated to {@code attributeValueLengthLimit} characters
     *
     * If the given attribute value is array of strings then
     * return new array of strings with each element truncated to {@code attributeValueLengthLimit} characters
     *
     * Otherwise return same Attribute {@code value}
     *
     * @param value Attribute value
     * @returns truncated attribute value if required, otherwise same value
     */
    _truncateToSize(value) {
        const limit = this._attributeValueLengthLimit;
        // Check limit
        if (limit <= 0) {
            // Negative values are invalid, so do not truncate
            api.diag.warn(`Attribute value limit must be positive, got ${limit}`);
            return value;
        }
        // String
        if (typeof value === 'string') {
            return this._truncateToLimitUtil(value, limit);
        }
        // Array of strings
        if (Array.isArray(value)) {
            return value.map(val => typeof val === 'string' ? this._truncateToLimitUtil(val, limit) : val);
        }
        // Other types, no need to apply value length limit
        return value;
    }
}
exports.Span = Span;
//# sourceMappingURL=Span.js.map