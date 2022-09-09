import { isDataSeries, isXThreshold, isYThreshold, matchesX } from './utils';
/** Formats provided x-position and its corresponding series values. */
export default function formatHighlighted(position, series, xTickFormatter) {
    var formattedPosition = xTickFormatter ? xTickFormatter(position) : position.toString();
    var details = [];
    series.forEach(function (s) {
        var detail = getSeriesDetail(s, position);
        if (detail) {
            details.push(detail);
        }
    });
    return { position: formattedPosition, details: details };
}
function getSeriesDetail(internalSeries, targetX) {
    var series = internalSeries.series, color = internalSeries.color;
    // X-thresholds are only shown when X matches.
    if (isXThreshold(series)) {
        return series.x === targetX
            ? {
                key: series.title,
                value: '',
                color: color,
                markerType: 'dashed'
            }
            : null;
    }
    if (isYThreshold(series)) {
        return {
            key: series.title,
            value: series.valueFormatter ? series.valueFormatter(series.y) : series.y,
            color: color,
            markerType: 'dashed'
        };
    }
    if (isDataSeries(series)) {
        for (var _i = 0, _a = series.data; _i < _a.length; _i++) {
            var datum = _a[_i];
            if (matchesX(targetX, datum.x)) {
                return {
                    key: series.title,
                    value: series.valueFormatter ? series.valueFormatter(datum.y, targetX) : datum.y,
                    color: color,
                    markerType: series.type === 'line' ? 'line' : 'rectangle'
                };
            }
        }
    }
    return null;
}
//# sourceMappingURL=format-highlighted.js.map