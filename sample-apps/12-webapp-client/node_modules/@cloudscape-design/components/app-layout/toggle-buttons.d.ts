import React from 'react';
import { AppLayoutProps } from './interfaces';
interface ToggleButtonsProps {
    anyPanelOpen: boolean;
    children: React.ReactNode;
    ariaLabels: AppLayoutProps.Labels | undefined;
    isHidden: boolean;
    opaqueBackground: boolean;
}
export declare function ToggleButtons({ children, ariaLabels, anyPanelOpen, isHidden, opaqueBackground }: ToggleButtonsProps): JSX.Element;
export {};
//# sourceMappingURL=toggle-buttons.d.ts.map