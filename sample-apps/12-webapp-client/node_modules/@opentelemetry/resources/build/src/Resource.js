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
exports.Resource = void 0;
const semantic_conventions_1 = require("@opentelemetry/semantic-conventions");
const core_1 = require("@opentelemetry/core");
const platform_1 = require("./platform");
/**
 * A Resource describes the entity for which a signals (metrics or trace) are
 * collected.
 */
class Resource {
    constructor(
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
    static empty() {
        return Resource.EMPTY;
    }
    /**
     * Returns a Resource that indentifies the SDK in use.
     */
    static default() {
        return new Resource({
            [semantic_conventions_1.SemanticResourceAttributes.SERVICE_NAME]: (0, platform_1.defaultServiceName)(),
            [semantic_conventions_1.SemanticResourceAttributes.TELEMETRY_SDK_LANGUAGE]: core_1.SDK_INFO[semantic_conventions_1.SemanticResourceAttributes.TELEMETRY_SDK_LANGUAGE],
            [semantic_conventions_1.SemanticResourceAttributes.TELEMETRY_SDK_NAME]: core_1.SDK_INFO[semantic_conventions_1.SemanticResourceAttributes.TELEMETRY_SDK_NAME],
            [semantic_conventions_1.SemanticResourceAttributes.TELEMETRY_SDK_VERSION]: core_1.SDK_INFO[semantic_conventions_1.SemanticResourceAttributes.TELEMETRY_SDK_VERSION],
        });
    }
    /**
     * Returns a new, merged {@link Resource} by merging the current Resource
     * with the other Resource. In case of a collision, other Resource takes
     * precedence.
     *
     * @param other the Resource that will be merged with this.
     * @returns the newly merged Resource.
     */
    merge(other) {
        if (!other || !Object.keys(other.attributes).length)
            return this;
        // SpanAttributes from resource overwrite attributes from other resource.
        const mergedAttributes = Object.assign({}, this.attributes, other.attributes);
        return new Resource(mergedAttributes);
    }
}
exports.Resource = Resource;
Resource.EMPTY = new Resource({});
//# sourceMappingURL=Resource.js.map