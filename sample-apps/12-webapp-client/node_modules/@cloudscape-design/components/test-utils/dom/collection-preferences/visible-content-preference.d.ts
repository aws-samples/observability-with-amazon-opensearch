import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ToggleWrapper from '../toggle';
export default class VisibleContentPreferenceWrapper extends ComponentWrapper {
    static rootSelector: string;
    findTitle(): ElementWrapper;
    findOptionsGroups(): Array<ElementWrapper>;
    findOptions(): Array<ElementWrapper>;
    /**
     * Returns a content selector toggle.
     *
     * @param groupIndex 1-based index of the content group.
     * @param optionIndex 1-based index of the option to return within the group.
     */
    findToggleByIndex(groupIndex: number, optionIndex: number): ToggleWrapper | null;
}
