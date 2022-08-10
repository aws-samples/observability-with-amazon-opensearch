import { BaseComponentProps } from '../../base-component';
import { ChartSeriesMarkerType } from '../chart-series-marker';
interface I18nStrings {
    filterLabel?: string;
    filterPlaceholder?: string;
    filterSelectedAriaLabel?: string;
}
export interface ChartFilterItem<T> {
    label: string;
    color: string;
    type: ChartSeriesMarkerType;
    datum: T;
}
export interface ChartFilterProps<T> extends BaseComponentProps {
    series: ReadonlyArray<ChartFilterItem<T>>;
    selectedSeries?: ReadonlyArray<T>;
    onChange: (selectedSeries: ReadonlyArray<T>) => void;
    i18nStrings?: I18nStrings;
}
declare const _default: typeof ChartFilter;
export default _default;
declare function ChartFilter<T>({ series, i18nStrings, selectedSeries, onChange, ...restProps }: ChartFilterProps<T>): JSX.Element;
//# sourceMappingURL=index.d.ts.map