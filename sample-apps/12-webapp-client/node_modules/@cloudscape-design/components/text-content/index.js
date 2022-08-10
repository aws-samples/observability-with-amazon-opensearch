import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import { getBaseProps } from '../internal/base-component';
import styles from './styles.css.js';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function TextContent(_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var __internalRootRef = useBaseComponent('TextContent').__internalRootRef;
    var baseProps = getBaseProps(props);
    var className = clsx(baseProps.className, styles['text-content']);
    return (React.createElement("div", __assign({}, baseProps, { className: className, ref: __internalRootRef }), children));
}
applyDisplayName(TextContent, 'TextContent');
//# sourceMappingURL=index.js.map