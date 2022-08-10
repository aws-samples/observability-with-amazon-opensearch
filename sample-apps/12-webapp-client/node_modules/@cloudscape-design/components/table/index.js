import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalTable from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
var Table = React.forwardRef(function (_a, ref) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.selectedItems, selectedItems = _c === void 0 ? [] : _c, _d = _a.variant, variant = _d === void 0 ? 'container' : _d, props = __rest(_a, ["items", "selectedItems", "variant"]);
    var baseComponentProps = useBaseComponent('Table');
    return (React.createElement(InternalTable, __assign({ items: items, selectedItems: selectedItems, variant: variant }, props, baseComponentProps, { ref: ref })));
});
applyDisplayName(Table, 'Table');
export default Table;
//# sourceMappingURL=index.js.map