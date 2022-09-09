// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export function joinObjectPath(segments) {
    return segments.reduce(function (prev, next) {
        if (prev && prev[prev.length - 1] !== '/') {
            prev = prev + '/';
        }
        return prev + next;
    }, '');
}
//# sourceMappingURL=utils.js.map