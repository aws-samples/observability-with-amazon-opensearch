import React from 'react';
import { ButtonProps } from '../../button/interfaces';
import { AppLayoutProps } from '../interfaces';
interface MobileToolbarProps {
    anyPanelOpen: boolean | undefined;
    unfocusable: boolean | undefined;
    toggleRefs: {
        navigation: React.Ref<ButtonProps.Ref>;
        tools: React.Ref<ButtonProps.Ref>;
    };
    navigationHide: boolean | undefined;
    toolsHide: boolean | undefined;
    topOffset?: number;
    ariaLabels?: AppLayoutProps.Labels;
    children: React.ReactNode;
    onNavigationOpen: () => void;
    onToolsOpen: () => void;
}
export declare function MobileToolbar({ ariaLabels, toggleRefs, topOffset, navigationHide, toolsHide, anyPanelOpen, unfocusable, children, onNavigationOpen, onToolsOpen, }: MobileToolbarProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map