import { ChartScale, NumericChartScale } from '../internal/components/cartesian-chart/scales';
import { MixedLineBarChartProps } from './interfaces';
export interface LineSeriesProps<T> {
    axis: 'x' | 'y';
    series: MixedLineBarChartProps.LineDataSeries<T> | MixedLineBarChartProps.ThresholdSeries<T>;
    color: string;
    chartAreaClipPath: string;
    xScale: ChartScale;
    yScale: NumericChartScale;
}
export default function LineSeries<T>({ axis, series, color, xScale, yScale, chartAreaClipPath }: LineSeriesProps<T>): JSX.Element | null;
//# sourceMappingURL=line-series.d.ts.map