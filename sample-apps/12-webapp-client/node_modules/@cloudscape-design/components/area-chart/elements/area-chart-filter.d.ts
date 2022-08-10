import { AreaChartProps } from '../interfaces';
import { ChartModel } from '../model';
declare const _default: typeof AreaChartFilter;
export default _default;
declare function AreaChartFilter<T extends AreaChartProps.DataTypes>({ model, filterLabel, filterPlaceholder, filterSelectedAriaLabel, }: {
    model: ChartModel<T>;
    filterLabel?: string;
    filterPlaceholder?: string;
    filterSelectedAriaLabel?: string;
}): JSX.Element;
//# sourceMappingURL=area-chart-filter.d.ts.map