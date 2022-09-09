import { AutosuggestProps } from './interfaces';
import { OptionsLoadItemsDetail } from '../internal/components/dropdown/interfaces';
import { DropdownStatusProps } from '../internal/components/dropdown-status/interfaces';
export interface UseAutosuggestLoadMoreProps {
    options?: AutosuggestProps.Options;
    statusType: DropdownStatusProps.StatusType;
    onLoadItems: (detail: OptionsLoadItemsDetail) => void;
}
export interface AutosuggestLoadMoreHandlers {
    fireLoadMoreOnScroll(): void;
    fireLoadMoreOnRecoveryClick(): void;
    fireLoadMoreOnInputFocus(): void;
    fireLoadMoreOnInputChange(filteringText: string): void;
}
export declare const useAutosuggestLoadMore: ({ options, statusType, onLoadItems, }: UseAutosuggestLoadMoreProps) => AutosuggestLoadMoreHandlers;
//# sourceMappingURL=load-more-controller.d.ts.map