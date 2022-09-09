import { ChartDataTypes } from './interfaces';
import { ChartScale, NumericChartScale } from './scales';
export interface FormattedTick {
    position: number;
    space: number;
    lines: string[];
}
export declare function formatTicks({ ticks, scale, getLabelSpace, tickFormatter, }: {
    ticks: readonly ChartDataTypes[];
    scale: ChartScale | NumericChartScale;
    getLabelSpace: (label: string) => number;
    tickFormatter?: (value: any) => string;
}): FormattedTick[];
export declare function getVisibleTicks(ticks: readonly FormattedTick[], from: number, until: number, balanceTicks?: boolean): readonly FormattedTick[];
//# sourceMappingURL=label-utils.d.ts.map