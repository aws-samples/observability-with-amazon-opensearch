import { ChartScale } from '../../internal/components/cartesian-chart/scales';
import { ChartModel } from '../model';
export interface ThresholdSeriesProps<T> {
    data: readonly ChartModel.PlotPoint<T>[];
    xScale: ChartScale;
    color: string;
    chartAreaClipPath: string;
}
declare const _default: typeof ThresholdSeries;
export default _default;
declare function ThresholdSeries<T>({ data, xScale, color, chartAreaClipPath }: ThresholdSeriesProps<T>): JSX.Element;
//# sourceMappingURL=threshold-series.d.ts.map