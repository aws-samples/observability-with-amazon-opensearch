import { ElementWrapper, ComponentWrapper } from '@cloudscape-design/test-utils-core/dom';
import InputWrapper from '../input';
import OptionWrapper from '../internal/option';
export declare class AutosuggestDropdownWrapper extends ComponentWrapper {
    findOptions(): Array<OptionWrapper>;
    /**
     * Returns an option from the dropdown.
     *
     * @param optionIndex 1-based index of the option to select.
     */
    findOption(optionIndex: number): OptionWrapper | null;
    /**
     * Returns an option from the autosuggest by it's value
     *
     * @param value The 'value' of the option.
     */
    findOptionByValue(value: string): OptionWrapper | null;
    /**
     * Returns an option from the dropdown.
     *
     * @param groupIndex 1-based index of the group to select an option in.
     * @param optionIndex 1-based index of the option to select.
     */
    findOptionInGroup(groupIndex: number, optionIndex: number): OptionWrapper | null;
    /**
     * Use this element to scroll through the list of options
     */
    findOptionsContainer(): ElementWrapper | null;
    findFooterRegion(): ElementWrapper | null;
    findOpenDropdown(): ElementWrapper | null;
    findHighlightedOption(): OptionWrapper | null;
    /**
     * Returns all the selected options.
     */
    findDisabledOptions(): Array<OptionWrapper>;
    /**
     * Returns highlighted text fragments from all of the options.
     * Options get highlighted when they match the value of the input field.
     */
    findHighlightedMatches(): Array<ElementWrapper>;
    findHighlightedAriaLiveRegion(): ElementWrapper | null;
}
export declare class PortalAutosuggestDropdownWrapper extends AutosuggestDropdownWrapper {
    findOpenDropdown(): ElementWrapper | null;
}
export default class AutosuggestWrapper extends InputWrapper {
    static rootSelector: string;
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findDropdown(options?: {
        expandToViewport: boolean;
    }): AutosuggestDropdownWrapper;
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findStatusIndicator(options?: {
        expandToViewport: boolean;
    }): ElementWrapper | null;
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findErrorRecoveryButton(options?: {
        expandToViewport: boolean;
    }): ElementWrapper | null;
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findEnteredTextOption(options?: {
        expandToViewport: boolean;
    }): ElementWrapper | null;
    /**
     * Selects a suggestion from the dropdown by simulating mouse events.
     *
     * @param index 1-based index of the suggestion to select.
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    selectSuggestion(index: number, options?: {
        expandToViewport: boolean;
    }): void;
    /**
     * Selects a suggestion from the dropdown by simulating mouse events.
     *
     * @param value value of suggestion to select
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    selectSuggestionByValue(value: string, options?: {
        expandToViewport: boolean;
    }): void;
}
