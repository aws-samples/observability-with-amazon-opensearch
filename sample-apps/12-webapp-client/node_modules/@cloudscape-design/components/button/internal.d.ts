import React from 'react';
import { ButtonProps } from './interfaces';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
export declare const InternalButton: React.ForwardRefExoticComponent<Omit<ButtonProps, "variant"> & {
    variant?: ButtonProps['variant'] | 'flashbar-icon' | 'breadcrumb-group' | 'menu-trigger' | 'modal-dismiss';
    __nativeAttributes?: Record<string, any> | undefined;
    __iconClass?: string | undefined;
    __activated?: boolean | undefined;
} & InternalBaseComponentProps & React.RefAttributes<ButtonProps.Ref>>;
export default InternalButton;
//# sourceMappingURL=internal.d.ts.map