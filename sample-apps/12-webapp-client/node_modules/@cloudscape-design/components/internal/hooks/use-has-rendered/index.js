// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useState } from 'react';
/**
 * Indicates whether the component has rendered at least one frame.
 */
export function useHasRendered() {
    var _a = useState(false), mounted = _a[0], setMounted = _a[1];
    useEffect(function () {
        var cancelAnimationFrame = requestAnimationFrameTwice(function () { return setMounted(true); });
        return function () { return cancelAnimationFrame(); };
    }, []);
    return mounted;
}
function requestAnimationFrameTwice(callback) {
    var handle = requestAnimationFrame(function () {
        handle = requestAnimationFrame(callback);
    });
    return function () { return cancelAnimationFrame(handle); };
}
//# sourceMappingURL=index.js.map