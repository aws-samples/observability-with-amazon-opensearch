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
var chart_legend_1 = require("./chart-legend");
var chart_filter_1 = require("./chart-filter");
var chart_popover_1 = require("./chart-popover");
var styles_selectors_js_1 = require("../../../internal/components/chart-legend/styles.selectors.js");
var styles_selectors_js_2 = require("../../../internal/components/chart-filter/styles.selectors.js");
var styles_selectors_js_3 = require("../../../internal/components/chart-popover/styles.selectors.js");
var styles_selectors_js_4 = require("../../../internal/components/chart-status-container/styles.selectors.js");
var CommonChartWrapper = /** @class */ (function (_super) {
    __extends(CommonChartWrapper, _super);
    function CommonChartWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommonChartWrapper.prototype.findDefaultFilter = function () {
        return this.findComponent(".".concat(styles_selectors_js_2.default['chart-filter']), chart_filter_1.default);
    };
    CommonChartWrapper.prototype.findStatusContainer = function () {
        return this.findByClassName(styles_selectors_js_4.default.root);
    };
    CommonChartWrapper.prototype.findLegend = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default.root), chart_legend_1.default);
    };
    CommonChartWrapper.prototype.findDetailPopover = function () {
        return this.findComponent(".".concat(styles_selectors_js_3.default.root), chart_popover_1.default);
    };
    return CommonChartWrapper;
}(selectors_1.ComponentWrapper));
exports.default = CommonChartWrapper;
//# sourceMappingURL=charts.js.map