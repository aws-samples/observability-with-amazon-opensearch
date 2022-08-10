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
import { OTLPExporterNodeBase } from './OTLPExporterNodeBase';
import { toOTLPExportMetricServiceRequest } from '../../transformMetrics';
import { getEnv, baggageUtils } from '@opentelemetry/core';
import { appendResourcePathToUrlIfNotPresent } from '../../util';
var DEFAULT_COLLECTOR_RESOURCE_PATH = '/v1/metrics';
var DEFAULT_COLLECTOR_URL = "http://localhost:55681" + DEFAULT_COLLECTOR_RESOURCE_PATH;
/**
 * Collector Metric Exporter for Node
 */
var OTLPMetricExporter = /** @class */ (function (_super) {
    __extends(OTLPMetricExporter, _super);
    function OTLPMetricExporter(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, config) || this;
        // Converts time to nanoseconds
        _this._startTime = new Date().getTime() * 1000000;
        _this.headers = Object.assign(_this.headers, baggageUtils.parseKeyPairsIntoRecord(getEnv().OTEL_EXPORTER_OTLP_METRICS_HEADERS));
        return _this;
    }
    OTLPMetricExporter.prototype.convert = function (metrics) {
        return toOTLPExportMetricServiceRequest(metrics, this._startTime, this);
    };
    OTLPMetricExporter.prototype.getDefaultUrl = function (config) {
        return typeof config.url === 'string'
            ? config.url
            : getEnv().OTEL_EXPORTER_OTLP_METRICS_ENDPOINT.length > 0
                ? getEnv().OTEL_EXPORTER_OTLP_METRICS_ENDPOINT
                : getEnv().OTEL_EXPORTER_OTLP_ENDPOINT.length > 0
                    ? appendResourcePathToUrlIfNotPresent(getEnv().OTEL_EXPORTER_OTLP_ENDPOINT, DEFAULT_COLLECTOR_RESOURCE_PATH)
                    : DEFAULT_COLLECTOR_URL;
    };
    return OTLPMetricExporter;
}(OTLPExporterNodeBase));
export { OTLPMetricExporter };
//# sourceMappingURL=OTLPMetricExporter.js.map