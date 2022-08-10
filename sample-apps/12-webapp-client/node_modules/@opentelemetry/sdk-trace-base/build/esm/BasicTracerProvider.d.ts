import { TracerProvider, TextMapPropagator } from '@opentelemetry/api';
import { Resource } from '@opentelemetry/resources';
import { SpanProcessor, Tracer } from '.';
import { SDKRegistrationConfig, TracerConfig } from './types';
import { SpanExporter } from './export/SpanExporter';
export declare type PROPAGATOR_FACTORY = () => TextMapPropagator;
export declare type EXPORTER_FACTORY = () => SpanExporter;
export declare enum ForceFlushState {
    'resolved' = 0,
    'timeout' = 1,
    'error' = 2,
    'unresolved' = 3
}
/**
 * This class represents a basic tracer provider which platform libraries can extend
 */
export declare class BasicTracerProvider implements TracerProvider {
    protected static readonly _registeredPropagators: Map<string, PROPAGATOR_FACTORY>;
    protected static readonly _registeredExporters: Map<string, EXPORTER_FACTORY>;
    private readonly _config;
    private readonly _registeredSpanProcessors;
    private readonly _tracers;
    activeSpanProcessor: SpanProcessor;
    readonly resource: Resource;
    constructor(config?: TracerConfig);
    getTracer(name: string, version?: string): Tracer;
    /**
     * Adds a new {@link SpanProcessor} to this tracer.
     * @param spanProcessor the new SpanProcessor to be added.
     */
    addSpanProcessor(spanProcessor: SpanProcessor): void;
    getActiveSpanProcessor(): SpanProcessor;
    /**
     * Register this TracerProvider for use with the OpenTelemetry API.
     * Undefined values may be replaced with defaults, and
     * null values will be skipped.
     *
     * @param config Configuration object for SDK registration
     */
    register(config?: SDKRegistrationConfig): void;
    forceFlush(): Promise<void>;
    shutdown(): Promise<void>;
    protected _getPropagator(name: string): TextMapPropagator | undefined;
    protected _getSpanExporter(name: string): SpanExporter | undefined;
    protected _buildPropagatorFromEnv(): TextMapPropagator | undefined;
    protected _buildExporterFromEnv(): SpanExporter | undefined;
}
//# sourceMappingURL=BasicTracerProvider.d.ts.map