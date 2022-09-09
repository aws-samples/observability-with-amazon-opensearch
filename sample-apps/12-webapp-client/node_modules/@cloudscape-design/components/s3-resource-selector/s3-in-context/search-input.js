import { __assign } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { useFormFieldContext } from '../../internal/context/form-field-context';
import InternalInput from '../../input/internal';
export var SearchInput = React.forwardRef(function (props, ref) {
    var formFieldContext = useFormFieldContext(props);
    return React.createElement(InternalInput, __assign({ type: "search" }, props, formFieldContext, { ref: ref }));
});
//# sourceMappingURL=search-input.js.map