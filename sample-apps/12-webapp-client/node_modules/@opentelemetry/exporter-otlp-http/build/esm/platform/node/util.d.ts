/// <reference types="node" />
import * as http from 'http';
import * as https from 'https';
import * as otlpTypes from '../../types';
import { OTLPExporterNodeBase } from './OTLPExporterNodeBase';
import { OTLPExporterNodeConfigBase } from '.';
/**
 * Sends data using http
 * @param collector
 * @param data
 * @param contentType
 * @param onSuccess
 * @param onError
 */
export declare function sendWithHttp<ExportItem, ServiceRequest>(collector: OTLPExporterNodeBase<ExportItem, ServiceRequest>, data: string | Buffer, contentType: string, onSuccess: () => void, onError: (error: otlpTypes.OTLPExporterError) => void): void;
export declare function createHttpAgent(config: OTLPExporterNodeConfigBase): http.Agent | https.Agent | undefined;
//# sourceMappingURL=util.d.ts.map