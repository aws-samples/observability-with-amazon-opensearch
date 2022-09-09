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
var styles_selectors_js_1 = require("../../../button-dropdown/styles.selectors.js");
var styles_selectors_js_2 = require("../../../internal/components/dropdown/styles.selectors.js");
var styles_selectors_js_3 = require("../../../button-dropdown/item-element/styles.selectors.js");
var styles_selectors_js_4 = require("../../../button-dropdown/category-elements/styles.selectors.js");
var styles_selectors_js_5 = require("../../../button/styles.selectors.js");
var ButtonDropdownWrapper = /** @class */ (function (_super) {
    __extends(ButtonDropdownWrapper, _super);
    function ButtonDropdownWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonDropdownWrapper.prototype.findNativeButton = function () {
        // ButtonDropdown always has a button
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.find("button.".concat(styles_selectors_js_5.default.button));
    };
    ButtonDropdownWrapper.prototype.findOpenDropdown = function () {
        return (0, dom_1.createWrapper)().find(".".concat(styles_selectors_js_2.default.dropdown, "[data-open=true]"));
    };
    /**
     * Finds an item in the open dropdown by item id. Returns null if there is no open dropdown.
     *
     * This utility does not open the dropdown. To find dropdown items, call `openDropdown()` first.
     */
    ButtonDropdownWrapper.prototype.findItemById = function (id) {
        var _a;
        var itemSelector = ".".concat(styles_selectors_js_3.default['item-element'], "[data-testid=\"").concat(id, "\"]");
        return ((_a = this.findOpenDropdown()) === null || _a === void 0 ? void 0 : _a.find(itemSelector)) || this.find(itemSelector);
    };
    /**
     * Finds an expandable category in the open dropdown by category id. Returns null if there is no open dropdown.
     *
     * This utility does not open the dropdown. To find dropdown items, call `openDropdown()` first.
     */
    ButtonDropdownWrapper.prototype.findExpandableCategoryById = function (id) {
        var _a;
        var expandableCategorySelector = ".".concat(styles_selectors_js_4.default.expandable, "[data-testid=\"").concat(id, "\"]");
        return ((_a = this.findOpenDropdown()) === null || _a === void 0 ? void 0 : _a.find(expandableCategorySelector)) || this.find(expandableCategorySelector);
    };
    /**
     * Finds the highlighted item in the open dropdown. Returns null if there is no open dropdown.
     *
     * This utility does not open the dropdown. To find dropdown items, call `openDropdown()` first.
     */
    ButtonDropdownWrapper.prototype.findHighlightedItem = function () {
        var _a;
        var highlightedItemSelector = ".".concat(styles_selectors_js_3.default['item-element'], ".").concat(styles_selectors_js_3.default.highlighted);
        return ((_a = this.findOpenDropdown()) === null || _a === void 0 ? void 0 : _a.find(highlightedItemSelector)) || this.find(highlightedItemSelector);
    };
    /**
     * Finds all the items in the open dropdown. Returns empty array if there is no open dropdown.
     *
     * This utility does not open the dropdown. To find dropdown items, call `openDropdown()` first.
     */
    ButtonDropdownWrapper.prototype.findItems = function () {
        var _a;
        return ((_a = this.findOpenDropdown()) === null || _a === void 0 ? void 0 : _a.findAll(".".concat(styles_selectors_js_3.default['item-element']))) || [];
    };
    /**
     * Finds the disabled reason tooltip. Returns null if no disabled item with `disabledReason` is highlighted.
     */
    ButtonDropdownWrapper.prototype.findDisabledReason = function () {
        return (0, dom_1.createWrapper)().find("[data-testid=\"button-dropdown-disabled-reason\"]");
    };
    ButtonDropdownWrapper.prototype.openDropdown = function () {
        var _this = this;
        (0, test_utils_1.act)(function () {
            _this.findNativeButton().click();
        });
    };
    ButtonDropdownWrapper.rootSelector = styles_selectors_js_1.default['button-dropdown'];
    __decorate([
        dom_1.usesDom
    ], ButtonDropdownWrapper.prototype, "openDropdown", null);
    return ButtonDropdownWrapper;
}(dom_1.ComponentWrapper));
exports.default = ButtonDropdownWrapper;
//# sourceMappingURL=index.js.map