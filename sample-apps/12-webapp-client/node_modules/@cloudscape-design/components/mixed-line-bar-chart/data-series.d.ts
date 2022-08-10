import { ChartScale, NumericChartScale } from '../internal/components/cartesian-chart/scales';
import { ChartDataTypes, InternalChartSeries, MixedLineBarChartProps } from './interfaces';
export interface DataSeriesProps<T> {
    axis: 'x' | 'y';
    plotHeight: number;
    plotWidth: number;
    highlightedSeries: MixedLineBarChartProps.ChartSeries<T> | null;
    highlightedGroupIndex: number | null;
    stackedBars: boolean;
    isGroupNavigation: boolean;
    visibleSeries: ReadonlyArray<InternalChartSeries<T>>;
    xScale: ChartScale;
    yScale: NumericChartScale;
}
export default function DataSeries<T extends ChartDataTypes>({ axis, plotHeight, plotWidth, highlightedGroupIndex, highlightedSeries, stackedBars, isGroupNavigation, visibleSeries, xScale, yScale, }: DataSeriesProps<T>): JSX.Element;
//# sourceMappingURL=data-series.d.ts.map