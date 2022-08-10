import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import LinkWrapper from '../link';
import TutorialItemWrapper from './tutorial';
import ButtonWrapper from '../button';
export default class TutorialPanelWrapper extends ComponentWrapper {
    static rootSelector: string;
    findTutorials(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<TutorialItemWrapper>;
    findDownloadLink(): LinkWrapper;
    findTaskList(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<TutorialTaskWrapper>;
    findDismissButton(): ButtonWrapper;
    findCompletionScreenTitle(): ElementWrapper;
    findCompletionScreenDescription(): ElementWrapper;
    findFeedbackLink(): LinkWrapper;
}
declare class TutorialTaskWrapper extends ComponentWrapper {
    findTitle(): ElementWrapper;
    findStepsTitle(): ElementWrapper;
    findSteps(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<ElementWrapper>;
}
export {};
