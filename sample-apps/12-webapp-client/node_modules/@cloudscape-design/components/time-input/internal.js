import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useRef } from 'react';
import useForwardFocus from '../internal/hooks/forward-focus';
import MaskedInput from '../internal/components/masked-input';
import styles from './styles.css.js';
var getMaskArgs = function (format, use24Hour) {
    var segments = [
        use24Hour ? { min: 0, max: 23, length: 2 } : { min: 1, max: 12, length: 2 },
        { min: 0, max: 59, length: 2 },
        { min: 0, max: 59, length: 2 },
    ];
    return {
        separator: ':',
        segments: segments.slice(0, format.split(':').length)
    };
};
var InternalTimeInput = React.forwardRef(function (_a, ref) {
    var _b = _a.format, format = _b === void 0 ? 'hh:mm:ss' : _b, _c = _a.use24Hour, use24Hour = _c === void 0 ? true : _c, _d = _a.autoComplete, autoComplete = _d === void 0 ? true : _d, _e = _a.__internalRootRef, __internalRootRef = _e === void 0 ? null : _e, props = __rest(_a, ["format", "use24Hour", "autoComplete", "__internalRootRef"]);
    var inputRef = useRef(null);
    useForwardFocus(ref, inputRef);
    var maskArgs = getMaskArgs(format, use24Hour);
    return (React.createElement(MaskedInput, __assign({}, props, { __internalRootRef: __internalRootRef, ref: inputRef, className: clsx(styles.root, props.className), autoComplete: autoComplete, disableBrowserAutocorrect: true, mask: maskArgs })));
});
export default InternalTimeInput;
//# sourceMappingURL=internal.js.map