import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import RadioButtonWrapper from './radio-button';
export default class RadioGroupWrapper extends ComponentWrapper {
    static rootSelector: string;
    findButtons(): Array<RadioButtonWrapper>;
    findInputByValue(value: string): ElementWrapper<HTMLInputElement> | null;
}
