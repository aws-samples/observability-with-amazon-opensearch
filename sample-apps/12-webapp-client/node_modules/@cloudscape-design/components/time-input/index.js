import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import InternalTimeInput from './internal';
var TimeInput = React.forwardRef(function (_a, ref) {
    var _b = _a.format, format = _b === void 0 ? 'hh:mm:ss' : _b, _c = _a.use24Hour, use24Hour = _c === void 0 ? true : _c, _d = _a.autoComplete, autoComplete = _d === void 0 ? true : _d, props = __rest(_a, ["format", "use24Hour", "autoComplete"]);
    var baseComponentProps = useBaseComponent('TimeInput');
    return (React.createElement(InternalTimeInput, __assign({ format: format, use24Hour: use24Hour, autoComplete: autoComplete }, props, baseComponentProps, { ref: ref })));
});
applyDisplayName(TimeInput, 'TimeInput');
export default TimeInput;
//# sourceMappingURL=index.js.map