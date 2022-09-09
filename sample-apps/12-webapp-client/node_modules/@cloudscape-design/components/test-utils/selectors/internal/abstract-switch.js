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
var styles_selectors_js_1 = require("../../../internal/components/abstract-switch/styles.selectors.js");
var AbstractSwitchWrapper = /** @class */ (function (_super) {
    __extends(AbstractSwitchWrapper, _super);
    function AbstractSwitchWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractSwitchWrapper.prototype.findLabel = function () {
        return this.findByClassName(styles_selectors_js_1.default['label-wrapper']);
    };
    AbstractSwitchWrapper.prototype.findNativeInput = function () {
        return this.find(".".concat(styles_selectors_js_1.default.control, " > input"));
    };
    AbstractSwitchWrapper.prototype.findDescription = function () {
        return this.findByClassName(styles_selectors_js_1.default.description);
    };
    AbstractSwitchWrapper.rootSelector = styles_selectors_js_1.default.wrapper;
    return AbstractSwitchWrapper;
}(selectors_1.ElementWrapper));
exports.default = AbstractSwitchWrapper;
//# sourceMappingURL=abstract-switch.js.map