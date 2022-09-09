import { __assign } from "tslib";
import { getTestOptionIndexes } from '../../internal/components/options-list/utils/test-indexes';
export var getItemProps = function (_a) {
    var _b;
    var option = _a.option, index = _a.index, getOptionProps = _a.getOptionProps, filteringValue = _a.filteringValue, _c = _a.checkboxes, checkboxes = _c === void 0 ? false : _c;
    var optionProps = getOptionProps(option, index);
    optionProps.filteringValue = filteringValue;
    var _d = getTestOptionIndexes(option) || {}, inGroupIndex = _d.inGroupIndex, groupIndex = _d.groupIndex, throughIndex = _d.throughIndex;
    return __assign(__assign({}, optionProps), (_b = { hasCheckbox: checkboxes }, _b['data-group-index'] = groupIndex, _b['data-child-index'] = inGroupIndex, _b['data-test-index'] = throughIndex, _b));
};
//# sourceMappingURL=get-item-props.js.map