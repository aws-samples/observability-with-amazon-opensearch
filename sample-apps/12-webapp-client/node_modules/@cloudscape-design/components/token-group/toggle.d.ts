import { NonCancelableEventHandler } from '../internal/events';
import { TokenGroupProps } from './interfaces';
export interface SelectToggleProps {
    controlId: string;
    allHidden: boolean;
    expanded: boolean;
    numberOfHiddenOptions: number;
    onClick?: NonCancelableEventHandler<null>;
    i18nStrings?: Pick<TokenGroupProps.I18nStrings, 'limitShowFewer' | 'limitShowMore'>;
}
declare const SelectToggle: ({ controlId, allHidden, expanded, numberOfHiddenOptions, onClick, i18nStrings, }: SelectToggleProps) => JSX.Element;
export default SelectToggle;
//# sourceMappingURL=toggle.d.ts.map