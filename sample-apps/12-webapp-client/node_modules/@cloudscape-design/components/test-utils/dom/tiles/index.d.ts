import { ElementWrapper, ComponentWrapper } from '@cloudscape-design/test-utils-core/dom';
import TileWrapper from './tile';
export default class TilesWrapper extends ComponentWrapper {
    static rootSelector: string;
    findItems(): Array<TileWrapper>;
    findInputByValue(value: string): ElementWrapper<HTMLInputElement> | null;
    findItemByValue(value: string): TileWrapper | null;
}
