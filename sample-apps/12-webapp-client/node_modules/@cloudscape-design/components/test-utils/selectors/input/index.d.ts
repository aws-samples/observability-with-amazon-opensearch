import { ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import BaseInputWrapper from './base-input';
export default class InputWrapper extends BaseInputWrapper {
    static rootSelector: string;
    findClearButton(): ElementWrapper;
}
