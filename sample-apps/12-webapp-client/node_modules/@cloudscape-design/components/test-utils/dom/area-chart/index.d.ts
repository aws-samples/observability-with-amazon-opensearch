import { ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import { BaseCartesianChartWrapper } from '../mixed-line-bar-chart/index.js';
export default class AreaChartWrapper extends BaseCartesianChartWrapper {
    static rootSelector: string;
    findChart(): ElementWrapper | null;
    /**
     * Returns an array of chart series. Note that thresholds count as series as well.
     */
    findSeries(): Array<ElementWrapper>;
    findHighlightedSeries(): ElementWrapper | null;
}
