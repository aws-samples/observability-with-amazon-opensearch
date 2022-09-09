// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Credits to
// https://github.com/theKashey/focus-lock/blob/33f8b4bd9675d2605b15e2e4015b77fe35fbd6d0/src/utils/tabbables.ts
var tabbables = [
    'button:enabled',
    'select:enabled',
    'textarea:enabled',
    'input:enabled',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[tabindex]',
    '[contenteditable]',
    '[autofocus]',
].join(',');
export function getFocusables(container) {
    return Array.prototype.slice
        .call(container.querySelectorAll(tabbables))
        .filter(function (element) { return element.tabIndex !== -1; });
}
export function getFirstFocusable(container) {
    var _a;
    var focusables = getFocusables(container);
    return (_a = focusables[0]) !== null && _a !== void 0 ? _a : null;
}
export function getLastFocusable(container) {
    var _a;
    var focusables = getFocusables(container);
    return (_a = focusables[focusables.length - 1]) !== null && _a !== void 0 ? _a : null;
}
//# sourceMappingURL=utils.js.map