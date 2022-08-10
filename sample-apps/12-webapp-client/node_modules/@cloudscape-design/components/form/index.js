import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalForm from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Form(props) {
    var baseComponentProps = useBaseComponent('Form');
    return React.createElement(InternalForm, __assign({}, props, baseComponentProps));
}
applyDisplayName(Form, 'Form');
//# sourceMappingURL=index.js.map