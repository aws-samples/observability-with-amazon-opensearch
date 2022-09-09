import { BaseComponentProps } from '../internal/base-component';
import React from 'react';
export interface BadgeProps extends BaseComponentProps {
    /**
     * Specifies the badge color.
     */
    color?: 'blue' | 'grey' | 'green' | 'red';
    /**
     * Text displayed inside the badge.
     */
    children?: React.ReactNode;
}
//# sourceMappingURL=interfaces.d.ts.map