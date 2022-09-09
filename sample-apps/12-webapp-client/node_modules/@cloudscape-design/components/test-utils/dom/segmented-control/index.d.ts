import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class SegmentedControlWrapper extends ComponentWrapper {
    static rootSelector: string;
    findSegments(): Array<ElementWrapper>;
    findSelectedSegment(): ElementWrapper | null;
}
