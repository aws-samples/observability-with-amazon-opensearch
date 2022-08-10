import { ButtonDropdownProps } from '../interfaces';
import { TreeIndex } from './create-items-tree';
interface MoveHighlightProps {
    startIndex: TreeIndex;
    expandedIndex: TreeIndex;
    getNext: (index: TreeIndex) => {
        index: TreeIndex;
        item: ButtonDropdownProps.ItemOrGroup;
        parent?: ButtonDropdownProps.ItemOrGroup;
    } | null;
    hasExpandableGroups: boolean;
    isInRestrictedView: boolean;
}
export default function moveHighlight({ startIndex, expandedIndex, getNext, hasExpandableGroups, isInRestrictedView, }: MoveHighlightProps): TreeIndex | null;
export {};
//# sourceMappingURL=move-highlight.d.ts.map