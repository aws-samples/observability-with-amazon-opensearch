// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useMemo } from 'react';
import ChartLegend from '../internal/components/chart-legend';
import { chartLegendMap } from './utils';
export default function InternalChartLegend(_a) {
    var series = _a.series, visibleSeries = _a.visibleSeries, highlightedSeries = _a.highlightedSeries, onHighlightChange = _a.onHighlightChange, legendTitle = _a.legendTitle, ariaLabel = _a.ariaLabel, plotContainerRef = _a.plotContainerRef;
    var legendItems = useMemo(function () {
        return series
            .filter(function (s) { return visibleSeries.indexOf(s.series) !== -1; })
            .map(function (_a) {
            var series = _a.series, color = _a.color;
            return ({
                label: series.title,
                type: chartLegendMap[series.type],
                color: color,
                datum: series
            });
        });
    }, [series, visibleSeries]);
    return (React.createElement(ChartLegend, { series: legendItems, highlightedSeries: highlightedSeries || null, onHighlightChange: onHighlightChange, legendTitle: legendTitle, ariaLabel: ariaLabel, plotContainerRef: plotContainerRef }));
}
//# sourceMappingURL=chart-legend.js.map