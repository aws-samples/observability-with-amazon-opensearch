import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class ButtonDropdownWrapper extends ComponentWrapper {
    static rootSelector: string;
    findNativeButton(): ElementWrapper<HTMLButtonElement>;
    findOpenDropdown(): ElementWrapper | null;
    /**
     * Finds an item in the open dropdown by item id. Returns null if there is no open dropdown.
     *
     * This utility does not open the dropdown. To find dropdown items, call `openDropdown()` first.
     */
    findItemById(id: string): ElementWrapper | null;
    /**
     * Finds an expandable category in the open dropdown by category id. Returns null if there is no open dropdown.
     *
     * This utility does not open the dropdown. To find dropdown items, call `openDropdown()` first.
     */
    findExpandableCategoryById(id: string): ElementWrapper | null;
    /**
     * Finds the highlighted item in the open dropdown. Returns null if there is no open dropdown.
     *
     * This utility does not open the dropdown. To find dropdown items, call `openDropdown()` first.
     */
    findHighlightedItem(): ElementWrapper | null;
    /**
     * Finds all the items in the open dropdown. Returns empty array if there is no open dropdown.
     *
     * This utility does not open the dropdown. To find dropdown items, call `openDropdown()` first.
     */
    findItems(): Array<ElementWrapper>;
    /**
     * Finds the disabled reason tooltip. Returns null if no disabled item with `disabledReason` is highlighted.
     */
    findDisabledReason(): ElementWrapper | null;
    openDropdown(): void;
}
