import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import RadioButtonWrapper from '../radio-group/radio-button';
export default class PageSizePreferenceWrapper extends ComponentWrapper {
    static rootSelector: string;
    findTitle(): ElementWrapper;
    findOptions(): Array<RadioButtonWrapper>;
}
