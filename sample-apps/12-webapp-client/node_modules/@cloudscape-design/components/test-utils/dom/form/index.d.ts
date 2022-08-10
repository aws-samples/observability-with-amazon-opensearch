import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class FormWrapper extends ComponentWrapper {
    static rootSelector: string;
    findHeader(): ElementWrapper | null;
    findContent(): ElementWrapper | null;
    findError(): ElementWrapper | null;
    findActions(): ElementWrapper | null;
    findSecondaryActions(): ElementWrapper | null;
}
