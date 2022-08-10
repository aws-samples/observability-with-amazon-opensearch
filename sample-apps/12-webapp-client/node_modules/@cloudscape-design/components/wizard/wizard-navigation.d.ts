import { WizardProps } from './interfaces';
interface NavigationProps {
    activeStepIndex: number;
    farthestStepIndex: number;
    allowSkipTo: boolean;
    hidden: boolean;
    i18nStrings: WizardProps.I18nStrings;
    isVisualRefresh: boolean;
    isLoadingNextStep: boolean;
    onStepClick: (stepIndex: number) => void;
    onSkipToClick: (stepIndex: number) => void;
    steps: ReadonlyArray<WizardProps.Step>;
}
export default function Navigation({ activeStepIndex, farthestStepIndex, allowSkipTo, hidden, i18nStrings, isVisualRefresh, isLoadingNextStep, onStepClick, onSkipToClick, steps, }: NavigationProps): JSX.Element;
export {};
//# sourceMappingURL=wizard-navigation.d.ts.map