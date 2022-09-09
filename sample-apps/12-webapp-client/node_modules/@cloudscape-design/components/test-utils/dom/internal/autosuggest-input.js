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
var dom_1 = require("@cloudscape-design/test-utils-core/dom");
var styles_selectors_js_1 = require("../../../input/styles.selectors.js");
var styles_selectors_js_2 = require("../../../internal/components/dropdown/styles.selectors.js");
var styles_selectors_js_3 = require("../../../internal/components/autosuggest-input/styles.selectors.js");
var index_js_1 = require("../index.js");
var dropdown_js_1 = require("./dropdown.js");
var AutosuggestInputWrapper = /** @class */ (function (_super) {
    __extends(AutosuggestInputWrapper, _super);
    function AutosuggestInputWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutosuggestInputWrapper.prototype.findInput = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['input-container']), index_js_1.InputWrapper);
    };
    AutosuggestInputWrapper.prototype.findDropdown = function () {
        return this.findComponent(".".concat(styles_selectors_js_2.default.root), dropdown_js_1.default);
    };
    AutosuggestInputWrapper.rootSelector = styles_selectors_js_3.default.root;
    return AutosuggestInputWrapper;
}(dom_1.ComponentWrapper));
exports.default = AutosuggestInputWrapper;
//# sourceMappingURL=autosuggest-input.js.map