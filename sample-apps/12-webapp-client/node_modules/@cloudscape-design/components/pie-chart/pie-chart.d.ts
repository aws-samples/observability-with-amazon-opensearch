import React from 'react';
import { PieChartProps, SeriesInfo } from './interfaces';
import { SomeRequired } from '../internal/types';
export interface InternalChartDatum<T> {
    index: number;
    color: string;
    datum: Readonly<T>;
}
interface InternalPieChartProps<T extends PieChartProps.Datum> extends SomeRequired<Omit<PieChartProps<T>, 'onHighlightChange'>, 'variant' | 'size' | 'i18nStrings' | 'hideTitles' | 'hideDescriptions' | 'statusType'> {
    visibleData: Array<InternalChartDatum<T>>;
    width: number;
    highlightedSegment: T | null;
    onHighlightChange: (segment: null | T) => void;
    legendSegment: T | null;
    pinnedSegment: T | null;
    setPinnedSegment: React.Dispatch<React.SetStateAction<T | null>>;
}
export interface TooltipData<T> {
    datum: T;
    trackRef: React.RefObject<SVGElement>;
    series: SeriesInfo;
}
declare const _default: <T extends PieChartProps.Datum>({ variant, size, i18nStrings, ariaLabel, ariaLabelledby, data, visibleData, ariaDescription, innerMetricValue, innerMetricDescription, hideTitles, hideDescriptions, detailPopoverContent, detailPopoverSize, width, additionalFilters, hideFilter, hideLegend, statusType, empty, noMatch, errorText, recoveryText, loadingText, onRecoveryClick, segmentDescription, highlightedSegment, onHighlightChange, legendSegment, pinnedSegment, setPinnedSegment, }: InternalPieChartProps<T>) => JSX.Element;
export default _default;
//# sourceMappingURL=pie-chart.d.ts.map