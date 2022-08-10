import React from 'react';
interface LayoutProps {
    children: React.ReactNode;
}
/**
 * The layoutElement ref will be used by the resize observers to calculate the offset from
 * the top and bottom of the viewport based on the header and footer elements. This is to
 * ensure the Layout component minimum height will fill 100% of the viewport less those
 * cumulative heights.
 */
export default function Layout({ children }: LayoutProps): JSX.Element;
export {};
//# sourceMappingURL=layout.d.ts.map