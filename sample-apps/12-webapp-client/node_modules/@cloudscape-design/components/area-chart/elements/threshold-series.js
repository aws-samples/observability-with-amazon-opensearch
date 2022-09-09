import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo } from 'react';
export default memo(ThresholdSeries);
function ThresholdSeries(_a) {
    var data = _a.data, xScale = _a.xScale, color = _a.color, chartAreaClipPath = _a.chartAreaClipPath;
    var range = xScale.d3Scale.range();
    var y = data[0].scaled.y0;
    var path = { x1: range[0], x2: range[1], y1: y, y2: y };
    return React.createElement("line", __assign({ "aria-hidden": true, stroke: color, clipPath: "url(#".concat(chartAreaClipPath, ")") }, path));
}
//# sourceMappingURL=threshold-series.js.map