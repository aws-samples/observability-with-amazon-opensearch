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
exports.PushController = exports.Controller = void 0;
const core_1 = require("@opentelemetry/core");
const DEFAULT_EXPORT_INTERVAL = 60000;
class Controller {
}
exports.Controller = Controller;
/** Controller organizes a periodic push of metric data. */
class PushController extends Controller {
    constructor(_meter, _exporter, interval = DEFAULT_EXPORT_INTERVAL) {
        super();
        this._meter = _meter;
        this._exporter = _exporter;
        this._timer = setInterval(() => {
            this._collect().catch(err => {
                core_1.globalErrorHandler(err);
            });
        }, interval);
        core_1.unrefTimer(this._timer);
    }
    shutdown() {
        clearInterval(this._timer);
        return this._collect();
    }
    async _collect() {
        await this._meter.collect();
        return new Promise(resolve => {
            this._exporter.export(this._meter.getProcessor().checkPointSet(), result => {
                var _a;
                if (result.code !== core_1.ExportResultCode.SUCCESS) {
                    core_1.globalErrorHandler((_a = result.error) !== null && _a !== void 0 ? _a : new Error('PushController: export failed in _collect'));
                }
                resolve();
            });
        });
    }
}
exports.PushController = PushController;
//# sourceMappingURL=Controller.js.map