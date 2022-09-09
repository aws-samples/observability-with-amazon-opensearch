import { ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ChartWrapper from '../internal/charts';
export declare class BaseCartesianChartWrapper extends ChartWrapper {
    findFilterContainer(): ElementWrapper | null;
    findChart(): ElementWrapper | null;
    /**
     * Returns a focusable element that controls keyboard interactions.
     */
    findApplication(): ElementWrapper | null;
    /**
     * Returns an array of chart series. Note that thresholds count as series as well.
     */
    findSeries(): Array<ElementWrapper>;
    findHighlightedSeries(): ElementWrapper | null;
    findXAxisTitle(): ElementWrapper | null;
    findYAxisTitle(): ElementWrapper | null;
    findXTicks(): Array<ElementWrapper>;
    findYTicks(): Array<ElementWrapper>;
}
export default class MixedLineBarChartWrapper extends BaseCartesianChartWrapper {
    static rootSelector: string;
    /**
     * Returns an array of bar groups, which are used for mouse navigation if a chart contains bar series.
     */
    findBarGroups(): Array<ElementWrapper>;
}
