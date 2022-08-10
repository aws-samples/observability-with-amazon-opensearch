// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { memo } from 'react';
import ChartFilter from '../../internal/components/chart-filter';
export default memo(AreaChartFilter);
function AreaChartFilter(_a) {
    var model = _a.model, filterLabel = _a.filterLabel, filterPlaceholder = _a.filterPlaceholder, filterSelectedAriaLabel = _a.filterSelectedAriaLabel;
    var filterItems = model.allSeries.map(function (s) {
        var _a = model.getInternalSeries(s), title = _a.title, color = _a.color, markerType = _a.markerType;
        return { label: title, color: color, type: markerType, datum: s };
    });
    return (React.createElement(ChartFilter, { series: filterItems, onChange: model.handlers.onFilterSeries, selectedSeries: model.series, i18nStrings: {
            filterLabel: filterLabel,
            filterPlaceholder: filterPlaceholder,
            filterSelectedAriaLabel: filterSelectedAriaLabel
        } }));
}
//# sourceMappingURL=area-chart-filter.js.map