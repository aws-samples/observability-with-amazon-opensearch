import { ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class RadioButtonWrapper extends ElementWrapper {
    private findAbstractSwitch;
    findLabel(): ElementWrapper;
    findNativeInput(): ElementWrapper<HTMLInputElement>;
    findDescription(): ElementWrapper | null;
}
