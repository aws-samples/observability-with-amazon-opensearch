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
var button_1 = require("../button");
var styles_selectors_js_1 = require("../../../code-editor/styles.selectors.js");
var CodeEditorWrapper = /** @class */ (function (_super) {
    __extends(CodeEditorWrapper, _super);
    function CodeEditorWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CodeEditorWrapper.prototype.findEditor = function () {
        return this.findByClassName(styles_selectors_js_1.default.editor);
    };
    CodeEditorWrapper.prototype.findNativeTextArea = function () {
        return this.find('textarea.ace_text-input');
    };
    CodeEditorWrapper.prototype.findErrorsTab = function () {
        return this.findByClassName(styles_selectors_js_1.default['tab-button--errors']);
    };
    CodeEditorWrapper.prototype.findWarningsTab = function () {
        return this.findByClassName(styles_selectors_js_1.default['tab-button--warnings']);
    };
    CodeEditorWrapper.prototype.findSettingsButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['status-bar__cog-button'], " button"), button_1.default);
    };
    CodeEditorWrapper.prototype.findStatusBar = function () {
        return this.findByClassName(styles_selectors_js_1.default['status-bar']);
    };
    CodeEditorWrapper.prototype.findPane = function () {
        return this.findByClassName(styles_selectors_js_1.default.pane);
    };
    CodeEditorWrapper.prototype.findLoadingScreen = function () {
        return this.findByClassName(styles_selectors_js_1.default['loading-screen']);
    };
    CodeEditorWrapper.prototype.findErrorScreen = function () {
        return this.findByClassName(styles_selectors_js_1.default['error-screen']);
    };
    /**
     * Sets the value of the component and calls the `onChange` handler
     *
     * @param value The value the input is set to.
     */
    CodeEditorWrapper.prototype.setValue = function (value) {
        var _a;
        var editor = (_a = this.findEditor()) === null || _a === void 0 ? void 0 : _a.getElement();
        if (editor && 'env' in editor) {
            (0, test_utils_1.act)(function () {
                editor.env.editor.setValue(value, -1);
            });
        }
    };
    CodeEditorWrapper.rootSelector = styles_selectors_js_1.default['code-editor'];
    __decorate([
        dom_1.usesDom
    ], CodeEditorWrapper.prototype, "setValue", null);
    return CodeEditorWrapper;
}(dom_1.ComponentWrapper));
exports.default = CodeEditorWrapper;
//# sourceMappingURL=index.js.map