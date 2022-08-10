import { AnnotationContextProps } from './interfaces';
export { AnnotationContextProps };
export declare function getStepInfo(annotations: readonly AnnotationContextProps.Task[], index: number): {
    task: import("..").TutorialPanelProps.Task;
    step: import("..").TutorialPanelProps.Step;
    localIndex: number;
    taskIndex: number;
} | {
    task: undefined;
    step: undefined;
    localIndex: number;
    taskIndex: number;
};
export default function AnnotationContext({ currentTutorial, children, onStepChange, onFinish: onFinishHandler, onStartTutorial, onExitTutorial, i18nStrings, }: AnnotationContextProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map