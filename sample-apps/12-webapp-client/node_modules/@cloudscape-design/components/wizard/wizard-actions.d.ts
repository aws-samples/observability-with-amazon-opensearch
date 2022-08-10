interface WizardActionsProps {
    cancelButtonText: string;
    onCancelClick: () => void;
    isPrimaryLoading: boolean;
    primaryButtonText: string;
    onPrimaryClick: () => void;
    showPrevious: boolean;
    previousButtonText: string;
    onPreviousClick: () => void;
    showSkipTo: boolean;
    skipToButtonText?: string;
    onSkipToClick: () => void;
}
export default function WizardActions({ cancelButtonText, onCancelClick, isPrimaryLoading, primaryButtonText, onPrimaryClick, showPrevious, previousButtonText, onPreviousClick, showSkipTo, skipToButtonText, onSkipToClick, }: WizardActionsProps): JSX.Element;
export {};
//# sourceMappingURL=wizard-actions.d.ts.map