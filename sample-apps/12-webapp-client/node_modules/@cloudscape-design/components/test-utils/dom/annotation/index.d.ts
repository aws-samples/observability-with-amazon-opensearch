import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ButtonWrapper from '../button';
export default class AnnotationWrapper extends ComponentWrapper {
    static rootSelector: string;
    findNextButton(): ButtonWrapper;
    findPreviousButton(): ButtonWrapper;
    findFinishButton(): ButtonWrapper;
    findStepCounter(): ElementWrapper;
    findHeader(): ElementWrapper;
    findContent(): ElementWrapper;
    findDismissButton(): ButtonWrapper;
}
