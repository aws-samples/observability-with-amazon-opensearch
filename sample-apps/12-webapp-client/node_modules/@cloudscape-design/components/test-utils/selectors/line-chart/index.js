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
var mixed_line_bar_chart_1 = require("../mixed-line-bar-chart");
var styles_selectors_js_1 = require("../../../line-chart/styles.selectors.js");
var LineChartWrapper = /** @class */ (function (_super) {
    __extends(LineChartWrapper, _super);
    function LineChartWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineChartWrapper.rootSelector = styles_selectors_js_1.default.root;
    return LineChartWrapper;
}(mixed_line_bar_chart_1.BaseCartesianChartWrapper));
exports.default = LineChartWrapper;
//# sourceMappingURL=index.js.map