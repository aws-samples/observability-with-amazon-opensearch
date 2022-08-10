import React from 'react';
import { AppLayoutProps } from '../interfaces';
interface NotificationsProps {
    testUtilsClassName: string;
    children?: React.ReactNode;
    labels: AppLayoutProps.Labels | undefined;
    topOffset: number | undefined;
    isMobile: boolean;
}
interface NotificationWrapperProps extends NotificationsProps {
    sticky: boolean | undefined;
    navigationPadding: boolean;
    toolsPadding: boolean;
    contentWidthStyles?: React.CSSProperties;
}
export declare const Notifications: React.ForwardRefExoticComponent<NotificationWrapperProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=index.d.ts.map