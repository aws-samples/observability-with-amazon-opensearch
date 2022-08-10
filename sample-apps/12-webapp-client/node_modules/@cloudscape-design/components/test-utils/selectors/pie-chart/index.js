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
var charts_1 = require("../internal/charts");
var styles_selectors_js_1 = require("../../../pie-chart/styles.selectors.js");
var styles_selectors_js_2 = require("../../../internal/components/chart-plot/styles.selectors.js");
var PieChartWrapper = /** @class */ (function (_super) {
    __extends(PieChartWrapper, _super);
    function PieChartWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PieChartWrapper.prototype.findFilterContainer = function () {
        return this.findByClassName(styles_selectors_js_1.default['filter-container']);
    };
    PieChartWrapper.prototype.findSegments = function () {
        return this.findAllByClassName(styles_selectors_js_1.default.segment);
    };
    PieChartWrapper.prototype.findHighlightedSegment = function () {
        return this.findByClassName(styles_selectors_js_1.default['segment--highlighted']);
    };
    PieChartWrapper.prototype.findChart = function () {
        return this.findByClassName(styles_selectors_js_2.default.root);
    };
    /**
     * Returns a focusable element that controls keyboard interactions.
     */
    PieChartWrapper.prototype.findApplication = function () {
        return this.findByClassName(styles_selectors_js_2.default.application);
    };
    PieChartWrapper.prototype.findInnerContent = function () {
        return this.findByClassName(styles_selectors_js_1.default['inner-content']);
    };
    PieChartWrapper.prototype.findSegmentLabels = function () {
        return this.findAllByClassName(styles_selectors_js_1.default.label);
    };
    PieChartWrapper.prototype.findHighlightedSegmentLabel = function () {
        return this.findByClassName(styles_selectors_js_1.default['label--highlighted']);
    };
    PieChartWrapper.rootSelector = styles_selectors_js_1.default.root;
    return PieChartWrapper;
}(charts_1.default));
exports.default = PieChartWrapper;
//# sourceMappingURL=index.js.map