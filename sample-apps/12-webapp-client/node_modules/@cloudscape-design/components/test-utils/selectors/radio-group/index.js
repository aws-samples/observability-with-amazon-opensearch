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
var utils_1 = require("@cloudscape-design/test-utils-core/utils");
var radio_button_1 = require("./radio-button");
var styles_selectors_js_1 = require("../../../radio-group/styles.selectors.js");
var RadioGroupWrapper = /** @class */ (function (_super) {
    __extends(RadioGroupWrapper, _super);
    function RadioGroupWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioGroupWrapper.prototype.findButtons = function () {
        return this.findAllByClassName(styles_selectors_js_1.default.radio).map(function (r) { return new radio_button_1.default(r.getElement()); });
    };
    RadioGroupWrapper.prototype.findInputByValue = function (value) {
        var safeValue = (0, utils_1.escapeSelector)(value);
        return this.find("input[value=\"".concat(safeValue, "\"]"));
    };
    RadioGroupWrapper.rootSelector = styles_selectors_js_1.default.root;
    return RadioGroupWrapper;
}(selectors_1.ComponentWrapper));
exports.default = RadioGroupWrapper;
//# sourceMappingURL=index.js.map