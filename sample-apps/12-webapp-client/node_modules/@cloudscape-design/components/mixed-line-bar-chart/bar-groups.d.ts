import React from 'react';
import { ChartDataTypes } from './interfaces';
import { ScaledBarGroup } from './make-scaled-bar-groups';
export interface BarGroups<T extends ChartDataTypes> {
    ariaLabel: string;
    isRefresh: boolean;
    isPopoverPinned: boolean;
    barGroups: ScaledBarGroup<T>[];
    highlightedGroupIndex: null | number;
    highlightedGroupRef: React.RefObject<SVGRectElement>;
}
/**
 * The component renders empty SVG rectangles corresponding to the bar group slots.
 * The highlighted group rectangle is used for the pseudo-focus and therefore requires ARIA attributes.
 * Other rectangles are only needed for the "findBarGroups" test-utils selector.
 */
export default function BarGroups<T extends ChartDataTypes>({ ariaLabel, isRefresh, isPopoverPinned, barGroups, highlightedGroupIndex, highlightedGroupRef, }: BarGroups<T>): JSX.Element;
//# sourceMappingURL=bar-groups.d.ts.map