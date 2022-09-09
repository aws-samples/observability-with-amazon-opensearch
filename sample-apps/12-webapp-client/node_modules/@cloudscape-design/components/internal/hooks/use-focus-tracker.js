// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useRef, useEffect } from 'react';
import { fireNonCancelableEvent } from '../events';
import FocusTracker from '../focus-tracker';
export var useFocusTracker = function (_a) {
    var rootRef = _a.rootRef, onBlur = _a.onBlur, onFocus = _a.onFocus, viewportId = _a.viewportId;
    var focusTracker = useRef(null);
    useEffect(function () {
        if (!rootRef.current) {
            return;
        }
        focusTracker.current = new FocusTracker(rootRef.current, {
            onFocusLeave: function () {
                fireNonCancelableEvent(onBlur);
            },
            onFocusEnter: function () {
                fireNonCancelableEvent(onFocus);
            }
        }, viewportId);
        focusTracker.current.initialize();
        return function () {
            var _a;
            (_a = focusTracker.current) === null || _a === void 0 ? void 0 : _a.destroy();
        };
    }, [rootRef, onBlur, onFocus, viewportId]);
};
//# sourceMappingURL=use-focus-tracker.js.map