// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback, useRef } from 'react';
import debounce from '../../debounce';
export function useDebounceCallback(callback, delay) {
    var callbackRef = useRef();
    callbackRef.current = callback;
    // ESLint rule requires an inline function which we cannot provide here
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useCallback(debounce((function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (callbackRef.current) {
            callbackRef.current.apply(callbackRef, args);
        }
    }), delay), []);
}
//# sourceMappingURL=index.js.map