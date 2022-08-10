import { AppLayoutProps } from './interfaces';
interface AppLayoutState {
    navigationOpen?: boolean;
    toolsOpen?: boolean;
    minContentWidth?: number;
    maxContentWidth?: number | undefined;
}
export declare function applyDefaults(contentType: AppLayoutProps.ContentType, stateFromProps: AppLayoutState, isRefresh: boolean): AppLayoutState;
export {};
//# sourceMappingURL=defaults.d.ts.map