import { KeyCode } from '../../keycode';
import * as logger from '../../logging';
import { isCommand, isDigit } from './utils/keys';
import { backspaceHandler, keyHandler, enterHandler } from './keyboard-handler';
var onAutoComplete = function (value, onChange, maskFormat) {
    // Do not autocomplete if input is empty
    if (!value) {
        return;
    }
    var autoCompletedValue = maskFormat.autoComplete(value);
    if (autoCompletedValue !== value) {
        onChange(autoCompletedValue);
    }
};
var preventDefault = function (event, result) { return result && event.preventDefault(); };
var useMask = function (_a) {
    var _b = _a.value, value = _b === void 0 ? '' : _b, onBlur = _a.onBlur, onChange = _a.onChange, onKeyDown = _a.onKeyDown, format = _a.format, inputRef = _a.inputRef, _c = _a.autofix, autofix = _c === void 0 ? false : _c, _d = _a.disableAutocompleteOnBlur, disableAutocompleteOnBlur = _d === void 0 ? false : _d, setPosition = _a.setPosition;
    if (!format.isValid(value)) {
        logger.warnOnce('useMask', "Invalid string \"".concat(value, "\" provided"));
    }
    var onMaskChange = function (updatedValue) {
        var autofixedUpdatedValue = autofix ? format.correctMinMaxValues(updatedValue) : updatedValue;
        if (autofixedUpdatedValue === value || !format.isValid(autofixedUpdatedValue)) {
            return;
        }
        onChange(autofixedUpdatedValue);
    };
    var initialValue = autofix ? format.correctMinMaxValues(value) : value;
    var maskedValue = format.getValidValue(initialValue);
    return {
        value: maskedValue,
        onKeyDown: function (event) {
            var _a, _b;
            var selectionStart = ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.selectionStart) || 0;
            var selectionEnd = ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.selectionEnd) || 0;
            var result;
            var _c = event.detail, keyCode = _c.keyCode, key = _c.key, ctrlKey = _c.ctrlKey, metaKey = _c.metaKey;
            if (isDigit(key) || format.isSeparator(key)) {
                result = keyHandler(maskedValue, key, format, selectionStart, selectionEnd);
                preventDefault(event, result);
            }
            else if (keyCode === KeyCode.backspace) {
                result = backspaceHandler(maskedValue, format, selectionStart, selectionEnd);
                preventDefault(event, result);
            }
            else if (keyCode === KeyCode.enter) {
                result = enterHandler(maskedValue, format);
            }
            else if (!isCommand(keyCode, ctrlKey, metaKey)) {
                event.preventDefault();
            }
            if (result) {
                var value_1 = result.value, position = result.position;
                onMaskChange(value_1);
                setPosition(position);
            }
            // Proxy original event
            onKeyDown && onKeyDown(event);
        },
        onChange: function (_a) {
            var detail = _a.detail;
            return onMaskChange(detail.value);
        },
        onBlur: function () {
            if (!disableAutocompleteOnBlur) {
                onAutoComplete(maskedValue, onChange, format);
            }
            onBlur && onBlur();
        },
        onPaste: function (event) {
            var _a, _b;
            var text = (event.clipboardData || window.clipboardData).getData('text');
            var selectionStart = ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.selectionStart) || 0;
            var selectionEnd = ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.selectionEnd) || 0;
            var formattedText = format.formatPastedText(text, maskedValue, selectionStart, selectionEnd);
            onMaskChange(formattedText);
        }
    };
};
export default useMask;
//# sourceMappingURL=use-mask.js.map