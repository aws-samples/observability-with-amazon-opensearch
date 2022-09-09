import { ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import { BaseCartesianChartWrapper } from '../mixed-line-bar-chart/index.js';
export default class AreaChartWrapper extends BaseCartesianChartWrapper {
    static rootSelector: string;
    findChart(): ElementWrapper;
    /**
     * Returns an array of chart series. Note that thresholds count as series as well.
     */
    findSeries(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
    findHighlightedSeries(): ElementWrapper;
}
