import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ButtonWrapper from '../button';
import FormFieldWrapper from '../form-field';
export declare class AttributeEditorRowWrapper extends ElementWrapper {
    /**
     * Returns all fields. Fields are supplied in the `definition` property of the component.
     */
    findFields(): Array<FormFieldWrapper>;
    /**
     * Returns a field for a given index
     *
     * @param column 1-based column index
     */
    findField(column: number): FormFieldWrapper | null;
    findRemoveButton(): ButtonWrapper | null;
}
export default class AttributeEditorWrapper extends ComponentWrapper {
    static rootSelector: string;
    findEmptySlot(): ElementWrapper | null;
    /**
     * Returns a row for a given index.
     *
     * @param row 1-based row index
     */
    findRow(row: number): AttributeEditorRowWrapper | null;
    /**
     * Returns all rows.
     *
     * To find a specific row use the `findRow(n)` function as chaining `findRows().get(n)` can return unexpected results.
     * @see findRow
     */
    findRows(): Array<AttributeEditorRowWrapper>;
    findAddButton(): ButtonWrapper;
    findAdditionalInfo(): ElementWrapper | null;
}
