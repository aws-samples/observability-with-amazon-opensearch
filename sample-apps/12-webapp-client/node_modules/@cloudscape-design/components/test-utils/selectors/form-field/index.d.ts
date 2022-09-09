import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default class FormFieldWrapper extends ComponentWrapper {
    static rootSelector: string;
    findControl(): ElementWrapper;
    findLabel(): ElementWrapper;
    findInfo(): ElementWrapper;
    findConstraint(): ElementWrapper;
    findError(): ElementWrapper;
    findDescription(): ElementWrapper;
    findSecondaryControl(): ElementWrapper;
}
