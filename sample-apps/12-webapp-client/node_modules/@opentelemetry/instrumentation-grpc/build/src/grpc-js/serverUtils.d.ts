/**
 * Symbol to include on grpc call if it has already emitted an error event.
 * grpc events that emit 'error' will also emit 'finish' and so only the
 * error event should be processed.
 */
import { Span } from '@opentelemetry/api';
import type * as grpcJs from '@grpc/grpc-js';
import type { ServerCallWithMeta, SendUnaryDataCallback, HandleCall } from './types';
import { IgnoreMatcher } from '../types';
export declare const CALL_SPAN_ENDED: unique symbol;
/**
 * Patch callback or EventEmitter provided by `originalFunc` and set appropriate `span`
 * properties based on its result.
 */
export declare function handleServerFunction<RequestType, ResponseType>(span: Span, type: string, originalFunc: HandleCall<RequestType, ResponseType>, call: ServerCallWithMeta<RequestType, ResponseType>, callback: SendUnaryDataCallback<unknown>): void;
/**
 * Does not patch any callbacks or EventEmitters to omit tracing on requests
 * that should not be traced.
 */
export declare function handleUntracedServerFunction<RequestType, ResponseType>(type: string, originalFunc: HandleCall<RequestType, ResponseType>, call: ServerCallWithMeta<RequestType, ResponseType>, callback: SendUnaryDataCallback<unknown>): void;
/**
 * Returns true if the server call should not be traced.
 */
export declare function shouldNotTraceServerCall(metadata: grpcJs.Metadata, methodName: string, ignoreGrpcMethods?: IgnoreMatcher[]): boolean;
//# sourceMappingURL=serverUtils.d.ts.map