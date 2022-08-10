import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class PaginationWrapper extends ComponentWrapper {
    static rootSelector: string;
    findCurrentPage(): ElementWrapper;
    findPageNumbers(): Array<ElementWrapper>;
    /**
     * Returns a page number for a given index.
     *
     * @param index 1-based index of the page number to return.
     */
    findPageNumberByIndex(index: number): ElementWrapper | null;
    findPreviousPageButton(): ElementWrapper;
    findNextPageButton(): ElementWrapper;
}
