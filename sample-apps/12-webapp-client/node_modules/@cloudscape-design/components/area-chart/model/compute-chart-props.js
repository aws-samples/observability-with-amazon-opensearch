import { computePlotPoints, computeDomainX, computeDomainY } from './utils';
import { createXTicks, createYTicks, getXTickCount, getYTickCount, } from '../../internal/components/cartesian-chart/ticks';
import { ChartScale, NumericChartScale } from '../../internal/components/cartesian-chart/scales';
export default function computeChartProps(_a) {
    var series = _a.series, externalXDomain = _a.xDomain, externalYDomain = _a.yDomain, xScaleType = _a.xScaleType, yScaleType = _a.yScaleType, height = _a.height, width = _a.width;
    var xDomain = externalXDomain || computeDomainX(series);
    var xTickCount = getXTickCount(width);
    var xScale = new ChartScale(xScaleType, xDomain, [0, width]);
    var xTicks = xScale.domain.length > 0 ? createXTicks(xScale, xTickCount) : [];
    var yDomain = externalYDomain || computeDomainY(series, yScaleType);
    var yTickCount = getYTickCount(height);
    var yScale = new NumericChartScale(yScaleType, yDomain, [height, 0], externalYDomain ? null : yTickCount);
    var yTicks = createYTicks(yScale, yTickCount);
    var plot = computePlotPoints(series, xScale, yScale);
    return { xDomain: xDomain, yDomain: yDomain, xScale: xScale, yScale: yScale, xTicks: xTicks, yTicks: yTicks, plot: plot };
}
//# sourceMappingURL=compute-chart-props.js.map