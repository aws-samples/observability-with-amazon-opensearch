import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default class ChartLegendWrapper extends ComponentWrapper {
    static rootSelector: string;
    findTitle(): ElementWrapper;
    findHighlightedItem(): ElementWrapper;
    findItems(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
    findNativeList(): ElementWrapper;
}
