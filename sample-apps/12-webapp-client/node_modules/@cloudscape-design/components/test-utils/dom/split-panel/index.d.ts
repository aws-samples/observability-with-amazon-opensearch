import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ButtonWrapper from '../button';
export default class SplitPanelWrapper extends ComponentWrapper {
    static rootSelector: string;
    findHeader(): ElementWrapper;
    findPreferencesButton(): ButtonWrapper | null;
    findCloseButton(): ButtonWrapper | null;
    findOpenButton(): ButtonWrapper | null;
    findSlider(): ElementWrapper | null;
    /**
     * Returns the same panel if it's currently open in bottom position. If not, it returns null.
     * Use this method to assert the panel position.
     */
    findOpenPanelBottom(): SplitPanelWrapper | null;
    /**
     * Returns the same panel if it's currently open in side position. If not, it returns null.
     * Use this method to assert the panel position.
     */
    findOpenPanelSide(): SplitPanelWrapper | null;
}
