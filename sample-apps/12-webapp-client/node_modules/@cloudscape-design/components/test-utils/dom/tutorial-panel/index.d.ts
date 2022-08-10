import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import LinkWrapper from '../link';
import TutorialItemWrapper from './tutorial';
import ButtonWrapper from '../button';
export default class TutorialPanelWrapper extends ComponentWrapper {
    static rootSelector: string;
    findTutorials(): Array<TutorialItemWrapper>;
    findDownloadLink(): LinkWrapper | null;
    findTaskList(): Array<TutorialTaskWrapper>;
    findDismissButton(): ButtonWrapper | null;
    findCompletionScreenTitle(): ElementWrapper | null;
    findCompletionScreenDescription(): ElementWrapper | null;
    findFeedbackLink(): LinkWrapper | null;
}
declare class TutorialTaskWrapper extends ComponentWrapper {
    findTitle(): ElementWrapper;
    findStepsTitle(): ElementWrapper;
    findSteps(): Array<ElementWrapper>;
}
export {};
