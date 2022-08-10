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
exports.hashLabels = exports.notNull = void 0;
/**
 * Type guard to remove nulls from arrays
 *
 * @param value value to be checked for null equality
 */
function notNull(value) {
    return value !== null;
}
exports.notNull = notNull;
/**
 * Converting the unordered labels into unique identifier string.
 * @param labels user provided unordered Labels.
 */
function hashLabels(labels) {
    let keys = Object.keys(labels);
    if (keys.length === 0)
        return '';
    keys = keys.sort();
    return keys.reduce((result, key) => {
        if (result.length > 2) {
            result += ',';
        }
        return (result += key + ':' + labels[key]);
    }, '|#');
}
exports.hashLabels = hashLabels;
//# sourceMappingURL=Utils.js.map