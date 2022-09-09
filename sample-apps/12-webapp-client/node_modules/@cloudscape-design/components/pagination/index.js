import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import InternalPagination from './internal';
export default function Pagination(props) {
    var baseComponentProps = useBaseComponent('Pagination');
    return React.createElement(InternalPagination, __assign({}, props, baseComponentProps));
}
applyDisplayName(Pagination, 'Pagination');
//# sourceMappingURL=index.js.map