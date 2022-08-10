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
const OTLPExporterBrowserBase_1 = require("./OTLPExporterBrowserBase");
const transform_1 = require("../../transform");
const core_1 = require("@opentelemetry/core");
const util_1 = require("../../util");
const DEFAULT_COLLECTOR_RESOURCE_PATH = '/v1/traces';
const DEFAULT_COLLECTOR_URL = `http://localhost:55681${DEFAULT_COLLECTOR_RESOURCE_PATH}`;
/**
 * Collector Trace Exporter for Web
 */
class OTLPTraceExporter extends OTLPExporterBrowserBase_1.OTLPExporterBrowserBase {
    constructor(config = {}) {
        super(config);
        this._headers = Object.assign(this._headers, core_1.baggageUtils.parseKeyPairsIntoRecord(core_1.getEnv().OTEL_EXPORTER_OTLP_TRACES_HEADERS));
    }
    convert(spans) {
        return transform_1.toOTLPExportTraceServiceRequest(spans, this, true);
    }
    getDefaultUrl(config) {
        return typeof config.url === 'string'
            ? config.url
            : core_1.getEnv().OTEL_EXPORTER_OTLP_TRACES_ENDPOINT.length > 0
                ? core_1.getEnv().OTEL_EXPORTER_OTLP_TRACES_ENDPOINT
                : core_1.getEnv().OTEL_EXPORTER_OTLP_ENDPOINT.length > 0
                    ? util_1.appendResourcePathToUrlIfNotPresent(core_1.getEnv().OTEL_EXPORTER_OTLP_ENDPOINT, DEFAULT_COLLECTOR_RESOURCE_PATH)
                    : DEFAULT_COLLECTOR_URL;
    }
}
exports.OTLPTraceExporter = OTLPTraceExporter;
//# sourceMappingURL=OTLPTraceExporter.js.map