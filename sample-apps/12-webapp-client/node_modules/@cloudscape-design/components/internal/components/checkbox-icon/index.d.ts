import { BaseComponentProps } from '../../base-component';
export interface CheckboxIconProps extends BaseComponentProps {
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
}
export interface Dimension {
    viewBox: string;
    indeterminate: string;
    checked: string;
    xy: number;
    r: number;
    size: number;
}
export declare const dimensionsByTheme: Record<NonNullable<'default' | 'refresh'>, Dimension>;
declare const CheckboxIcon: ({ checked, indeterminate, disabled, ...restProps }: CheckboxIconProps) => JSX.Element;
export default CheckboxIcon;
//# sourceMappingURL=index.d.ts.map