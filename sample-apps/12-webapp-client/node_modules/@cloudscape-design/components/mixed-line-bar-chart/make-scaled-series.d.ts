import { ChartDataTypes, InternalChartSeries, MixedLineBarChartProps } from './interfaces';
import { ChartScale, NumericChartScale } from '../internal/components/cartesian-chart/scales';
export interface ScaledPoint<T> {
    x: number;
    y: number;
    color: string;
    datum?: MixedLineBarChartProps.Datum<T> | undefined;
    series: MixedLineBarChartProps.ChartSeries<T>;
}
/** Combine all line series into an array of scaled data points with the given scales. */
export default function makeScaledSeries<T extends ChartDataTypes>(allSeries: ReadonlyArray<InternalChartSeries<T>>, xScale: ChartScale, yScale: NumericChartScale): readonly ScaledPoint<T>[];
//# sourceMappingURL=make-scaled-series.d.ts.map