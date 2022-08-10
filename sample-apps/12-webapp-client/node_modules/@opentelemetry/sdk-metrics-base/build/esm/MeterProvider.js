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
import { Resource } from '@opentelemetry/resources';
import { Meter } from '.';
import { DEFAULT_CONFIG } from './types';
// eslint-disable-next-line @typescript-eslint/no-var-requires
var merge = require('lodash.merge');
/**
 * This class represents a meter provider which platform libraries can extend
 */
var MeterProvider = /** @class */ (function () {
    function MeterProvider(config) {
        if (config === void 0) { config = {}; }
        this._meters = new Map();
        this._shuttingDownPromise = Promise.resolve();
        this._isShutdown = false;
        var mergedConfig = merge({}, DEFAULT_CONFIG, config);
        this.resource = mergedConfig.resource || Resource.empty();
        this.resource = Resource.default().merge(this.resource);
        this._config = Object.assign({}, mergedConfig, {
            resource: this.resource,
        });
    }
    /**
     * Returns a Meter, creating one if one with the given name and version is not already created
     *
     * @returns Meter A Meter with the given name and version
     */
    MeterProvider.prototype.getMeter = function (name, version, config) {
        var key = name + "@" + (version || '');
        if (!this._meters.has(key)) {
            this._meters.set(key, new Meter({ name: name, version: version }, config || this._config));
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this._meters.get(key);
    };
    MeterProvider.prototype.shutdown = function () {
        var _this = this;
        if (this._isShutdown) {
            return this._shuttingDownPromise;
        }
        this._isShutdown = true;
        this._shuttingDownPromise = new Promise(function (resolve, reject) {
            Promise.resolve()
                .then(function () {
                return Promise.all(Array.from(_this._meters, function (_a) {
                    var _ = _a[0], meter = _a[1];
                    return meter.shutdown();
                }));
            })
                .then(function () {
                if (_this._config.exporter) {
                    return _this._config.exporter.shutdown();
                }
                return;
            })
                .then(resolve)
                .catch(function (e) {
                reject(e);
            });
        });
        return this._shuttingDownPromise;
    };
    return MeterProvider;
}());
export { MeterProvider };
//# sourceMappingURL=MeterProvider.js.map