import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default class HeaderWrapper extends ComponentWrapper {
    static rootSelector: string;
    findHeadingText(): ElementWrapper;
    findCounter(): ElementWrapper;
    findDescription(): ElementWrapper;
    findInfo(): ElementWrapper;
    findActions(): ElementWrapper;
}
