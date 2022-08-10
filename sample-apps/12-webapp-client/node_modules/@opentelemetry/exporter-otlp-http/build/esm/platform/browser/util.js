var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import * as otlpTypes from '../../types';
/**
 * Send metrics/spans using browser navigator.sendBeacon
 * @param body
 * @param onSuccess
 * @param onError
 */
export function sendWithBeacon(body, url, blobPropertyBag, onSuccess, onError) {
    if (navigator.sendBeacon(url, new Blob([body], blobPropertyBag))) {
        diag.debug('sendBeacon - can send', body);
        onSuccess();
    }
    else {
        var error = new otlpTypes.OTLPExporterError("sendBeacon - cannot send " + body);
        onError(error);
    }
}
/**
 * function to send metrics/spans using browser XMLHttpRequest
 *     used when navigator.sendBeacon is not available
 * @param body
 * @param onSuccess
 * @param onError
 */
export function sendWithXhr(body, url, headers, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    var defaultHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    Object.entries(__assign(__assign({}, defaultHeaders), headers)).forEach(function (_a) {
        var k = _a[0], v = _a[1];
        xhr.setRequestHeader(k, v);
    });
    xhr.send(body);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status >= 200 && xhr.status <= 299) {
                diag.debug('xhr success', body);
                onSuccess();
            }
            else {
                var error = new otlpTypes.OTLPExporterError("Failed to export with XHR (status: " + xhr.status + ")", xhr.status);
                onError(error);
            }
        }
    };
}
//# sourceMappingURL=util.js.map