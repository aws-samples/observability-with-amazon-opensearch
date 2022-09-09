import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import ButtonWrapper from '../button';
export default class AlertWrapper extends ComponentWrapper {
    static rootSelector: string;
    /**
     * Returns the container node of the component.
     */
    findRootElement(): ElementWrapper;
    /**
     * Returns the dismiss button.
     *
     * The dismiss button is only rendered when the `dismissible` property is set to `true`.
     */
    findDismissButton(): ButtonWrapper;
    /**
     * Returns the action button.
     *
     * The action button is only rendered when the `buttonText` property is set.
     */
    findActionButton(): ButtonWrapper;
    findHeader(): ElementWrapper;
    findContent(): ElementWrapper;
    findActionSlot(): ElementWrapper;
}
