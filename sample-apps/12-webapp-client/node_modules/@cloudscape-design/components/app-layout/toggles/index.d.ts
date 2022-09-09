import React from 'react';
import { ButtonProps } from '../../button/interfaces';
import { IconProps } from '../../icon/interfaces';
import { AppLayoutProps } from '../interfaces';
import { AppLayoutButtonProps } from './interfaces';
export declare const togglesConfig: {
    readonly navigation: {
        readonly TagName: "nav";
        readonly iconName: "menu";
        readonly getLabels: (labels?: AppLayoutProps.Labels) => {
            mainLabel: string | undefined;
            openLabel: string | undefined;
            closeLabel: string | undefined;
        };
    };
    readonly tools: {
        readonly TagName: "aside";
        readonly iconName: "status-info";
        readonly getLabels: (labels?: AppLayoutProps.Labels) => {
            mainLabel: string | undefined;
            openLabel: string | undefined;
            closeLabel: string | undefined;
        };
    };
};
export declare const AppLayoutButton: React.ForwardRefExoticComponent<AppLayoutButtonProps & React.RefAttributes<ButtonProps.Ref>>;
interface CloseButtonProps {
    className?: string;
    ariaLabel: string | undefined;
    onClick: () => void;
    iconName: IconProps.Name;
}
export declare const CloseButton: React.ForwardRefExoticComponent<CloseButtonProps & React.RefAttributes<ButtonProps.Ref>>;
export {};
//# sourceMappingURL=index.d.ts.map