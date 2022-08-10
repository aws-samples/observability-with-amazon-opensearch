var stateToIcon = {
    sortable: 'caret-down',
    ascending: 'caret-up-filled',
    descending: 'caret-down-filled'
};
var stateToAriaSort = {
    sortable: 'none',
    ascending: 'ascending',
    descending: 'descending'
};
export var getSortingStatus = function (sortable, sorted, descending, disabled) {
    if (sorted) {
        if (descending) {
            return 'descending';
        }
        return 'ascending';
    }
    if (sortable && !disabled) {
        return 'sortable';
    }
    return undefined;
};
export var getSortingIconName = function (sortingState) { return stateToIcon[sortingState]; };
export var getAriaSort = function (sortingState) { return stateToAriaSort[sortingState]; };
export var isSorted = function (column, sortingColumn) {
    return column === sortingColumn ||
        (column.sortingField !== undefined && column.sortingField === sortingColumn.sortingField) ||
        (column.sortingComparator !== undefined && column.sortingComparator === sortingColumn.sortingComparator);
};
//# sourceMappingURL=utils.js.map