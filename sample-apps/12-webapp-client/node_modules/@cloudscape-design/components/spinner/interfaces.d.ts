import { BaseComponentProps } from '../internal/base-component';
export interface SpinnerProps extends BaseComponentProps {
    /**
     * Specifies the size of the spinner.
     */
    size?: SpinnerProps.Size;
    /**
     * Specifies the color variant of the spinner. The `normal` variant picks up the current color of its context.
     */
    variant?: SpinnerProps.Variant;
}
export declare namespace SpinnerProps {
    type Size = 'normal' | 'big' | 'large';
    type Variant = 'normal' | 'disabled' | 'inverted';
}
//# sourceMappingURL=interfaces.d.ts.map