// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { forwardRef, memo } from 'react';
import styles from './styles.css.js';
export default memo(forwardRef(HighlightedPoint));
function HighlightedPoint(_a, ref) {
    var point = _a.point, _b = _a.role, role = _b === void 0 ? 'group' : _b, ariaLabel = _a.ariaLabel, ariaHasPopup = _a.ariaHasPopup, ariaExpanded = _a.ariaExpanded;
    if (!point) {
        return null;
    }
    return (React.createElement("g", { ref: ref, role: role, "aria-label": ariaLabel, "aria-haspopup": ariaHasPopup, "aria-expanded": ariaExpanded },
        React.createElement("circle", { key: point.key, "aria-hidden": "true", className: styles['vertical-marker-circle-active'], cx: point.x, cy: point.y, r: 4, stroke: point.color, fill: point.color })));
}
//# sourceMappingURL=highlighted-point.js.map