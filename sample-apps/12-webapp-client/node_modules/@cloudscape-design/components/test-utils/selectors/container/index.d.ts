import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default class ContainerWrapper extends ComponentWrapper {
    static rootSelector: string;
    findHeader(): ElementWrapper;
    findContent(): ElementWrapper;
    findFooter(): ElementWrapper;
}
