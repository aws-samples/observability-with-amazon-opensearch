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
var form_field_1 = require("../form-field");
var radio_group_1 = require("../radio-group");
var styles_selectors_js_1 = require("../../../collection-preferences/styles.selectors.js");
var PageSizePreferenceWrapper = /** @class */ (function (_super) {
    __extends(PageSizePreferenceWrapper, _super);
    function PageSizePreferenceWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageSizePreferenceWrapper.prototype.findTitle = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['page-size-form-field']), form_field_1.default).findLabel();
    };
    PageSizePreferenceWrapper.prototype.findOptions = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['page-size-radio-group']), radio_group_1.default).findButtons();
    };
    PageSizePreferenceWrapper.rootSelector = styles_selectors_js_1.default['page-size'];
    return PageSizePreferenceWrapper;
}(selectors_1.ComponentWrapper));
exports.default = PageSizePreferenceWrapper;
//# sourceMappingURL=page-size-preference.js.map