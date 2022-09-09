// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback, useState } from 'react';
export function useHighlightedOption(_a) {
    var options = _a.options, isHighlightable = _a.isHighlightable;
    var _b = useState(-1), highlightedIndex = _b[0], setHighlightedIndexState = _b[1];
    var _c = useState('keyboard'), highlightType = _c[0], setHighlightType = _c[1];
    var setHighlightedIndex = useCallback(function (index, highlightType) {
        setHighlightedIndexState(index);
        setHighlightType(highlightType);
    }, []);
    var highlightedOption = options[highlightedIndex] && isHighlightable(options[highlightedIndex]) ? options[highlightedIndex] : undefined;
    var moveHighlightFrom = function (direction, startIndex, highlightType) {
        if (startIndex === void 0) { startIndex = highlightedIndex; }
        var newIndex = startIndex;
        do {
            newIndex += direction;
        } while (options[newIndex] && !isHighlightable(options[newIndex]));
        if (options[newIndex]) {
            setHighlightedIndex(newIndex, highlightType);
        }
    };
    var moveHighlight = function (direction, highlightType) {
        return moveHighlightFrom(direction, highlightedIndex, highlightType);
    };
    var highlightOption = useCallback(function (option, highlightType) {
        var index = options.indexOf(option);
        setHighlightedIndex(index, highlightType);
    }, [options, setHighlightedIndex]);
    return [
        { highlightType: highlightType, highlightedIndex: highlightedIndex, highlightedOption: highlightedOption },
        {
            setHighlightedIndexWithMouse: function (index) { return setHighlightedIndex(index, 'mouse'); },
            moveHighlightWithKeyboard: function (direction) { return moveHighlight(direction, 'keyboard'); },
            highlightOptionWithKeyboard: function (option) { return highlightOption(option, 'keyboard'); },
            resetHighlightWithKeyboard: function () { return setHighlightedIndex(-1, 'keyboard'); },
            goHomeWithKeyboard: function () { return moveHighlightFrom(1, -1, 'keyboard'); },
            goEndWithKeyboard: function () { return moveHighlightFrom(-1, options.length, 'keyboard'); }
        },
    ];
}
//# sourceMappingURL=use-highlight-option.js.map