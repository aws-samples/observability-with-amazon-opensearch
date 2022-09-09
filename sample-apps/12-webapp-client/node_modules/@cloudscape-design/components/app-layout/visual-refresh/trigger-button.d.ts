import React from 'react';
import { ButtonProps } from '../../button/interfaces';
import { IconProps } from '../../icon/interfaces';
interface TriggerButtonProps {
    ariaLabel?: string;
    iconName: IconProps.Name;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    selected?: boolean;
    className?: string;
}
declare const _default: React.ForwardRefExoticComponent<TriggerButtonProps & React.RefAttributes<ButtonProps.Ref>>;
export default _default;
//# sourceMappingURL=trigger-button.d.ts.map