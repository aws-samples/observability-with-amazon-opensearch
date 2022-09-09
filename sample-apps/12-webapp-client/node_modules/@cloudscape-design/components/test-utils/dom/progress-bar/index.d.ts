import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ButtonWrapper from '../button';
export default class ProgressBarWrapper extends ComponentWrapper {
    static rootSelector: string;
    findPercentageText(): ElementWrapper | null;
    findResultButton(): ButtonWrapper | null;
    /**
     * Returns the result text.
     *
     * @param status
     *
     * [optional] Status of the result text. It can be aither "error" or "succes".
     * If not specified, the method returns the result text that is currently displayed, independently of the result status.
     */
    findResultText(status?: string): ElementWrapper | null;
}
