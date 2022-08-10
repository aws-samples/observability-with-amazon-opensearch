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
exports.buildSamplerFromEnv = exports.DEFAULT_CONFIG = void 0;
const api_1 = require("@opentelemetry/api");
const core_1 = require("@opentelemetry/core");
const env = core_1.getEnv();
const FALLBACK_OTEL_TRACES_SAMPLER = core_1.TracesSamplerValues.AlwaysOn;
const DEFAULT_RATIO = 1;
/**
 * Default configuration. For fields with primitive values, any user-provided
 * value will override the corresponding default value. For fields with
 * non-primitive values (like `spanLimits`), the user-provided value will be
 * used to extend the default value.
 */
exports.DEFAULT_CONFIG = {
    sampler: buildSamplerFromEnv(env),
    forceFlushTimeoutMillis: 30000,
    generalLimits: {
        attributeValueLengthLimit: core_1.getEnv().OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
        attributeCountLimit: core_1.getEnv().OTEL_ATTRIBUTE_COUNT_LIMIT,
    },
    spanLimits: {
        attributeValueLengthLimit: core_1.getEnv().OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
        attributeCountLimit: core_1.getEnv().OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
        linkCountLimit: core_1.getEnv().OTEL_SPAN_LINK_COUNT_LIMIT,
        eventCountLimit: core_1.getEnv().OTEL_SPAN_EVENT_COUNT_LIMIT,
    },
};
/**
 * Based on environment, builds a sampler, complies with specification.
 * @param environment optional, by default uses getEnv(), but allows passing a value to reuse parsed environment
 */
function buildSamplerFromEnv(environment = core_1.getEnv()) {
    switch (environment.OTEL_TRACES_SAMPLER) {
        case core_1.TracesSamplerValues.AlwaysOn:
            return new core_1.AlwaysOnSampler();
        case core_1.TracesSamplerValues.AlwaysOff:
            return new core_1.AlwaysOffSampler();
        case core_1.TracesSamplerValues.ParentBasedAlwaysOn:
            return new core_1.ParentBasedSampler({
                root: new core_1.AlwaysOnSampler(),
            });
        case core_1.TracesSamplerValues.ParentBasedAlwaysOff:
            return new core_1.ParentBasedSampler({
                root: new core_1.AlwaysOffSampler(),
            });
        case core_1.TracesSamplerValues.TraceIdRatio:
            return new core_1.TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv(environment));
        case core_1.TracesSamplerValues.ParentBasedTraceIdRatio:
            return new core_1.ParentBasedSampler({
                root: new core_1.TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv(environment)),
            });
        default:
            api_1.diag.error(`OTEL_TRACES_SAMPLER value "${environment.OTEL_TRACES_SAMPLER} invalid, defaulting to ${FALLBACK_OTEL_TRACES_SAMPLER}".`);
            return new core_1.AlwaysOnSampler();
    }
}
exports.buildSamplerFromEnv = buildSamplerFromEnv;
function getSamplerProbabilityFromEnv(environment) {
    if (environment.OTEL_TRACES_SAMPLER_ARG === undefined ||
        environment.OTEL_TRACES_SAMPLER_ARG === '') {
        api_1.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${DEFAULT_RATIO}.`);
        return DEFAULT_RATIO;
    }
    const probability = Number(environment.OTEL_TRACES_SAMPLER_ARG);
    if (isNaN(probability)) {
        api_1.diag.error(`OTEL_TRACES_SAMPLER_ARG=${environment.OTEL_TRACES_SAMPLER_ARG} was given, but it is invalid, defaulting to ${DEFAULT_RATIO}.`);
        return DEFAULT_RATIO;
    }
    if (probability < 0 || probability > 1) {
        api_1.diag.error(`OTEL_TRACES_SAMPLER_ARG=${environment.OTEL_TRACES_SAMPLER_ARG} was given, but it is out of range ([0..1]), defaulting to ${DEFAULT_RATIO}.`);
        return DEFAULT_RATIO;
    }
    return probability;
}
//# sourceMappingURL=config.js.map