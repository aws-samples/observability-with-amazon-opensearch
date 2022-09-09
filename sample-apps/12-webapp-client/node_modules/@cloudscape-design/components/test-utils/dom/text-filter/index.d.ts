import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import InputWrapper from '../input';
export default class TextFilterWrapper extends ComponentWrapper {
    static rootSelector: string;
    findInput(): InputWrapper;
    findResultsCount(): ElementWrapper;
}
