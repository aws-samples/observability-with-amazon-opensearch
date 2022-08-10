import * as api from '@opentelemetry/api';
import { InstrumentationLibrary } from '@opentelemetry/core';
import { Resource } from '@opentelemetry/resources';
import { ReadableSpan } from './export/ReadableSpan';
import { TimedEvent } from './TimedEvent';
import { Tracer } from './Tracer';
import { SpanAttributeValue, Context } from '@opentelemetry/api';
/**
 * This class represents a span.
 */
export declare class Span implements api.Span, ReadableSpan {
    private readonly _spanContext;
    readonly kind: api.SpanKind;
    readonly parentSpanId?: string;
    readonly attributes: api.SpanAttributes;
    readonly links: api.Link[];
    readonly events: TimedEvent[];
    readonly startTime: api.HrTime;
    readonly resource: Resource;
    readonly instrumentationLibrary: InstrumentationLibrary;
    name: string;
    status: api.SpanStatus;
    endTime: api.HrTime;
    private _ended;
    private _duration;
    private readonly _spanProcessor;
    private readonly _spanLimits;
    private readonly _attributeValueLengthLimit;
    /** Constructs a new Span instance. */
    constructor(parentTracer: Tracer, context: Context, spanName: string, spanContext: api.SpanContext, kind: api.SpanKind, parentSpanId?: string, links?: api.Link[], startTime?: api.TimeInput);
    spanContext(): api.SpanContext;
    setAttribute(key: string, value?: SpanAttributeValue): this;
    setAttributes(attributes: api.SpanAttributes): this;
    /**
     *
     * @param name Span Name
     * @param [attributesOrStartTime] Span attributes or start time
     *     if type is {@type TimeInput} and 3rd param is undefined
     * @param [startTime] Specified start time for the event
     */
    addEvent(name: string, attributesOrStartTime?: api.SpanAttributes | api.TimeInput, startTime?: api.TimeInput): this;
    setStatus(status: api.SpanStatus): this;
    updateName(name: string): this;
    end(endTime?: api.TimeInput): void;
    isRecording(): boolean;
    recordException(exception: api.Exception, time?: api.TimeInput): void;
    get duration(): api.HrTime;
    get ended(): boolean;
    private _isSpanEnded;
    private _truncateToLimitUtil;
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
    private _truncateToSize;
}
//# sourceMappingURL=Span.d.ts.map