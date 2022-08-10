import { ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import DropdownHostComponentWrapper from '../internal/dropdown-host';
export default class ChartFilterWrapper extends DropdownHostComponentWrapper {
    static rootSelector: string;
    findPlaceholder(): ElementWrapper | null;
    findTrigger(): ElementWrapper;
}
