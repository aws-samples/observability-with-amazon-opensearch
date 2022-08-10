import { AreaChartProps } from './interfaces';
import { ChartModel } from './model';
interface ChartContainerProps<T extends AreaChartProps.DataTypes> extends Pick<AreaChartProps<T>, 'xTitle' | 'yTitle' | 'detailPopoverSize' | 'ariaLabel' | 'ariaLabelledby' | 'ariaDescription' | 'i18nStrings'> {
    model: ChartModel<T>;
    autoWidth: (value: number) => void;
}
declare const _default: typeof ChartContainer;
export default _default;
declare function ChartContainer<T extends AreaChartProps.DataTypes>({ model, autoWidth, xTitle, yTitle, detailPopoverSize, ariaLabel, ariaLabelledby, ariaDescription, i18nStrings: { xTickFormatter, yTickFormatter, detailTotalFormatter, detailTotalLabel, chartAriaRoleDescription, xAxisAriaRoleDescription, yAxisAriaRoleDescription, detailPopoverDismissAriaLabel, }, }: ChartContainerProps<T>): JSX.Element;
//# sourceMappingURL=chart-container.d.ts.map