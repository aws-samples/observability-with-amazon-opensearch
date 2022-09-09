// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { padLeftZeros } from '../strings';
/**
 * Transforms Date's object time part to a string.
 */
export var formatTime = function (value) {
    var hours = padLeftZeros("".concat(value.getHours()), 2);
    var minutes = padLeftZeros("".concat(value.getMinutes()), 2);
    var seconds = padLeftZeros("".concat(value.getSeconds()), 2);
    return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
};
//# sourceMappingURL=format-time.js.map