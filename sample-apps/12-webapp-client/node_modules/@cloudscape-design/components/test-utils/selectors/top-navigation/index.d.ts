import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import LinkWrapper from '../link';
import ButtonWrapper from '../button';
import ButtonDropdownWrapper from '../button-dropdown';
export default class TopNavigationWrapper extends ComponentWrapper {
    static rootSelector: string;
    findIdentityLink(): ElementWrapper;
    findLogo(): ElementWrapper;
    findTitle(): ElementWrapper;
    findSearch(): ElementWrapper;
    findUtilities(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<TopNavigationUtilityWrapper>;
    findUtility(index: number): TopNavigationUtilityWrapper;
    findSearchButton(): ElementWrapper;
    findOverflowMenuButton(): ButtonWrapper;
    findOverflowMenu(): OverflowMenu;
}
export declare class OverflowMenu extends ComponentWrapper {
    findDismissButton(): ElementWrapper;
    findBackButton(): ElementWrapper;
    findTitle(): ElementWrapper;
    findDescription(): ElementWrapper;
    findUtility(index: number): ElementWrapper;
    findMenuDropdownItemById(id: string): ElementWrapper;
}
export declare class TopNavigationUtilityWrapper extends ComponentWrapper {
    findButtonLinkType(): LinkWrapper;
    findPrimaryButtonType(): ButtonWrapper;
    findMenuDropdownType(): TopNavigationMenuDropdownWrapper;
}
export declare class TopNavigationMenuDropdownWrapper extends ButtonDropdownWrapper {
    findNativeButton(): ElementWrapper;
    findTitle(): ElementWrapper;
    findDescription(): ElementWrapper;
}
