// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Joins strings with a whitespace, discarding empty strings. Useful to combine multiple aria-labels.
 */
export function joinStrings() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    return strings.filter(Boolean).join(' ') || undefined;
}
//# sourceMappingURL=join-strings.js.map