import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
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
    openDropdown(): void;
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    closeDropdown(options?: {
        expandToViewport: boolean;
    }): void;
    /**
     * Selects an option for the given index by triggering corresponding events.
     *
     * This utility does not open the dropdown of the given select and it will need to be called explicitly in your test.
     * On selection the dropdown will close automatically.
     *
     * Example:
     * ```
     * wrapper.openDropdown();
     * wrapper.selectOption(1);
     * ```
     *
     * @param index 1-based index of the option to select
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    selectOption(index: number, options?: {
        expandToViewport: boolean;
    }): void;
    /**
     * Selects an option for the given value by triggering corresponding events.
     *
     * This utility does not open the dropdown of the given select and it will need to be called explicitly in your test.
     * On selection the dropdown will close automatically.
     *
     * Example:
     * ```
     * wrapper.openDropdown();
     * wrapper.selectOptionByValue('option_1');
     * ```
     *
     * @param value value of the option
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    selectOptionByValue(value: string, options?: {
        expandToViewport: boolean;
    }): void;
}
export declare class DropdownContentWrapper extends ComponentWrapper {
    findDisabledOptions(): Array<OptionWrapper>;
    findFooterRegion(): ElementWrapper | null;
    findHighlightedAriaLiveRegion(): ElementWrapper | null;
    /**
     * Returns highlighted text fragments from all of the options.
     * Options get highlighted when they match the value of the input field.
     */
    findHighlightedMatches(): Array<ElementWrapper>;
    findHighlightedOption(): OptionWrapper | null;
    findOpenDropdown(): ElementWrapper | null;
    /**
     * Returns an option from the dropdown.
     *
     * @param optionIndex 1-based index of the option to select.
     */
    findOption(optionIndex: number): OptionWrapper | null;
    findOptionByValue(value: string): OptionWrapper | null;
    /**
     * Returns an option from the dropdown.
     *
     * @param groupIndex 1-based index of the group to select an option in.
     * @param optionIndex 1-based index of the option to select.
     */
    findOptionInGroup(groupIndex: number, optionIndex: number): OptionWrapper | null;
    findOptions(): Array<OptionWrapper>;
    /**
     * Use this element to scroll through the list of options
     */
    findOptionsContainer(): ElementWrapper | null;
    findSelectedOptions(): Array<OptionWrapper>;
}
export declare class PortalDropdownContentWrapper extends DropdownContentWrapper {
    findOpenDropdown(): ElementWrapper | null;
}
