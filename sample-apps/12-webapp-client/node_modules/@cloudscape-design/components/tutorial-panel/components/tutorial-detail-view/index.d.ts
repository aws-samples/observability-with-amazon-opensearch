import { TutorialPanelProps } from '../../interfaces';
import { HotspotContext } from '../../../annotation-context/context';
export default function TutorialDetailView({ tutorial, onExitTutorial: onExitTutorialHandler, currentStepIndex, onFeedbackClick: onFeedbackClickHandler, i18nStrings, }: {
    tutorial: TutorialPanelProps.Tutorial;
    onExitTutorial: HotspotContext['onExitTutorial'];
    currentStepIndex: HotspotContext['currentStepIndex'];
    onFeedbackClick: TutorialPanelProps['onFeedbackClick'];
    i18nStrings: TutorialPanelProps['i18nStrings'];
}): JSX.Element;
//# sourceMappingURL=index.d.ts.map