// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { isDevelopment } from './is-development';
var messageCache = {};
export function warnOnce(component, message) {
    if (isDevelopment) {
        var warning = "[AwsUi] [".concat(component, "] ").concat(message);
        if (!messageCache[warning]) {
            messageCache[warning] = true;
            console.warn(warning);
        }
    }
}
//# sourceMappingURL=logging.js.map