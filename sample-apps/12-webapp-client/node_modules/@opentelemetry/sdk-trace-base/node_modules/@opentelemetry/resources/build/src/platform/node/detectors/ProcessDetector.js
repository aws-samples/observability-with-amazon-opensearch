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
exports.processDetector = void 0;
const api_1 = require("@opentelemetry/api");
const semantic_conventions_1 = require("@opentelemetry/semantic-conventions");
const __1 = require("../../../");
/**
 * ProcessDetector will be used to detect the resources related current process running
 * and being instrumented from the NodeJS Process module.
 */
class ProcessDetector {
    async detect(config) {
        const processResource = {
            [semantic_conventions_1.SemanticResourceAttributes.PROCESS_PID]: process.pid,
            [semantic_conventions_1.SemanticResourceAttributes.PROCESS_EXECUTABLE_NAME]: process.title || '',
            [semantic_conventions_1.SemanticResourceAttributes.PROCESS_COMMAND]: process.argv[1] || '',
            [semantic_conventions_1.SemanticResourceAttributes.PROCESS_COMMAND_LINE]: process.argv.join(' ') || '',
        };
        return this._getResourceAttributes(processResource, config);
    }
    /**
     * Validates process resource attribute map from process varaibls
     *
     * @param processResource The unsantized resource attributes from process as key/value pairs.
     * @param config: Config
     * @returns The sanitized resource attributes.
     */
    _getResourceAttributes(processResource, _config) {
        if (processResource[semantic_conventions_1.SemanticResourceAttributes.PROCESS_EXECUTABLE_NAME] ===
            '' ||
            processResource[semantic_conventions_1.SemanticResourceAttributes.PROCESS_EXECUTABLE_PATH] ===
                '' ||
            processResource[semantic_conventions_1.SemanticResourceAttributes.PROCESS_COMMAND] === '' ||
            processResource[semantic_conventions_1.SemanticResourceAttributes.PROCESS_COMMAND_LINE] === '') {
            api_1.diag.debug('ProcessDetector failed: Unable to find required process resources. ');
            return __1.Resource.empty();
        }
        else {
            return new __1.Resource(Object.assign({}, processResource));
        }
    }
}
exports.processDetector = new ProcessDetector();
//# sourceMappingURL=ProcessDetector.js.map