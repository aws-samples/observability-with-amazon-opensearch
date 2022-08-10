import { ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default class AbstractSwitchWrapper extends ElementWrapper {
    static rootSelector: string;
    findLabel(): ElementWrapper;
    findNativeInput(): ElementWrapper;
    findDescription(): ElementWrapper;
}
