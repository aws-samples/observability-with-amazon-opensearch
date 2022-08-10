// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import createCategoryColorScale from '../../internal/utils/create-category-color-scale';
export default function createSeriesDecorator(externalSeries) {
    var colorScale = createCategoryColorScale(externalSeries, function (s) { return s.type === 'threshold'; }, function (s) { return s.color || null; });
    var decorateSeries = function (s, index) {
        var title = s.title;
        var color = colorScale[index];
        var markerType = s.type === 'area' ? 'hollow-rectangle' : 'dashed';
        var formatValue = s.type === 'threshold'
            ? function () { return (s.valueFormatter ? s.valueFormatter(s.y) : s.y); }
            : function (y, x) { return (s.valueFormatter ? s.valueFormatter(y, x) : y); };
        return { series: s, title: title, color: color, markerType: markerType, formatValue: formatValue };
    };
    // Map external series to internal ones.
    var mapping = externalSeries.reduce(function (map, series, index) {
        map.set(series, decorateSeries(series, index));
        return map;
    }, new Map());
    // It is inconvenient to use internal series everywhere, that's
    // why we also provide a decorator function to get the internal series on demand.
    var seriesDecorator = function (series) {
        return mapping.get(series) || decorateSeries(series, externalSeries.length);
    };
    return seriesDecorator;
}
//# sourceMappingURL=create-series-decorator.js.map