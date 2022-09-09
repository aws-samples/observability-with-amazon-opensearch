import React from 'react';
import { BaseComponentProps } from '../../base-component';
import { NonCancelableEventHandler, CancelableEventHandler, BaseKeyDetail } from '../../events';
export interface OptionsListProps extends BaseComponentProps {
    open?: boolean;
    /**
     * Options list
     */
    children: React.ReactNode;
    nativeAttributes?: Record<string, any>;
    /**
     * Called when more items need to be loaded.
     */
    onLoadMore?: NonCancelableEventHandler;
    onKeyDown?: CancelableEventHandler<BaseKeyDetail>;
    onBlur?: NonCancelableEventHandler<{
        relatedTarget: Node | null;
    }>;
    onFocus?: NonCancelableEventHandler;
    onMouseUp?: (itemIndex: number) => void;
    onMouseMove?: (itemIndex: number) => void;
    position?: React.CSSProperties['position'];
    role?: 'listbox' | 'list' | 'menu';
    ariaLabelledby?: string;
    decreaseTopMargin?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<OptionsListProps & React.RefAttributes<HTMLUListElement>>;
export default _default;
//# sourceMappingURL=index.d.ts.map