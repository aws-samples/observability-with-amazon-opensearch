import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import RadioButtonWrapper from '../radio-group/radio-button';
export default class PageSizePreferenceWrapper extends ComponentWrapper {
    static rootSelector: string;
    findTitle(): ElementWrapper;
    findOptions(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<RadioButtonWrapper>;
}
