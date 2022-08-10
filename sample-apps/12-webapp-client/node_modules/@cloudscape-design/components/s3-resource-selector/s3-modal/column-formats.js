// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var BYTES_BASE = 1024;
var BYTES_DECIMALS = 2;
var BYTES_SIZES = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
export function formatDefault(value) {
    return value ? value : '-';
}
export function formatSize(bytes) {
    if (bytes === undefined) {
        return '-';
    }
    if (bytes === 0) {
        return "0 ".concat(BYTES_SIZES[0]);
    }
    var i = Math.floor(Math.log(bytes) / Math.log(BYTES_BASE));
    return parseFloat((bytes / Math.pow(BYTES_BASE, i)).toFixed(BYTES_DECIMALS)) + ' ' + BYTES_SIZES[i];
}
//# sourceMappingURL=column-formats.js.map