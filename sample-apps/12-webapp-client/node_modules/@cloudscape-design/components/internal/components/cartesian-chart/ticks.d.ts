import { ChartScale, NumericChartScale } from '../../components/cartesian-chart/scales';
import { ChartDataTypes } from './interfaces';
export declare function getXTickCount(width: number): number;
export declare function getYTickCount(height: number): number;
export declare function createXTicks(scale: ChartScale, values: number): ChartDataTypes[];
export declare function createYTicks(scale: NumericChartScale, values: number): number[];
//# sourceMappingURL=ticks.d.ts.map