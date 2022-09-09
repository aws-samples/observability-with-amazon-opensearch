import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { line } from 'd3-shape';
import { isXThreshold, isYThreshold } from './utils';
export default function LineSeries(_a) {
    var _b;
    var axis = _a.axis, series = _a.series, color = _a.color, xScale = _a.xScale, yScale = _a.yScale, chartAreaClipPath = _a.chartAreaClipPath;
    var commonProps = { 'aria-hidden': true, stroke: color, clipPath: "url(#".concat(chartAreaClipPath, ")") };
    // Render data path. The chart orientation is ignored as only horizontally-oriented lines are supported.
    if (series.type === 'line') {
        var lineGenerator = line()
            .x(function (d) {
            var x = xScale.d3Scale(d.x) || 0;
            if (xScale.isCategorical()) {
                var offset = Math.max(0, xScale.d3Scale.bandwidth() - 1) / 2;
                x += offset;
            }
            return x;
        })
            .y(function (d) { return yScale.d3Scale(d.y) || 0; });
        // Filter out any data that is not part of the xScale
        var visibleData = series.data.filter(function (_a) {
            var x = _a.x;
            return xScale.d3Scale(x) !== undefined;
        });
        return (React.createElement("path", __assign({}, commonProps, { d: lineGenerator(visibleData) || '' })));
    }
    // Render a horizontal line (vertical if chart orientation is inverted).
    else if (isYThreshold(series)) {
        var _c = xScale.d3Scale.range(), x1 = _c[0], x2 = _c[1];
        var y = yScale.d3Scale(series.y);
        var coordinates = axis === 'x' ? { x1: x1, x2: x2, y1: y, y2: y } : { x1: y, x2: y, y1: x1, y2: x2 };
        return React.createElement("line", __assign({}, commonProps, coordinates));
    }
    // Render a vertical line (horizontal if chart orientation is inverted).
    // The offset is necessary for categorical scale to render the line in the middle of the category bar.
    else if (isXThreshold(series)) {
        var _d = yScale.d3Scale.range(), y1 = _d[0], y2 = _d[1];
        var xOffset = xScale.isCategorical() ? Math.max(0, xScale.d3Scale.bandwidth() - 1) / 2 : 0;
        var x = ((_b = xScale.d3Scale(series.x)) !== null && _b !== void 0 ? _b : NaN) + xOffset;
        var coordinates = axis === 'x' ? { x1: x, x2: x, y1: y1, y2: y2 } : { x1: y1, x2: y2, y1: x, y2: x };
        return React.createElement("line", __assign({}, commonProps, coordinates));
    }
    // Bar series are handled separately.
    else {
        return null;
    }
}
//# sourceMappingURL=line-series.js.map