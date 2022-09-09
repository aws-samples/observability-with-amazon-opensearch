import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
interface PreferencesModali18nStrings {
    header: string;
    cancel: string;
    confirm: string;
    positionLabel: string;
    positionDescription: string;
    positionBottom: string;
    positionSide: string;
}
interface PreferencesModalProps extends InternalBaseComponentProps {
    visible: boolean;
    preferences: {
        position: 'side' | 'bottom';
    };
    i18nStrings: PreferencesModali18nStrings;
    disabledSidePosition?: boolean;
    isRefresh: boolean;
    onConfirm: (preferences: {
        position: 'side' | 'bottom';
    }) => void;
    onDismiss: () => void;
}
declare const _default: (props: PreferencesModalProps) => JSX.Element;
export default _default;
//# sourceMappingURL=preferences-modal.d.ts.map