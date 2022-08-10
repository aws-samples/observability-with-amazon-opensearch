/**
 * Handles character removal
 *
 * @param initialValue Current value of input
 * @param format MaskFormat object
 * @param selectionStart Starting index value of selection cursor
 * @param selectionEnd Ending Index value of selection cursor
 */
export var backspaceHandler = function (initialValue, format, selectionStart, selectionEnd) {
    var multiCharDelete = selectionStart !== selectionEnd;
    if (multiCharDelete) {
        var isCursorAtEnd = selectionEnd === initialValue.length;
        if (!isCursorAtEnd) {
            return format.replaceDigitsWithZeroes(initialValue, selectionStart, selectionEnd);
        }
        return {
            value: initialValue.slice(0, selectionStart),
            position: selectionStart
        };
    }
    var isSeparator = format.isSegmentStart(selectionStart);
    var atEnd = selectionStart === initialValue.length;
    if (!atEnd) {
        if (isSeparator) {
            return format.deleteSeparator(initialValue, selectionStart);
        }
        else {
            return format.deleteDigit(initialValue, selectionStart);
        }
    }
    if (isSeparator) {
        return {
            value: initialValue.slice(0, selectionStart - 2),
            position: selectionStart - 2
        };
    }
    return {
        value: initialValue.slice(0, selectionStart - 1),
        position: selectionStart - 1
    };
};
/**
 * Handle key down events
 *
 * @param initialValue Current value of input
 * @param key Key that was pressed
 * @param format MaskFormat object
 * @param selectionStart Starting index value of selection cursor
 * @param selectionEnd Ending Index value of selection cursor
 */
export var keyHandler = function (initialValue, key, format, selectionStart, selectionEnd) {
    var value = initialValue;
    var position = selectionStart;
    // return if no more digits can be added at the end
    if (selectionStart === value.length && value.length === format.getMaxLength()) {
        return { value: value, position: position };
    }
    // if range is selected to the end, remove all of that selection first
    if (selectionStart !== value.length && selectionEnd === value.length) {
        var sliceEnd = format.isCursorAtSeparator(selectionStart) ? selectionStart + 1 : selectionStart;
        value = initialValue.slice(0, sliceEnd);
    }
    if (format.isCursorAtSeparator(position)) {
        return { value: value, position: position + 1 };
    }
    return format.processKey(value, key, position);
};
export var enterHandler = function (value, format) {
    var autoCompletedValue = format.autoComplete(value);
    var position = autoCompletedValue.length;
    return { value: autoCompletedValue, position: position };
};
//# sourceMappingURL=keyboard-handler.js.map