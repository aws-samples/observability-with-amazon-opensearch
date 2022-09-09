import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalPopover from './internal';
import { getExternalProps } from '../internal/utils/external-props';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Popover(_a) {
    var _b = _a.position, position = _b === void 0 ? 'right' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, _d = _a.fixedWidth, fixedWidth = _d === void 0 ? false : _d, _e = _a.triggerType, triggerType = _e === void 0 ? 'text' : _e, _f = _a.dismissButton, dismissButton = _f === void 0 ? true : _f, _g = _a.renderWithPortal, renderWithPortal = _g === void 0 ? false : _g, rest = __rest(_a, ["position", "size", "fixedWidth", "triggerType", "dismissButton", "renderWithPortal"]);
    var baseComponentProps = useBaseComponent('Popover');
    var externalProps = getExternalProps(rest);
    return (React.createElement(InternalPopover, __assign({ position: position, size: size, fixedWidth: fixedWidth, triggerType: triggerType, dismissButton: dismissButton, renderWithPortal: renderWithPortal }, externalProps, baseComponentProps)));
}
applyDisplayName(Popover, 'Popover');
//# sourceMappingURL=index.js.map