import { isXThreshold, isYThreshold } from './utils';
/** Combine all line series into an array of scaled data points with the given scales. */
export default function makeScaledSeries(allSeries, xScale, yScale) {
    var xOffset = xScale.isCategorical() ? Math.max(0, xScale.d3Scale.bandwidth() - 1) / 2 : 0;
    var scaleX = function (x) { return (xScale.d3Scale(x) || 0) + xOffset; };
    var scaleY = function (y) { return yScale.d3Scale(y) || 0; };
    var allX = getAllX(allSeries);
    function mergeLineSeriesPointsWithXThresholds(scaledPoints, xThresholdSeries, xThresholdSeriesColor) {
        var _a, _b;
        var x = scaleX(xThresholdSeries.x);
        // Locate a point the x-threshold can be inserted after (if such exists).
        var bisectIndex = -1;
        for (var i = 0; i < scaledPoints.length - 1; i++) {
            if (scaledPoints[i].x < x && x < scaledPoints[i + 1].x) {
                bisectIndex = i;
                break;
            }
        }
        // Insert x-threshold point into the given series using extrapolated Y value.
        // The extrapolated value is only used to render highlighted point on the chart plot.
        if (bisectIndex !== -1) {
            var prevY = ((_a = scaledPoints[bisectIndex].datum) === null || _a === void 0 ? void 0 : _a.y) || 0;
            var nextY = ((_b = scaledPoints[bisectIndex + 1].datum) === null || _b === void 0 ? void 0 : _b.y) || 0;
            var averageY = (prevY + nextY) / 2;
            scaledPoints.push({
                x: x,
                y: scaleY(averageY),
                datum: { x: xThresholdSeries.x, y: NaN },
                series: scaledPoints[bisectIndex].series,
                color: xThresholdSeriesColor
            });
        }
    }
    var scaledSeriesX = allSeries.map(function (_a) {
        var series = _a.series, color = _a.color;
        var scaledPoints = [];
        // Scale and add all line series data points.
        if (series.type === 'line') {
            for (var _i = 0, _b = series.data; _i < _b.length; _i++) {
                var datum = _b[_i];
                scaledPoints.push({ x: scaleX(datum.x), y: scaleY(datum.y), datum: datum, series: series, color: color });
            }
            // Sort scaled points to ensure correct x-thresholds insertion.
            scaledPoints.sort(function (s1, s2) { return s1.x - s2.x; });
            // Merge x-thresholds into series if they don't have a shared coordinate.
            for (var _c = 0, allSeries_1 = allSeries; _c < allSeries_1.length; _c++) {
                var otherSeries = allSeries_1[_c];
                if (isXThreshold(otherSeries.series)) {
                    mergeLineSeriesPointsWithXThresholds(scaledPoints, otherSeries.series, otherSeries.color);
                }
            }
        }
        // Y-thresholds only have Y. To make thresholds navigable they are mapped to all defined X values.
        else if (isYThreshold(series)) {
            for (var _d = 0, allX_1 = allX; _d < allX_1.length; _d++) {
                var x = allX_1[_d];
                scaledPoints.push({ x: scaleX(x), y: scaleY(series.y), datum: { x: x, y: series.y }, series: series, color: color });
            }
            // Support threshold-only setup.
            if (allX.length === 0) {
                scaledPoints.push({ x: NaN, y: scaleY(series.y), series: series, color: color });
            }
        }
        // X-thresholds only have X. The y value is taken as NaN which means there is no associated point - only vertical marker.
        else if (isXThreshold(series)) {
            scaledPoints.push({ x: scaleX(series.x), y: NaN, datum: { x: series.x, y: NaN }, series: series, color: color });
        }
        // Bar series are handled separately.
        return scaledPoints;
    });
    // Sort scaled points by x to ensure their order matches visual order in the chart to support navigation.
    return flatten(scaledSeriesX).sort(function (s1, s2) { return s1.x - s2.x; });
}
/** Collect unique x values from all data series. */
function getAllX(series) {
    var addDataXSet = new Set();
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var s = series_1[_i].series;
        switch (s.type) {
            // Add all X values from data series.
            case 'bar':
            case 'line':
                for (var _a = 0, _b = s.data; _a < _b.length; _a++) {
                    var d = _b[_a];
                    addDataXSet.add(d.x);
                }
                break;
            case 'threshold':
                // X-thresholds have a single X value.
                if (isXThreshold(s)) {
                    addDataXSet.add(s.x);
                }
                // Thresholds don't have X values.
                break;
        }
    }
    var allDataX = [];
    addDataXSet.forEach(function (x) { return allDataX.push(x); });
    return allDataX;
}
function flatten(arrays) {
    var merged = [];
    for (var _i = 0, arrays_1 = arrays; _i < arrays_1.length; _i++) {
        var array = arrays_1[_i];
        for (var _a = 0, array_1 = array; _a < array_1.length; _a++) {
            var item = array_1[_a];
            merged.push(item);
        }
    }
    return merged;
}
//# sourceMappingURL=make-scaled-series.js.map