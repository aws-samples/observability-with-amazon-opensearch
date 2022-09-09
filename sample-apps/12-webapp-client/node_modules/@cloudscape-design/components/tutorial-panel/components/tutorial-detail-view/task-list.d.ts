import { TutorialPanelProps } from '../../interfaces';
import { HotspotContext } from '../../../annotation-context/context';
export interface TaskListProps {
    tasks: ReadonlyArray<TutorialPanelProps.Task>;
    onExitTutorial: () => void;
    currentGlobalStepIndex: HotspotContext['currentStepIndex'];
    i18nStrings: TutorialPanelProps['i18nStrings'];
}
export declare function TaskList({ tasks, onExitTutorial, currentGlobalStepIndex, i18nStrings }: TaskListProps): JSX.Element;
//# sourceMappingURL=task-list.d.ts.map