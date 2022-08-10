/// <reference types="node" />
import { Span, SpanAttributes } from '@opentelemetry/api';
import type * as http from 'http';
import type * as https from 'https';
import { ClientRequest, get, IncomingMessage, request, ServerResponse, RequestOptions } from 'http';
import * as url from 'url';
import { InstrumentationConfig } from '@opentelemetry/instrumentation';
export declare type IgnoreMatcher = string | RegExp | ((url: string) => boolean);
export declare type HttpCallback = (res: IncomingMessage) => void;
export declare type RequestFunction = typeof request;
export declare type GetFunction = typeof get;
export declare type HttpCallbackOptional = HttpCallback | undefined;
export declare type RequestSignature = [http.RequestOptions, HttpCallbackOptional] & HttpCallback;
export declare type HttpRequestArgs = Array<HttpCallbackOptional | RequestSignature>;
export declare type ParsedRequestOptions = (http.RequestOptions & Partial<url.UrlWithParsedQuery>) | http.RequestOptions;
export declare type Http = typeof http;
export declare type Https = typeof https;
export declare type Func<T> = (...args: any[]) => T;
export declare type ResponseEndArgs = [((() => void) | undefined)?] | [unknown, ((() => void) | undefined)?] | [unknown, string, ((() => void) | undefined)?];
export interface HttpCustomAttributeFunction {
    (span: Span, request: ClientRequest | IncomingMessage, response: IncomingMessage | ServerResponse): void;
}
export interface IgnoreIncomingRequestFunction {
    (request: IncomingMessage): boolean;
}
export interface IgnoreOutgoingRequestFunction {
    (request: RequestOptions): boolean;
}
export interface HttpRequestCustomAttributeFunction {
    (span: Span, request: ClientRequest | IncomingMessage): void;
}
export interface HttpResponseCustomAttributeFunction {
    (span: Span, response: IncomingMessage | ServerResponse): void;
}
export interface StartIncomingSpanCustomAttributeFunction {
    (request: IncomingMessage): SpanAttributes;
}
export interface StartOutgoingSpanCustomAttributeFunction {
    (request: RequestOptions): SpanAttributes;
}
/**
 * Options available for the HTTP instrumentation (see [documentation](https://github.com/open-telemetry/opentelemetry-js/tree/main/packages/opentelemetry-instrumentation-http#http-instrumentation-options))
 */
export interface HttpInstrumentationConfig extends InstrumentationConfig {
    /**
     * Not trace all incoming requests that match paths
     * @deprecated use `ignoreIncomingRequestHook` instead
     */
    ignoreIncomingPaths?: IgnoreMatcher[];
    /** Not trace all incoming requests that matched with custom function */
    ignoreIncomingRequestHook?: IgnoreIncomingRequestFunction;
    /**
     * Not trace all outgoing requests that match urls
     * @deprecated use `ignoreOutgoingRequestHook` instead
     */
    ignoreOutgoingUrls?: IgnoreMatcher[];
    /** Not trace all outgoing requests that matched with custom function */
    ignoreOutgoingRequestHook?: IgnoreOutgoingRequestFunction;
    /** Function for adding custom attributes after response is handled */
    applyCustomAttributesOnSpan?: HttpCustomAttributeFunction;
    /** Function for adding custom attributes before request is handled */
    requestHook?: HttpRequestCustomAttributeFunction;
    /** Function for adding custom attributes before response is handled */
    responseHook?: HttpResponseCustomAttributeFunction;
    /** Function for adding custom attributes before a span is started in incomingRequest */
    startIncomingSpanHook?: StartIncomingSpanCustomAttributeFunction;
    /** Function for adding custom attributes before a span is started in outgoingRequest */
    startOutgoingSpanHook?: StartOutgoingSpanCustomAttributeFunction;
    /** The primary server name of the matched virtual host. */
    serverName?: string;
    /** Require parent to create span for outgoing requests */
    requireParentforOutgoingSpans?: boolean;
    /** Require parent to create span for incoming requests */
    requireParentforIncomingSpans?: boolean;
    /** Map the following HTTP headers to span attributes. */
    headersToSpanAttributes?: {
        client?: {
            requestHeaders?: string[];
            responseHeaders?: string[];
        };
        server?: {
            requestHeaders?: string[];
            responseHeaders?: string[];
        };
    };
}
export interface Err extends Error {
    errno?: number;
    code?: string;
    path?: string;
    syscall?: string;
    stack?: string;
}
//# sourceMappingURL=types.d.ts.map