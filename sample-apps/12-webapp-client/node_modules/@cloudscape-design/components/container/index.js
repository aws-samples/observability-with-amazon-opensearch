import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalContainer from './internal';
import { getExternalProps } from '../internal/utils/external-props';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Container(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'default' : _b, _c = _a.disableHeaderPaddings, disableHeaderPaddings = _c === void 0 ? false : _c, _d = _a.disableContentPaddings, disableContentPaddings = _d === void 0 ? false : _d, props = __rest(_a, ["variant", "disableHeaderPaddings", "disableContentPaddings"]);
    var baseComponentProps = useBaseComponent('Container');
    var externalProps = getExternalProps(props);
    return (React.createElement(InternalContainer, __assign({ variant: variant, disableHeaderPaddings: disableHeaderPaddings, disableContentPaddings: disableContentPaddings }, externalProps, baseComponentProps)));
}
applyDisplayName(Container, 'Container');
//# sourceMappingURL=index.js.map