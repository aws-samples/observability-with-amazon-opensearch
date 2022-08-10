import { ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ButtonWrapper from '../button';
import FormWrapper from '../form';
export default class WizardWrapper extends FormWrapper {
    static rootSelector: string;
    findHeader(): ElementWrapper | null;
    findInfo(): ElementWrapper | null;
    findCancelButton(): ButtonWrapper;
    findSkipToButton(): ButtonWrapper | null;
    findPreviousButton(): ButtonWrapper | null;
    findPrimaryButton(): ButtonWrapper;
    findMenuNavigationLinks(): Array<ElementWrapper>;
    /**
     * Returns a link for a given step number.
     *
     * @param stepNumber 1-based step index
     * @param state
     *
     * [optional] State of the link. The method returns null if the specified step does not match the state. It can be
     *  - "disabled": for disabled menu entries
     *  - "active": for the active menu entry
     *  - undefined: for any entry
     */
    findMenuNavigationLink(stepNumber: number, state?: string): ElementWrapper | null;
    findSecondaryActions(): ElementWrapper | null;
}
