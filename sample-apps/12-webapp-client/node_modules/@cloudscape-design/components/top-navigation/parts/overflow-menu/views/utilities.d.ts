import { TopNavigationProps } from '../../../interfaces';
import { View } from '..';
interface UtilitiesViewProps extends View {
    items: TopNavigationProps['utilities'];
    focusIndex?: number;
}
declare const UtilitiesView: ({ headerText, dismissIconAriaLabel, onClose, items, focusIndex }: UtilitiesViewProps) => JSX.Element;
export default UtilitiesView;
//# sourceMappingURL=utilities.d.ts.map