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
import { diag } from '@opentelemetry/api';
import { ExportResultCode } from '@opentelemetry/core';
/**
 * Collector Exporter abstract base class
 */
var OTLPExporterBase = /** @class */ (function () {
    /**
     * @param config
     */
    function OTLPExporterBase(config) {
        if (config === void 0) { config = {}; }
        this._isShutdown = false;
        this._shuttingDownPromise = Promise.resolve();
        this._sendingPromises = [];
        this.url = this.getDefaultUrl(config);
        if (typeof config.hostname === 'string') {
            this.hostname = config.hostname;
        }
        this.attributes = config.attributes;
        this.shutdown = this.shutdown.bind(this);
        this._concurrencyLimit =
            typeof config.concurrencyLimit === 'number'
                ? config.concurrencyLimit
                : Infinity;
        // platform dependent
        this.onInit(config);
    }
    /**
     * Export items.
     * @param items
     * @param resultCallback
     */
    OTLPExporterBase.prototype.export = function (items, resultCallback) {
        if (this._isShutdown) {
            resultCallback({
                code: ExportResultCode.FAILED,
                error: new Error('Exporter has been shutdown'),
            });
            return;
        }
        if (this._sendingPromises.length >= this._concurrencyLimit) {
            resultCallback({
                code: ExportResultCode.FAILED,
                error: new Error('Concurrent export limit reached'),
            });
            return;
        }
        this._export(items)
            .then(function () {
            resultCallback({ code: ExportResultCode.SUCCESS });
        })
            .catch(function (error) {
            resultCallback({ code: ExportResultCode.FAILED, error: error });
        });
    };
    OTLPExporterBase.prototype._export = function (items) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                diag.debug('items to be sent', items);
                _this.send(items, resolve, reject);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * Shutdown the exporter.
     */
    OTLPExporterBase.prototype.shutdown = function () {
        var _this = this;
        if (this._isShutdown) {
            diag.debug('shutdown already started');
            return this._shuttingDownPromise;
        }
        this._isShutdown = true;
        diag.debug('shutdown started');
        this._shuttingDownPromise = new Promise(function (resolve, reject) {
            Promise.resolve()
                .then(function () {
                return _this.onShutdown();
            })
                .then(function () {
                return Promise.all(_this._sendingPromises);
            })
                .then(function () {
                resolve();
            })
                .catch(function (e) {
                reject(e);
            });
        });
        return this._shuttingDownPromise;
    };
    return OTLPExporterBase;
}());
export { OTLPExporterBase };
//# sourceMappingURL=OTLPExporterBase.js.map