import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class GridWrapper extends ComponentWrapper<HTMLDivElement> {
    static rootSelector: string;
    /**
     * Returns a column from the grid for a given index.
     * @param columnIndex 1-based index of the column to return.
     */
    findColumn(columnIndex: number): ElementWrapper<HTMLDivElement> | null;
}
