import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default class SegmentedControlWrapper extends ComponentWrapper {
    static rootSelector: string;
    findSegments(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
    findSelectedSegment(): ElementWrapper;
}
