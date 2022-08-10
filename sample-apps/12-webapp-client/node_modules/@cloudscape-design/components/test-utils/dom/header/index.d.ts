import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class HeaderWrapper extends ComponentWrapper {
    static rootSelector: string;
    findHeadingText(): ElementWrapper;
    findCounter(): ElementWrapper | null;
    findDescription(): ElementWrapper | null;
    findInfo(): ElementWrapper | null;
    findActions(): ElementWrapper | null;
}
