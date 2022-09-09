// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// TODO [mjawors] _.range
export function range(from, to) {
    var result = [];
    for (var i = from; i <= to; i++) {
        result.push(i);
    }
    return result;
}
export function getPaginationState(currentPageIndex, totalPagesCount, isOpenEnd) {
    // Total number of elements handled here
    var numberOfControls = 7;
    // Max number of controls that can be displayed on the left and right hand side of the current page.
    // Works only for odd numbers
    var leftDelta = Math.floor(numberOfControls / 2);
    var rightDelta = leftDelta;
    // upper and lower limits for pages range
    var lowerLimit = 2;
    var upperLimit = totalPagesCount - 1;
    if (isOpenEnd) {
        rightDelta++;
        upperLimit = totalPagesCount + 1;
    }
    // Left and right indices based on delta calculation
    var leftIndex = currentPageIndex - leftDelta;
    var rightIndex = currentPageIndex + rightDelta;
    // adjust page indexes if page index is too small
    if (leftIndex < lowerLimit) {
        rightIndex += lowerLimit - leftIndex;
        leftIndex = lowerLimit;
    }
    // adjust page indexes if page index is to big
    if (rightIndex > upperLimit) {
        leftIndex -= rightIndex - upperLimit;
        rightIndex = upperLimit;
    }
    // adjust indexes one more time to avoid out of range errors
    leftIndex = Math.max(leftIndex, 2);
    rightIndex = Math.min(rightIndex, upperLimit);
    // consider adding dots
    var leftDots = leftIndex > 2;
    var rightDots = isOpenEnd || rightIndex < upperLimit;
    if (leftDots) {
        leftIndex++;
    }
    if (rightDots) {
        rightIndex--;
    }
    return { leftDots: leftDots, rightDots: rightDots, leftIndex: leftIndex, rightIndex: rightIndex };
}
//# sourceMappingURL=utils.js.map