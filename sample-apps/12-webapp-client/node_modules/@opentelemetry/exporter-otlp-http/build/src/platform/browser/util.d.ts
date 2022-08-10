import * as otlpTypes from '../../types';
/**
 * Send metrics/spans using browser navigator.sendBeacon
 * @param body
 * @param onSuccess
 * @param onError
 */
export declare function sendWithBeacon(body: string, url: string, blobPropertyBag: BlobPropertyBag, onSuccess: () => void, onError: (error: otlpTypes.OTLPExporterError) => void): void;
/**
 * function to send metrics/spans using browser XMLHttpRequest
 *     used when navigator.sendBeacon is not available
 * @param body
 * @param onSuccess
 * @param onError
 */
export declare function sendWithXhr(body: string, url: string, headers: Record<string, string>, onSuccess: () => void, onError: (error: otlpTypes.OTLPExporterError) => void): void;
//# sourceMappingURL=util.d.ts.map