var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as url from 'url';
import * as http from 'http';
import * as https from 'https';
import * as zlib from 'zlib';
import { Readable } from 'stream';
import * as otlpTypes from '../../types';
import { diag } from '@opentelemetry/api';
import { CompressionAlgorithm } from './types';
var gzip = zlib.createGzip();
/**
 * Sends data using http
 * @param collector
 * @param data
 * @param contentType
 * @param onSuccess
 * @param onError
 */
export function sendWithHttp(collector, data, contentType, onSuccess, onError) {
    var parsedUrl = new url.URL(collector.url);
    var options = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port,
        path: parsedUrl.pathname,
        method: 'POST',
        headers: __assign({ 'Content-Length': Buffer.byteLength(data), 'Content-Type': contentType }, collector.headers),
        agent: collector.agent,
    };
    var request = parsedUrl.protocol === 'http:' ? http.request : https.request;
    var req = request(options, function (res) {
        var responseData = '';
        res.on('data', function (chunk) { return (responseData += chunk); });
        res.on('end', function () {
            if (res.statusCode && res.statusCode < 299) {
                diag.debug("statusCode: " + res.statusCode, responseData);
                onSuccess();
            }
            else {
                var error = new otlpTypes.OTLPExporterError(res.statusMessage, res.statusCode, responseData);
                onError(error);
            }
        });
    });
    req.on('error', function (error) {
        onError(error);
    });
    switch (collector.compression) {
        case CompressionAlgorithm.GZIP: {
            req.setHeader('Content-Encoding', 'gzip');
            var dataStream = readableFromBuffer(data);
            dataStream.on('error', onError)
                .pipe(gzip).on('error', onError)
                .pipe(req);
            break;
        }
        default:
            req.write(data);
            req.end();
            break;
    }
}
function readableFromBuffer(buff) {
    var readable = new Readable();
    readable.push(buff);
    readable.push(null);
    return readable;
}
export function createHttpAgent(config) {
    if (config.httpAgentOptions && config.keepAlive === false) {
        diag.warn('httpAgentOptions is used only when keepAlive is true');
        return undefined;
    }
    if (config.keepAlive === false || !config.url)
        return undefined;
    try {
        var parsedUrl = new url.URL(config.url);
        var Agent = parsedUrl.protocol === 'http:' ? http.Agent : https.Agent;
        return new Agent(__assign({ keepAlive: true }, config.httpAgentOptions));
    }
    catch (err) {
        diag.error("collector exporter failed to create http agent. err: " + err.message);
        return undefined;
    }
}
//# sourceMappingURL=util.js.map