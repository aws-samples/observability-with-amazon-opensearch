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
var selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
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
    CodeEditorWrapper.rootSelector = styles_selectors_js_1.default['code-editor'];
    return CodeEditorWrapper;
}(selectors_1.ComponentWrapper));
exports.default = CodeEditorWrapper;
//# sourceMappingURL=index.js.map