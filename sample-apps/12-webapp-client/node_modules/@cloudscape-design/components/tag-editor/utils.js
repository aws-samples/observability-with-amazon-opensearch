import { __spreadArray } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useRef } from 'react';
/**
 * Ponyfill for Array.prototype.findIndex.
 */
export function findIndex(array, condition) {
    for (var i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            return i;
        }
    }
    return -1;
}
function makeMemoizedArray(prev, next, isEqual) {
    for (var i = 0; i < Math.max(prev.length, next.length); i++) {
        // The next array is shorter, but all the items match.
        if (i === next.length) {
            return prev.slice(0, i);
        }
        // The prev array is shorter, but all the items so far match.
        if (i === prev.length) {
            return __spreadArray(__spreadArray([], prev.slice(0, i), true), next.slice(i), true);
        }
        // The item is not equal. Partition at this point.
        if (!isEqual(prev[i], next[i])) {
            return __spreadArray(__spreadArray(__spreadArray([], prev.slice(0, i), true), [next[i]], false), makeMemoizedArray(prev.slice(i + 1), next.slice(i + 1), isEqual), true);
        }
    }
    // All the references match. Return the old array.
    return prev;
}
export function useMemoizedArray(array, isEqual) {
    var ref = useRef(array);
    var updated = makeMemoizedArray(ref.current, array, isEqual);
    useEffect(function () {
        ref.current = updated;
    }, [updated]);
    return updated;
}
//# sourceMappingURL=utils.js.map