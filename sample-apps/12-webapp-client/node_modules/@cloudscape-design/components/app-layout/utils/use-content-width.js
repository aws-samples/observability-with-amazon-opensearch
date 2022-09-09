// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback, useEffect, useState } from 'react';
import { useResizeObserver } from '../../internal/hooks/container-queries';
export default function useAppLayoutOffsets(element) {
    var _a = useState({ left: 0, right: 0 }), offsets = _a[0], setOffsets = _a[1];
    var updatePosition = useCallback(function () {
        if (!element) {
            return;
        }
        var _a = element.getBoundingClientRect(), left = _a.left, right = _a.right;
        var bodyWidth = document.body.clientWidth;
        setOffsets({ left: left, right: bodyWidth - right });
    }, [element]);
    useEffect(function () {
        window.addEventListener('resize', updatePosition);
        return function () { return window.removeEventListener('resize', updatePosition); };
    }, [updatePosition]);
    var getElement = useCallback(function () { return element; }, [element]);
    useResizeObserver(getElement, updatePosition);
    return offsets;
}
//# sourceMappingURL=use-content-width.js.map