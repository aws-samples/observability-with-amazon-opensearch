import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ButtonWrapper from '../button';
export default class CodeEditorWrapper extends ComponentWrapper {
    static rootSelector: string;
    findEditor(): ElementWrapper | null;
    findNativeTextArea(): ElementWrapper<HTMLTextAreaElement> | null;
    findErrorsTab(): ElementWrapper | null;
    findWarningsTab(): ElementWrapper | null;
    findSettingsButton(): ButtonWrapper | null;
    findStatusBar(): ElementWrapper | null;
    findPane(): ElementWrapper | null;
    findLoadingScreen(): ElementWrapper | null;
    findErrorScreen(): ElementWrapper | null;
    /**
     * Sets the value of the component and calls the `onChange` handler
     *
     * @param value The value the input is set to.
     */
    setValue(value: string): void;
}
