import { ElementWrapper, ComponentWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class ModalWrapper extends ComponentWrapper {
    static rootSelector: string;
    findHeader(): ElementWrapper;
    findContent(): ElementWrapper;
    findFooter(): ElementWrapper | null;
    findDismissButton(): ElementWrapper;
    isVisible(): boolean;
}
