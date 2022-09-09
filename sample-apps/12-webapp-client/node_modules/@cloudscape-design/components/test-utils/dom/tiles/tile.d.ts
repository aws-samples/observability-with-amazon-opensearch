import { ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class TileWrapper extends ElementWrapper {
    static rootSelector: string;
    private findRadioButton;
    findLabel(): ElementWrapper;
    findDescription(): ElementWrapper | null;
    findImage(): ElementWrapper;
    findNativeInput(): ElementWrapper;
}
