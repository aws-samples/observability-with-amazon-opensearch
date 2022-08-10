import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import { ButtonWrapper } from '../index.js';
export default class PopoverWrapper extends ComponentWrapper {
    static rootSelector: string;
    findTrigger(): ElementWrapper;
    /**
     * @param options
     * * renderWithPortal (boolean) - Flag to find the header when the popover is rendered with a portal
     */
    findHeader(options?: {
        renderWithPortal: boolean;
    }): ElementWrapper | null;
    /**
     * @param options
     * * renderWithPortal (boolean) - Flag to find the content when the popover is rendered with a portal
     */
    findContent(options?: {
        renderWithPortal: boolean;
    }): ElementWrapper | null;
    /**
     * @param options
     * * renderWithPortal (boolean) - Flag to find the dismiss button when the popover is rendered with a portal
     */
    findDismissButton(options?: {
        renderWithPortal: boolean;
    }): ButtonWrapper | null;
}
