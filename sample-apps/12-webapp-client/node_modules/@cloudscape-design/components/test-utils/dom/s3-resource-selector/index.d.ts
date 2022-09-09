import { ElementWrapper, ComponentWrapper } from '@cloudscape-design/test-utils-core/dom';
import InputWrapper from '../input';
import SelectWrapper from '../select';
import ButtonWrapper from '../button';
import ModalWrapper from '../modal';
import TableWrapper from '../table';
declare class S3ModalWrapper extends ModalWrapper {
    findSubmitButton(): ButtonWrapper;
}
declare class S3InContextWrapper extends ComponentWrapper {
    findUriInput(): InputWrapper;
    findVersionsSelect(): SelectWrapper | null;
    findViewButton(): ButtonWrapper;
    findBrowseButton(): ButtonWrapper;
}
export default class S3ResourceSelectorWrapper extends ComponentWrapper {
    static rootSelector: string;
    findAlertSlot(): ElementWrapper | null;
    findInContext(): S3InContextWrapper;
    findModal(): S3ModalWrapper | null;
    findTable(): TableWrapper | null;
}
export {};
