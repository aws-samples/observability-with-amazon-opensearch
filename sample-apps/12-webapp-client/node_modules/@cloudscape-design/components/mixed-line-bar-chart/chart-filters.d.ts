import React from 'react';
import { ChartDataTypes, MixedLineBarChartProps, InternalChartSeries } from './interfaces';
interface InternalChartFiltersProps<T extends ChartDataTypes> {
    series: ReadonlyArray<InternalChartSeries<T>>;
    visibleSeries: ReadonlyArray<MixedLineBarChartProps.ChartSeries<T>>;
    onChange: (selectedSeries: ReadonlyArray<MixedLineBarChartProps.ChartSeries<T>>) => void;
    i18nStrings: MixedLineBarChartProps<T>['i18nStrings'];
    hideFilter?: boolean;
    additionalFilters?: React.ReactNode;
}
export default function InternalChartFilters<T extends number | string | Date>({ series, visibleSeries, onChange, i18nStrings, hideFilter, additionalFilters, }: InternalChartFiltersProps<T>): JSX.Element;
export {};
//# sourceMappingURL=chart-filters.d.ts.map