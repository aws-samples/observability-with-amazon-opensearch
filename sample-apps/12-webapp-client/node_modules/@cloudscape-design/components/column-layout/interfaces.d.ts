import { BaseComponentProps } from '../internal/base-component';
import React from 'react';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
import { ColumnLayoutBreakpoint } from './internal';
export interface ColumnLayoutProps extends BaseComponentProps {
    /**
     * Specifies the number of columns in each grid row.
     * Valid values are any integer between 1 and 4.
     */
    columns?: number;
    /**
     * Specifies the content type. This determines the spacing of the grid.
     */
    variant?: ColumnLayoutProps.Variant;
    /**
     * Controls whether dividers are placed between rows and columns.
     */
    borders?: ColumnLayoutProps.Borders;
    /**
     * Determines whether the default gutters between columns are removed.
     */
    disableGutters?: boolean;
    /**
     * The columns to render.
     */
    children?: React.ReactNode;
}
export declare namespace ColumnLayoutProps {
    type Variant = 'default' | 'text-grid';
    type Borders = 'none' | 'vertical' | 'horizontal' | 'all';
}
export interface InternalColumnLayoutProps extends ColumnLayoutProps, InternalBaseComponentProps {
    __breakpoint?: ColumnLayoutBreakpoint;
}
//# sourceMappingURL=interfaces.d.ts.map