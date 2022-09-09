// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo } from 'react';
import clsx from 'clsx';
import { useUniqueId } from '../../internal/hooks/use-unique-id';
import AreaSeries from './area-series';
import ThresholdSeries from './threshold-series';
import styles from '../styles.css.js';
import { useSelector } from '../model/async-store';
export default memo(DataSeries);
function DataSeries(_a) {
    var model = _a.model;
    var chartAreaClipPath = useUniqueId('awsui-area-chart__chart-area-');
    var highlightedX = useSelector(model.interactions, function (state) { return state.highlightedX; });
    var highlightedSeries = useSelector(model.interactions, function (state) { return state.highlightedSeries; });
    var useHighlightDimmed = !highlightedX;
    // Iterating series in the reversed order so that SVG paths overlap correctly.
    var seriesData = [];
    for (var seriesIndex = model.series.length - 1; seriesIndex >= 0; seriesIndex--) {
        if (model.computed.plot.sx[seriesIndex]) {
            seriesData.push([model.series[seriesIndex], model.computed.plot.sx[seriesIndex] || []]);
        }
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("defs", { "aria-hidden": "true" },
            React.createElement("clipPath", { id: chartAreaClipPath },
                React.createElement("rect", { x: 0, y: 0, width: model.width, height: model.height }))),
        React.createElement("g", { role: "group" }, seriesData.map(function (_a) {
            var _b;
            var series = _a[0], data = _a[1];
            var isHighlighted = series === highlightedSeries;
            var isDimmed = !!highlightedSeries && !isHighlighted;
            return (React.createElement("g", { key: series.title, role: "group", "aria-label": series.title, className: clsx(styles.series, styles["series--".concat(series.type)], (_b = {},
                    _b[styles['series--highlighted']] = isHighlighted,
                    _b[styles['series--dimmed']] = useHighlightDimmed && isDimmed,
                    _b)) }, series.type === 'area' ? (React.createElement(AreaSeries, { data: data, color: model.getInternalSeries(series).color, chartAreaClipPath: chartAreaClipPath })) : (React.createElement(ThresholdSeries, { data: data, xScale: model.computed.xScale, color: model.getInternalSeries(series).color, chartAreaClipPath: chartAreaClipPath }))));
        }))));
}
//# sourceMappingURL=data-series.js.map