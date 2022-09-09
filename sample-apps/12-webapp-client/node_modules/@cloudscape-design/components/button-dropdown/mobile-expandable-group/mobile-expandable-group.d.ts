import React from 'react';
export interface MobileExpandableGroupProps {
    /**
     * Trigger element.
     */
    trigger: React.ReactNode;
    /**
     * mobile expandable groups content elements.
     */
    children?: React.ReactNode;
    /**
     * Open state of the mobile expandable groups.
     */
    open?: boolean;
}
declare const MobileExpandableGroup: ({ children, trigger, open }: MobileExpandableGroupProps) => JSX.Element;
export default MobileExpandableGroup;
//# sourceMappingURL=mobile-expandable-group.d.ts.map