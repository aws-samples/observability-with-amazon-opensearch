// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { padLeftZeros } from '../strings';
export function formatTimezoneOffset(isoDate, offsetInMinutes) {
    offsetInMinutes = offsetInMinutes !== null && offsetInMinutes !== void 0 ? offsetInMinutes : 0 - new Date(isoDate).getTimezoneOffset();
    var hoursOffset = padLeftZeros(Math.floor(Math.abs(offsetInMinutes) / 60).toFixed(0), 2);
    var minuteOffset = padLeftZeros(Math.abs(offsetInMinutes % 60).toFixed(0), 2);
    var sign = offsetInMinutes < 0 ? '-' : '+';
    var formattedOffset = "".concat(sign).concat(hoursOffset, ":").concat(minuteOffset);
    return formattedOffset;
}
//# sourceMappingURL=format-timezone-offset.js.map