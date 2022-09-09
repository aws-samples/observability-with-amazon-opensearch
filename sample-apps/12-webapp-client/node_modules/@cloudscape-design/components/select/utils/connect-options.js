export var connectOptionsByValue = function (options, selectedOptions) {
    return (selectedOptions || []).map(function (selectedOption) {
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var dropdownOption = options_1[_i];
            if (dropdownOption.type !== 'parent' &&
                dropdownOption.option.value === selectedOption.value) {
                return dropdownOption;
            }
        }
        return { option: selectedOption };
    });
};
export var findOptionIndex = function (options, option) {
    for (var index = 0; index < options.length; index++) {
        var __option = options[index];
        if (__option === option || __option.value === option.value) {
            return index;
        }
    }
    return -1;
};
//# sourceMappingURL=connect-options.js.map