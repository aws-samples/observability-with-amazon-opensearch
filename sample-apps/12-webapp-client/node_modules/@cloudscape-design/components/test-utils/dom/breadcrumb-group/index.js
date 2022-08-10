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
var button_dropdown_1 = require("../button-dropdown");
var styles_selectors_js_1 = require("../../../breadcrumb-group/styles.selectors.js");
var styles_selectors_js_2 = require("../../../breadcrumb-group/item/styles.selectors.js");
var styles_selectors_js_3 = require("../../../button-dropdown/styles.selectors.js");
var BreadcrumbGroupWrapper = /** @class */ (function (_super) {
    __extends(BreadcrumbGroupWrapper, _super);
    function BreadcrumbGroupWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns all links.
     *
     * To find a specific link use the `findBreadcrumbLink(n)` function as chaining `findBreadcrumbLinks().get(n)` can return unexpected results.
     * @see findBreadcrumbLink
     */
    BreadcrumbGroupWrapper.prototype.findBreadcrumbLinks = function () {
        return this.findAll(".".concat(styles_selectors_js_2.default.breadcrumb, " a"));
    };
    /**
     * Returns a link for a given index.
     *
     * @param index 1-based link index
     */
    BreadcrumbGroupWrapper.prototype.findBreadcrumbLink = function (index) {
        // We insert the breadcrumb-ellipsis as the second element so we have to filter it out.
        // Unfortunately, there is no efficient CSS selector for it in CSS Selectors-3 spec.
        // In the future we can use li:nth-child(n of .awsui-breadcrumb-item) when Selectors-4 spec is supported https://caniuse.com/#feat=css-nth-child-of
        if (index > 1) {
            index++;
        }
        return this.find(".".concat(styles_selectors_js_1.default.item, ":nth-child(").concat(index, ") a"));
    };
    BreadcrumbGroupWrapper.prototype.findDropdown = function () {
        var buttonDropdown = this.find(".".concat(styles_selectors_js_3.default['button-dropdown']));
        return buttonDropdown && new button_dropdown_1.default(buttonDropdown.getElement());
    };
    BreadcrumbGroupWrapper.rootSelector = styles_selectors_js_1.default['breadcrumb-group'];
    return BreadcrumbGroupWrapper;
}(dom_1.ComponentWrapper));
exports.default = BreadcrumbGroupWrapper;
//# sourceMappingURL=index.js.map