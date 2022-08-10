import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default class TextareaWrapper extends ComponentWrapper {
    static rootSelector: string;
    findNativeTextarea(): ElementWrapper;
}
