import { ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import LinkWrapper from '../link';
import AttributeEditorWrapper, { AttributeEditorRowWrapper } from '../attribute-editor';
export declare class TagEditorRowWrapper extends AttributeEditorRowWrapper {
    findUndoButton(): LinkWrapper;
}
export default class TagEditorWrapper extends AttributeEditorWrapper {
    static rootSelector: string;
    /**
     * Returns a row for a given index.
     *
     * @param row 1-based row index
     */
    findRow(row: number): TagEditorRowWrapper;
    /**
     * Returns all rows.
     *
     * To find a specific row use the `findRow(n)` function as chaining `findRows().get(n)` can return unexpected results.
     * @see findRow
     */
    findRows(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<TagEditorRowWrapper>;
    findLoadingText(): ElementWrapper;
}
