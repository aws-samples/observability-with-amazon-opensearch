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
import { diag } from '@opentelemetry/api';
import { getEnv } from '@opentelemetry/core';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { Resource, } from '../../../';
/**
 * EnvDetector can be used to detect the presence of and create a Resource
 * from the OTEL_RESOURCE_ATTRIBUTES environment variable.
 */
var EnvDetector = /** @class */ (function () {
    function EnvDetector() {
        // Type, attribute keys, and attribute values should not exceed 256 characters.
        this._MAX_LENGTH = 255;
        // OTEL_RESOURCE_ATTRIBUTES is a comma-separated list of attributes.
        this._COMMA_SEPARATOR = ',';
        // OTEL_RESOURCE_ATTRIBUTES contains key value pair separated by '='.
        this._LABEL_KEY_VALUE_SPLITTER = '=';
        this._ERROR_MESSAGE_INVALID_CHARS = 'should be a ASCII string with a length greater than 0 and not exceed ' +
            this._MAX_LENGTH +
            ' characters.';
        this._ERROR_MESSAGE_INVALID_VALUE = 'should be a ASCII string with a length not exceed ' +
            this._MAX_LENGTH +
            ' characters.';
    }
    /**
     * Returns a {@link Resource} populated with attributes from the
     * OTEL_RESOURCE_ATTRIBUTES environment variable. Note this is an async
     * function to conform to the Detector interface.
     *
     * @param config The resource detection config
     */
    EnvDetector.prototype.detect = function (_config) {
        return __awaiter(this, void 0, void 0, function () {
            var attributes, env, rawAttributes, serviceName, parsedAttributes;
            return __generator(this, function (_a) {
                attributes = {};
                env = getEnv();
                rawAttributes = env.OTEL_RESOURCE_ATTRIBUTES;
                serviceName = env.OTEL_SERVICE_NAME;
                if (rawAttributes) {
                    try {
                        parsedAttributes = this._parseResourceAttributes(rawAttributes);
                        Object.assign(attributes, parsedAttributes);
                    }
                    catch (e) {
                        diag.debug("EnvDetector failed: " + e.message);
                    }
                }
                if (serviceName) {
                    attributes[SemanticResourceAttributes.SERVICE_NAME] = serviceName;
                }
                return [2 /*return*/, new Resource(attributes)];
            });
        });
    };
    /**
     * Creates an attribute map from the OTEL_RESOURCE_ATTRIBUTES environment
     * variable.
     *
     * OTEL_RESOURCE_ATTRIBUTES: A comma-separated list of attributes describing
     * the source in more detail, e.g. “key1=val1,key2=val2”. Domain names and
     * paths are accepted as attribute keys. Values may be quoted or unquoted in
     * general. If a value contains whitespaces, =, or " characters, it must
     * always be quoted.
     *
     * @param rawEnvAttributes The resource attributes as a comma-seperated list
     * of key/value pairs.
     * @returns The sanitized resource attributes.
     */
    EnvDetector.prototype._parseResourceAttributes = function (rawEnvAttributes) {
        if (!rawEnvAttributes)
            return {};
        var attributes = {};
        var rawAttributes = rawEnvAttributes.split(this._COMMA_SEPARATOR, -1);
        for (var _i = 0, rawAttributes_1 = rawAttributes; _i < rawAttributes_1.length; _i++) {
            var rawAttribute = rawAttributes_1[_i];
            var keyValuePair = rawAttribute.split(this._LABEL_KEY_VALUE_SPLITTER, -1);
            if (keyValuePair.length !== 2) {
                continue;
            }
            var key = keyValuePair[0], value = keyValuePair[1];
            // Leading and trailing whitespaces are trimmed.
            key = key.trim();
            value = value.trim().split('^"|"$').join('');
            if (!this._isValidAndNotEmpty(key)) {
                throw new Error("Attribute key " + this._ERROR_MESSAGE_INVALID_CHARS);
            }
            if (!this._isValid(value)) {
                throw new Error("Attribute value " + this._ERROR_MESSAGE_INVALID_VALUE);
            }
            attributes[key] = value;
        }
        return attributes;
    };
    /**
     * Determines whether the given String is a valid printable ASCII string with
     * a length not exceed _MAX_LENGTH characters.
     *
     * @param str The String to be validated.
     * @returns Whether the String is valid.
     */
    EnvDetector.prototype._isValid = function (name) {
        return name.length <= this._MAX_LENGTH && this._isPrintableString(name);
    };
    EnvDetector.prototype._isPrintableString = function (str) {
        for (var i = 0; i < str.length; i++) {
            var ch = str.charAt(i);
            if (ch <= ' ' || ch >= '~') {
                return false;
            }
        }
        return true;
    };
    /**
     * Determines whether the given String is a valid printable ASCII string with
     * a length greater than 0 and not exceed _MAX_LENGTH characters.
     *
     * @param str The String to be validated.
     * @returns Whether the String is valid and not empty.
     */
    EnvDetector.prototype._isValidAndNotEmpty = function (str) {
        return str.length > 0 && this._isValid(str);
    };
    return EnvDetector;
}());
export var envDetector = new EnvDetector();
//# sourceMappingURL=EnvDetector.js.map