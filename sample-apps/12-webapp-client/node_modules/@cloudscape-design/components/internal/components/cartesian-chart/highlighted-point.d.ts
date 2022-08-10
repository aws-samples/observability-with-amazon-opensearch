import React from 'react';
interface SeriesPoint {
    key: string;
    x: number;
    y: number;
    color: string;
}
export interface HighlightedPointProps {
    point: null | SeriesPoint;
    role?: 'group' | 'button';
    ariaLabel?: string;
    ariaHasPopup?: boolean;
    ariaExpanded?: boolean;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<HighlightedPointProps & React.RefAttributes<SVGGElement>>>;
export default _default;
//# sourceMappingURL=highlighted-point.d.ts.map