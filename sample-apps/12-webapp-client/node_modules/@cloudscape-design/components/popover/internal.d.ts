import React from 'react';
import { PopoverProps } from './interfaces';
import { NonCancelableEventHandler } from '../internal/events/index';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
export interface InternalPopoverProps extends PopoverProps, InternalBaseComponentProps {
    __onOpen?: NonCancelableEventHandler<null>;
}
export interface InternalPopoverRef {
    dismissPopover: () => void;
}
declare const _default: React.ForwardRefExoticComponent<InternalPopoverProps & React.RefAttributes<InternalPopoverRef>>;
export default _default;
//# sourceMappingURL=internal.d.ts.map