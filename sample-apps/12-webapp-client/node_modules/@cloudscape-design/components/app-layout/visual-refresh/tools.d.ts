import React from 'react';
interface ToolsProps {
    children: React.ReactNode;
}
/**
 * The Tools component consists of the following elements:
 * the container, or root element, that sits as a direct child to the Layout grid definition;
 * the split panel, which exists only if there is a split panel in side position;
 * the tools, or drawer, that contains the hide tools form and the children passed through the API;
 * the show tools form that contains the triggers for both the drawer and the
 * split panel in large viewports;
 */
export default function Tools({ children }: ToolsProps): JSX.Element | null;
/**
 * Determine the default state of the Tools component. Mobile viewports should be
 * closed by default under all circumstances. If the toolsOpen prop has not been
 * set then it should be closed as well. Otherwise, default to the toolsOpen prop.
 */
export declare function getToolsDefaultState(isMobile: boolean, stateFromProps?: boolean): boolean;
export {};
//# sourceMappingURL=tools.d.ts.map