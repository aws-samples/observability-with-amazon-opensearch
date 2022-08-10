import React from 'react';
export interface TooltipProps {
    children?: React.ReactNode;
    content?: React.ReactNode;
    position?: 'top' | 'right' | 'bottom' | 'left';
}
export default function Tooltip({ children, content, position }: TooltipProps): JSX.Element;
//# sourceMappingURL=tooltip.d.ts.map