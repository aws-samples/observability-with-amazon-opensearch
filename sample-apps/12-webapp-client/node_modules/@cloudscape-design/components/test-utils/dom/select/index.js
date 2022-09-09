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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var dom_1 = require("@cloudscape-design/test-utils-core/dom");
var styles_selectors_js_1 = require("../../../select/styles.selectors.js");
var styles_selectors_js_2 = require("../../../select/parts/styles.selectors.js");
var styles_selectors_js_3 = require("../../../input/styles.selectors.js");
var styles_selectors_js_4 = require("../../../internal/components/button-trigger/styles.selectors.js");
var styles_selectors_js_5 = require("../../../internal/components/dropdown-status/styles.selectors.js");
var styles_selectors_js_6 = require("../../../internal/components/dropdown-status/styles.selectors.js");
var input_1 = require("../input");
var dropdown_host_1 = require("../internal/dropdown-host");
var SelectWrapper = /** @class */ (function (_super) {
    __extends(SelectWrapper, _super);
    function SelectWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    SelectWrapper.prototype.findErrorRecoveryButton = function (options) {
        if (options === void 0) { options = { expandToViewport: false }; }
        return this.findDropdown(options).findByClassName(styles_selectors_js_6.default.recovery);
    };
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    SelectWrapper.prototype.findStatusIndicator = function (options) {
        if (options === void 0) { options = { expandToViewport: false }; }
        return this.findDropdown(options).findByClassName(styles_selectors_js_5.default.root);
    };
    /**
     * Returns the input that is used for filtering. Returns `null` if `enableFiltering` is not set to `true`.
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    SelectWrapper.prototype.findFilteringInput = function (options) {
        if (options === void 0) { options = { expandToViewport: false }; }
        return this.findDropdown(options).findComponent(".".concat(styles_selectors_js_3.default['input-container']), input_1.default);
    };
    SelectWrapper.prototype.findPlaceholder = function () {
        return this.findByClassName(styles_selectors_js_2.default.placeholder);
    };
    SelectWrapper.prototype.findTrigger = function () {
        return this.findByClassName(styles_selectors_js_4.default['button-trigger']);
    };
    SelectWrapper.prototype.isDisabled = function () {
        return this.findTrigger().getElement().disabled;
    };
    SelectWrapper.rootSelector = styles_selectors_js_1.default.root;
    __decorate([
        dom_1.usesDom
    ], SelectWrapper.prototype, "isDisabled", null);
    return SelectWrapper;
}(dropdown_host_1.default));
exports.default = SelectWrapper;
//# sourceMappingURL=index.js.map