"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAndNormalizeUrl = exports.send = exports.onInit = void 0;
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const api_1 = require("@opentelemetry/api");
const core_1 = require("@opentelemetry/core");
const path = require("path");
const url_1 = require("url");
const types_1 = require("./types");
function onInit(collector, config) {
    collector.grpcQueue = [];
    const credentials = config.credentials || grpc.credentials.createInsecure();
    const includeDirs = [path.resolve(__dirname, '..', 'protos')];
    protoLoader
        .load(collector.getServiceProtoPath(), {
        keepCase: false,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
        includeDirs,
    })
        .then(packageDefinition => {
        const packageObject = grpc.loadPackageDefinition(packageDefinition);
        if (collector.getServiceClientType() === types_1.ServiceClientType.SPANS) {
            collector.serviceClient =
                new packageObject.opentelemetry.proto.collector.trace.v1.TraceService(collector.url, credentials);
        }
        else {
            collector.serviceClient =
                new packageObject.opentelemetry.proto.collector.metrics.v1.MetricsService(collector.url, credentials);
        }
        if (collector.grpcQueue.length > 0) {
            const queue = collector.grpcQueue.splice(0);
            queue.forEach((item) => {
                collector.send(item.objects, item.onSuccess, item.onError);
            });
        }
    })
        .catch(err => {
        core_1.globalErrorHandler(err);
    });
}
exports.onInit = onInit;
function send(collector, objects, onSuccess, onError) {
    if (collector.serviceClient) {
        const serviceRequest = collector.convert(objects);
        collector.serviceClient.export(serviceRequest, collector.metadata || new grpc.Metadata(), (err) => {
            if (err) {
                api_1.diag.error('Service request', serviceRequest);
                onError(err);
            }
            else {
                api_1.diag.debug('Objects sent');
                onSuccess();
            }
        });
    }
    else {
        collector.grpcQueue.push({
            objects,
            onSuccess,
            onError,
        });
    }
}
exports.send = send;
function validateAndNormalizeUrl(url) {
    var _a;
    const hasProtocol = url.match(/^([\w]{1,8}):\/\//);
    if (!hasProtocol) {
        url = `https://${url}`;
    }
    const target = new url_1.URL(url);
    if (target.pathname && target.pathname !== '/') {
        api_1.diag.warn('URL path should not be set when using grpc, the path part of the URL will be ignored.');
    }
    if (target.protocol !== '' && !((_a = target.protocol) === null || _a === void 0 ? void 0 : _a.match(/(http|grpc)s?/))) {
        api_1.diag.warn('URL protocol should be http(s):// or grpc(s)://. Using grpc://.');
    }
    return target.host;
}
exports.validateAndNormalizeUrl = validateAndNormalizeUrl;
//# sourceMappingURL=util.js.map