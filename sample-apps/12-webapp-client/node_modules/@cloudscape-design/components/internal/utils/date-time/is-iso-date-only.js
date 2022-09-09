// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
/**
 * Checks if ISO date-string is date-only.
 */
export function isIsoDateOnly(dateString) {
    return dateRegex.test(dateString);
}
//# sourceMappingURL=is-iso-date-only.js.map