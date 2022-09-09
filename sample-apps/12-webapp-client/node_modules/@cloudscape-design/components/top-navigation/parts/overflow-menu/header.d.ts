import React from 'react';
export interface HeaderProps {
    dismissIconAriaLabel?: string;
    backIconAriaLabel?: string;
    secondaryText?: string;
    onClose?: () => void;
    onBack?: () => void;
    children: React.ReactNode;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
//# sourceMappingURL=header.d.ts.map