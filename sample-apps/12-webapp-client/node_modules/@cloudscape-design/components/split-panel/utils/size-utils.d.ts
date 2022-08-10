/**
 * The page height where the page is considered constrained.
 */
export declare const CONSTRAINED_PAGE_HEIGHT = 400;
/**
 * Based on approximate height of breadcrumb, table header, and the first table row
 */
export declare const MAIN_PANEL_MIN_HEIGHT = 250;
/**
 * Based on approximate height of app bar on comfortable mode on mobile.
 */
export declare const CONSTRAINED_MAIN_PANEL_MIN_HEIGHT = 40;
/**
 * Estimate a default split panel size for the first render based on the document size.
 */
export declare function getSplitPanelDefaultSize(position: 'side' | 'bottom'): number;
export declare function getLimitedValue(min: number, value: number, max: number): number;
//# sourceMappingURL=size-utils.d.ts.map