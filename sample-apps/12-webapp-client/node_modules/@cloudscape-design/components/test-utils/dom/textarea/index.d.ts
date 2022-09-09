import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class TextareaWrapper extends ComponentWrapper<HTMLTextAreaElement> {
    static rootSelector: string;
    findNativeTextarea(): ElementWrapper<HTMLTextAreaElement>;
    /**
     * Sets the value of the component and calls the onChange handler.
     *
     * @param value value to set the textarea to.
     */
    setTextareaValue(value: string): void;
}
