import { ChartScale, NumericChartScale } from './scales';
import { ChartDataTypes } from '../../../mixed-line-bar-chart/interfaces';
interface LabelsMeasureProps {
    scale: ChartScale | NumericChartScale;
    ticks: readonly ChartDataTypes[];
    tickFormatter?: (value: ChartDataTypes) => string;
    autoWidth: (value: number) => void;
}
declare const _default: typeof LabelsMeasure;
export default _default;
declare function LabelsMeasure({ scale, ticks, tickFormatter, autoWidth }: LabelsMeasureProps): JSX.Element;
//# sourceMappingURL=labels-measure.d.ts.map