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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { OTLPExporterBrowserBase } from './OTLPExporterBrowserBase';
import { toOTLPExportTraceServiceRequest } from '../../transform';
import { getEnv, baggageUtils } from '@opentelemetry/core';
import { appendResourcePathToUrlIfNotPresent } from '../../util';
var DEFAULT_COLLECTOR_RESOURCE_PATH = '/v1/traces';
var DEFAULT_COLLECTOR_URL = "http://localhost:55681" + DEFAULT_COLLECTOR_RESOURCE_PATH;
/**
 * Collector Trace Exporter for Web
 */
var OTLPTraceExporter = /** @class */ (function (_super) {
    __extends(OTLPTraceExporter, _super);
    function OTLPTraceExporter(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, config) || this;
        _this._headers = Object.assign(_this._headers, baggageUtils.parseKeyPairsIntoRecord(getEnv().OTEL_EXPORTER_OTLP_TRACES_HEADERS));
        return _this;
    }
    OTLPTraceExporter.prototype.convert = function (spans) {
        return toOTLPExportTraceServiceRequest(spans, this, true);
    };
    OTLPTraceExporter.prototype.getDefaultUrl = function (config) {
        return typeof config.url === 'string'
            ? config.url
            : getEnv().OTEL_EXPORTER_OTLP_TRACES_ENDPOINT.length > 0
                ? getEnv().OTEL_EXPORTER_OTLP_TRACES_ENDPOINT
                : getEnv().OTEL_EXPORTER_OTLP_ENDPOINT.length > 0
                    ? appendResourcePathToUrlIfNotPresent(getEnv().OTEL_EXPORTER_OTLP_ENDPOINT, DEFAULT_COLLECTOR_RESOURCE_PATH)
                    : DEFAULT_COLLECTOR_URL;
    };
    return OTLPTraceExporter;
}(OTLPExporterBrowserBase));
export { OTLPTraceExporter };
//# sourceMappingURL=OTLPTraceExporter.js.map