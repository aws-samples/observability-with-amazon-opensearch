import React from 'react';
import { BaseComponentProps } from '../../base-component';
import { ChartDetailPair } from '../../../pie-chart/interfaces';
import { ChartSeriesMarkerType } from '../chart-series-marker';
export interface ChartSeriesDetailItem extends ChartDetailPair {
    markerType?: ChartSeriesMarkerType;
    color?: string;
    isDimmed?: boolean;
}
export interface ChartSeriesDetailsProps extends BaseComponentProps {
    details: ReadonlyArray<ChartSeriesDetailItem>;
}
declare const _default: React.MemoExoticComponent<typeof ChartSeriesDetails>;
export default _default;
declare function ChartSeriesDetails({ details, ...restProps }: ChartSeriesDetailsProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map