var defaultLabels = {
    labelNotSorted: function () { return ''; },
    labelSortedDescending: function () { return ''; },
    labelSortedAscending: function () { return ''; }
};
export function includes(array, item) {
    return !!array && array.indexOf(item) > -1;
}
export var compareDates = function (itemA, itemB) {
    var timeA = itemA ? new Date(itemA).getTime() : 0;
    var timeB = itemB ? new Date(itemB).getTime() : 0;
    return timeA - timeB;
};
export function getColumnAriaLabel(i18nStrings, columnName) {
    if (i18nStrings === void 0) { i18nStrings = defaultLabels; }
    if (columnName === void 0) { columnName = ''; }
    return function (_a) {
        var sorted = _a.sorted, descending = _a.descending;
        if (!sorted) {
            return i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelNotSorted(columnName);
        }
        if (descending) {
            return i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelSortedDescending(columnName);
        }
        return i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelSortedAscending(columnName);
    };
}
//# sourceMappingURL=table-utils.js.map