import React from 'react';
import { AppLayoutProps } from './interfaces';
import { DesktopDrawerProps } from './drawer';
import useContentHeight from './utils/use-content-height';
interface NavigationPanelProps {
    navigationOpen: boolean;
    isHidden: DesktopDrawerProps['isHidden'];
    navigationDrawerWidth: number;
    navigationWidth: number;
    headerHeight: DesktopDrawerProps['topOffset'];
    footerHeight: DesktopDrawerProps['bottomOffset'];
    panelHeightStyle: ReturnType<typeof useContentHeight>['panelHeightStyle'];
    navigation: React.ReactNode;
    ariaLabels: AppLayoutProps['ariaLabels'];
    isMobile: boolean;
    isMotionEnabled: boolean;
    onNavigationToggle: DesktopDrawerProps['onToggle'];
    onClick: DesktopDrawerProps['onClick'];
    toggleRefs: DesktopDrawerProps['toggleRefs'];
}
export declare function NavigationPanel({ ariaLabels, footerHeight, headerHeight, isHidden, isMobile, navigation, navigationDrawerWidth, navigationWidth, navigationOpen, onClick, onNavigationToggle, panelHeightStyle, toggleRefs, }: NavigationPanelProps): JSX.Element;
export {};
//# sourceMappingURL=navigation-panel.d.ts.map