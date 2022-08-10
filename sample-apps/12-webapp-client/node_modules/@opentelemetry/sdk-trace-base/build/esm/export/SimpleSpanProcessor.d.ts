import { Span } from '../Span';
import { SpanProcessor } from '../SpanProcessor';
import { ReadableSpan } from './ReadableSpan';
import { SpanExporter } from './SpanExporter';
/**
 * An implementation of the {@link SpanProcessor} that converts the {@link Span}
 * to {@link ReadableSpan} and passes it to the configured exporter.
 *
 * Only spans that are sampled are converted.
 */
export declare class SimpleSpanProcessor implements SpanProcessor {
    private readonly _exporter;
    constructor(_exporter: SpanExporter);
    private _isShutdown;
    private _shuttingDownPromise;
    forceFlush(): Promise<void>;
    onStart(_span: Span): void;
    onEnd(span: ReadableSpan): void;
    shutdown(): Promise<void>;
}
//# sourceMappingURL=SimpleSpanProcessor.d.ts.map