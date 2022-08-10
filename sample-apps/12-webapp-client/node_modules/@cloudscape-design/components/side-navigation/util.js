import { warnOnce } from '../internal/logging';
export function hasActiveLink(items, activeHref) {
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        if ((item.type === 'link' || item.type === 'link-group' || item.type === 'expandable-link-group') &&
            item.href === activeHref) {
            return true;
        }
        if ((item.type === 'section' || item.type === 'link-group' || item.type === 'expandable-link-group') &&
            hasActiveLink(item.items, activeHref)) {
            return true;
        }
    }
    return false;
}
export function generateExpandableItemsMapping(items, mapping, expandableParents) {
    if (mapping === void 0) { mapping = new WeakMap(); }
    if (expandableParents === void 0) { expandableParents = []; }
    items.forEach(function (item) {
        var nextLevelParents = expandableParents.slice();
        if (item.type === 'section' || item.type === 'expandable-link-group') {
            mapping.set(item, expandableParents);
            nextLevelParents.unshift(item);
        }
        if (item.type === 'section' || item.type === 'link-group' || item.type === 'expandable-link-group') {
            generateExpandableItemsMapping(item.items, mapping, nextLevelParents);
        }
    });
    return mapping;
}
export function checkDuplicateHrefs(items) {
    var hrefs = new Set();
    var queue = items.slice();
    while (queue.length > 0) {
        // We just checked that there's items in the queue.
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        var item = queue.shift();
        // Check duplicated hrefs
        if ('href' in item) {
            if (hrefs.has(item.href)) {
                warnOnce('SideNavigation', "duplicate href in \"".concat(item.text, "\": ").concat(item.href));
            }
            hrefs.add(item.href);
        }
        if ('items' in item) {
            queue.push.apply(queue, item.items);
        }
    }
}
//# sourceMappingURL=util.js.map