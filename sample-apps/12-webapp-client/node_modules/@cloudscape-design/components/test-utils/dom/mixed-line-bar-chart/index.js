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
exports.BaseCartesianChartWrapper = void 0;
var charts_1 = require("../internal/charts");
var styles_selectors_js_1 = require("../../../mixed-line-bar-chart/styles.selectors.js");
var styles_selectors_js_2 = require("../../../internal/components/chart-plot/styles.selectors.js");
var styles_selectors_js_3 = require("../../../internal/components/cartesian-chart/styles.selectors.js");
var BaseCartesianChartWrapper = /** @class */ (function (_super) {
    __extends(BaseCartesianChartWrapper, _super);
    function BaseCartesianChartWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseCartesianChartWrapper.prototype.findFilterContainer = function () {
        return this.findByClassName(styles_selectors_js_3.default['filter-container']);
    };
    BaseCartesianChartWrapper.prototype.findChart = function () {
        return this.findByClassName(styles_selectors_js_2.default.root);
    };
    /**
     * Returns a focusable element that controls keyboard interactions.
     */
    BaseCartesianChartWrapper.prototype.findApplication = function () {
        return this.findByClassName(styles_selectors_js_2.default.application);
    };
    /**
     * Returns an array of chart series. Note that thresholds count as series as well.
     */
    BaseCartesianChartWrapper.prototype.findSeries = function () {
        return this.findAllByClassName(styles_selectors_js_1.default.series);
    };
    BaseCartesianChartWrapper.prototype.findHighlightedSeries = function () {
        return this.findByClassName(styles_selectors_js_1.default['series--highlighted']);
    };
    BaseCartesianChartWrapper.prototype.findXAxisTitle = function () {
        return this.findByClassName(styles_selectors_js_3.default['axis-label--x']);
    };
    BaseCartesianChartWrapper.prototype.findYAxisTitle = function () {
        return this.findByClassName(styles_selectors_js_3.default['axis-label--y']);
    };
    BaseCartesianChartWrapper.prototype.findXTicks = function () {
        return this.findAllByClassName(styles_selectors_js_3.default['ticks--x']);
    };
    BaseCartesianChartWrapper.prototype.findYTicks = function () {
        return this.findAllByClassName(styles_selectors_js_3.default['ticks--y']);
    };
    return BaseCartesianChartWrapper;
}(charts_1.default));
exports.BaseCartesianChartWrapper = BaseCartesianChartWrapper;
var MixedLineBarChartWrapper = /** @class */ (function (_super) {
    __extends(MixedLineBarChartWrapper, _super);
    function MixedLineBarChartWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an array of bar groups, which are used for mouse navigation if a chart contains bar series.
     */
    MixedLineBarChartWrapper.prototype.findBarGroups = function () {
        return this.findAllByClassName(styles_selectors_js_1.default['bar-group']);
    };
    MixedLineBarChartWrapper.rootSelector = styles_selectors_js_1.default.root;
    return MixedLineBarChartWrapper;
}(BaseCartesianChartWrapper));
exports.default = MixedLineBarChartWrapper;
//# sourceMappingURL=index.js.map