// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { padLeftZeros } from '../strings';
/**
 * Transforms Date's object date part to a string.
 *
 * We cannot use Date.toISOString because it produces GMT time where the date can be different than local.
 */
export function formatDate(value) {
    var year = value.getFullYear();
    var month = padLeftZeros("".concat(value.getMonth() + 1), 2);
    var date = padLeftZeros("".concat(value.getDate()), 2);
    return "".concat(year, "-").concat(month, "-").concat(date);
}
//# sourceMappingURL=format-date.js.map