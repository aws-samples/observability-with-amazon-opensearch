import { SelectProps } from '../interfaces';
import { OptionDefinition, OptionGroup } from '../../internal/components/option/interfaces';
import { DropdownStatusProps } from '../../internal/components/dropdown-status';
interface UseLoadItemsProps {
    onLoadItems: SelectProps['onLoadItems'];
    options: ReadonlyArray<OptionDefinition | OptionGroup>;
    statusType: DropdownStatusProps.StatusType;
}
export declare const useLoadItems: ({ onLoadItems, options, statusType }: UseLoadItemsProps) => {
    fireLoadItems: (filteringText: string) => void;
    handleLoadMore: () => void;
    handleRecoveryClick: () => void;
};
export {};
//# sourceMappingURL=use-load-items.d.ts.map