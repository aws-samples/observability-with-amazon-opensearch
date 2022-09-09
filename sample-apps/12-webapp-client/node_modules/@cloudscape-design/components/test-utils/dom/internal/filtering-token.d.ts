import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import SelectWrapper from '../select';
export default class FilteringTokenWrapper extends ComponentWrapper {
    static rootSelector: string;
    findLabel(): ElementWrapper;
    findRemoveButton(): ElementWrapper<HTMLButtonElement>;
    findTokenOperation(): SelectWrapper | null;
}
