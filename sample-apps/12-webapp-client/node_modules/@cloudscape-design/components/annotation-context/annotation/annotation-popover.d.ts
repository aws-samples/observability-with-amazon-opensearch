import React from 'react';
import { HotspotProps } from '../../hotspot/interfaces';
import { AnnotationContextProps } from '../interfaces';
export interface AnnotationPopoverProps {
    title: string;
    content: React.ReactNode;
    alert: React.ReactNode;
    direction: HotspotProps['direction'];
    nextButtonEnabled: boolean;
    onNextButtonClick: () => void;
    onFinish: () => void;
    showPreviousButton: boolean;
    previousButtonEnabled: boolean;
    onPreviousButtonClick: () => void;
    taskLocalStepIndex: number;
    totalLocalSteps: number;
    showFinishButton: boolean;
    onDismiss: () => void;
    trackRef: React.RefObject<HTMLElement>;
    i18nStrings: AnnotationContextProps['i18nStrings'];
}
export declare function AnnotationPopover({ title, content, alert, direction, taskLocalStepIndex, totalLocalSteps, showPreviousButton, showFinishButton, onDismiss, nextButtonEnabled, onNextButtonClick, onFinish, trackRef, previousButtonEnabled, onPreviousButtonClick, i18nStrings, }: AnnotationPopoverProps): JSX.Element;
//# sourceMappingURL=annotation-popover.d.ts.map