import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import ButtonWrapper from '../button';
export default class CodeEditorWrapper extends ComponentWrapper {
    static rootSelector: string;
    findEditor(): ElementWrapper;
    findNativeTextArea(): ElementWrapper;
    findErrorsTab(): ElementWrapper;
    findWarningsTab(): ElementWrapper;
    findSettingsButton(): ButtonWrapper;
    findStatusBar(): ElementWrapper;
    findPane(): ElementWrapper;
    findLoadingScreen(): ElementWrapper;
    findErrorScreen(): ElementWrapper;
}
