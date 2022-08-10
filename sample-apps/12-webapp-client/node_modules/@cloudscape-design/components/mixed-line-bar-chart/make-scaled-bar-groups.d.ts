import { ChartDataTypes, InternalChartSeries } from './interfaces';
import { ChartScale } from '../internal/components/cartesian-chart/scales';
export interface ScaledBarGroup<T> {
    x: T;
    hasData: boolean;
    isValid: boolean;
    position: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}
/**
 * Creates a list of all bar (and mixed) groups in the series with their scaled positions.
 */
export default function makeScaledBarGroups<T extends ChartDataTypes>(series: ReadonlyArray<InternalChartSeries<T>>, xScale: ChartScale, plotWidth: number, plotHeight: number, axis: 'x' | 'y'): ScaledBarGroup<T>[];
//# sourceMappingURL=make-scaled-bar-groups.d.ts.map