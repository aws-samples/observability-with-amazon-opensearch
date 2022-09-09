import { ElementWrapper, ComponentWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class CheckboxWrapper extends ComponentWrapper {
    static rootSelector: string;
    private findAbstractSwitch;
    findLabel(): ElementWrapper;
    findNativeInput(): ElementWrapper<HTMLInputElement>;
    findDescription(): ElementWrapper | null;
}
