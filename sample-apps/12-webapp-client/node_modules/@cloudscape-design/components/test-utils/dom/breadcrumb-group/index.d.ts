import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ButtonDropdownWrapper from '../button-dropdown';
export default class BreadcrumbGroupWrapper extends ComponentWrapper {
    static rootSelector: string;
    /**
     * Returns all links.
     *
     * To find a specific link use the `findBreadcrumbLink(n)` function as chaining `findBreadcrumbLinks().get(n)` can return unexpected results.
     * @see findBreadcrumbLink
     */
    findBreadcrumbLinks(): Array<ElementWrapper>;
    /**
     * Returns a link for a given index.
     *
     * @param index 1-based link index
     */
    findBreadcrumbLink(index: number): ElementWrapper | null;
    findDropdown(): ButtonDropdownWrapper | null;
}
