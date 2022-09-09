import { ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import DropdownHostComponentWrapper from '../internal/dropdown-host';
export default class ChartFilterWrapper extends DropdownHostComponentWrapper {
    static rootSelector: string;
    findPlaceholder(): ElementWrapper;
    findTrigger(): ElementWrapper;
}
