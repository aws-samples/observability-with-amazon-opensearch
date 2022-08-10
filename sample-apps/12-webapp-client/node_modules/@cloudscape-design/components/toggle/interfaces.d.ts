import { BaseCheckboxProps } from '../checkbox/base-checkbox';
import React from 'react';
import { NonCancelableEventHandler } from '../internal/events';
export interface ToggleProps extends BaseCheckboxProps {
    /**
     * The control's label that's displayed next to the toggle. Clicking this will invoke a state change.
     * @displayname label
     */
    children?: React.ReactNode;
    onChange?: NonCancelableEventHandler<ToggleProps.ChangeDetail>;
}
export declare namespace ToggleProps {
    interface Ref {
        /**
         * Sets input focus onto the UI control.
         */
        focus(): void;
    }
    interface ChangeDetail {
        checked: boolean;
    }
}
//# sourceMappingURL=interfaces.d.ts.map