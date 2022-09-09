import { ChartScale, NumericChartScale } from '../internal/components/cartesian-chart/scales';
import { ChartDataTypes, MixedLineBarChartProps } from './interfaces';
import { StackedOffsets } from './utils';
export interface BarSeriesProps<T> {
    axis: 'x' | 'y';
    series: MixedLineBarChartProps.BarDataSeries<T>;
    color: string;
    totalSeriesCount: number;
    seriesIndex: number;
    xScale: ChartScale;
    yScale: NumericChartScale;
    plotSize: number;
    chartAreaClipPath: string;
    highlighted: boolean;
    dimmed: boolean;
    highlightedGroupIndex: number | null;
    stackedBarOffsets?: StackedOffsets;
}
export default function BarSeries<T extends ChartDataTypes>({ axis, series, color, xScale, yScale, highlighted, dimmed, highlightedGroupIndex, stackedBarOffsets, totalSeriesCount, seriesIndex, plotSize, chartAreaClipPath, }: BarSeriesProps<T>): JSX.Element;
//# sourceMappingURL=bar-series.d.ts.map