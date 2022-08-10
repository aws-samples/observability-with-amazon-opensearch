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
exports.OTLPMetricExporter = void 0;
const exporter_otlp_http_1 = require("@opentelemetry/exporter-otlp-http");
const types_1 = require("./types");
const OTLPExporterNodeBase_1 = require("./OTLPExporterNodeBase");
const core_1 = require("@opentelemetry/core");
const util_1 = require("./util");
const grpc_js_1 = require("@grpc/grpc-js");
const DEFAULT_COLLECTOR_URL = 'localhost:4317';
/**
 * OTLP Metric Exporter for Node
 */
class OTLPMetricExporter extends OTLPExporterNodeBase_1.OTLPExporterNodeBase {
    constructor(config = {}) {
        super(config);
        // Converts time to nanoseconds
        this._startTime = new Date().getTime() * 1000000;
        const headers = core_1.baggageUtils.parseKeyPairsIntoRecord(core_1.getEnv().OTEL_EXPORTER_OTLP_METRICS_HEADERS);
        this.metadata || (this.metadata = new grpc_js_1.Metadata());
        for (const [k, v] of Object.entries(headers)) {
            this.metadata.set(k, v);
        }
    }
    convert(metrics) {
        return exporter_otlp_http_1.toOTLPExportMetricServiceRequest(metrics, this._startTime, this);
    }
    getDefaultUrl(config) {
        return typeof config.url === 'string'
            ? util_1.validateAndNormalizeUrl(config.url)
            : core_1.getEnv().OTEL_EXPORTER_OTLP_METRICS_ENDPOINT.length > 0
                ? util_1.validateAndNormalizeUrl(core_1.getEnv().OTEL_EXPORTER_OTLP_METRICS_ENDPOINT)
                : core_1.getEnv().OTEL_EXPORTER_OTLP_ENDPOINT.length > 0
                    ? util_1.validateAndNormalizeUrl(core_1.getEnv().OTEL_EXPORTER_OTLP_ENDPOINT)
                    : DEFAULT_COLLECTOR_URL;
    }
    getServiceClientType() {
        return types_1.ServiceClientType.METRICS;
    }
    getServiceProtoPath() {
        return 'opentelemetry/proto/collector/metrics/v1/metrics_service.proto';
    }
}
exports.OTLPMetricExporter = OTLPMetricExporter;
//# sourceMappingURL=OTLPMetricExporter.js.map