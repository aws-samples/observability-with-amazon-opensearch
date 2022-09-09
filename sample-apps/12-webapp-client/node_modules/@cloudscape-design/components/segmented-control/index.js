import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import InternalSegmentedControl from './internal';
export default function SegmentedControl(props) {
    var baseComponentProps = useBaseComponent('SegmentedControl');
    return React.createElement(InternalSegmentedControl, __assign({}, props, baseComponentProps));
}
applyDisplayName(SegmentedControl, 'SegmentedControl');
//# sourceMappingURL=index.js.map