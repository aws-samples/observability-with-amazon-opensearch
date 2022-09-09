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
var styles_selectors_js_1 = require("../../../button/styles.selectors.js");
var styles_selectors_js_2 = require("../../../spinner/styles.selectors.js");
var ButtonWrapper = /** @class */ (function (_super) {
    __extends(ButtonWrapper, _super);
    function ButtonWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonWrapper.prototype.findLoadingIndicator = function () {
        return this.find(".".concat(styles_selectors_js_1.default['icon-left'], ".").concat(styles_selectors_js_2.default.root));
    };
    ButtonWrapper.prototype.findTextRegion = function () {
        return this.find(".".concat(styles_selectors_js_1.default.content));
    };
    ButtonWrapper.prototype.isDisabled = function () {
        if (this.element.tagName === 'A') {
            return this.element.getAttribute('aria-disabled') === 'true';
        }
        else {
            return this.element.disabled;
        }
    };
    ButtonWrapper.rootSelector = styles_selectors_js_1.default.button;
    __decorate([
        dom_1.usesDom
    ], ButtonWrapper.prototype, "isDisabled", null);
    return ButtonWrapper;
}(dom_1.ComponentWrapper));
exports.default = ButtonWrapper;
//# sourceMappingURL=index.js.map