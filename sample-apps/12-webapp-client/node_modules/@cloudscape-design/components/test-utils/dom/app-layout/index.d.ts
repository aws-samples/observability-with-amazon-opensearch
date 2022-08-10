import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import SplitPanelWrapper from '../split-panel';
export default class AppLayoutWrapper extends ComponentWrapper {
    static rootSelector: string;
    findNavigation(): ElementWrapper;
    findNavigationToggle(): ElementWrapper<HTMLButtonElement>;
    findNavigationClose(): ElementWrapper<HTMLButtonElement>;
    findContentRegion(): ElementWrapper;
    findNotifications(): ElementWrapper | null;
    findBreadcrumbs(): ElementWrapper | null;
    findTools(): ElementWrapper;
    findToolsClose(): ElementWrapper<HTMLButtonElement>;
    findToolsToggle(): ElementWrapper<HTMLButtonElement>;
    findSplitPanel(): SplitPanelWrapper | null;
}
