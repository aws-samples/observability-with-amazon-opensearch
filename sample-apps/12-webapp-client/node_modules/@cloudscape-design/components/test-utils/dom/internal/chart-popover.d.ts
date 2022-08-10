import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ButtonWrapper from '../button';
export default class ChartPopoverWrapper extends ComponentWrapper {
    static rootSelector: string;
    findHeader(): ElementWrapper | null;
    findContent(): ElementWrapper | null;
    findDismissButton(): ButtonWrapper | null;
}
