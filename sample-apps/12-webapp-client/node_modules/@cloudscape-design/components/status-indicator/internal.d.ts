import React from 'react';
import { BaseComponentProps } from '../internal/base-component';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
import { IconProps } from '../icon/interfaces';
import { SomeRequired } from '../internal/types';
export interface StatusIndicatorProps extends BaseComponentProps {
    /**
     * Specifies the status type.
     */
    type?: StatusIndicatorProps.Type;
    /**
     * A text fragment that communicates the status.
     */
    children?: React.ReactNode;
    /**
     * Specifies an `aria-label` for the icon. If the status text alone does not fully describe the status,
     * use this to communicate additional context.
     */
    iconAriaLabel?: string;
    /**
     * Specifies an override for the status indicator color.
     */
    colorOverride?: StatusIndicatorProps.Color;
    /**
     * Specifies if the text content should wrap. If you set it to false, it prevents the text from wrapping
     * and truncates it with an ellipsis.
     */
    wrapText?: boolean;
}
interface InternalStatusIndicatorProps extends SomeRequired<StatusIndicatorProps, 'type'>, InternalBaseComponentProps {
    /**
     * Play an animation on the error icon when first rendered
     */
    __animate?: boolean;
    /**
     * Size of icon.
     */
    __size?: IconProps.Size;
}
export declare namespace StatusIndicatorProps {
    type Type = 'error' | 'warning' | 'success' | 'info' | 'stopped' | 'pending' | 'in-progress' | 'loading';
    type Color = 'blue' | 'grey' | 'green' | 'red';
}
export default function StatusIndicator({ type, children, iconAriaLabel, colorOverride, wrapText, __animate, __internalRootRef, __size, ...rest }: InternalStatusIndicatorProps): JSX.Element;
export {};
//# sourceMappingURL=internal.d.ts.map