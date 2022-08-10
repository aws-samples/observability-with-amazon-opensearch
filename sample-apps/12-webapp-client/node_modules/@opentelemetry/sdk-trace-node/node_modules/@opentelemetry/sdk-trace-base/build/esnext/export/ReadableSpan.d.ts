import { SpanKind, SpanStatus, SpanAttributes, HrTime, Link, SpanContext } from '@opentelemetry/api';
import { Resource } from '@opentelemetry/resources';
import { InstrumentationLibrary } from '@opentelemetry/core';
import { TimedEvent } from '../TimedEvent';
export interface ReadableSpan {
    readonly name: string;
    readonly kind: SpanKind;
    readonly spanContext: () => SpanContext;
    readonly parentSpanId?: string;
    readonly startTime: HrTime;
    readonly endTime: HrTime;
    readonly status: SpanStatus;
    readonly attributes: SpanAttributes;
    readonly links: Link[];
    readonly events: TimedEvent[];
    readonly duration: HrTime;
    readonly ended: boolean;
    readonly resource: Resource;
    readonly instrumentationLibrary: InstrumentationLibrary;
}
//# sourceMappingURL=ReadableSpan.d.ts.map