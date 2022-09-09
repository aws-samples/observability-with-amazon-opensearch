import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import ButtonWrapper from '../button';
import { AlertWrapper } from '../index.js';
import LinkWrapper from '../link';
export default class TutorialItemWrapper extends ComponentWrapper {
    static rootSelector: string;
    findStartButton(): ButtonWrapper;
    findLearnMoreLink(): LinkWrapper;
    findExpandButton(): ButtonWrapper;
    findCollapseButton(): ButtonWrapper;
    findDescription(): ElementWrapper;
    findTitle(): ElementWrapper;
    findCompleted(): ElementWrapper;
    findPrerequisitesAlert(): AlertWrapper;
}
