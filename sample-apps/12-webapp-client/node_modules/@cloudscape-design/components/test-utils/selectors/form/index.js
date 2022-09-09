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
var styles_selectors_js_1 = require("../../../form/styles.selectors.js");
var FormWrapper = /** @class */ (function (_super) {
    __extends(FormWrapper, _super);
    function FormWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormWrapper.prototype.findHeader = function () {
        return this.findByClassName(styles_selectors_js_1.default.header);
    };
    FormWrapper.prototype.findContent = function () {
        return this.findByClassName(styles_selectors_js_1.default.content);
    };
    FormWrapper.prototype.findError = function () {
        return this.findByClassName(styles_selectors_js_1.default.error);
    };
    FormWrapper.prototype.findActions = function () {
        return this.findByClassName(styles_selectors_js_1.default.actions);
    };
    FormWrapper.prototype.findSecondaryActions = function () {
        return this.findByClassName(styles_selectors_js_1.default['secondary-actions']);
    };
    FormWrapper.rootSelector = styles_selectors_js_1.default.root;
    return FormWrapper;
}(selectors_1.ComponentWrapper));
exports.default = FormWrapper;
//# sourceMappingURL=index.js.map