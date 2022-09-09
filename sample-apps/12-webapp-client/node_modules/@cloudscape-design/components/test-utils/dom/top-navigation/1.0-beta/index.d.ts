import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import LinkWrapper from '../../link';
import ButtonWrapper from '../../button';
import ButtonDropdownWrapper from '../../button-dropdown';
export default class TopNavigationWrapper extends ComponentWrapper {
    static rootSelector: string;
    findIdentityLink(): ElementWrapper;
    findLogo(): ElementWrapper | null;
    findTitle(): ElementWrapper | null;
    findSearch(): ElementWrapper | null;
    findUtilities(): Array<TopNavigationUtilityWrapper>;
    findUtility(index: number): TopNavigationUtilityWrapper | null;
    findSearchButton(): ElementWrapper | null;
    findOverflowMenuButtonDropdown(): MenuDropdownWrapper | null;
}
export declare class MenuDropdownWrapper extends ButtonDropdownWrapper {
    findNativeButton(): ElementWrapper<HTMLButtonElement>;
}
export declare class TopNavigationUtilityWrapper extends ComponentWrapper {
    findButtonLinkType(): LinkWrapper | null;
    findPrimaryButtonType(): ButtonWrapper | null;
    findMenuDropdownType(): TopNavigationMenuDropdownWrapper | null;
}
export declare class TopNavigationMenuDropdownWrapper extends ButtonDropdownWrapper {
    findNativeButton(): ElementWrapper<HTMLButtonElement>;
    findTitle(): ElementWrapper | null;
    findDescription(): ElementWrapper | null;
}
