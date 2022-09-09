import React from 'react';
import { HotspotProps } from '../../hotspot/interfaces';
import { AnnotationContextProps } from '../interfaces';
export interface AnnotationProps {
    title: string;
    content: React.ReactNode;
    alert?: React.ReactNode;
    direction: HotspotProps['direction'];
    nextButtonEnabled: boolean;
    onNextButtonClick: () => void;
    onFinish: () => void;
    previousButtonEnabled: boolean;
    onPreviousButtonClick: () => void;
    showPreviousButton: boolean;
    showFinishButton: boolean;
    taskLocalStepIndex: number;
    totalLocalSteps: number;
    onDismiss: () => void;
    i18nStrings: AnnotationContextProps['i18nStrings'];
}
export declare function OpenAnnotation({ title, content, alert, direction, showPreviousButton, showFinishButton, taskLocalStepIndex, totalLocalSteps, onDismiss, nextButtonEnabled, onNextButtonClick, onFinish, previousButtonEnabled, onPreviousButtonClick, i18nStrings, }: AnnotationProps): JSX.Element;
//# sourceMappingURL=open-annotation.d.ts.map