import { __spreadArray } from "tslib";
import { useSelector } from '../model/async-store';
export default function useHighlightDetails(_a) {
    var model = _a.model, xTickFormatter = _a.xTickFormatter, yTickFormatter = _a.yTickFormatter, detailTotalFormatter = _a.detailTotalFormatter, detailTotalLabel = _a.detailTotalLabel;
    var hX = useSelector(model.interactions, function (state) { return state.highlightedX; });
    var hPoint = useSelector(model.interactions, function (state) { return state.highlightedPoint; });
    var isPopoverPinned = useSelector(model.interactions, function (state) { return state.isPopoverPinned; });
    if (!hX) {
        return null;
    }
    var firstPoint = hX[0];
    var highlightIndex = firstPoint.index.x;
    var seriesPoints = __spreadArray([], model.computed.plot.xs[highlightIndex], true);
    var detailsTotal = seriesPoints.reduce(function (total, point) { return total + point.value; }, 0);
    var formattedX = xTickFormatter ? xTickFormatter(firstPoint.x) : firstPoint.x.toString();
    var seriesTitle = hPoint ? getInternalSeries(hPoint).title : '';
    var formattedY = hPoint ? getInternalSeries(hPoint).formatValue(hPoint.value, hPoint.x) : '';
    var seriesDetails = seriesPoints.map(function (point) {
        var _a = getInternalSeries(point), title = _a.title, formatValue = _a.formatValue, color = _a.color, markerType = _a.markerType;
        var isDimmed = Boolean(hPoint) && point !== hPoint;
        return { key: title, value: formatValue(point.value, point.x), color: color, markerType: markerType, isDimmed: isDimmed };
    });
    var totalDetails = [
        {
            key: detailTotalLabel || '',
            value: detailTotalFormatter
                ? detailTotalFormatter(detailsTotal)
                : yTickFormatter
                    ? yTickFormatter(detailsTotal)
                    : detailsTotal
        },
    ];
    var pointDetails = hPoint ? seriesDetails[hPoint.index.s] : null;
    var activeLabel = "".concat(seriesTitle, " ").concat(formattedX, " ").concat(formattedY, ", ").concat(totalDetails[0].key, " ").concat(totalDetails[0].value);
    return {
        isPopoverPinned: isPopoverPinned,
        highlightIndex: highlightIndex,
        formattedX: formattedX,
        seriesTitle: seriesTitle,
        formattedY: formattedY,
        activeLabel: activeLabel,
        seriesDetails: seriesDetails,
        totalDetails: totalDetails,
        pointDetails: pointDetails
    };
    function getInternalSeries(point) {
        return model.getInternalSeries(model.series[point.index.s]);
    }
}
//# sourceMappingURL=use-highlight-details.js.map