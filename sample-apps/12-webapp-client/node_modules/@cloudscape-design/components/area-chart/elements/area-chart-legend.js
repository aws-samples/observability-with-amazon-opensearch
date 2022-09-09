// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo, useMemo } from 'react';
import ChartLegend from '../../internal/components/chart-legend';
import { useSelector } from '../model/async-store';
export default memo(AreaChartLegend);
function AreaChartLegend(_a) {
    var model = _a.model, legendTitle = _a.legendTitle, ariaLabel = _a.ariaLabel, plotContainerRef = _a.plotContainerRef;
    var legendItems = useMemo(function () {
        return model.series.map(function (s) {
            var _a = model.getInternalSeries(s), title = _a.title, color = _a.color, markerType = _a.markerType;
            return { label: title, color: color, type: markerType, datum: s };
        });
    }, [model]);
    var legendSeries = useSelector(model.interactions, function (state) { return state.legendSeries; });
    return (React.createElement(ChartLegend, { series: legendItems, highlightedSeries: legendSeries, onHighlightChange: model.handlers.onLegendHighlight, legendTitle: legendTitle, ariaLabel: ariaLabel, plotContainerRef: plotContainerRef }));
}
//# sourceMappingURL=area-chart-legend.js.map