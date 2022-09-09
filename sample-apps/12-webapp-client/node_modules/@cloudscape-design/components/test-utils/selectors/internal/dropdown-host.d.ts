import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import DropdownWrapper from './dropdown';
import OptionWrapper from './option';
export default abstract class DropdownHostComponentWrapper extends ComponentWrapper {
    abstract findTrigger(): ElementWrapper;
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    private assertOpenDropdown;
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findDropdown(options?: {
        expandToViewport: boolean;
    }): DropdownContentWrapper;
}
export declare class DropdownContentWrapper extends ComponentWrapper {
    findDisabledOptions(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<OptionWrapper>;
    findFooterRegion(): ElementWrapper;
    findHighlightedAriaLiveRegion(): ElementWrapper;
    /**
     * Returns highlighted text fragments from all of the options.
     * Options get highlighted when they match the value of the input field.
     */
    findHighlightedMatches(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
    findHighlightedOption(): OptionWrapper;
    findOpenDropdown(): ElementWrapper;
    /**
     * Returns an option from the dropdown.
     *
     * @param optionIndex 1-based index of the option to select.
     */
    findOption(optionIndex: number): OptionWrapper;
    findOptionByValue(value: string): OptionWrapper;
    /**
     * Returns an option from the dropdown.
     *
     * @param groupIndex 1-based index of the group to select an option in.
     * @param optionIndex 1-based index of the option to select.
     */
    findOptionInGroup(groupIndex: number, optionIndex: number): OptionWrapper;
    findOptions(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<OptionWrapper>;
    /**
     * Use this element to scroll through the list of options
     */
    findOptionsContainer(): ElementWrapper;
    findSelectedOptions(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<OptionWrapper>;
}
export declare class PortalDropdownContentWrapper extends DropdownContentWrapper {
    findOpenDropdown(): DropdownWrapper;
}
