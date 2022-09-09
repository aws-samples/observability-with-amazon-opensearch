import { ElementWrapper, ComponentWrapper } from "@cloudscape-design/test-utils-core/selectors";
import OptionWrapper from '../internal/option';
export default class TokenWrapper extends ComponentWrapper {
    static rootSelector: string;
    findOption(): OptionWrapper;
    findLabel(): ElementWrapper;
    findDismiss(): ElementWrapper;
}
