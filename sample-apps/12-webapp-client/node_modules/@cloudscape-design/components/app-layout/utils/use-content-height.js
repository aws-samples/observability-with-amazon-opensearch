// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useState } from 'react';
import { useObservedElement } from './use-observed-element';
export default function useContentHeight(headerSelector, footerSelector, disableBodyScroll) {
    var _a;
    var headerHeight = useObservedElement(headerSelector);
    var footerHeight = useObservedElement(footerSelector);
    var _b = useState(0), headerFooterHeight = _b[0], setHeaderFooterHeight = _b[1];
    // Delay applying changes in header/footer height, as applying them immediately can cause
    // ResizeOberver warnings due to the algorithm thinking that the change might have side-effects
    // further up the tree, therefore blocking notifications to prevent loops
    useEffect(function () {
        var id = requestAnimationFrame(function () { return setHeaderFooterHeight(headerHeight + footerHeight); });
        return function () { return cancelAnimationFrame(id); };
    }, [headerHeight, footerHeight]);
    var heightStyleValue = "calc(100vh - ".concat(headerFooterHeight, "px)");
    return {
        headerHeight: headerHeight,
        footerHeight: footerHeight,
        contentHeightStyle: (_a = {},
            _a[disableBodyScroll ? 'height' : 'minHeight'] = heightStyleValue,
            _a),
        panelHeightStyle: {
            height: heightStyleValue
        }
    };
}
//# sourceMappingURL=use-content-height.js.map