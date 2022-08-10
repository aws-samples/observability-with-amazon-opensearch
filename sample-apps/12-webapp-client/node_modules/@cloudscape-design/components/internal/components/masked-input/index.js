import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState, useLayoutEffect } from 'react';
import { useMergeRefs } from '../../hooks/use-merge-refs';
import { getBaseProps } from '../../base-component';
import { fireCancelableEvent, fireNonCancelableEvent } from '../../events';
import { useFormFieldContext } from '../../context/form-field-context';
import InternalInput from '../../../input/internal';
import useMask from './use-mask';
import MaskFormat from './utils/mask-format';
var MaskedInput = React.forwardRef(function (_a, ref) {
    var value = _a.value, onBlur = _a.onBlur, onChange = _a.onChange, onKeyDown = _a.onKeyDown, mask = _a.mask, _b = _a.autofix, autofix = _b === void 0 ? false : _b, _c = _a.disableAutocompleteOnBlur, disableAutocompleteOnBlur = _c === void 0 ? false : _c, rest = __rest(_a, ["value", "onBlur", "onChange", "onKeyDown", "mask", "autofix", "disableAutocompleteOnBlur"]);
    var baseProps = getBaseProps(rest);
    var formFieldContext = useFormFieldContext(rest);
    var inputRef = React.useRef(null);
    var _d = useState(null), cursorPosition = _d[0], setCursorPosition = _d[1];
    useLayoutEffect(function () {
        var _a;
        if (cursorPosition !== null) {
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.setSelectionRange(cursorPosition, cursorPosition);
        }
    }, [cursorPosition, inputRef]);
    var _e = useMask({
        format: new MaskFormat(mask),
        value: value,
        inputRef: inputRef,
        autofix: autofix,
        disableAutocompleteOnBlur: disableAutocompleteOnBlur,
        onChange: function (value) { return !rest.readOnly && fireNonCancelableEvent(onChange, { value: value }); },
        onKeyDown: function (event) {
            return !rest.readOnly && onKeyDown && fireCancelableEvent(onKeyDown, event.detail, event);
        },
        onBlur: function () { return fireNonCancelableEvent(onBlur); },
        setPosition: setCursorPosition
    }), onPaste = _e.onPaste, maskProps = __rest(_e, ["onPaste"]);
    var inputProps = __assign(__assign(__assign(__assign({}, rest), baseProps), formFieldContext), maskProps);
    var mergedRef = useMergeRefs(ref, inputRef);
    return (React.createElement(InternalInput, __assign({}, inputProps, { ref: mergedRef, __nativeAttributes: {
            onPaste: onPaste
        } })));
});
export { useMask };
export default MaskedInput;
//# sourceMappingURL=index.js.map