import React from 'react';
export interface ApplicationRef {
    focus(): void;
}
export interface ApplicationControllerProps {
    activeElementKey: null | string | number | boolean;
    activeElementRef?: React.RefObject<SVGGElement>;
    onFocus?: (event: React.FocusEvent<SVGGElement>) => void;
    onBlur?: (event: React.FocusEvent<SVGGElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<SVGGElement>) => void;
}
declare const _default: React.ForwardRefExoticComponent<ApplicationControllerProps & React.RefAttributes<ApplicationRef>>;
export default _default;
//# sourceMappingURL=application-controller.d.ts.map