// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { containsOrEqual } from './utils/dom';
var FocusTracker = /** @class */ (function () {
    function FocusTracker(node, _a, viewportId) {
        var onFocusEnter = _a.onFocusEnter, onFocusLeave = _a.onFocusLeave;
        if (viewportId === void 0) { viewportId = ''; }
        var _this = this;
        this.node = node;
        this.currentlyFocused = false;
        this.focusInListener = function (event) {
            var focusIsInside = containsOrEqual(_this.node, event.target);
            if (!_this.currentlyFocused && focusIsInside) {
                _this.triggerFocus();
            }
        };
        this.focusOutListener = function (event) {
            var nextFocused = event.relatedTarget;
            var isNextFocusedInParent = !containsOrEqual(_this.node, nextFocused);
            if (_this.viewportId) {
                var viewport = document.getElementById(_this.viewportId);
                isNextFocusedInParent = isNextFocusedInParent && !containsOrEqual(viewport, nextFocused);
            }
            if (_this.currentlyFocused && (nextFocused === null || isNextFocusedInParent)) {
                _this.triggerBlur();
            }
        };
        this.onFocusEnter = onFocusEnter;
        this.onFocusLeave = onFocusLeave;
        this.viewportId = viewportId;
    }
    FocusTracker.prototype.initialize = function () {
        this.currentlyFocused = containsOrEqual(this.node, document.activeElement);
        document.addEventListener('focusin', this.focusInListener);
        document.addEventListener('focusout', this.focusOutListener);
    };
    FocusTracker.prototype.destroy = function () {
        document.removeEventListener('focusin', this.focusInListener);
        document.removeEventListener('focusout', this.focusOutListener);
    };
    FocusTracker.prototype.triggerBlur = function () {
        this.currentlyFocused = false;
        this.onFocusLeave();
    };
    FocusTracker.prototype.triggerFocus = function () {
        this.currentlyFocused = true;
        this.onFocusEnter();
    };
    return FocusTracker;
}());
export default FocusTracker;
//# sourceMappingURL=focus-tracker.js.map