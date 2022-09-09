import { ChartDataTypes } from './interfaces';
import { ChartScale, NumericChartScale } from './scales';
interface BottomLabelsProps {
    axis?: 'x' | 'y';
    width: number;
    height: number;
    scale: ChartScale | NumericChartScale;
    ticks: readonly ChartDataTypes[];
    tickFormatter?: (value: ChartDataTypes) => string;
    title?: string;
    ariaRoleDescription?: string;
    autoHeight: (value: number) => void;
    offsetLeft?: number;
    offsetRight?: number;
}
declare const _default: typeof BottomLabels;
export default _default;
declare function BottomLabels({ axis, width, height, scale, ticks, tickFormatter, title, ariaRoleDescription, autoHeight, offsetLeft, offsetRight, }: BottomLabelsProps): JSX.Element;
//# sourceMappingURL=bottom-labels.d.ts.map