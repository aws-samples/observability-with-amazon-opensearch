import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import RadioButtonWrapper from './radio-button';
export default class RadioGroupWrapper extends ComponentWrapper {
    static rootSelector: string;
    findButtons(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<RadioButtonWrapper>;
    findInputByValue(value: string): ElementWrapper;
}
