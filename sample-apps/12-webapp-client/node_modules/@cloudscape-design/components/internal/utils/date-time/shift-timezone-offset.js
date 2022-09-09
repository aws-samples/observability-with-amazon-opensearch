// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { addMinutes } from 'date-fns';
import { joinDateTime } from '.';
import { formatDate } from './format-date';
import { formatTime } from './format-time';
import { parseTimezoneOffset } from './parse-timezone-offset';
/**
 * Re-formats an ISO8601 date string so that it is expressed using the
 * target timezone offset. The returned date string still represents the
 * same instant in time, but contains no visible offset.
 *
 * Example:
 * ```
 * shiftTimezoneOffset("2020-01-01T09:00:00+03:00", 2 * 60) === "2020-01-01T08:00:00"
 * ```
 */
export function shiftTimezoneOffset(dateString, targetTimezoneOffset) {
    var _a = dateString.split('T'), datePart = _a[0], _b = _a[1], timeAndOffsetPart = _b === void 0 ? '' : _b;
    var timePart = timeAndOffsetPart.split(/-|\+|Z/)[0];
    var valueWithoutOffset = joinDateTime(datePart, timePart);
    var originalTimezoneOffset = parseTimezoneOffset(dateString);
    var date = new Date(valueWithoutOffset);
    targetTimezoneOffset = targetTimezoneOffset !== null && targetTimezoneOffset !== void 0 ? targetTimezoneOffset : 0 - date.getTimezoneOffset();
    var adjustedDate = addMinutes(date, targetTimezoneOffset - originalTimezoneOffset);
    return joinDateTime(formatDate(adjustedDate), formatTime(adjustedDate));
}
//# sourceMappingURL=shift-timezone-offset.js.map