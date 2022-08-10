import React from 'react';
interface SeriesPoint {
    key: string;
    x: number;
    y: number;
    color: string;
}
export interface VerticalMarkerProps {
    height: number;
    showPoints?: boolean;
    showLine?: boolean;
    points: null | readonly SeriesPoint[];
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<VerticalMarkerProps & React.RefAttributes<SVGLineElement>>>;
export default _default;
//# sourceMappingURL=vertical-marker.d.ts.map