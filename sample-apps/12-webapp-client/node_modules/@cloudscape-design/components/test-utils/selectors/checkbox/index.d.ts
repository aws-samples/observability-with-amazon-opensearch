import { ElementWrapper, ComponentWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default class CheckboxWrapper extends ComponentWrapper {
    static rootSelector: string;
    private findAbstractSwitch;
    findLabel(): ElementWrapper;
    findNativeInput(): ElementWrapper;
    findDescription(): ElementWrapper;
}
