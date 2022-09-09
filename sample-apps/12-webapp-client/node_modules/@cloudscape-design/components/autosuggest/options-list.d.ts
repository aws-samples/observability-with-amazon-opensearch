import React from 'react';
import { AutosuggestItemsHandlers, AutosuggestItemsState } from './options-controller';
import { AutosuggestProps } from './interfaces';
export interface AutosuggestOptionsListProps extends Pick<AutosuggestProps, 'enteredTextLabel' | 'virtualScroll' | 'selectedAriaLabel' | 'renderHighlightedAriaLive'> {
    autosuggestItemsState: AutosuggestItemsState;
    autosuggestItemsHandlers: AutosuggestItemsHandlers;
    highlightedOptionId?: string;
    highlightText: string;
    listId: string;
    controlId: string;
    handleLoadMore: () => void;
    hasDropdownStatus?: boolean;
    listBottom?: React.ReactNode;
}
export default function AutosuggestOptionsList({ autosuggestItemsState, autosuggestItemsHandlers, highlightedOptionId, highlightText, listId, controlId, enteredTextLabel, handleLoadMore, hasDropdownStatus, virtualScroll, selectedAriaLabel, renderHighlightedAriaLive, listBottom, }: AutosuggestOptionsListProps): JSX.Element;
//# sourceMappingURL=options-list.d.ts.map