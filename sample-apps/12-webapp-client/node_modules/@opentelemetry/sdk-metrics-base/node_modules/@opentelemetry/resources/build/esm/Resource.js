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
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { SDK_INFO } from '@opentelemetry/core';
import { defaultServiceName } from './platform';
/**
 * A Resource describes the entity for which a signals (metrics or trace) are
 * collected.
 */
var Resource = /** @class */ (function () {
    function Resource(
    /**
     * A dictionary of attributes with string keys and values that provide
     * information about the entity as numbers, strings or booleans
     * TODO: Consider to add check/validation on attributes.
     */
    attributes) {
        this.attributes = attributes;
    }
    /**
     * Returns an empty Resource
     */
    Resource.empty = function () {
        return Resource.EMPTY;
    };
    /**
     * Returns a Resource that indentifies the SDK in use.
     */
    Resource.default = function () {
        var _a;
        return new Resource((_a = {},
            _a[SemanticResourceAttributes.SERVICE_NAME] = defaultServiceName(),
            _a[SemanticResourceAttributes.TELEMETRY_SDK_LANGUAGE] = SDK_INFO[SemanticResourceAttributes.TELEMETRY_SDK_LANGUAGE],
            _a[SemanticResourceAttributes.TELEMETRY_SDK_NAME] = SDK_INFO[SemanticResourceAttributes.TELEMETRY_SDK_NAME],
            _a[SemanticResourceAttributes.TELEMETRY_SDK_VERSION] = SDK_INFO[SemanticResourceAttributes.TELEMETRY_SDK_VERSION],
            _a));
    };
    /**
     * Returns a new, merged {@link Resource} by merging the current Resource
     * with the other Resource. In case of a collision, other Resource takes
     * precedence.
     *
     * @param other the Resource that will be merged with this.
     * @returns the newly merged Resource.
     */
    Resource.prototype.merge = function (other) {
        if (!other || !Object.keys(other.attributes).length)
            return this;
        // SpanAttributes from resource overwrite attributes from other resource.
        var mergedAttributes = Object.assign({}, this.attributes, other.attributes);
        return new Resource(mergedAttributes);
    };
    Resource.EMPTY = new Resource({});
    return Resource;
}());
export { Resource };
//# sourceMappingURL=Resource.js.map