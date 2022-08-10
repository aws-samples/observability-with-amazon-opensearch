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
exports.detectResources = void 0;
const Resource_1 = require("../../Resource");
/**
 * Detects resources for the browser platform, which is currently only the
 * telemetry SDK resource. More could be added in the future. This method
 * is async to match the signature of corresponding method for node.
 */
const detectResources = async () => {
    return Resource_1.Resource.empty();
};
exports.detectResources = detectResources;
//# sourceMappingURL=detect-resources.js.map