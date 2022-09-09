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
var styles_selectors_js_1 = require("../../../property-filter/styles.selectors.js");
var autosuggest_1 = require("../autosuggest");
var filtering_token_1 = require("../internal/filtering-token");
var PropertyFilterWrapper = /** @class */ (function (_super) {
    __extends(PropertyFilterWrapper, _super);
    function PropertyFilterWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropertyFilterWrapper.prototype.findResultsCount = function () {
        return this.findByClassName(styles_selectors_js_1.default.results);
    };
    PropertyFilterWrapper.prototype.findTokens = function () {
        return this.findAllByClassName(filtering_token_1.default.rootSelector).map(function (elementWrapper) { return new filtering_token_1.default(elementWrapper.getElement()); });
    };
    /**
     * Returns the button that toggles if the tokens above `tokenLimit` are visible.
     */
    PropertyFilterWrapper.prototype.findTokenToggle = function () {
        return this.findByClassName(styles_selectors_js_1.default['toggle-collapsed']);
    };
    /**
     * Returns the button that removes all current tokens.
     */
    PropertyFilterWrapper.prototype.findRemoveAllButton = function () {
        return this.findByClassName(styles_selectors_js_1.default['remove-all']);
    };
    PropertyFilterWrapper.rootSelector = styles_selectors_js_1.default.root;
    return PropertyFilterWrapper;
}(autosuggest_1.default));
exports.default = PropertyFilterWrapper;
//# sourceMappingURL=index.js.map