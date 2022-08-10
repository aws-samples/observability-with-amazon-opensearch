// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { isDevelopment } from '../../internal/is-development';
import { warnOnce } from '../../internal/logging';
export function checkOptionValueField(componentName, propertyName, propertyValue) {
    if (isDevelopment) {
        if (!propertyValue) {
            return;
        }
        var valuePropertyMissing = !propertyValue.every(function (element) {
            return 'options' in element || 'value' in element;
        });
        if (valuePropertyMissing) {
            warnOnce(componentName, "You provided an `".concat(propertyName, "` prop where at least one non-group array element is missing the `value` field. This field is required for all options without sub-items."));
        }
    }
}
//# sourceMappingURL=check-option-value-field.js.map