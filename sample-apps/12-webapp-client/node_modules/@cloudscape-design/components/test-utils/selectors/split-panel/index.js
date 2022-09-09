"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
var button_1 = require("../button");
var styles_selectors_js_1 = require("../../../split-panel/styles.selectors.js");
var SplitPanelWrapper = /** @class */ (function (_super) {
    __extends(SplitPanelWrapper, _super);
    function SplitPanelWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplitPanelWrapper.prototype.findHeader = function () {
        return this.find(".".concat(styles_selectors_js_1.default['header-text']));
    };
    SplitPanelWrapper.prototype.findPreferencesButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['preferences-button']), button_1.default);
    };
    SplitPanelWrapper.prototype.findCloseButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['close-button']), button_1.default);
    };
    SplitPanelWrapper.prototype.findOpenButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['open-button']), button_1.default);
    };
    SplitPanelWrapper.prototype.findSlider = function () {
        return this.findByClassName(styles_selectors_js_1.default.slider);
    };
    /**
     * Returns the same panel if it's currently open in bottom position. If not, it returns null.
     * Use this method to assert the panel position.
     */
    SplitPanelWrapper.prototype.findOpenPanelBottom = function () {
        return this.matches(".".concat(styles_selectors_js_1.default['position-bottom'], ":not(.").concat(styles_selectors_js_1.default['drawer-closed'], ")"));
    };
    /**
     * Returns the same panel if it's currently open in side position. If not, it returns null.
     * Use this method to assert the panel position.
     */
    SplitPanelWrapper.prototype.findOpenPanelSide = function () {
        return this.matches(".".concat(styles_selectors_js_1.default['position-side'], ":not(.").concat(styles_selectors_js_1.default['drawer-closed'], ")"));
    };
    SplitPanelWrapper.rootSelector = styles_selectors_js_1.default.root;
    return SplitPanelWrapper;
}(selectors_1.ComponentWrapper));
exports.default = SplitPanelWrapper;
//# sourceMappingURL=index.js.map