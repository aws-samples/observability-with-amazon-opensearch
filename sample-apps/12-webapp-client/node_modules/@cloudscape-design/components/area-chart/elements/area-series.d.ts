import { ChartModel } from '../model';
export interface AreaSeriesProps<T> {
    data: readonly ChartModel.PlotPoint<T>[];
    color: string;
    chartAreaClipPath: string;
}
declare const _default: typeof AreaSeries;
export default _default;
declare function AreaSeries<T>({ data, color, chartAreaClipPath }: AreaSeriesProps<T>): JSX.Element;
//# sourceMappingURL=area-series.d.ts.map