import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalStatusIndicator from './internal';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function StatusIndicator(_a) {
    var _b = _a.type, type = _b === void 0 ? 'success' : _b, _c = _a.wrapText, wrapText = _c === void 0 ? true : _c, props = __rest(_a, ["type", "wrapText"]);
    var baseComponentProps = useBaseComponent('StatusIndicator');
    return React.createElement(InternalStatusIndicator, __assign({ type: type, wrapText: wrapText }, props, baseComponentProps));
}
applyDisplayName(StatusIndicator, 'StatusIndicator');
//# sourceMappingURL=index.js.map