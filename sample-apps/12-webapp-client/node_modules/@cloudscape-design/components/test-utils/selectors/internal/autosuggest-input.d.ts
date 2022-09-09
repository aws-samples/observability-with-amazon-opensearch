import { ComponentWrapper } from "@cloudscape-design/test-utils-core/selectors";
import { InputWrapper } from '../index.js';
import DropdownWrapper from './dropdown.js';
export default class AutosuggestInputWrapper extends ComponentWrapper {
    static rootSelector: string;
    findInput(): InputWrapper;
    findDropdown(): DropdownWrapper;
}
