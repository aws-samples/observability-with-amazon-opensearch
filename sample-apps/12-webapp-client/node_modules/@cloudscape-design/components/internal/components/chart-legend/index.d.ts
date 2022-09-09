import React from 'react';
import { ChartSeriesMarkerType } from '../chart-series-marker';
export interface ChartLegendItem<T> {
    label: string;
    color: string;
    type: ChartSeriesMarkerType;
    datum: T;
}
export interface ChartLegendProps<T> {
    series: ReadonlyArray<ChartLegendItem<T>>;
    highlightedSeries: T | null;
    legendTitle?: string;
    ariaLabel?: string;
    plotContainerRef?: React.RefObject<HTMLDivElement>;
    onHighlightChange: (series: T | null) => void;
}
declare const _default: typeof ChartLegend;
export default _default;
declare function ChartLegend<T>({ series, onHighlightChange, highlightedSeries, legendTitle, ariaLabel, plotContainerRef, }: ChartLegendProps<T>): JSX.Element;
//# sourceMappingURL=index.d.ts.map