import { AreaChartProps } from '../interfaces';
import { XDomain, XScaleType, YDomain, YScaleType } from '../../internal/components/cartesian-chart/interfaces';
import { ChartScale, NumericChartScale } from '../../internal/components/cartesian-chart/scales';
export default function computeChartProps<T extends AreaChartProps.DataTypes>({ series, xDomain: externalXDomain, yDomain: externalYDomain, xScaleType, yScaleType, height, width, }: {
    series: readonly AreaChartProps.Series<T>[];
    xDomain?: XDomain<T>;
    yDomain?: YDomain;
    xScaleType: XScaleType;
    yScaleType: YScaleType;
    height: number;
    width: number;
}): {
    xDomain: import("../../internal/components/cartesian-chart/interfaces").ChartDomain<T>;
    yDomain: readonly number[];
    xScale: ChartScale;
    yScale: NumericChartScale;
    xTicks: import("../../internal/components/cartesian-chart/interfaces").ChartDataTypes[];
    yTicks: number[];
    plot: {
        xy: import(".").ChartModel.PlotPoint<T>[][];
        xs: import(".").ChartModel.PlotPoint<T>[][];
        sx: import(".").ChartModel.PlotPoint<T>[][];
    };
};
//# sourceMappingURL=compute-chart-props.d.ts.map