import React from 'react';
import { TopNavigationProps } from '../interfaces';
import { BaseComponentProps } from '../../../internal/base-component';
import { ButtonDropdownProps } from '../../../button-dropdown/interfaces';
export interface OverflowMenuProps extends BaseComponentProps {
    utilities: ReadonlyArray<TopNavigationProps.Utility>;
    isNarrowViewport?: boolean;
    /**
     * Text displayed in the button dropdown trigger.
     * @displayname text
     */
    children?: React.ReactNode;
}
export declare function transformUtility(utility: TopNavigationProps.Utility, index: number): ButtonDropdownProps.ItemOrGroup;
export default function OverflowMenu({ children, utilities, isNarrowViewport }: OverflowMenuProps): JSX.Element;
//# sourceMappingURL=overflow-menu.d.ts.map