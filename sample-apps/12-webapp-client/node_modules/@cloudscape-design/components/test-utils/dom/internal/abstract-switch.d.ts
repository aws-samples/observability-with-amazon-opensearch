import { ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class AbstractSwitchWrapper extends ElementWrapper {
    static rootSelector: string;
    findLabel(): ElementWrapper;
    findNativeInput(): ElementWrapper<HTMLInputElement>;
    findDescription(): ElementWrapper | null;
}
