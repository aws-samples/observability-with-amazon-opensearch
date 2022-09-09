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
var styles_selectors_js_1 = require("../../../tabs/styles.selectors.js");
var TabsWrapper = /** @class */ (function (_super) {
    __extends(TabsWrapper, _super);
    function TabsWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Finds all tab headers and returns the clickable elements from their labels.
     */
    TabsWrapper.prototype.findTabLinks = function () {
        return this.findAllByClassName(styles_selectors_js_1.default['tabs-tab-link']);
    };
    /**
     * Finds the tab at the given position (1-based) and returns the clickable element from its tab label.
     *
     * @param index 1-based index of the clickable element to return
     */
    TabsWrapper.prototype.findTabLinkByIndex = function (index) {
        return this.find(".".concat(styles_selectors_js_1.default['tabs-tab'], ":nth-child(").concat(index, ") .").concat(styles_selectors_js_1.default['tabs-tab-link']));
    };
    /**
     * Finds the tab with the given ID and returns the clickable element from its tab label.
     *
     * @param index ID of the clickable element to return
     */
    TabsWrapper.prototype.findTabLinkById = function (id) {
        return this.find(".".concat(styles_selectors_js_1.default['tabs-tab-link'], "[data-testid=\"").concat(id, "\"]"));
    };
    /**
     * Finds the currently active tab and returns the clickable element from its tab label.
     */
    TabsWrapper.prototype.findActiveTab = function () {
        return this.find(".".concat(styles_selectors_js_1.default['tabs-tab-active']));
    };
    /**
     * Finds the currently displayed tab content and returns it.
     */
    TabsWrapper.prototype.findTabContent = function () {
        return this.find(".".concat(styles_selectors_js_1.default['tabs-content-active']));
    };
    TabsWrapper.rootSelector = styles_selectors_js_1.default.root;
    return TabsWrapper;
}(selectors_1.ComponentWrapper));
exports.default = TabsWrapper;
//# sourceMappingURL=index.js.map