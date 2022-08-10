import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ButtonWrapper from '../button';
import { AlertWrapper } from '../index.js';
import LinkWrapper from '../link';
export default class TutorialItemWrapper extends ComponentWrapper {
    static rootSelector: string;
    findStartButton(): ButtonWrapper | null;
    findLearnMoreLink(): LinkWrapper | null;
    findExpandButton(): ButtonWrapper | null;
    findCollapseButton(): ButtonWrapper | null;
    findDescription(): ElementWrapper | null;
    findTitle(): ElementWrapper;
    findCompleted(): ElementWrapper | null;
    findPrerequisitesAlert(): AlertWrapper | null;
}
