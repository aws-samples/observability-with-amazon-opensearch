// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import styles from './styles.css.js';
import clsx from 'clsx';
var splitOnFiltering = function (str, highlightText) {
    // Filtering needs to be case insensitive
    var filteringPattern = highlightText.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
    var regexp = new RegExp(filteringPattern, 'gi');
    var noMatches = str.split(regexp);
    var matches = str.match(regexp);
    return { noMatches: noMatches, matches: matches };
};
var Highlight = function (_a) {
    var str = _a.str;
    return str ? React.createElement("span", { className: clsx(styles['filtering-match-highlight']) }, str) : null;
};
export default function HighlightMatch(_a) {
    var str = _a.str, highlightText = _a.highlightText;
    if (!str || !highlightText) {
        return React.createElement(React.Fragment, null, str);
    }
    if (str === highlightText) {
        return React.createElement(Highlight, { str: str });
    }
    var _b = splitOnFiltering(str, highlightText), noMatches = _b.noMatches, matches = _b.matches;
    var highlighted = [];
    noMatches.forEach(function (noMatch, idx) {
        highlighted.push(noMatch);
        if (matches && idx < matches.length) {
            highlighted.push(React.createElement(Highlight, { key: idx, str: matches[idx] }));
        }
    });
    return React.createElement("span", null, highlighted);
}
//# sourceMappingURL=highlight-match.js.map