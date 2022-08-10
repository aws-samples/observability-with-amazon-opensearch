import { ChartScale, NumericChartScale } from './scales';
import { ChartDataTypes } from '../../../mixed-line-bar-chart/interfaces';
interface LeftLabelsProps {
    axis?: 'x' | 'y';
    width: number;
    height: number;
    scale: ChartScale | NumericChartScale;
    ticks: readonly ChartDataTypes[];
    tickFormatter?: (value: number) => string;
    title?: string;
    ariaRoleDescription?: string;
}
declare const _default: typeof LeftLabels;
export default _default;
declare function LeftLabels({ axis, width, height, scale, ticks, tickFormatter, title, ariaRoleDescription, }: LeftLabelsProps): JSX.Element;
//# sourceMappingURL=left-labels.d.ts.map