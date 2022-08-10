import { ChartModel } from './index';
import { AreaChartProps } from '../interfaces';
import AsyncStore from './async-store';
export default class InteractionsStore<T extends AreaChartProps.DataTypes> extends AsyncStore<ChartModel.InteractionsState<T>> {
    series: readonly AreaChartProps.Series<T>[];
    plot: ChartModel.ComputedProps<T>['plot'];
    constructor(series: readonly AreaChartProps.Series<T>[], plot: ChartModel.ComputedProps<T>['plot']);
    highlightPoint(point: ChartModel.PlotPoint<T>): void;
    highlightX(points: readonly ChartModel.PlotPoint<T>[]): void;
    highlightFirstPoint(): void;
    highlightSeries(s: null | AreaChartProps.Series<T>): void;
    clearHighlight(): void;
    clearHighlightedLegend(): void;
    clearState(): void;
    pinPopover(): void;
    unpinPopover(): void;
    togglePopoverPin(): void;
    _getFirstSeriesPoint(s: AreaChartProps.Series<T>): null | ChartModel.PlotPoint<T>;
}
//# sourceMappingURL=interactions-store.d.ts.map