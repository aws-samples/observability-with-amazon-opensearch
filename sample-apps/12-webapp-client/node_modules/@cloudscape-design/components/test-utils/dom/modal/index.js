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
var styles_selectors_js_1 = require("../../../modal/styles.selectors.js");
var ModalWrapper = /** @class */ (function (_super) {
    __extends(ModalWrapper, _super);
    function ModalWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalWrapper.prototype.findHeader = function () {
        return this.findByClassName(styles_selectors_js_1.default.header);
    };
    ModalWrapper.prototype.findContent = function () {
        return this.findByClassName(styles_selectors_js_1.default.content);
    };
    ModalWrapper.prototype.findFooter = function () {
        return this.findByClassName(styles_selectors_js_1.default.footer);
    };
    ModalWrapper.prototype.findDismissButton = function () {
        return this.findByClassName(styles_selectors_js_1.default['dismiss-control']);
    };
    ModalWrapper.prototype.isVisible = function () {
        return !this.element.classList.contains(styles_selectors_js_1.default.hidden);
    };
    ModalWrapper.rootSelector = styles_selectors_js_1.default.root;
    __decorate([
        dom_1.usesDom
    ], ModalWrapper.prototype, "isVisible", null);
    return ModalWrapper;
}(dom_1.ComponentWrapper));
exports.default = ModalWrapper;
//# sourceMappingURL=index.js.map