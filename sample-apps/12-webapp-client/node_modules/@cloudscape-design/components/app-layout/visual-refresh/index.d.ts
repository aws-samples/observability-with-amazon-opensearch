import React from 'react';
import { AppLayoutProps } from '../interfaces';
/**
 * In mobile viewports the AppBar position changes to sticky and is placed
 * above the notifications. This is handled by adjusting the row positions
 * in CSS for the AppBar and Notifications components relative to the grid
 * definition in the Layout component. In order to keep alignment between
 * the visual ordering and logical ordering of the document the logical order
 * of these components is also modified in the markup below.
 */
declare const AppLayoutWithRef: React.ForwardRefExoticComponent<AppLayoutProps & React.RefAttributes<AppLayoutProps.Ref>>;
export default AppLayoutWithRef;
//# sourceMappingURL=index.d.ts.map