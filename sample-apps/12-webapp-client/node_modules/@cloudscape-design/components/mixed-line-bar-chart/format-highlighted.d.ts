import { ChartDataTypes, InternalChartSeries } from './interfaces';
import { ChartSeriesDetailItem } from '../internal/components/chart-series-details';
import { CartesianChartProps } from '../internal/components/cartesian-chart/interfaces';
export interface HighlightDetails {
    position: string;
    details: ChartSeriesDetailItem[];
}
/** Formats provided x-position and its corresponding series values. */
export default function formatHighlighted<T extends ChartDataTypes>(position: T, series: readonly InternalChartSeries<T>[], xTickFormatter?: CartesianChartProps.TickFormatter<T>): HighlightDetails;
//# sourceMappingURL=format-highlighted.d.ts.map