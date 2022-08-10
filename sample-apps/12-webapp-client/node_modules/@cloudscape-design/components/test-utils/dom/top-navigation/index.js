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
exports.TopNavigationMenuDropdownWrapper = exports.TopNavigationUtilityWrapper = exports.OverflowMenu = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var dom_1 = require("@cloudscape-design/test-utils-core/dom");
var link_1 = require("../link");
var button_1 = require("../button");
var button_dropdown_1 = require("../button-dropdown");
var styles_selectors_js_1 = require("../../../top-navigation/styles.selectors.js");
var styles_selectors_js_2 = require("../../../button-dropdown/styles.selectors.js");
var styles_selectors_js_3 = require("../../../internal/components/menu-dropdown/styles.selectors.js");
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
    TopNavigationWrapper.prototype.findOverflowMenuButton = function () {
        return this.findComponent("[data-utility-special=\"menu-trigger\"] > button", button_1.default);
    };
    TopNavigationWrapper.prototype.findOverflowMenu = function () {
        return (0, dom_1.createWrapper)().findComponent(".".concat(styles_selectors_js_1.default['overflow-menu-drawer']), OverflowMenu);
    };
    TopNavigationWrapper.rootSelector = "".concat(styles_selectors_js_1.default['top-navigation'], ":not(.").concat(styles_selectors_js_1.default.hidden, ")");
    return TopNavigationWrapper;
}(dom_1.ComponentWrapper));
exports.default = TopNavigationWrapper;
var OverflowMenu = /** @class */ (function (_super) {
    __extends(OverflowMenu, _super);
    function OverflowMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OverflowMenu.prototype.findDismissButton = function () {
        return this.findByClassName(styles_selectors_js_1.default['overflow-menu-dismiss-button']);
    };
    OverflowMenu.prototype.findBackButton = function () {
        return this.findByClassName(styles_selectors_js_1.default['overflow-menu-back-button']);
    };
    OverflowMenu.prototype.findTitle = function () {
        return this.findByClassName(styles_selectors_js_1.default['overflow-menu-header-text--title']);
    };
    OverflowMenu.prototype.findDescription = function () {
        return this.findByClassName(styles_selectors_js_1.default['overflow-menu-header-text--secondary']);
    };
    OverflowMenu.prototype.findUtility = function (index) {
        return this.find("[data-testid=\"__".concat(index - 1, "\"]"));
    };
    OverflowMenu.prototype.findMenuDropdownItemById = function (id) {
        return this.find("[data-testid=\"".concat(id, "\"]"));
    };
    return OverflowMenu;
}(dom_1.ComponentWrapper));
exports.OverflowMenu = OverflowMenu;
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
}(dom_1.ComponentWrapper));
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