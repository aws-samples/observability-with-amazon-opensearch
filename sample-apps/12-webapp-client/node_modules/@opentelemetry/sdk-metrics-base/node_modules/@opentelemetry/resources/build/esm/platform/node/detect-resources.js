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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Resource } from '../../Resource';
import { diag } from '@opentelemetry/api';
import * as util from 'util';
/**
 * Runs all resource detectors and returns the results merged into a single
 * Resource.
 *
 * @param config Configuration for resource detection
 */
export var detectResources = function (config) {
    if (config === void 0) { config = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var internalConfig, resources;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    internalConfig = Object.assign(config);
                    return [4 /*yield*/, Promise.all((internalConfig.detectors || []).map(function (d) { return __awaiter(void 0, void 0, void 0, function () {
                            var resource, e_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, d.detect(internalConfig)];
                                    case 1:
                                        resource = _a.sent();
                                        diag.debug(d.constructor.name + " found resource.", resource);
                                        return [2 /*return*/, resource];
                                    case 2:
                                        e_1 = _a.sent();
                                        diag.debug(d.constructor.name + " failed: " + e_1.message);
                                        return [2 /*return*/, Resource.empty()];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 1:
                    resources = _a.sent();
                    // Future check if verbose logging is enabled issue #1903
                    logResources(resources);
                    return [2 /*return*/, resources.reduce(function (acc, resource) { return acc.merge(resource); }, Resource.empty())];
            }
        });
    });
};
/**
 * Writes debug information about the detected resources to the logger defined in the resource detection config, if one is provided.
 *
 * @param resources The array of {@link Resource} that should be logged. Empty entried will be ignored.
 */
var logResources = function (resources) {
    resources.forEach(function (resource) {
        // Print only populated resources
        if (Object.keys(resource.attributes).length > 0) {
            var resourceDebugString = util.inspect(resource.attributes, {
                depth: 2,
                breakLength: Infinity,
                sorted: true,
                compact: false,
            });
            diag.verbose(resourceDebugString);
        }
    });
};
//# sourceMappingURL=detect-resources.js.map