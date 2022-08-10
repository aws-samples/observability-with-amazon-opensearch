/// <reference types="node" />
import type * as grpcJs from '@grpc/grpc-js';
import type { EventEmitter } from 'events';
import type { CALL_SPAN_ENDED } from './serverUtils';
/**
 * Server Unary callback type
 */
export declare type SendUnaryDataCallback<T> = grpcJs.requestCallback<T>;
/**
 * Intersection type of all grpc server call types
 */
export declare type ServerCall<T, U> = grpcJs.ServerUnaryCall<T, U> | grpcJs.ServerReadableStream<T, U> | grpcJs.ServerWritableStream<T, U> | grpcJs.ServerDuplexStream<T, U>;
/**
 * {@link ServerCall} ServerCall extended with misc. missing utility types
 */
export declare type ServerCallWithMeta<T, U> = ServerCall<T, U> & {
    metadata: grpcJs.Metadata;
};
/**
 * EventEmitter with span ended symbol indicator
 */
export declare type GrpcEmitter = EventEmitter & {
    [CALL_SPAN_ENDED]?: boolean;
};
/**
 * Grpc client callback function extended with missing utility types
 */
export declare type GrpcClientFunc = ((...args: unknown[]) => GrpcEmitter) & {
    path: string;
    requestStream: boolean;
    responseStream: boolean;
};
export declare type ServerRegisterFunction = typeof grpcJs.Server.prototype.register;
export declare type MakeClientConstructorFunction = typeof grpcJs.makeGenericClientConstructor;
export type { HandleCall } from '@grpc/grpc-js/build/src/server-call';
export type { PackageDefinition } from '@grpc/grpc-js/build/src/make-client';
//# sourceMappingURL=types.d.ts.map