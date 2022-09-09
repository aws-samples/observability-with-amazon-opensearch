import { ComponentWrapper } from '@cloudscape-design/test-utils-core/dom';
import FlashWrapper from './flash';
export default class FlashbarWrapper extends ComponentWrapper {
    static rootSelector: string;
    /**
     * Returns the individual flashes of this flashbar.
     */
    findItems(): Array<FlashWrapper>;
}
