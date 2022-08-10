import React from 'react';
import { SegmentedControlProps } from './interfaces';
export interface SegmentProps extends SegmentedControlProps.Option {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    isActive: boolean;
    tabIndex: number;
}
export declare const Segment: React.ForwardRefExoticComponent<SegmentProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=segment.d.ts.map