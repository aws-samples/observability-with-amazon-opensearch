import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import ButtonWrapper from '../button';
export default class SplitPanelWrapper extends ComponentWrapper {
    static rootSelector: string;
    findHeader(): ElementWrapper;
    findPreferencesButton(): ButtonWrapper;
    findCloseButton(): ButtonWrapper;
    findOpenButton(): ButtonWrapper;
    findSlider(): ElementWrapper;
    /**
     * Returns the same panel if it's currently open in bottom position. If not, it returns null.
     * Use this method to assert the panel position.
     */
    findOpenPanelBottom(): ElementWrapper;
    /**
     * Returns the same panel if it's currently open in side position. If not, it returns null.
     * Use this method to assert the panel position.
     */
    findOpenPanelSide(): ElementWrapper;
}
