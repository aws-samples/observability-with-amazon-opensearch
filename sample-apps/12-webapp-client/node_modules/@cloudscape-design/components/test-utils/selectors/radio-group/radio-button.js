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
var abstract_switch_1 = require("../internal/abstract-switch");
var RadioButtonWrapper = /** @class */ (function (_super) {
    __extends(RadioButtonWrapper, _super);
    function RadioButtonWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioButtonWrapper.prototype.findAbstractSwitch = function () {
        return new abstract_switch_1.default(this.getElement());
    };
    RadioButtonWrapper.prototype.findLabel = function () {
        return this.findAbstractSwitch().findLabel();
    };
    RadioButtonWrapper.prototype.findNativeInput = function () {
        return this.findAbstractSwitch().findNativeInput();
    };
    RadioButtonWrapper.prototype.findDescription = function () {
        return this.findAbstractSwitch().findDescription();
    };
    return RadioButtonWrapper;
}(selectors_1.ElementWrapper));
exports.default = RadioButtonWrapper;
//# sourceMappingURL=radio-button.js.map