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
exports.OTLPTraceExporter = void 0;
const OTLPExporterNodeBase_1 = require("./OTLPExporterNodeBase");
const exporter_otlp_http_1 = require("@opentelemetry/exporter-otlp-http");
const types_1 = require("./types");
const core_1 = require("@opentelemetry/core");
const util_1 = require("./util");
const grpc_js_1 = require("@grpc/grpc-js");
const DEFAULT_COLLECTOR_URL = 'localhost:4317';
/**
 * OTLP Trace Exporter for Node
 */
class OTLPTraceExporter extends OTLPExporterNodeBase_1.OTLPExporterNodeBase {
    constructor(config = {}) {
        super(config);
        const headers = core_1.baggageUtils.parseKeyPairsIntoRecord(core_1.getEnv().OTEL_EXPORTER_OTLP_TRACES_HEADERS);
        this.metadata || (this.metadata = new grpc_js_1.Metadata());
        for (const [k, v] of Object.entries(headers)) {
            this.metadata.set(k, v);
        }
    }
    convert(spans) {
        return exporter_otlp_http_1.toOTLPExportTraceServiceRequest(spans, this);
    }
    getDefaultUrl(config) {
        return typeof config.url === 'string'
            ? util_1.validateAndNormalizeUrl(config.url)
            : core_1.getEnv().OTEL_EXPORTER_OTLP_TRACES_ENDPOINT.length > 0
                ? util_1.validateAndNormalizeUrl(core_1.getEnv().OTEL_EXPORTER_OTLP_TRACES_ENDPOINT)
                : core_1.getEnv().OTEL_EXPORTER_OTLP_ENDPOINT.length > 0
                    ? util_1.validateAndNormalizeUrl(core_1.getEnv().OTEL_EXPORTER_OTLP_ENDPOINT)
                    : DEFAULT_COLLECTOR_URL;
    }
    getServiceClientType() {
        return types_1.ServiceClientType.SPANS;
    }
    getServiceProtoPath() {
        return 'opentelemetry/proto/collector/trace/v1/trace_service.proto';
    }
}
exports.OTLPTraceExporter = OTLPTraceExporter;
//# sourceMappingURL=OTLPTraceExporter.js.map