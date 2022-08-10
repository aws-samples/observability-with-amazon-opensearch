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
var styles_selectors_js_1 = require("../../../internal/components/chart-legend/styles.selectors.js");
var ChartLegendWrapper = /** @class */ (function (_super) {
    __extends(ChartLegendWrapper, _super);
    function ChartLegendWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartLegendWrapper.prototype.findTitle = function () {
        return this.findByClassName(styles_selectors_js_1.default.title);
    };
    ChartLegendWrapper.prototype.findHighlightedItem = function () {
        return this.findByClassName(styles_selectors_js_1.default['marker--highlighted']);
    };
    ChartLegendWrapper.prototype.findItems = function () {
        return this.findAllByClassName(styles_selectors_js_1.default.marker);
    };
    ChartLegendWrapper.prototype.findNativeList = function () {
        return this.findByClassName(styles_selectors_js_1.default.list);
    };
    ChartLegendWrapper.rootSelector = styles_selectors_js_1.default.root;
    return ChartLegendWrapper;
}(selectors_1.ComponentWrapper));
exports.default = ChartLegendWrapper;
//# sourceMappingURL=chart-legend.js.map