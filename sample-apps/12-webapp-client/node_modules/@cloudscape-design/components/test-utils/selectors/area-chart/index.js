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
var styles_selectors_js_1 = require("../../../area-chart/styles.selectors.js");
var styles_selectors_js_2 = require("../../../internal/components/chart-plot/styles.selectors.js");
var index_js_1 = require("../mixed-line-bar-chart/index.js");
var AreaChartWrapper = /** @class */ (function (_super) {
    __extends(AreaChartWrapper, _super);
    function AreaChartWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AreaChartWrapper.prototype.findChart = function () {
        return this.findByClassName(styles_selectors_js_2.default.root);
    };
    /**
     * Returns an array of chart series. Note that thresholds count as series as well.
     */
    AreaChartWrapper.prototype.findSeries = function () {
        return this.findAllByClassName(styles_selectors_js_1.default.series);
    };
    AreaChartWrapper.prototype.findHighlightedSeries = function () {
        return this.findByClassName(styles_selectors_js_1.default['series--highlighted']);
    };
    AreaChartWrapper.rootSelector = styles_selectors_js_1.default.root;
    return AreaChartWrapper;
}(index_js_1.BaseCartesianChartWrapper));
exports.default = AreaChartWrapper;
//# sourceMappingURL=index.js.map