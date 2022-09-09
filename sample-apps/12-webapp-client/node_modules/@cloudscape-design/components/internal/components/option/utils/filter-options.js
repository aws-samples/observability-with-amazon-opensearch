var searchableFields = ['value', 'label', 'description', 'labelTag'];
export var matchesString = function (value, searchText, strictMatching) {
    if (!value) {
        return false;
    }
    var index = value.toLowerCase().indexOf(searchText);
    return strictMatching ? index === 0 : index > -1;
};
var matchesSingleOption = function (dropdownOption, text, strictMatching) {
    var searchText = text.toLowerCase();
    var option = dropdownOption.option;
    var searchStrFields = function (attr) { return matchesString(option[attr], searchText, strictMatching); };
    var searchTagsFields = function (attr) { var _a; return (_a = option[attr]) === null || _a === void 0 ? void 0 : _a.some(function (value) { return matchesString(value, searchText, strictMatching); }); };
    var searchableTagFields = ['tags'];
    if (!strictMatching) {
        searchableTagFields.push('filteringTags');
    }
    return searchableFields.some(searchStrFields) || searchableTagFields.some(searchTagsFields);
};
export var filterOptions = function (options, searchText, strictMatching) {
    if (strictMatching === void 0) { strictMatching = false; }
    if (searchText === '') {
        return options;
    }
    var currentGroup = null;
    var parentMatched = false;
    return options.reduce(function (acc, option) {
        if (option.type === 'parent') {
            parentMatched = false;
            currentGroup = option;
            if (matchesSingleOption(option, searchText, strictMatching)) {
                parentMatched = true;
                acc.push(currentGroup);
            }
            return acc;
        }
        if (option.type !== 'child') {
            currentGroup = null;
            parentMatched = false;
        }
        if (parentMatched) {
            acc.push(option);
        }
        else if (matchesSingleOption(option, searchText, strictMatching)) {
            if (currentGroup) {
                acc.push(currentGroup);
                currentGroup = null;
            }
            acc.push(option);
        }
        return acc;
    }, []);
};
export var isInteractive = function (option) { return !!option && !option.disabled && option.type !== 'parent'; };
export var isGroupInteractive = function (option) { return !!option && !option.disabled; };
export var isGroup = function (option) {
    return !!option && 'options' in option;
};
//# sourceMappingURL=filter-options.js.map