import React from 'react';
export interface PortalProps {
    container?: Element;
    children: React.ReactNode;
}
/**
 * A safe react portal component that renders to a provided node.
 * If a node isn't provided, it creates one under document.body.
 */
export default function Portal({ container, children }: PortalProps): React.ReactPortal | null;
//# sourceMappingURL=index.d.ts.map