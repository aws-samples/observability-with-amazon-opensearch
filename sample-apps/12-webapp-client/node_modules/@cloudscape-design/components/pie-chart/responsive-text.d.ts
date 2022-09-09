import React from 'react';
interface ResponsiveTextProps {
    x: number;
    y: number;
    rightSide?: boolean;
    className?: string;
    children: string;
    containerBoundaries: null | {
        left: number;
        right: number;
    };
}
declare const _default: React.MemoExoticComponent<typeof ResponsiveText>;
export default _default;
declare function ResponsiveText({ x, y, rightSide, className, children, containerBoundaries }: ResponsiveTextProps): JSX.Element;
//# sourceMappingURL=responsive-text.d.ts.map