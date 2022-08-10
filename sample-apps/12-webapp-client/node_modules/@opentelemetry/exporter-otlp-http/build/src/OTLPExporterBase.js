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
exports.OTLPExporterBase = void 0;
const api_1 = require("@opentelemetry/api");
const core_1 = require("@opentelemetry/core");
/**
 * Collector Exporter abstract base class
 */
class OTLPExporterBase {
    /**
     * @param config
     */
    constructor(config = {}) {
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
    export(items, resultCallback) {
        if (this._isShutdown) {
            resultCallback({
                code: core_1.ExportResultCode.FAILED,
                error: new Error('Exporter has been shutdown'),
            });
            return;
        }
        if (this._sendingPromises.length >= this._concurrencyLimit) {
            resultCallback({
                code: core_1.ExportResultCode.FAILED,
                error: new Error('Concurrent export limit reached'),
            });
            return;
        }
        this._export(items)
            .then(() => {
            resultCallback({ code: core_1.ExportResultCode.SUCCESS });
        })
            .catch((error) => {
            resultCallback({ code: core_1.ExportResultCode.FAILED, error });
        });
    }
    _export(items) {
        return new Promise((resolve, reject) => {
            try {
                api_1.diag.debug('items to be sent', items);
                this.send(items, resolve, reject);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    /**
     * Shutdown the exporter.
     */
    shutdown() {
        if (this._isShutdown) {
            api_1.diag.debug('shutdown already started');
            return this._shuttingDownPromise;
        }
        this._isShutdown = true;
        api_1.diag.debug('shutdown started');
        this._shuttingDownPromise = new Promise((resolve, reject) => {
            Promise.resolve()
                .then(() => {
                return this.onShutdown();
            })
                .then(() => {
                return Promise.all(this._sendingPromises);
            })
                .then(() => {
                resolve();
            })
                .catch(e => {
                reject(e);
            });
        });
        return this._shuttingDownPromise;
    }
}
exports.OTLPExporterBase = OTLPExporterBase;
//# sourceMappingURL=OTLPExporterBase.js.map