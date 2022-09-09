// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback, useEffect, useRef } from 'react';
/**
 * A callback that stays stable between renders even as the dependencies change.
 * Not a recommended React pattern, so it should be used sparingly and only if
 * the callback is an event handler (i.e. not used during rendering) and causing
 * clear performance issues.
 *
 * @see https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
 */
export function useStableEventHandler(fn) {
    var ref = useRef();
    useEffect(function () {
        ref.current = fn;
    });
    return useCallback(function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.apply(undefined, args);
    }, []);
}
//# sourceMappingURL=index.js.map