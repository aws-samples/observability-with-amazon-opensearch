import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalSelect from './internal';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import { getExternalProps } from '../internal/utils/external-props';
var Select = React.forwardRef(function (_a, ref) {
    var _b = _a.options, options = _b === void 0 ? [] : _b, _c = _a.filteringType, filteringType = _c === void 0 ? 'none' : _c, _d = _a.statusType, statusType = _d === void 0 ? 'finished' : _d, _e = _a.triggerVariant, triggerVariant = _e === void 0 ? 'label' : _e, restProps = __rest(_a, ["options", "filteringType", "statusType", "triggerVariant"]);
    var baseComponentProps = useBaseComponent('Select');
    var externalProps = getExternalProps(restProps);
    return (React.createElement(InternalSelect, __assign({ options: options, filteringType: filteringType, statusType: statusType, triggerVariant: triggerVariant }, externalProps, baseComponentProps, { ref: ref })));
});
applyDisplayName(Select, 'Select');
export default Select;
//# sourceMappingURL=index.js.map