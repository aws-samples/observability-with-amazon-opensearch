import { ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import CommonChartWrapper from '../internal/charts';
export default class PieChartWrapper extends CommonChartWrapper {
    static rootSelector: string;
    findFilterContainer(): ElementWrapper | null;
    findSegments(): Array<ElementWrapper>;
    findHighlightedSegment(): ElementWrapper | null;
    findChart(): ElementWrapper | null;
    /**
     * Returns a focusable element that controls keyboard interactions.
     */
    findApplication(): ElementWrapper | null;
    findInnerContent(): ElementWrapper | null;
    findSegmentLabels(): Array<ElementWrapper>;
    findHighlightedSegmentLabel(): ElementWrapper | null;
}
