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
import { OTLPExporterBase } from '../../OTLPExporterBase';
import { CompressionAlgorithm } from './types';
import { parseHeaders } from '../../util';
import { createHttpAgent, sendWithHttp } from './util';
import { diag } from '@opentelemetry/api';
import { getEnv, baggageUtils } from '@opentelemetry/core';
/**
 * Collector Metric Exporter abstract base class
 */
var OTLPExporterNodeBase = /** @class */ (function (_super) {
    __extends(OTLPExporterNodeBase, _super);
    function OTLPExporterNodeBase(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, config) || this;
        _this.DEFAULT_HEADERS = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (config.metadata) {
            diag.warn('Metadata cannot be set when using http');
        }
        _this.headers = Object.assign(_this.DEFAULT_HEADERS, parseHeaders(config.headers), baggageUtils.parseKeyPairsIntoRecord(getEnv().OTEL_EXPORTER_OTLP_HEADERS));
        _this.agent = createHttpAgent(config);
        _this.compression = config.compression || CompressionAlgorithm.NONE;
        return _this;
    }
    OTLPExporterNodeBase.prototype.onInit = function (_config) {
        this._isShutdown = false;
    };
    OTLPExporterNodeBase.prototype.send = function (objects, onSuccess, onError) {
        var _this = this;
        if (this._isShutdown) {
            diag.debug('Shutdown already started. Cannot send objects');
            return;
        }
        var serviceRequest = this.convert(objects);
        var promise = new Promise(function (resolve, reject) {
            sendWithHttp(_this, JSON.stringify(serviceRequest), 'application/json', resolve, reject);
        })
            .then(onSuccess, onError);
        this._sendingPromises.push(promise);
        var popPromise = function () {
            var index = _this._sendingPromises.indexOf(promise);
            _this._sendingPromises.splice(index, 1);
        };
        promise.then(popPromise, popPromise);
    };
    OTLPExporterNodeBase.prototype.onShutdown = function () { };
    return OTLPExporterNodeBase;
}(OTLPExporterBase));
export { OTLPExporterNodeBase };
//# sourceMappingURL=OTLPExporterNodeBase.js.map