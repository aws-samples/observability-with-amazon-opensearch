import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default class ButtonWrapper extends ComponentWrapper {
    static rootSelector: string;
    findLoadingIndicator(): ElementWrapper;
    findTextRegion(): ElementWrapper;
}
