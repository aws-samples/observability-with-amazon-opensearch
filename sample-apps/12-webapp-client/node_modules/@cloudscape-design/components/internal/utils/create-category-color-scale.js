// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { parseCssVariable } from './dom';
import { categoryPalette } from '../styles/colors';
import { colorChartsThresholdNeutral as thresholdColor } from '../generated/styles/tokens';
export default function createCategoryColorScale(items, isThreshold, getOwnColor) {
    if (isThreshold === void 0) { isThreshold = function () { return false; }; }
    if (getOwnColor === void 0) { getOwnColor = function () { return null; }; }
    var colors = [];
    var categoryIndex = 0;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var it = items_1[_i];
        var ownColor = getOwnColor(it);
        var defaultColor = isThreshold(it) ? thresholdColor : categoryPalette[categoryIndex % categoryPalette.length];
        colors.push(parseCssVariable(ownColor || defaultColor));
        if (!isThreshold(it) && !ownColor) {
            categoryIndex++;
        }
    }
    return colors;
}
//# sourceMappingURL=create-category-color-scale.js.map