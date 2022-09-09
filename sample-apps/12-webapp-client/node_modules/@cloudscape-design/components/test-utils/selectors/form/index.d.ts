import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default class FormWrapper extends ComponentWrapper {
    static rootSelector: string;
    findHeader(): ElementWrapper;
    findContent(): ElementWrapper;
    findError(): ElementWrapper;
    findActions(): ElementWrapper;
    findSecondaryActions(): ElementWrapper;
}
