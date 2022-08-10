import { HeaderProps } from './header';
import { TopNavigationProps } from '../../interfaces';
interface OverflowMenuProps {
    headerText?: string;
    items?: TopNavigationProps['utilities'];
    dismissIconAriaLabel?: HeaderProps['dismissIconAriaLabel'];
    backIconAriaLabel?: HeaderProps['backIconAriaLabel'];
    onClose?: HeaderProps['onClose'];
}
export interface View extends Omit<OverflowMenuProps, 'items'> {
    headerSecondaryText?: HeaderProps['secondaryText'];
}
declare const OverflowMenu: ({ headerText, dismissIconAriaLabel, backIconAriaLabel, items, onClose, }: OverflowMenuProps) => JSX.Element;
export default OverflowMenu;
//# sourceMappingURL=index.d.ts.map