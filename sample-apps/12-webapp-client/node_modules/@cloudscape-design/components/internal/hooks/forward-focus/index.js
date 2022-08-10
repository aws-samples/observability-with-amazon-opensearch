// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useImperativeHandle } from 'react';
export default function useForwardFocus(mainRef, controlRef) {
    useImperativeHandle(mainRef, function () { return ({
        focus: function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            (_a = controlRef.current) === null || _a === void 0 ? void 0 : _a.focus.apply(_a, args);
        }
    }); }, [controlRef]);
}
//# sourceMappingURL=index.js.map