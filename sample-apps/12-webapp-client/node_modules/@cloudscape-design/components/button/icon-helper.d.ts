import * as React from 'react';
import { IconProps } from '../icon/interfaces';
import { ButtonProps } from './interfaces';
export interface ButtonIconProps {
    loading?: boolean;
    iconName?: ButtonProps['iconName'];
    iconAlign?: ButtonProps['iconAlign'];
    iconUrl?: string;
    iconSvg?: React.ReactNode;
    iconAlt?: string;
    iconSize?: IconProps.Size;
    variant?: string;
    iconClass?: string;
}
export declare function LeftIcon(props: ButtonIconProps): JSX.Element | null;
export declare function RightIcon(props: ButtonIconProps): JSX.Element | null;
//# sourceMappingURL=icon-helper.d.ts.map