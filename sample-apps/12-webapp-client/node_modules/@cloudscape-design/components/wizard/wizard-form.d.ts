import React from 'react';
import { WizardProps } from './interfaces';
interface WizardFormProps {
    steps: ReadonlyArray<WizardProps.Step>;
    activeStepIndex: number;
    isVisualRefresh: boolean;
    showCollapsedSteps: boolean;
    i18nStrings: WizardProps.I18nStrings;
    isPrimaryLoading: boolean;
    allowSkipTo: boolean;
    secondaryActions?: React.ReactNode;
    onCancelClick: () => void;
    onPreviousClick: () => void;
    onPrimaryClick: () => void;
    onSkipToClick: (stepIndex: number) => void;
}
export default function WizardForm({ steps, activeStepIndex, isVisualRefresh, showCollapsedSteps, i18nStrings, isPrimaryLoading, allowSkipTo, secondaryActions, onCancelClick, onPreviousClick, onPrimaryClick, onSkipToClick, }: WizardFormProps): JSX.Element;
export {};
//# sourceMappingURL=wizard-form.d.ts.map