import { ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default class DropdownWrapper extends ElementWrapper {
    static rootSelector: string;
    findOpenDropdown(): ElementWrapper;
}
