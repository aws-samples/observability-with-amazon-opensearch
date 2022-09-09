// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useMemo } from 'react';
import clsx from 'clsx';
import InternalSpaceBetween from '../space-between/internal';
import Filter from '../internal/components/chart-filter';
import { chartLegendMap } from './utils';
import styles from './styles.css.js';
export default function InternalChartFilters(_a) {
    var _b;
    var series = _a.series, visibleSeries = _a.visibleSeries, onChange = _a.onChange, i18nStrings = _a.i18nStrings, hideFilter = _a.hideFilter, additionalFilters = _a.additionalFilters;
    var filterItems = useMemo(function () {
        return series.map(function (_a) {
            var series = _a.series, color = _a.color;
            return ({
                label: series.title,
                type: chartLegendMap[series.type],
                color: color,
                datum: series
            });
        });
    }, [series]);
    return (React.createElement(InternalSpaceBetween, { size: "l", direction: "horizontal", className: clsx((_b = {},
            _b[styles['has-default-filter']] = !hideFilter,
            _b)) },
        !hideFilter && (React.createElement(Filter, { series: filterItems, onChange: onChange, selectedSeries: visibleSeries, i18nStrings: i18nStrings })),
        additionalFilters));
}
//# sourceMappingURL=chart-filters.js.map