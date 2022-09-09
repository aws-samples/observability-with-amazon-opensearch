import React from 'react';
import { PieArcDatum } from 'd3-shape';
import { PieChartProps } from './interfaces';
import { InternalChartDatum } from './pie-chart';
export interface LabelsProps<T> {
    pieData: PieArcDatum<InternalChartDatum<T>>[];
    visibleDataSum: number;
    size: NonNullable<PieChartProps['size']>;
    hideTitles: boolean;
    hideDescriptions: boolean;
    highlightedSegment: PieChartProps.Datum | null;
    segmentDescription?: PieChartProps.SegmentDescriptionFunction<T>;
    containerRef: React.RefObject<HTMLDivElement>;
}
declare const _default: <T extends PieChartProps.Datum>({ pieData, size, highlightedSegment, segmentDescription, visibleDataSum, hideTitles, hideDescriptions, containerRef, }: LabelsProps<T>) => JSX.Element;
export default _default;
//# sourceMappingURL=labels.d.ts.map