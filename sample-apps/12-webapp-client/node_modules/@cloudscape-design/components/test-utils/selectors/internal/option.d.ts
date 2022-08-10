import { ElementWrapper, ComponentWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default class OptionWrapper extends ComponentWrapper {
    static rootSelector: string;
    findLabel(): ElementWrapper;
    findDescription(): ElementWrapper;
    findLabelTag(): ElementWrapper;
    findTags(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
}
