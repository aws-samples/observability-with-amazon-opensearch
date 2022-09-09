import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class ChartLegendWrapper extends ComponentWrapper {
    static rootSelector: string;
    findTitle(): ElementWrapper | null;
    findHighlightedItem(): ElementWrapper | null;
    findItems(): Array<ElementWrapper>;
    findNativeList(): ElementWrapper | null;
}
