import { warnOnce } from '../internal/logging';
export var applyTrackBy = function (trackBy, item) {
    if (typeof trackBy === 'function') {
        return trackBy(item);
    }
    return item[trackBy];
};
export var getItemKey = function (trackBy, item, index) {
    if (!trackBy) {
        return index;
    }
    return applyTrackBy(trackBy, item);
};
export var getTrackableValue = function (trackBy, item) {
    if (!trackBy) {
        return item;
    }
    return applyTrackBy(trackBy, item);
};
export var getColumnKey = function (column, index) {
    return column.id || index;
};
export var toContainerVariant = function (variant) {
    var isDefaultVariant = !variant || variant === 'container';
    return isDefaultVariant ? 'default' : variant;
};
export function checkSortingState(columnDefinitions, sortingComparator) {
    var matchedColumn = columnDefinitions.filter(function (column) { return column.sortingComparator === sortingComparator; })[0];
    if (!matchedColumn) {
        warnOnce('Table', 'Currently active sorting comparator was not found in any columns. Make sure to provide the same comparator function instance on each render.');
    }
}
//# sourceMappingURL=utils.js.map