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
var styles_selectors_js_1 = require("../../../textarea/styles.selectors.js");
var TextareaWrapper = /** @class */ (function (_super) {
    __extends(TextareaWrapper, _super);
    function TextareaWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaWrapper.prototype.findNativeTextarea = function () {
        return this.find(".".concat(styles_selectors_js_1.default.textarea));
    };
    /**
     * Sets the value of the component and calls the onChange handler.
     *
     * @param value value to set the textarea to.
     */
    TextareaWrapper.prototype.setTextareaValue = function (value) {
        var element = this.findNativeTextarea().getElement();
        (0, test_utils_1.act)(function () {
            test_utils_1.Simulate.change(element, { target: { value: value } });
        });
    };
    TextareaWrapper.rootSelector = styles_selectors_js_1.default.root;
    __decorate([
        dom_1.usesDom
    ], TextareaWrapper.prototype, "setTextareaValue", null);
    return TextareaWrapper;
}(dom_1.ComponentWrapper));
exports.default = TextareaWrapper;
//# sourceMappingURL=index.js.map