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
var split_panel_1 = require("../split-panel");
var styles_selectors_js_1 = require("../../../app-layout/test-classes/styles.selectors.js");
var AppLayoutWrapper = /** @class */ (function (_super) {
    __extends(AppLayoutWrapper, _super);
    function AppLayoutWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppLayoutWrapper.prototype.findNavigation = function () {
        return this.findByClassName(styles_selectors_js_1.default.navigation);
    };
    AppLayoutWrapper.prototype.findNavigationToggle = function () {
        return this.findByClassName(styles_selectors_js_1.default['navigation-toggle']);
    };
    AppLayoutWrapper.prototype.findNavigationClose = function () {
        return this.findByClassName(styles_selectors_js_1.default['navigation-close']);
    };
    AppLayoutWrapper.prototype.findContentRegion = function () {
        return this.findByClassName(styles_selectors_js_1.default.content);
    };
    AppLayoutWrapper.prototype.findNotifications = function () {
        return this.findByClassName(styles_selectors_js_1.default.notifications);
    };
    AppLayoutWrapper.prototype.findBreadcrumbs = function () {
        return this.findByClassName(styles_selectors_js_1.default.breadcrumbs);
    };
    AppLayoutWrapper.prototype.findTools = function () {
        return this.findByClassName(styles_selectors_js_1.default.tools);
    };
    AppLayoutWrapper.prototype.findToolsClose = function () {
        return this.findByClassName(styles_selectors_js_1.default['tools-close']);
    };
    AppLayoutWrapper.prototype.findToolsToggle = function () {
        return this.findByClassName(styles_selectors_js_1.default['tools-toggle']);
    };
    AppLayoutWrapper.prototype.findSplitPanel = function () {
        return this.findComponent(".".concat(split_panel_1.default.rootSelector), split_panel_1.default);
    };
    AppLayoutWrapper.rootSelector = styles_selectors_js_1.default.root;
    return AppLayoutWrapper;
}(dom_1.ComponentWrapper));
exports.default = AppLayoutWrapper;
//# sourceMappingURL=index.js.map