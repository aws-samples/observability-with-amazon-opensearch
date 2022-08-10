import { CartesianChartProps } from '../../internal/components/cartesian-chart/interfaces';
import { ChartSeriesDetailItem } from '../../internal/components/chart-series-details';
import { AreaChartProps } from '../interfaces';
import { ChartModel } from '../model';
export interface HighlightDetails {
    isPopoverPinned: boolean;
    highlightIndex: number;
    formattedX: string;
    seriesTitle: string;
    formattedY: number | string;
    seriesDetails: readonly ChartSeriesDetailItem[];
    totalDetails: readonly ChartSeriesDetailItem[];
    pointDetails: null | ChartSeriesDetailItem;
    activeLabel: string;
}
export default function useHighlightDetails<T extends AreaChartProps.DataTypes>({ model, xTickFormatter, yTickFormatter, detailTotalFormatter, detailTotalLabel, }: {
    model: ChartModel<T>;
    xTickFormatter?: CartesianChartProps.TickFormatter<T>;
    yTickFormatter?: CartesianChartProps.TickFormatter<number>;
    detailTotalFormatter?: CartesianChartProps.TickFormatter<number>;
    detailTotalLabel?: string;
}): null | HighlightDetails;
//# sourceMappingURL=use-highlight-details.d.ts.map