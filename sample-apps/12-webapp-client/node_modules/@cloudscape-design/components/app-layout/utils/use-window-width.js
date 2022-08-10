// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useState } from 'react';
export default function useWindowWidth() {
    var _a = useState(function () { return (typeof window !== 'undefined' ? window.innerWidth : 0); }), width = _a[0], setWidth = _a[1];
    useEffect(function () {
        var handler = function () { return setWidth(window.innerWidth); };
        window.addEventListener('resize', handler);
        return function () { return window.removeEventListener('resize', handler); };
    }, []);
    return width;
}
//# sourceMappingURL=use-window-width.js.map