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
var button_1 = require("../button");
var styles_selectors_js_1 = require("../../../internal/components/chart-popover/styles.selectors.js");
var styles_selectors_js_2 = require("../../../popover/styles.selectors.js");
var ChartPopoverWrapper = /** @class */ (function (_super) {
    __extends(ChartPopoverWrapper, _super);
    function ChartPopoverWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartPopoverWrapper.prototype.findHeader = function () {
        return this.findByClassName(styles_selectors_js_2.default.header);
    };
    ChartPopoverWrapper.prototype.findContent = function () {
        return this.findByClassName(styles_selectors_js_2.default.content);
    };
    ChartPopoverWrapper.prototype.findDismissButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_2.default['dismiss-control']), button_1.default);
    };
    ChartPopoverWrapper.rootSelector = styles_selectors_js_1.default.root;
    return ChartPopoverWrapper;
}(dom_1.ComponentWrapper));
exports.default = ChartPopoverWrapper;
//# sourceMappingURL=chart-popover.js.map