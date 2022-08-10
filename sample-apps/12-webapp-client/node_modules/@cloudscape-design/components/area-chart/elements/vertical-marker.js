// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo } from 'react';
import VerticalMarker from '../../internal/components/cartesian-chart/vertical-marker';
import { useSelector } from '../model/async-store';
export default memo(AreaVerticalMarker);
function AreaVerticalMarker(_a) {
    var model = _a.model;
    var highlightedX = useSelector(model.interactions, function (state) { return state.highlightedX; });
    var verticalMarker = (highlightedX || []).map(function (point) { return ({
        key: "".concat(point.index.x, ":").concat(point.index.s),
        x: point.scaled.x,
        y: point.scaled.y1,
        color: model.getInternalSeries(model.series[point.index.s]).color
    }); });
    return React.createElement(VerticalMarker, { height: model.height, points: verticalMarker, ref: model.refs.verticalMarker });
}
//# sourceMappingURL=vertical-marker.js.map