import React from 'react';
import { LinkProps } from './interfaces';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
declare const InternalLink: React.ForwardRefExoticComponent<InternalBaseComponentProps & Omit<LinkProps, "variant"> & {
    variant?: LinkProps['variant'] | 'top-navigation' | 'link' | 'recovery';
} & React.RefAttributes<LinkProps.Ref>>;
export default InternalLink;
//# sourceMappingURL=internal.d.ts.map