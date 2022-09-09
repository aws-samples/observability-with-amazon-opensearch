import { TutorialPanelProps } from '../../interfaces';
interface TaskProps {
    task: TutorialPanelProps.Task;
    taskIndex: number;
    currentTaskIndex: number;
    expanded: boolean;
    onToggleExpand: (step: number) => void;
    i18nStrings: TutorialPanelProps['i18nStrings'];
}
export declare function Task({ task, taskIndex, currentTaskIndex, expanded, onToggleExpand, i18nStrings }: TaskProps): JSX.Element;
export {};
//# sourceMappingURL=task.d.ts.map