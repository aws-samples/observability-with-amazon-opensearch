import React from 'react';
import { ClassValue } from 'clsx';
import { Breakpoint } from '../internal/breakpoints';
import { GridProps } from './interfaces';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
export interface InternalGridProps extends GridProps, InternalBaseComponentProps {
    __breakpoint?: Breakpoint | null;
    /**
     * The handler that fires when the grid breakpoint changes.
     */
    __responsiveClassName?: (breakpoint: Breakpoint | null) => ClassValue;
}
declare const InternalGrid: React.ForwardRefExoticComponent<InternalGridProps & React.RefAttributes<any>>;
export default InternalGrid;
//# sourceMappingURL=internal.d.ts.map