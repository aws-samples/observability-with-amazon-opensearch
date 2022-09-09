import { ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import ChartWrapper from '../internal/charts';
export declare class BaseCartesianChartWrapper extends ChartWrapper {
    findFilterContainer(): ElementWrapper;
    findChart(): ElementWrapper;
    /**
     * Returns a focusable element that controls keyboard interactions.
     */
    findApplication(): ElementWrapper;
    /**
     * Returns an array of chart series. Note that thresholds count as series as well.
     */
    findSeries(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
    findHighlightedSeries(): ElementWrapper;
    findXAxisTitle(): ElementWrapper;
    findYAxisTitle(): ElementWrapper;
    findXTicks(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
    findYTicks(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
}
export default class MixedLineBarChartWrapper extends BaseCartesianChartWrapper {
    static rootSelector: string;
    /**
     * Returns an array of bar groups, which are used for mouse navigation if a chart contains bar series.
     */
    findBarGroups(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
}
