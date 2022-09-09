import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalAlert from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Alert(_a) {
    var _b = _a.type, type = _b === void 0 ? 'info' : _b, _c = _a.visible, visible = _c === void 0 ? true : _c, props = __rest(_a, ["type", "visible"]);
    var baseComponentProps = useBaseComponent('Alert');
    return React.createElement(InternalAlert, __assign({ type: type, visible: visible }, props, baseComponentProps));
}
applyDisplayName(Alert, 'Alert');
//# sourceMappingURL=index.js.map