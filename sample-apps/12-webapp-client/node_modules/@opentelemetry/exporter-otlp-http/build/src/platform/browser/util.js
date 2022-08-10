"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWithXhr = exports.sendWithBeacon = void 0;
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
const api_1 = require("@opentelemetry/api");
const otlpTypes = require("../../types");
/**
 * Send metrics/spans using browser navigator.sendBeacon
 * @param body
 * @param onSuccess
 * @param onError
 */
function sendWithBeacon(body, url, blobPropertyBag, onSuccess, onError) {
    if (navigator.sendBeacon(url, new Blob([body], blobPropertyBag))) {
        api_1.diag.debug('sendBeacon - can send', body);
        onSuccess();
    }
    else {
        const error = new otlpTypes.OTLPExporterError(`sendBeacon - cannot send ${body}`);
        onError(error);
    }
}
exports.sendWithBeacon = sendWithBeacon;
/**
 * function to send metrics/spans using browser XMLHttpRequest
 *     used when navigator.sendBeacon is not available
 * @param body
 * @param onSuccess
 * @param onError
 */
function sendWithXhr(body, url, headers, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    const defaultHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    Object.entries(Object.assign(Object.assign({}, defaultHeaders), headers)).forEach(([k, v]) => {
        xhr.setRequestHeader(k, v);
    });
    xhr.send(body);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status >= 200 && xhr.status <= 299) {
                api_1.diag.debug('xhr success', body);
                onSuccess();
            }
            else {
                const error = new otlpTypes.OTLPExporterError(`Failed to export with XHR (status: ${xhr.status})`, xhr.status);
                onError(error);
            }
        }
    };
}
exports.sendWithXhr = sendWithXhr;
//# sourceMappingURL=util.js.map