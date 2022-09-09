// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Converts ISO date to display format, e.g. 2020-01-01 -> 2020/01/01.
 */
export function isoToDisplay(value) {
    return value.replace(/-/g, '/');
}
/**
 * Converts display date to ISO format, e.g. 2020/01/01 -> 2020-01-01.
 */
export function displayToIso(value) {
    return value.replace(/\//g, '-');
}
//# sourceMappingURL=display-format.js.map