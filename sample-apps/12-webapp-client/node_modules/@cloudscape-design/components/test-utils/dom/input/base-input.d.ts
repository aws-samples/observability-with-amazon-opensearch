import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default abstract class BaseInputWrapper extends ComponentWrapper {
    findNativeInput(): ElementWrapper<HTMLInputElement>;
    focus(): void;
    blur(): void;
    /**
     * Sets the value of the component and calls the `onChange` handler
     *
     * @param value The value the input is set to.
     */
    setInputValue(value: string): void;
    isDisabled(): boolean;
}
