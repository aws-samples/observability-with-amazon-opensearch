import { MutableRefObject } from 'react';
import { NonCancelableEventHandler } from '../events';
interface UseFocusTracker {
    (inputProps: {
        onBlur?: NonCancelableEventHandler<any>;
        onFocus?: NonCancelableEventHandler<any>;
        rootRef: MutableRefObject<HTMLElement | null>;
        viewportId?: string;
    }): void;
}
export declare const useFocusTracker: UseFocusTracker;
export {};
//# sourceMappingURL=use-focus-tracker.d.ts.map