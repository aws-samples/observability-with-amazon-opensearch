import { HrTime, SpanAttributes } from '@opentelemetry/api';
/**
 * Represents a timed event.
 * A timed event is an event with a timestamp.
 */
export interface TimedEvent {
    time: HrTime;
    /** The name of the event. */
    name: string;
    /** The attributes of the event. */
    attributes?: SpanAttributes;
}
//# sourceMappingURL=TimedEvent.d.ts.map