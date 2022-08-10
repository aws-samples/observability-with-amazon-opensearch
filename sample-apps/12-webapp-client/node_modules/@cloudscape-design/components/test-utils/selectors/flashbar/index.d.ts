import { ComponentWrapper } from "@cloudscape-design/test-utils-core/selectors";
import FlashWrapper from './flash';
export default class FlashbarWrapper extends ComponentWrapper {
    static rootSelector: string;
    /**
     * Returns the individual flashes of this flashbar.
     */
    findItems(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<FlashWrapper>;
}
