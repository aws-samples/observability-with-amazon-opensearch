// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { forwardRef, memo } from 'react';
import HighlightedPoint from '../../internal/components/cartesian-chart/highlighted-point';
import { useSelector } from '../model/async-store';
export default memo(forwardRef(AreaHighlightedPoint));
function AreaHighlightedPoint(_a, ref) {
    var model = _a.model, ariaLabel = _a.ariaLabel;
    var highlightedPoint = useSelector(model.interactions, function (state) { return state.highlightedPoint; });
    var isPopoverPinned = useSelector(model.interactions, function (state) { return state.isPopoverPinned; });
    var point = highlightedPoint
        ? {
            key: "".concat(highlightedPoint.index.x, ":").concat(highlightedPoint.index.s),
            x: highlightedPoint.scaled.x,
            y: highlightedPoint.scaled.y1,
            color: model.getInternalSeries(model.series[highlightedPoint.index.s]).color
        }
        : null;
    return (React.createElement(HighlightedPoint, { ref: ref, point: point, role: "button", ariaLabel: ariaLabel, ariaHasPopup: true, ariaExpanded: isPopoverPinned }));
}
//# sourceMappingURL=highlighted-point.js.map