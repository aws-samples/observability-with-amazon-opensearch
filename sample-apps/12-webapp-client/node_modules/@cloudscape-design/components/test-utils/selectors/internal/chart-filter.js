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
var dropdown_host_1 = require("../internal/dropdown-host");
var styles_selectors_js_1 = require("../../../internal/components/chart-filter/styles.selectors.js");
var styles_selectors_js_2 = require("../../../internal/components/button-trigger/styles.selectors.js");
var styles_selectors_js_3 = require("../../../select/parts/styles.selectors.js");
var ChartFilterWrapper = /** @class */ (function (_super) {
    __extends(ChartFilterWrapper, _super);
    function ChartFilterWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartFilterWrapper.prototype.findPlaceholder = function () {
        return this.findByClassName(styles_selectors_js_3.default.placeholder);
    };
    ChartFilterWrapper.prototype.findTrigger = function () {
        return this.findByClassName(styles_selectors_js_2.default['button-trigger']);
    };
    ChartFilterWrapper.rootSelector = styles_selectors_js_1.default['chart-filter'];
    return ChartFilterWrapper;
}(dropdown_host_1.default));
exports.default = ChartFilterWrapper;
//# sourceMappingURL=chart-filter.js.map