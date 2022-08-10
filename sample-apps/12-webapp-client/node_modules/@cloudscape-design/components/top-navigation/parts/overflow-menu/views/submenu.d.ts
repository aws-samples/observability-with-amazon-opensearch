import { TopNavigationProps } from '../../../interfaces';
import { View } from '..';
interface SubmenuViewProps extends View {
    definition: TopNavigationProps.MenuDropdownUtility;
    utilityIndex?: number;
}
declare const SubmenuView: ({ onClose, utilityIndex, headerText, headerSecondaryText, dismissIconAriaLabel, backIconAriaLabel, definition, }: SubmenuViewProps) => JSX.Element;
export default SubmenuView;
//# sourceMappingURL=submenu.d.ts.map