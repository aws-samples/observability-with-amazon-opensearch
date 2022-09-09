// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { isDevelopment } from '../../is-development';
import { warnOnce } from '../../logging';
export default function checkControlled(componentName, propertyName, propertyValue, handlerName, handlerValue) {
    if (propertyValue !== undefined && handlerValue === undefined && isDevelopment) {
        warnOnce(componentName, "You provided `".concat(propertyName, "` prop without an `").concat(handlerName, "` handler. This will render a read-only component. If the component should be mutable, set an `").concat(handlerName, "` handler."));
    }
}
//# sourceMappingURL=index.js.map