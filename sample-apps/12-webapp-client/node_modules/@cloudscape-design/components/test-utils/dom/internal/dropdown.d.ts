import { ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class DropdownWrapper extends ElementWrapper {
    static rootSelector: string;
    findOpenDropdown(): ElementWrapper | null;
}
