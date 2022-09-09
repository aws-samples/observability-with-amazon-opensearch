// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Extracts timezone offset from ISO8601 date string.
 */
export function parseTimezoneOffset(isoDate) {
    var _a = isoDate.split('T'), _b = _a[1], time = _b === void 0 ? '' : _b;
    var _c = time.split(/(-|\+)/), signCharacter = _c[1], offsetPart = _c[2];
    if (signCharacter && offsetPart) {
        var _d = offsetPart.split(':'), offsetHours = _d[0], offsetMinutes = _d[1];
        return Number(signCharacter + '1') * (Number(offsetHours) * 60 + Number(offsetMinutes));
    }
    var utcTimezoneIndicator = isoDate.indexOf('Z');
    if (utcTimezoneIndicator !== -1) {
        return 0;
    }
    var date = new Date(isoDate);
    return 0 - date.getTimezoneOffset();
}
//# sourceMappingURL=parse-timezone-offset.js.map