export var isItemGroup = function (item) {
    return item && item.items !== undefined;
};
export var isLinkItem = function (item) {
    return item && item.href !== undefined;
};
export var getItemTarget = function (item) { return (item.external ? '_blank' : undefined); };
export function indexIncludes(source, target) {
    for (var index = 0; index < source.length; index++) {
        if (source[index] !== target[index]) {
            return false;
        }
    }
    return true;
}
export function indexEquals(left, right) {
    if (left.length !== right.length) {
        return false;
    }
    for (var index = 0; index < left.length; index++) {
        if (left[index] !== right[index]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=utils.js.map