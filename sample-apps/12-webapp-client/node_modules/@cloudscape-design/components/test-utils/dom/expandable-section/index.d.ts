import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class ExpandableSectionWrapper extends ComponentWrapper {
    static rootSelector: string;
    findHeader(): ElementWrapper;
    findContent(): ElementWrapper;
    findExpandedContent(): ElementWrapper | null;
    findExpandIcon(): ElementWrapper;
}
