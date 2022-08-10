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
exports.OTLPExporterBrowserBase = void 0;
const OTLPExporterBase_1 = require("../../OTLPExporterBase");
const util_1 = require("../../util");
const util_2 = require("./util");
const api_1 = require("@opentelemetry/api");
const core_1 = require("@opentelemetry/core");
/**
 * Collector Metric Exporter abstract base class
 */
class OTLPExporterBrowserBase extends OTLPExporterBase_1.OTLPExporterBase {
    /**
     * @param config
     */
    constructor(config = {}) {
        super(config);
        this._useXHR = false;
        this._useXHR =
            !!config.headers || typeof navigator.sendBeacon !== 'function';
        if (this._useXHR) {
            this._headers = Object.assign({}, util_1.parseHeaders(config.headers), core_1.baggageUtils.parseKeyPairsIntoRecord(core_1.getEnv().OTEL_EXPORTER_OTLP_HEADERS));
        }
        else {
            this._headers = {};
        }
    }
    onInit() {
        window.addEventListener('unload', this.shutdown);
    }
    onShutdown() {
        window.removeEventListener('unload', this.shutdown);
    }
    send(items, onSuccess, onError) {
        if (this._isShutdown) {
            api_1.diag.debug('Shutdown already started. Cannot send objects');
            return;
        }
        const serviceRequest = this.convert(items);
        const body = JSON.stringify(serviceRequest);
        const promise = new Promise((resolve, reject) => {
            if (this._useXHR) {
                util_2.sendWithXhr(body, this.url, this._headers, resolve, reject);
            }
            else {
                util_2.sendWithBeacon(body, this.url, { type: 'application/json' }, resolve, reject);
            }
        })
            .then(onSuccess, onError);
        this._sendingPromises.push(promise);
        const popPromise = () => {
            const index = this._sendingPromises.indexOf(promise);
            this._sendingPromises.splice(index, 1);
        };
        promise.then(popPromise, popPromise);
    }
}
exports.OTLPExporterBrowserBase = OTLPExporterBrowserBase;
//# sourceMappingURL=OTLPExporterBrowserBase.js.map