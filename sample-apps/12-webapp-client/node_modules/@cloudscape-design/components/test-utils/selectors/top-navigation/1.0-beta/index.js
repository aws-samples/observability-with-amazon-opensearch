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
exports.TopNavigationMenuDropdownWrapper = exports.TopNavigationUtilityWrapper = exports.MenuDropdownWrapper = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
var link_1 = require("../../link");
var button_1 = require("../../button");
var button_dropdown_1 = require("../../button-dropdown");
var styles_selectors_js_1 = require("../../../../top-navigation/1.0-beta/styles.selectors.js");
var styles_selectors_js_2 = require("../../../../button-dropdown/styles.selectors.js");
var styles_selectors_js_3 = require("../../../../internal/components/menu-dropdown/styles.selectors.js");
var TopNavigationWrapper = /** @class */ (function (_super) {
    __extends(TopNavigationWrapper, _super);
    function TopNavigationWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopNavigationWrapper.prototype.findIdentityLink = function () {
        return this.find(".".concat(styles_selectors_js_1.default.identity, " a"));
    };
    TopNavigationWrapper.prototype.findLogo = function () {
        return this.find(".".concat(styles_selectors_js_1.default.logo));
    };
    TopNavigationWrapper.prototype.findTitle = function () {
        return this.find(".".concat(styles_selectors_js_1.default.title));
    };
    TopNavigationWrapper.prototype.findSearch = function () {
        return this.find(".".concat(styles_selectors_js_1.default.search));
    };
    TopNavigationWrapper.prototype.findUtilities = function () {
        return this.findAll(".".concat(styles_selectors_js_1.default['utility-wrapper'], "[data-utility-index]")).map(function (i) { return new TopNavigationUtilityWrapper(i.getElement()); });
    };
    TopNavigationWrapper.prototype.findUtility = function (index) {
        return this.findComponent(".".concat(styles_selectors_js_1.default['utility-wrapper'], "[data-utility-index=\"").concat(index - 1, "\"]"), TopNavigationUtilityWrapper);
    };
    TopNavigationWrapper.prototype.findSearchButton = function () {
        return this.find(".".concat(styles_selectors_js_1.default['utility-wrapper'], "[data-utility-special=\"search\"] a"));
    };
    TopNavigationWrapper.prototype.findOverflowMenuButtonDropdown = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default.trigger), MenuDropdownWrapper);
    };
    TopNavigationWrapper.rootSelector = "".concat(styles_selectors_js_1.default['top-navigation'], ":not(.").concat(styles_selectors_js_1.default.hidden, ")");
    return TopNavigationWrapper;
}(selectors_1.ComponentWrapper));
exports.default = TopNavigationWrapper;
var MenuDropdownWrapper = /** @class */ (function (_super) {
    __extends(MenuDropdownWrapper, _super);
    function MenuDropdownWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuDropdownWrapper.prototype.findNativeButton = function () {
        // ButtonDropdown always has a button
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.find("button.".concat(styles_selectors_js_3.default.button));
    };
    return MenuDropdownWrapper;
}(button_dropdown_1.default));
exports.MenuDropdownWrapper = MenuDropdownWrapper;
var TopNavigationUtilityWrapper = /** @class */ (function (_super) {
    __extends(TopNavigationUtilityWrapper, _super);
    function TopNavigationUtilityWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopNavigationUtilityWrapper.prototype.findButtonLinkType = function () {
        return this.findComponent(".".concat(link_1.default.rootSelector), link_1.default);
    };
    TopNavigationUtilityWrapper.prototype.findPrimaryButtonType = function () {
        return this.findComponent(".".concat(button_1.default.rootSelector), button_1.default);
    };
    TopNavigationUtilityWrapper.prototype.findMenuDropdownType = function () {
        return this.findComponent(".".concat(button_dropdown_1.default.rootSelector), TopNavigationMenuDropdownWrapper);
    };
    return TopNavigationUtilityWrapper;
}(selectors_1.ComponentWrapper));
exports.TopNavigationUtilityWrapper = TopNavigationUtilityWrapper;
var TopNavigationMenuDropdownWrapper = /** @class */ (function (_super) {
    __extends(TopNavigationMenuDropdownWrapper, _super);
    function TopNavigationMenuDropdownWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopNavigationMenuDropdownWrapper.prototype.findNativeButton = function () {
        return this.find(".".concat(styles_selectors_js_3.default.button));
    };
    TopNavigationMenuDropdownWrapper.prototype.findTitle = function () {
        return this.findByClassName(styles_selectors_js_2.default.title);
    };
    TopNavigationMenuDropdownWrapper.prototype.findDescription = function () {
        return this.findByClassName(styles_selectors_js_2.default.description);
    };
    return TopNavigationMenuDropdownWrapper;
}(button_dropdown_1.default));
exports.TopNavigationMenuDropdownWrapper = TopNavigationMenuDropdownWrapper;
//# sourceMappingURL=index.js.map