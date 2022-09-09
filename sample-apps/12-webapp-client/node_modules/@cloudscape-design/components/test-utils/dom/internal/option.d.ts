import { ElementWrapper, ComponentWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class OptionWrapper extends ComponentWrapper {
    static rootSelector: string;
    findLabel(): ElementWrapper;
    findDescription(): ElementWrapper | null;
    findLabelTag(): ElementWrapper | null;
    findTags(): Array<ElementWrapper> | null;
}
