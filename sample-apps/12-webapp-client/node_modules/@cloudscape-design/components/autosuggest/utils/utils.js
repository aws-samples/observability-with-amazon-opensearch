var isGroup = function (option) { return 'type' in option && option.type === 'parent'; };
var popLastGroup = function (options) {
    if (options.length) {
        var lastOption = options[options.length - 1];
        if (isGroup(lastOption)) {
            options.pop();
        }
    }
};
export var filterOptions = function (options, text) {
    var filteredOptions = options.reduce(function (filteredIn, option) {
        if (isGroup(option)) {
            popLastGroup(filteredIn);
            filteredIn.push(option);
        }
        else if (matchSingleOption(option, text)) {
            filteredIn.push(option);
        }
        return filteredIn;
    }, []);
    popLastGroup(filteredOptions);
    return filteredOptions;
};
var matchSingleOption = function (option, text) {
    var searchableFields = ['value', 'label', 'description', 'labelTag'];
    var searchableTagFields = ['tags', 'filteringTags'];
    var searchText = text.toLowerCase();
    var searchStrFieldsFn = function (attr) { return matchString(option[attr], searchText); };
    var searchTagsFieldsFn = function (attr) { var _a; return (_a = option[attr]) === null || _a === void 0 ? void 0 : _a.some(function (value) { return matchString(value, searchText); }); };
    return searchableFields.some(searchStrFieldsFn) || searchableTagFields.some(searchTagsFieldsFn);
};
var matchString = function (value, searchText) {
    return value && value.toLowerCase().indexOf(searchText) !== -1;
};
//# sourceMappingURL=utils.js.map