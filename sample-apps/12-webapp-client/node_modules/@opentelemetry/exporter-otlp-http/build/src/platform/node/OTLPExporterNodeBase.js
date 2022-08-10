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
exports.OTLPExporterNodeBase = void 0;
const OTLPExporterBase_1 = require("../../OTLPExporterBase");
const types_1 = require("./types");
const util_1 = require("../../util");
const util_2 = require("./util");
const api_1 = require("@opentelemetry/api");
const core_1 = require("@opentelemetry/core");
/**
 * Collector Metric Exporter abstract base class
 */
class OTLPExporterNodeBase extends OTLPExporterBase_1.OTLPExporterBase {
    constructor(config = {}) {
        super(config);
        this.DEFAULT_HEADERS = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (config.metadata) {
            api_1.diag.warn('Metadata cannot be set when using http');
        }
        this.headers = Object.assign(this.DEFAULT_HEADERS, util_1.parseHeaders(config.headers), core_1.baggageUtils.parseKeyPairsIntoRecord(core_1.getEnv().OTEL_EXPORTER_OTLP_HEADERS));
        this.agent = util_2.createHttpAgent(config);
        this.compression = config.compression || types_1.CompressionAlgorithm.NONE;
    }
    onInit(_config) {
        this._isShutdown = false;
    }
    send(objects, onSuccess, onError) {
        if (this._isShutdown) {
            api_1.diag.debug('Shutdown already started. Cannot send objects');
            return;
        }
        const serviceRequest = this.convert(objects);
        const promise = new Promise((resolve, reject) => {
            util_2.sendWithHttp(this, JSON.stringify(serviceRequest), 'application/json', resolve, reject);
        })
            .then(onSuccess, onError);
        this._sendingPromises.push(promise);
        const popPromise = () => {
            const index = this._sendingPromises.indexOf(promise);
            this._sendingPromises.splice(index, 1);
        };
        promise.then(popPromise, popPromise);
    }
    onShutdown() { }
}
exports.OTLPExporterNodeBase = OTLPExporterNodeBase;
//# sourceMappingURL=OTLPExporterNodeBase.js.map