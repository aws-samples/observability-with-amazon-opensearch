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
var styles_selectors_js_1 = require("../../../alert/styles.selectors.js");
var button_1 = require("../button");
var AlertWrapper = /** @class */ (function (_super) {
    __extends(AlertWrapper, _super);
    function AlertWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the container node of the component.
     */
    AlertWrapper.prototype.findRootElement = function () {
        return this.findByClassName(styles_selectors_js_1.default.alert);
    };
    /**
     * Returns the dismiss button.
     *
     * The dismiss button is only rendered when the `dismissible` property is set to `true`.
     */
    AlertWrapper.prototype.findDismissButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['dismiss-button']), button_1.default);
    };
    /**
     * Returns the action button.
     *
     * The action button is only rendered when the `buttonText` property is set.
     */
    AlertWrapper.prototype.findActionButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['action-button']), button_1.default);
    };
    AlertWrapper.prototype.findHeader = function () {
        return this.findByClassName(styles_selectors_js_1.default.header);
    };
    AlertWrapper.prototype.findContent = function () {
        return this.findByClassName(styles_selectors_js_1.default.content);
    };
    AlertWrapper.prototype.findActionSlot = function () {
        return this.findByClassName(styles_selectors_js_1.default.action);
    };
    AlertWrapper.rootSelector = styles_selectors_js_1.default.root;
    return AlertWrapper;
}(selectors_1.ComponentWrapper));
exports.default = AlertWrapper;
//# sourceMappingURL=index.js.map