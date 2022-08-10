// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useMemo } from 'react';
import clsx from 'clsx';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import LineSeries from './line-series';
import BarSeries from './bar-series';
import styles from './styles.css.js';
import { calculateOffsetMaps } from './utils';
export default function DataSeries(_a) {
    var axis = _a.axis, plotHeight = _a.plotHeight, plotWidth = _a.plotWidth, highlightedGroupIndex = _a.highlightedGroupIndex, highlightedSeries = _a.highlightedSeries, stackedBars = _a.stackedBars, isGroupNavigation = _a.isGroupNavigation, visibleSeries = _a.visibleSeries, xScale = _a.xScale, yScale = _a.yScale;
    var chartAreaClipPath = useUniqueId('awsui-mixed-line-bar-chart__chart-area-');
    var stackedBarOffsetMaps = useMemo(function () {
        if (!stackedBars) {
            return [];
        }
        var barData = [];
        visibleSeries.forEach(function (_a) {
            var series = _a.series;
            if (series.type === 'bar') {
                barData.push(series.data);
            }
        });
        return calculateOffsetMaps(barData);
    }, [visibleSeries, stackedBars]);
    return (React.createElement(React.Fragment, null,
        React.createElement("defs", { "aria-hidden": "true" },
            React.createElement("clipPath", { id: chartAreaClipPath },
                React.createElement("rect", { x: 0, y: 0, width: plotWidth, height: plotHeight }))),
        React.createElement("g", { "aria-hidden": isGroupNavigation ? true : undefined, role: "group" }, visibleSeries.map(function (_a, index) {
            var _b;
            var series = _a.series, color = _a.color;
            var isHighlighted = series === highlightedSeries;
            var isDimmed = !!highlightedSeries && !isHighlighted;
            switch (series.type) {
                case 'line':
                case 'threshold': {
                    return (React.createElement("g", { key: index, role: "group", "aria-label": series.title, className: clsx(styles.series, styles["series--".concat(series.type)], (_b = {},
                            _b[styles['series--highlighted']] = isHighlighted,
                            _b[styles['series--dimmed']] = isDimmed,
                            _b)) },
                        React.createElement(LineSeries, { axis: axis, series: series, color: color, xScale: xScale, yScale: yScale, chartAreaClipPath: chartAreaClipPath })));
                }
                case 'bar':
                    return (React.createElement(BarSeries, { key: index, axis: axis, series: series, color: color, totalSeriesCount: visibleSeries.filter(function (s) { return s.series.type === 'bar'; }).length, seriesIndex: index, xScale: xScale, yScale: yScale, plotSize: axis === 'y' ? plotWidth : plotHeight, highlighted: isHighlighted, dimmed: isDimmed, chartAreaClipPath: chartAreaClipPath, stackedBarOffsets: stackedBarOffsetMaps[index], highlightedGroupIndex: highlightedGroupIndex }));
            }
        }))));
}
//# sourceMappingURL=data-series.js.map