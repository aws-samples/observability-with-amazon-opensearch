import React from 'react';
import { ChartDataTypes, MixedLineBarChartProps, InternalChartSeries } from './interfaces';
interface InternalChartLegendProps<T extends ChartDataTypes> {
    series: ReadonlyArray<InternalChartSeries<T>>;
    visibleSeries: ReadonlyArray<MixedLineBarChartProps.ChartSeries<T>>;
    plotContainerRef: React.RefObject<HTMLDivElement>;
    highlightedSeries?: MixedLineBarChartProps.ChartSeries<T> | null;
    onHighlightChange: (series: MixedLineBarChartProps.ChartSeries<T> | null) => void;
    legendTitle?: string;
    ariaLabel?: string;
}
export default function InternalChartLegend<T extends number | string | Date>({ series, visibleSeries, highlightedSeries, onHighlightChange, legendTitle, ariaLabel, plotContainerRef, }: InternalChartLegendProps<T>): JSX.Element;
export {};
//# sourceMappingURL=chart-legend.d.ts.map