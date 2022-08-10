import { ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default class RadioButtonWrapper extends ElementWrapper {
    private findAbstractSwitch;
    findLabel(): ElementWrapper;
    findNativeInput(): ElementWrapper;
    findDescription(): ElementWrapper;
}
