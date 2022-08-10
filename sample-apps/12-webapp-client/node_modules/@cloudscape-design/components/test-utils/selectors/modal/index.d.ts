import { ElementWrapper, ComponentWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default class ModalWrapper extends ComponentWrapper {
    static rootSelector: string;
    findHeader(): ElementWrapper;
    findContent(): ElementWrapper;
    findFooter(): ElementWrapper;
    findDismissButton(): ElementWrapper;
}
