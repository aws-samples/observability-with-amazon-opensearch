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
var styles_selectors_js_1 = require("../../../multiselect/styles.selectors.js");
var styles_selectors_js_2 = require("../../../token-group/styles.selectors.js");
var styles_selectors_js_3 = require("../../../input/styles.selectors.js");
var styles_selectors_js_4 = require("../../../internal/components/button-trigger/styles.selectors.js");
var styles_selectors_js_5 = require("../../../internal/components/dropdown-status/styles.selectors.js");
var styles_selectors_js_6 = require("../../../internal/components/dropdown-status/styles.selectors.js");
var input_1 = require("../input");
var token_group_1 = require("../token-group");
var dropdown_host_1 = require("../internal/dropdown-host");
var MultiselectWrapper = /** @class */ (function (_super) {
    __extends(MultiselectWrapper, _super);
    function MultiselectWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    MultiselectWrapper.prototype.findErrorRecoveryButton = function (options) {
        if (options === void 0) { options = {
            expandToViewport: false
        }; }
        return this.findDropdown(options).findByClassName(styles_selectors_js_6.default.recovery);
    };
    /**
     * Returns the input that is used for filtering. Returns `null` if `enableFiltering` is not set to `true`.
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    MultiselectWrapper.prototype.findFilteringInput = function (options) {
        if (options === void 0) { options = {
            expandToViewport: false
        }; }
        return this.findDropdown(options).findComponent(".".concat(styles_selectors_js_3.default['input-container']), input_1.default);
    };
    MultiselectWrapper.prototype.findPlaceholder = function () {
        return this.findByClassName(styles_selectors_js_4.default.placeholder);
    };
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    MultiselectWrapper.prototype.findStatusIndicator = function (options) {
        if (options === void 0) { options = {
            expandToViewport: false
        }; }
        return this.findDropdown(options).findByClassName(styles_selectors_js_5.default.root);
    };
    /**
     * Returns a token.
     *
     * @param tokenIndex 1-based index of the token to return
     */
    MultiselectWrapper.prototype.findToken = function (tokenIndex) {
        var tokenGroup = this.findComponent(".".concat(styles_selectors_js_2.default.root), token_group_1.default);
        return tokenGroup.findToken(tokenIndex);
    };
    /**
     * Returns a token toggle button.
     */
    MultiselectWrapper.prototype.findTokenToggle = function () {
        var tokenGroup = this.findComponent(".".concat(styles_selectors_js_2.default.root), token_group_1.default);
        return tokenGroup.findTokenToggle();
    };
    MultiselectWrapper.prototype.findTokens = function () {
        var tokenGroup = this.findComponent(".".concat(styles_selectors_js_2.default.root), token_group_1.default);
        return (tokenGroup === null || tokenGroup === void 0 ? void 0 : tokenGroup.findTokens()) || [];
    };
    MultiselectWrapper.prototype.findTrigger = function () {
        return this.findByClassName(styles_selectors_js_4.default['button-trigger']);
    };
    MultiselectWrapper.rootSelector = styles_selectors_js_1.default.root;
    return MultiselectWrapper;
}(dropdown_host_1.default));
exports.default = MultiselectWrapper;
//# sourceMappingURL=index.js.map