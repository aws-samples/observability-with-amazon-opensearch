// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect } from 'react';
import { fireNonCancelableEvent } from '../internal/events';
import { useDebounceCallback } from '../internal/hooks/use-debounce-callback';
import { useStableEventHandler } from '../internal/hooks/use-stable-event-handler';
export function useChangeEffect(editor, onChange, onDelayedChange) {
    var debouncedChangeHandler = useDebounceCallback(function (detail) {
        fireNonCancelableEvent(onDelayedChange, detail);
    }, 0);
    var handleChange = useStableEventHandler(function () {
        var changeDetail = { value: (editor === null || editor === void 0 ? void 0 : editor.getValue()) || '' };
        fireNonCancelableEvent(onChange, changeDetail);
        debouncedChangeHandler(changeDetail);
    });
    useEffect(function () {
        if (!editor) {
            return;
        }
        editor.on('change', handleChange);
        return function () { return editor.off('change', handleChange); };
    }, [editor, handleChange]);
}
//# sourceMappingURL=listeners.js.map