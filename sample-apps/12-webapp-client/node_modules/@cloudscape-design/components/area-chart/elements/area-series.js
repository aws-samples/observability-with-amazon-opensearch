// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo } from 'react';
import { line, area } from 'd3-shape';
export default memo(AreaSeries);
function AreaSeries(_a) {
    var data = _a.data, color = _a.color, chartAreaClipPath = _a.chartAreaClipPath;
    var areaGenerator = area()
        .x(function (p) { return p.scaled.x; })
        .y0(function (p) { return p.scaled.y0; })
        .y1(function (p) { return p.scaled.y1; });
    var areaPath = areaGenerator(data) || '';
    var lineGenerator = line()
        .x(function (p) { return p.scaled.x; })
        .y(function (p) { return p.scaled.y1; });
    var linePath = lineGenerator(data) || '';
    return (React.createElement(React.Fragment, null,
        React.createElement("path", { "aria-hidden": true, fill: color, stroke: color, style: { opacity: 0.4 }, clipPath: "url(#".concat(chartAreaClipPath, ")"), d: areaPath }),
        React.createElement("path", { "aria-hidden": true, stroke: color, clipPath: "url(#".concat(chartAreaClipPath, ")"), d: linePath })));
}
//# sourceMappingURL=area-series.js.map