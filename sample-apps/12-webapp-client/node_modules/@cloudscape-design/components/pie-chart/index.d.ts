import { PieChartProps } from './interfaces';
export { PieChartProps };
declare const PieChart: <T extends PieChartProps.Datum = PieChartProps.Datum>({ variant, size, hideTitles, hideDescriptions, hideLegend, hideFilter, statusType, data: externalData, i18nStrings, highlightedSegment: controlledHighlightedSegment, visibleSegments: controlledVisibleSegments, onHighlightChange: controlledOnHighlightChange, onFilterChange, additionalFilters, legendTitle, detailPopoverSize, ...props }: PieChartProps<T>) => JSX.Element;
export default PieChart;
//# sourceMappingURL=index.d.ts.map