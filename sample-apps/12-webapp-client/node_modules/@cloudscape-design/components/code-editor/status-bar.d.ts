import React from 'react';
import { CodeEditorProps } from './interfaces';
interface StatusBarProps {
    languageLabel: string;
    cursorPosition: string;
    paneStatus: string;
    errorsTabRef: React.RefObject<HTMLButtonElement>;
    warningsTabRef: React.RefObject<HTMLButtonElement>;
    isTabFocused: boolean;
    paneId: string;
    i18nStrings: CodeEditorProps.I18nStrings;
    errorCount: number;
    warningCount: number;
    isRefresh: boolean;
    onErrorPaneToggle: () => void;
    onWarningPaneToggle: () => void;
    onTabFocus?: React.FocusEventHandler<HTMLButtonElement>;
    onTabBlur?: React.FocusEventHandler<HTMLButtonElement>;
    onPreferencesOpen: () => void;
    onHeightChange?: (height: number | null) => void;
}
export declare const StatusBar: (props: StatusBarProps) => JSX.Element;
export {};
//# sourceMappingURL=status-bar.d.ts.map