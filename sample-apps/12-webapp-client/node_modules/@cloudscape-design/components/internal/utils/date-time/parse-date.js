// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export function parseDate(value, strict) {
    if (strict === void 0) { strict = false; }
    var _a = value.split('-'), yearString = _a[0], monthString = _a[1], dayString = _a[2];
    var year = Number(yearString);
    var month = Number(monthString);
    var day = Number(dayString);
    if (strict) {
        if (isNaN(year) || isNaN(month) || isNaN(day)) {
            return null;
        }
    }
    return new Date(year, (month || 1) - 1, day || 1);
}
//# sourceMappingURL=parse-date.js.map