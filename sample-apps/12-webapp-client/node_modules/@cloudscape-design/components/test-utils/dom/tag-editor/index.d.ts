import { ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import LinkWrapper from '../link';
import AttributeEditorWrapper, { AttributeEditorRowWrapper } from '../attribute-editor';
export declare class TagEditorRowWrapper extends AttributeEditorRowWrapper {
    findUndoButton(): LinkWrapper | null;
}
export default class TagEditorWrapper extends AttributeEditorWrapper {
    static rootSelector: string;
    /**
     * Returns a row for a given index.
     *
     * @param row 1-based row index
     */
    findRow(row: number): TagEditorRowWrapper | null;
    /**
     * Returns all rows.
     *
     * To find a specific row use the `findRow(n)` function as chaining `findRows().get(n)` can return unexpected results.
     * @see findRow
     */
    findRows(): Array<TagEditorRowWrapper>;
    findLoadingText(): ElementWrapper | null;
}
