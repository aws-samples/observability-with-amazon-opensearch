import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import useBaseComponent from '../internal/hooks/use-base-component';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalLink from './internal';
var Link = React.forwardRef(function (_a, ref) {
    var _b = _a.variant, variant = _b === void 0 ? 'secondary' : _b, _c = _a.fontSize, fontSize = _c === void 0 ? 'body-m' : _c, _d = _a.color, color = _d === void 0 ? 'normal' : _d, _e = _a.external, external = _e === void 0 ? false : _e, props = __rest(_a, ["variant", "fontSize", "color", "external"]);
    var baseComponentProps = useBaseComponent('Link');
    return (React.createElement(InternalLink, __assign({ variant: variant, fontSize: fontSize, color: color, external: external }, props, baseComponentProps, { ref: ref })));
});
applyDisplayName(Link, 'Link');
export default Link;
//# sourceMappingURL=index.js.map