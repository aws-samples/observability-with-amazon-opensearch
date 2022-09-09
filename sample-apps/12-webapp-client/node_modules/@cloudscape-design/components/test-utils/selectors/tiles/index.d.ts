import { ElementWrapper, ComponentWrapper } from "@cloudscape-design/test-utils-core/selectors";
import TileWrapper from './tile';
export default class TilesWrapper extends ComponentWrapper {
    static rootSelector: string;
    findItems(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<TileWrapper>;
    findInputByValue(value: string): ElementWrapper;
    findItemByValue(value: string): TileWrapper;
}
