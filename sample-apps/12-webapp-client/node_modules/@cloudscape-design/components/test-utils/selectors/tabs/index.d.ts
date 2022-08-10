import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default class TabsWrapper extends ComponentWrapper {
    static rootSelector: string;
    /**
     * Finds all tab headers and returns the clickable elements from their labels.
     */
    findTabLinks(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
    /**
     * Finds the tab at the given position (1-based) and returns the clickable element from its tab label.
     *
     * @param index 1-based index of the clickable element to return
     */
    findTabLinkByIndex(index: number): ElementWrapper;
    /**
     * Finds the tab with the given ID and returns the clickable element from its tab label.
     *
     * @param index ID of the clickable element to return
     */
    findTabLinkById(id: string): ElementWrapper;
    /**
     * Finds the currently active tab and returns the clickable element from its tab label.
     */
    findActiveTab(): ElementWrapper;
    /**
     * Finds the currently displayed tab content and returns it.
     */
    findTabContent(): ElementWrapper;
}
