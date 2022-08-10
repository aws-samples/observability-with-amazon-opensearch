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
var styles_selectors_js_1 = require("../../../checkbox/styles.selectors.js");
var abstract_switch_1 = require("../internal/abstract-switch");
var CheckboxWrapper = /** @class */ (function (_super) {
    __extends(CheckboxWrapper, _super);
    function CheckboxWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxWrapper.prototype.findAbstractSwitch = function () {
        return new abstract_switch_1.default(this.getElement());
    };
    CheckboxWrapper.prototype.findLabel = function () {
        return this.findAbstractSwitch().findLabel();
    };
    CheckboxWrapper.prototype.findNativeInput = function () {
        return this.findAbstractSwitch().findNativeInput();
    };
    CheckboxWrapper.prototype.findDescription = function () {
        return this.findAbstractSwitch().findDescription();
    };
    CheckboxWrapper.rootSelector = styles_selectors_js_1.default.root;
    return CheckboxWrapper;
}(dom_1.ComponentWrapper));
exports.default = CheckboxWrapper;
//# sourceMappingURL=index.js.map