import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class ContentLayoutWrapper extends ComponentWrapper<HTMLDivElement> {
    static rootSelector: string;
    findHeader(): ElementWrapper | null;
    findContent(): ElementWrapper;
}
