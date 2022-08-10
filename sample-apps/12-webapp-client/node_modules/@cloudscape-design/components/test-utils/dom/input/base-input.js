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
var test_utils_1 = require("react-dom/test-utils");
var dom_1 = require("@cloudscape-design/test-utils-core/dom");
var styles_selectors_js_1 = require("../../../input/styles.selectors.js");
var BaseInputWrapper = /** @class */ (function (_super) {
    __extends(BaseInputWrapper, _super);
    function BaseInputWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseInputWrapper.prototype.findNativeInput = function () {
        // Input component always have native input
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.find(".".concat(styles_selectors_js_1.default.input));
    };
    BaseInputWrapper.prototype.focus = function () {
        var _this = this;
        (0, test_utils_1.act)(function () {
            _this.findNativeInput().focus();
        });
    };
    BaseInputWrapper.prototype.blur = function () {
        var _this = this;
        (0, test_utils_1.act)(function () {
            _this.findNativeInput().blur();
        });
    };
    /**
     * Sets the value of the component and calls the `onChange` handler
     *
     * @param value The value the input is set to.
     */
    BaseInputWrapper.prototype.setInputValue = function (value) {
        var element = this.findNativeInput().getElement();
        (0, test_utils_1.act)(function () {
            test_utils_1.Simulate.change(element, { target: { value: value } });
        });
    };
    BaseInputWrapper.prototype.isDisabled = function () {
        return this.findNativeInput().getElement().hasAttribute('disabled');
    };
    __decorate([
        dom_1.usesDom
    ], BaseInputWrapper.prototype, "focus", null);
    __decorate([
        dom_1.usesDom
    ], BaseInputWrapper.prototype, "blur", null);
    __decorate([
        dom_1.usesDom
    ], BaseInputWrapper.prototype, "setInputValue", null);
    __decorate([
        dom_1.usesDom
    ], BaseInputWrapper.prototype, "isDisabled", null);
    return BaseInputWrapper;
}(dom_1.ComponentWrapper));
exports.default = BaseInputWrapper;
//# sourceMappingURL=base-input.js.map