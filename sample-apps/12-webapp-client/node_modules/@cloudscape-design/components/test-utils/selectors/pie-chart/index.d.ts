import { ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import CommonChartWrapper from '../internal/charts';
export default class PieChartWrapper extends CommonChartWrapper {
    static rootSelector: string;
    findFilterContainer(): ElementWrapper;
    findSegments(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
    findHighlightedSegment(): ElementWrapper;
    findChart(): ElementWrapper;
    /**
     * Returns a focusable element that controls keyboard interactions.
     */
    findApplication(): ElementWrapper;
    findInnerContent(): ElementWrapper;
    findSegmentLabels(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
    findHighlightedSegmentLabel(): ElementWrapper;
}
