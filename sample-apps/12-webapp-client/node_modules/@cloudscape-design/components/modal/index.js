import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalModal from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Modal(_a) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, _c = _a.closeAriaLabel, closeAriaLabel = _c === void 0 ? '' : _c, props = __rest(_a, ["size", "closeAriaLabel"]);
    var baseComponentProps = useBaseComponent('Modal');
    return React.createElement(InternalModal, __assign({ size: size, closeAriaLabel: closeAriaLabel }, props, baseComponentProps));
}
applyDisplayName(Modal, 'Modal');
//# sourceMappingURL=index.js.map