// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { forwardRef, memo } from 'react';
import styles from './styles.css.js';
export default memo(forwardRef(VerticalMarker));
function VerticalMarker(_a, ref) {
    var height = _a.height, _b = _a.showPoints, showPoints = _b === void 0 ? true : _b, _c = _a.showLine, showLine = _c === void 0 ? true : _c, points = _a.points;
    var firstPoint = (points || [])[0];
    return (React.createElement("g", null,
        React.createElement("line", { ref: ref, "aria-hidden": "true", className: styles['vertical-marker'], style: { visibility: showLine && firstPoint ? 'visible' : 'hidden' }, x1: firstPoint === null || firstPoint === void 0 ? void 0 : firstPoint.x, x2: firstPoint === null || firstPoint === void 0 ? void 0 : firstPoint.x, y1: 0, y2: height }),
        showPoints &&
            points &&
            points.map(function (point) { return (React.createElement("circle", { key: point.key, "aria-hidden": "true", className: styles['vertical-marker-circle'], cx: point.x, cy: point.y, r: 4, stroke: point.color })); })));
}
//# sourceMappingURL=vertical-marker.js.map