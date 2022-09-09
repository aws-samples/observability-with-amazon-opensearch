import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import SplitPanelWrapper from '../split-panel';
export default class AppLayoutWrapper extends ComponentWrapper {
    static rootSelector: string;
    findNavigation(): ElementWrapper;
    findNavigationToggle(): ElementWrapper;
    findNavigationClose(): ElementWrapper;
    findContentRegion(): ElementWrapper;
    findNotifications(): ElementWrapper;
    findBreadcrumbs(): ElementWrapper;
    findTools(): ElementWrapper;
    findToolsClose(): ElementWrapper;
    findToolsToggle(): ElementWrapper;
    findSplitPanel(): SplitPanelWrapper;
}
