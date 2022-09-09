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
var styles_selectors_js_1 = require("../../../popover/styles.selectors.js");
var index_js_1 = require("../index.js");
var PopoverWrapper = /** @class */ (function (_super) {
    __extends(PopoverWrapper, _super);
    function PopoverWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopoverWrapper.prototype.findTrigger = function () {
        return this.findByClassName(styles_selectors_js_1.default.trigger);
    };
    /**
     * @param options
     * * renderWithPortal (boolean) - Flag to find the header when the popover is rendered with a portal
     */
    PopoverWrapper.prototype.findHeader = function (options) {
        if (options === void 0) { options = { renderWithPortal: false }; }
        if (options.renderWithPortal) {
            return (0, index_js_1.default)().findByClassName(styles_selectors_js_1.default.header);
        }
        return this.findByClassName(styles_selectors_js_1.default.header);
    };
    /**
     * @param options
     * * renderWithPortal (boolean) - Flag to find the content when the popover is rendered with a portal
     */
    PopoverWrapper.prototype.findContent = function (options) {
        if (options === void 0) { options = { renderWithPortal: false }; }
        if (options.renderWithPortal) {
            return (0, index_js_1.default)().findByClassName(styles_selectors_js_1.default.content);
        }
        return this.findByClassName(styles_selectors_js_1.default.content);
    };
    /**
     * @param options
     * * renderWithPortal (boolean) - Flag to find the dismiss button when the popover is rendered with a portal
     */
    PopoverWrapper.prototype.findDismissButton = function (options) {
        if (options === void 0) { options = { renderWithPortal: false }; }
        if (options.renderWithPortal) {
            return (0, index_js_1.default)().findComponent(".".concat(styles_selectors_js_1.default['dismiss-control']), index_js_1.ButtonWrapper);
        }
        return this.findComponent(".".concat(styles_selectors_js_1.default['dismiss-control']), index_js_1.ButtonWrapper);
    };
    PopoverWrapper.rootSelector = styles_selectors_js_1.default.root;
    return PopoverWrapper;
}(dom_1.ComponentWrapper));
exports.default = PopoverWrapper;
//# sourceMappingURL=index.js.map