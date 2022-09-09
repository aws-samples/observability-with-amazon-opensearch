import { ElementWrapper, ComponentWrapper } from "@cloudscape-design/test-utils-core/selectors";
import InputWrapper from '../input';
import OptionWrapper from '../internal/option';
export declare class AutosuggestDropdownWrapper extends ComponentWrapper {
    findOptions(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<OptionWrapper>;
    /**
     * Returns an option from the dropdown.
     *
     * @param optionIndex 1-based index of the option to select.
     */
    findOption(optionIndex: number): OptionWrapper;
    /**
     * Returns an option from the autosuggest by it's value
     *
     * @param value The 'value' of the option.
     */
    findOptionByValue(value: string): OptionWrapper;
    /**
     * Returns an option from the dropdown.
     *
     * @param groupIndex 1-based index of the group to select an option in.
     * @param optionIndex 1-based index of the option to select.
     */
    findOptionInGroup(groupIndex: number, optionIndex: number): OptionWrapper;
    /**
     * Use this element to scroll through the list of options
     */
    findOptionsContainer(): ElementWrapper;
    findFooterRegion(): ElementWrapper;
    findOpenDropdown(): ElementWrapper;
    findHighlightedOption(): OptionWrapper;
    /**
     * Returns all the selected options.
     */
    findDisabledOptions(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<OptionWrapper>;
    /**
     * Returns highlighted text fragments from all of the options.
     * Options get highlighted when they match the value of the input field.
     */
    findHighlightedMatches(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
    findHighlightedAriaLiveRegion(): ElementWrapper;
}
export declare class PortalAutosuggestDropdownWrapper extends AutosuggestDropdownWrapper {
    findOpenDropdown(): ElementWrapper;
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
    }): ElementWrapper;
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findErrorRecoveryButton(options?: {
        expandToViewport: boolean;
    }): ElementWrapper;
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findEnteredTextOption(options?: {
        expandToViewport: boolean;
    }): ElementWrapper;
}
