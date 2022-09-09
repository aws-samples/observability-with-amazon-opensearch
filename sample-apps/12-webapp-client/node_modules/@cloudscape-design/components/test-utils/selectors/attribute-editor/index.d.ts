import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import ButtonWrapper from '../button';
import FormFieldWrapper from '../form-field';
export declare class AttributeEditorRowWrapper extends ElementWrapper {
    /**
     * Returns all fields. Fields are supplied in the `definition` property of the component.
     */
    findFields(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<FormFieldWrapper>;
    /**
     * Returns a field for a given index
     *
     * @param column 1-based column index
     */
    findField(column: number): FormFieldWrapper;
    findRemoveButton(): ButtonWrapper;
}
export default class AttributeEditorWrapper extends ComponentWrapper {
    static rootSelector: string;
    findEmptySlot(): ElementWrapper;
    /**
     * Returns a row for a given index.
     *
     * @param row 1-based row index
     */
    findRow(row: number): AttributeEditorRowWrapper;
    /**
     * Returns all rows.
     *
     * To find a specific row use the `findRow(n)` function as chaining `findRows().get(n)` can return unexpected results.
     * @see findRow
     */
    findRows(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<AttributeEditorRowWrapper>;
    findAddButton(): ButtonWrapper;
    findAdditionalInfo(): ElementWrapper;
}
