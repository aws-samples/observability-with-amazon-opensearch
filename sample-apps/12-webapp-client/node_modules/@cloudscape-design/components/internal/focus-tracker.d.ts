interface FocusTrackerOptions {
    onFocusEnter: () => void;
    onFocusLeave: () => void;
}
export default class FocusTracker {
    private node;
    private readonly onFocusLeave;
    private readonly onFocusEnter;
    private readonly viewportId;
    private currentlyFocused;
    constructor(node: HTMLElement, { onFocusEnter, onFocusLeave }: FocusTrackerOptions, viewportId?: string);
    initialize(): void;
    destroy(): void;
    private focusInListener;
    private focusOutListener;
    private triggerBlur;
    private triggerFocus;
}
export {};
//# sourceMappingURL=focus-tracker.d.ts.map