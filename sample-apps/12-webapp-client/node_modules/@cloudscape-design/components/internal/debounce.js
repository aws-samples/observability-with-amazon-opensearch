// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// default delay for components defined by UX
export var DEBOUNCE_DEFAULT_DELAY = 200;
// instead of using this function directly, consider using useDebounceCallback hook
export default function debounce(func, delay) {
    if (delay === void 0) { delay = DEBOUNCE_DEFAULT_DELAY; }
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
            timeout = null;
            func.apply(void 0, args);
        }, delay);
    };
}
//# sourceMappingURL=debounce.js.map