import { __assign } from "tslib";
export var chartLegendMap = {
    line: 'line',
    bar: 'rectangle',
    threshold: 'dashed'
};
// Starting from the given index, find the first x value in the x domain that has bar data attached to it.
export var nextValidDomainIndex = function (nextGroupIndex, barGroups, direction) {
    if (direction === void 0) { direction = 1; }
    var index = nextGroupIndex;
    if (index < 0 || index >= barGroups.length) {
        index = 0;
    }
    do {
        if (barGroups[index].isValid && barGroups[index].hasData) {
            return index;
        }
        index += direction;
        // Loop back to the beginning if necessary
        if (index >= barGroups.length) {
            index = 0;
        }
        else if (index < 0) {
            index = barGroups.length - 1;
        }
    } while (index !== nextGroupIndex);
    return 0;
};
/**
 * Find the subset of series that are individually navigable with keyboard.
 * Lines and thresholds are navigated individually, while bar series are grouped as one.
 */
export function findNavigableSeries(series) {
    var navigableSeries = [];
    var navigableBarSeriesIndex = -1;
    series.forEach(function (internalSeries) {
        if (internalSeries.series.type === 'bar') {
            // Only include the first bar series because all bar series are handled as one
            if (navigableBarSeriesIndex === -1) {
                navigableBarSeriesIndex = navigableSeries.length;
                navigableSeries.push(internalSeries.series);
            }
        }
        else {
            navigableSeries.push(internalSeries.series);
        }
    });
    return { navigableSeries: navigableSeries, navigableBarSeriesIndex: navigableBarSeriesIndex };
}
/**
 * Checks if two x values are equal.
 * With a special treat for Date values which need to be converted to numbers first.
 */
export var matchesX = function (x1, x2) {
    if (x1 instanceof Date && x2 instanceof Date) {
        return x1.getTime() === x2.getTime();
    }
    return x1 === x2;
};
/**
 * Calculates list of offset maps from all data by accumulating each value
 */
export function calculateOffsetMaps(data) {
    return data.reduce(function (acc, curr, idx) {
        // First series receives empty offsets map
        if (idx === 0) {
            acc.push({ positiveOffsets: {}, negativeOffsets: {} });
        }
        var lastMap = acc[idx];
        var map = lastMap
            ? { positiveOffsets: __assign({}, lastMap.positiveOffsets), negativeOffsets: __assign({}, lastMap.negativeOffsets) }
            : { positiveOffsets: {}, negativeOffsets: {} };
        curr.forEach(function (_a) {
            var x = _a.x, y = _a.y;
            var key = getKeyValue(x);
            if (y < 0) {
                var lastValue = (lastMap === null || lastMap === void 0 ? void 0 : lastMap.negativeOffsets[key]) || 0;
                map.negativeOffsets[key] = lastValue + y;
            }
            else {
                var lastValue = (lastMap === null || lastMap === void 0 ? void 0 : lastMap.positiveOffsets[key]) || 0;
                map.positiveOffsets[key] = lastValue + y;
            }
        });
        // Ignore last value for map but still run it for logging
        if (idx < data.length - 1) {
            acc.push(map);
        }
        return acc;
    }, []);
}
/** Returns string or number value for ChartDataTypes key */
export var getKeyValue = function (key) { return (key instanceof Date ? key.getTime() : key); };
export function isYThreshold(series) {
    return series.type === 'threshold' && 'y' in series;
}
export function isXThreshold(series) {
    return series.type === 'threshold' && 'x' in series;
}
export function isDataSeries(series) {
    return series.type === 'line' || series.type === 'bar';
}
//# sourceMappingURL=utils.js.map