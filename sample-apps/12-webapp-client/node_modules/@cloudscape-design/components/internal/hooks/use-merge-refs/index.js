// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useMemo } from 'react';
/**
 * useMergeRefs merges multiple refs into single ref callback.
 *
 * For example
 *  const mergedRef = useMergeRefs(ref1, ref2, ref3)
 *  <div ref={refs}>...</div>
 */
export function useMergeRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return useMemo(function () {
        if (refs.every(function (ref) { return ref === null || ref === undefined; })) {
            return null;
        }
        return function (value) {
            refs.forEach(function (ref) {
                if (typeof ref === 'function') {
                    ref(value);
                }
                else if (ref !== null && ref !== undefined) {
                    ref.current = value;
                }
            });
        };
        // ESLint expects an array literal which we can not provide here
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, refs);
}
//# sourceMappingURL=index.js.map