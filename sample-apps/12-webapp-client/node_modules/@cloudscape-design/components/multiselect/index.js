import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import useBaseComponent from '../internal/hooks/use-base-component';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalMultiselect from './internal';
var Multiselect = React.forwardRef(function (_a, ref) {
    var _b = _a.options, options = _b === void 0 ? [] : _b, _c = _a.filteringType, filteringType = _c === void 0 ? 'none' : _c, _d = _a.statusType, statusType = _d === void 0 ? 'finished' : _d, _e = _a.selectedOptions, selectedOptions = _e === void 0 ? [] : _e, _f = _a.keepOpen, keepOpen = _f === void 0 ? true : _f, _g = _a.hideTokens, hideTokens = _g === void 0 ? false : _g, restProps = __rest(_a, ["options", "filteringType", "statusType", "selectedOptions", "keepOpen", "hideTokens"]);
    var baseComponentProps = useBaseComponent('Multiselect');
    return (React.createElement(InternalMultiselect, __assign({ options: options, filteringType: filteringType, statusType: statusType, selectedOptions: selectedOptions, keepOpen: keepOpen, hideTokens: hideTokens }, restProps, baseComponentProps, { ref: ref })));
});
applyDisplayName(Multiselect, 'Multiselect');
export default Multiselect;
//# sourceMappingURL=index.js.map