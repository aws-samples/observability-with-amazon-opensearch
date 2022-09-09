import { isDataSeries, isXThreshold, isYThreshold, matchesX } from './utils';
/**
 * Creates a list of all bar (and mixed) groups in the series with their scaled positions.
 */
export default function makeScaledBarGroups(series, xScale, plotWidth, plotHeight, axis) {
    if (!xScale.isCategorical()) {
        return [];
    }
    return xScale.domain.map(function (x) {
        var scaledX = xScale.d3Scale(x);
        var isValid = typeof scaledX !== 'undefined' && isFinite(scaledX);
        return {
            x: x,
            isValid: isValid,
            hasData: series.some(function (_a) {
                var series = _a.series;
                // If there is a threshold series, every valid group will have a data point.
                if (isYThreshold(series)) {
                    return true;
                }
                // X-thresholds do not have associated value.
                if (isXThreshold(series)) {
                    return false;
                }
                if (isDataSeries(series)) {
                    return series.data.some(function (datum) { return matchesX(datum.x, x); });
                }
                return false;
            }),
            position: axis === 'x'
                ? {
                    x: 0,
                    y: isValid ? scaledX || 0 : 0,
                    width: plotWidth,
                    height: xScale.d3Scale.bandwidth()
                }
                : {
                    x: isValid ? scaledX || 0 : 0,
                    y: 0,
                    width: xScale.d3Scale.bandwidth(),
                    height: plotHeight
                }
        };
    });
}
//# sourceMappingURL=make-scaled-bar-groups.js.map