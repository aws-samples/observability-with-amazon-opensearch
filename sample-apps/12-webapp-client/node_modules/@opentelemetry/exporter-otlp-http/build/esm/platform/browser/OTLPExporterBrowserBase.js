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
import { parseHeaders } from '../../util';
import { sendWithBeacon, sendWithXhr } from './util';
import { diag } from '@opentelemetry/api';
import { getEnv, baggageUtils } from '@opentelemetry/core';
/**
 * Collector Metric Exporter abstract base class
 */
var OTLPExporterBrowserBase = /** @class */ (function (_super) {
    __extends(OTLPExporterBrowserBase, _super);
    /**
     * @param config
     */
    function OTLPExporterBrowserBase(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, config) || this;
        _this._useXHR = false;
        _this._useXHR =
            !!config.headers || typeof navigator.sendBeacon !== 'function';
        if (_this._useXHR) {
            _this._headers = Object.assign({}, parseHeaders(config.headers), baggageUtils.parseKeyPairsIntoRecord(getEnv().OTEL_EXPORTER_OTLP_HEADERS));
        }
        else {
            _this._headers = {};
        }
        return _this;
    }
    OTLPExporterBrowserBase.prototype.onInit = function () {
        window.addEventListener('unload', this.shutdown);
    };
    OTLPExporterBrowserBase.prototype.onShutdown = function () {
        window.removeEventListener('unload', this.shutdown);
    };
    OTLPExporterBrowserBase.prototype.send = function (items, onSuccess, onError) {
        var _this = this;
        if (this._isShutdown) {
            diag.debug('Shutdown already started. Cannot send objects');
            return;
        }
        var serviceRequest = this.convert(items);
        var body = JSON.stringify(serviceRequest);
        var promise = new Promise(function (resolve, reject) {
            if (_this._useXHR) {
                sendWithXhr(body, _this.url, _this._headers, resolve, reject);
            }
            else {
                sendWithBeacon(body, _this.url, { type: 'application/json' }, resolve, reject);
            }
        })
            .then(onSuccess, onError);
        this._sendingPromises.push(promise);
        var popPromise = function () {
            var index = _this._sendingPromises.indexOf(promise);
            _this._sendingPromises.splice(index, 1);
        };
        promise.then(popPromise, popPromise);
    };
    return OTLPExporterBrowserBase;
}(OTLPExporterBase));
export { OTLPExporterBrowserBase };
//# sourceMappingURL=OTLPExporterBrowserBase.js.map