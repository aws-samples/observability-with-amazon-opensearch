interface OpenStateProps {
    onOpen?: () => void;
    onClose?: () => void;
}
export declare const useOpenState: ({ onOpen, onClose }: OpenStateProps) => {
    isOpen: boolean;
    openDropdown: () => void;
    closeDropdown: () => void;
    toggleDropdown: () => void;
};
export {};
//# sourceMappingURL=use-open-state.d.ts.map