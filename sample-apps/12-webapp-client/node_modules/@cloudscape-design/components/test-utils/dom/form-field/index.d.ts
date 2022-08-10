import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class FormFieldWrapper extends ComponentWrapper<HTMLElement> {
    static rootSelector: string;
    findControl(): ElementWrapper | null;
    findLabel(): ElementWrapper | null;
    findInfo(): ElementWrapper | null;
    findConstraint(): ElementWrapper | null;
    findError(): ElementWrapper | null;
    findDescription(): ElementWrapper | null;
    findSecondaryControl(): ElementWrapper | null;
}
