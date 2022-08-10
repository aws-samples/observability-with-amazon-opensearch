import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalAttributeEditor from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
var AttributeEditor = React.forwardRef(function (_a, ref) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.isItemRemovable, isItemRemovable = _c === void 0 ? function () { return true; } : _c, props = __rest(_a, ["items", "isItemRemovable"]);
    var baseComponentProps = useBaseComponent('AttributeEditor');
    return (React.createElement(InternalAttributeEditor, __assign({ items: items, isItemRemovable: isItemRemovable }, props, baseComponentProps, { ref: ref })));
});
applyDisplayName(AttributeEditor, 'AttributeEditor');
export default AttributeEditor;
//# sourceMappingURL=index.js.map