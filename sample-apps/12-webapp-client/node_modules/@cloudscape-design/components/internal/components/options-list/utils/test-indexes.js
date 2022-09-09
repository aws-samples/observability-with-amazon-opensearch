var testIndexMap = new WeakMap();
//retrieves the test indexes of the option for the findOption and findOptionInGroup test-utils
export var getTestOptionIndexes = function (item) { return testIndexMap.get(item); };
export var generateTestIndexes = function (filteredItems, getParentGroup) {
    var throughIndex = 1;
    var groupIndex = 0;
    var inGroupIndex = 1;
    var currentGroup = null;
    filteredItems.forEach(function (item) {
        if (!('type' in item)) {
            testIndexMap.set(item, { throughIndex: throughIndex++ });
        }
        else if (item.type === 'child') {
            var parentGroup = getParentGroup(item);
            if (parentGroup && parentGroup !== currentGroup) {
                currentGroup = parentGroup;
                inGroupIndex = 1;
                testIndexMap.set(item, {
                    throughIndex: throughIndex++,
                    groupIndex: ++groupIndex,
                    inGroupIndex: inGroupIndex++
                });
            }
            else {
                testIndexMap.set(item, { throughIndex: throughIndex++, groupIndex: groupIndex, inGroupIndex: inGroupIndex++ });
            }
        }
    });
};
//# sourceMappingURL=test-indexes.js.map