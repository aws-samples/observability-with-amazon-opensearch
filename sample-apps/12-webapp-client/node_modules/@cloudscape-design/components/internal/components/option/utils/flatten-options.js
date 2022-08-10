import { __rest } from "tslib";
export var flattenOptions = function (options) {
    var parentMap = new Map();
    var flatOptions = options.reduce(function (acc, option) {
        if ('options' in option) {
            var options_1 = option.options, rest_1 = __rest(option, ["options"]);
            var parentDropdownOption_1 = { type: 'parent', option: option };
            var allOptionsDisabled = options_1.every(function (option) { return option.disabled; });
            if (option.disabled || allOptionsDisabled) {
                parentDropdownOption_1.disabled = true;
            }
            acc.push(parentDropdownOption_1);
            options_1.forEach(function (child) {
                var childDropdownOption = { type: 'child', option: child };
                if (rest_1.disabled || child.disabled) {
                    childDropdownOption.disabled = true;
                }
                acc.push(childDropdownOption);
                parentMap.set(childDropdownOption, parentDropdownOption_1);
            });
        }
        else {
            var dropdownOption = { option: option };
            if (option.disabled) {
                dropdownOption.disabled = true;
            }
            acc.push(dropdownOption);
        }
        return acc;
    }, []);
    return {
        flatOptions: flatOptions,
        parentMap: parentMap
    };
};
//# sourceMappingURL=flatten-options.js.map