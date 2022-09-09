import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class ButtonWrapper extends ComponentWrapper<HTMLButtonElement> {
    static rootSelector: string;
    findLoadingIndicator(): ElementWrapper | null;
    findTextRegion(): ElementWrapper | null;
    isDisabled(): boolean;
}
