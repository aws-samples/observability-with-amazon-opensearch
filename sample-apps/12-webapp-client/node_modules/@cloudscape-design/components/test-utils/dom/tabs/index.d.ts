import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class TabsWrapper extends ComponentWrapper<HTMLButtonElement> {
    static rootSelector: string;
    /**
     * Finds all tab headers and returns the clickable elements from their labels.
     */
    findTabLinks(): Array<ElementWrapper<HTMLAnchorElement | HTMLButtonElement>>;
    /**
     * Finds the tab at the given position (1-based) and returns the clickable element from its tab label.
     *
     * @param index 1-based index of the clickable element to return
     */
    findTabLinkByIndex(index: number): ElementWrapper<HTMLAnchorElement | HTMLButtonElement> | null;
    /**
     * Finds the tab with the given ID and returns the clickable element from its tab label.
     *
     * @param index ID of the clickable element to return
     */
    findTabLinkById(id: string): ElementWrapper<HTMLAnchorElement | HTMLButtonElement> | null;
    /**
     * Finds the currently active tab and returns the clickable element from its tab label.
     */
    findActiveTab(): ElementWrapper<HTMLAnchorElement | HTMLButtonElement> | null;
    /**
     * Finds the currently displayed tab content and returns it.
     */
    findTabContent(): ElementWrapper<HTMLDivElement> | null;
}
