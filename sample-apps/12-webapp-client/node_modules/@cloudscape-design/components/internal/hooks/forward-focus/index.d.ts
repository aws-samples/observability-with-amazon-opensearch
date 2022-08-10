import React from 'react';
export interface ForwardFocusRef {
    focus(): void;
}
export default function useForwardFocus(mainRef: React.Ref<any>, controlRef: React.RefObject<{
    focus: HTMLElement['focus'];
}>): void;
//# sourceMappingURL=index.d.ts.map