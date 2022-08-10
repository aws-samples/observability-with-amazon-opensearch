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
exports.PortalAutosuggestDropdownWrapper = exports.AutosuggestDropdownWrapper = void 0;
var selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
var input_1 = require("../input");
var utils_1 = require("@cloudscape-design/test-utils-core/utils");
var option_1 = require("../internal/option");
var options_list_1 = require("../internal/options-list");
var dropdown_1 = require("../internal/dropdown");
var styles_selectors_js_1 = require("../../../autosuggest/styles.selectors.js");
var styles_selectors_js_2 = require("../../../internal/components/dropdown-status/styles.selectors.js");
var styles_selectors_js_3 = require("../../../internal/components/selectable-item/styles.selectors.js");
var styles_selectors_js_4 = require("../../../internal/components/dropdown-status/styles.selectors.js");
var styles_selectors_js_5 = require("../../../internal/components/option/styles.selectors.js");
var styles_selectors_js_6 = require("../../../internal/components/dropdown/styles.selectors.js");
var AutosuggestDropdownWrapper = /** @class */ (function (_super) {
    __extends(AutosuggestDropdownWrapper, _super);
    function AutosuggestDropdownWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutosuggestDropdownWrapper.prototype.findOptions = function () {
        return this.findAll(".".concat(styles_selectors_js_3.default['selectable-item'], "[data-test-index]")).map(function (elementWrapper) { return new option_1.default(elementWrapper.getElement()); });
    };
    /**
     * Returns an option from the dropdown.
     *
     * @param optionIndex 1-based index of the option to select.
     */
    AutosuggestDropdownWrapper.prototype.findOption = function (optionIndex) {
        return this.findComponent(".".concat(styles_selectors_js_3.default['selectable-item'], "[data-test-index=\"").concat(optionIndex, "\"]"), option_1.default);
    };
    /**
     * Returns an option from the autosuggest by it's value
     *
     * @param value The 'value' of the option.
     */
    AutosuggestDropdownWrapper.prototype.findOptionByValue = function (value) {
        var toReplace = (0, utils_1.escapeSelector)(value);
        return this.findComponent(".".concat(option_1.default.rootSelector, "[data-value=\"").concat(toReplace, "\"]"), option_1.default);
    };
    /**
     * Returns an option from the dropdown.
     *
     * @param groupIndex 1-based index of the group to select an option in.
     * @param optionIndex 1-based index of the option to select.
     */
    AutosuggestDropdownWrapper.prototype.findOptionInGroup = function (groupIndex, optionIndex) {
        return this.findComponent(".".concat(styles_selectors_js_3.default['selectable-item'], "[data-group-index=\"").concat(groupIndex, "\"][data-in-group-index=\"").concat(optionIndex, "\"]"), option_1.default);
    };
    /**
     * Use this element to scroll through the list of options
     */
    AutosuggestDropdownWrapper.prototype.findOptionsContainer = function () {
        return this.findByClassName(options_list_1.default.rootSelector);
    };
    AutosuggestDropdownWrapper.prototype.findFooterRegion = function () {
        return this.findByClassName(styles_selectors_js_4.default.root);
    };
    AutosuggestDropdownWrapper.prototype.findOpenDropdown = function () {
        // Autosuggest always has a dropdown
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        var dropdown = new dropdown_1.default(this.getElement());
        return dropdown.findOpenDropdown();
    };
    AutosuggestDropdownWrapper.prototype.findHighlightedOption = function () {
        return this.findComponent(".".concat(styles_selectors_js_3.default.highlighted), option_1.default);
    };
    /**
     * Returns all the selected options.
     */
    AutosuggestDropdownWrapper.prototype.findDisabledOptions = function () {
        return this.findAllByClassName(styles_selectors_js_3.default.disabled).map(function (elementWrapper) { return new option_1.default(elementWrapper.getElement()); });
    };
    /**
     * Returns highlighted text fragments from all of the options.
     * Options get highlighted when they match the value of the input field.
     */
    AutosuggestDropdownWrapper.prototype.findHighlightedMatches = function () {
        return this.findAllByClassName(styles_selectors_js_5.default['filtering-match-highlight']);
    };
    AutosuggestDropdownWrapper.prototype.findHighlightedAriaLiveRegion = function () {
        return this.find('[aria-live]');
    };
    return AutosuggestDropdownWrapper;
}(selectors_1.ComponentWrapper));
exports.AutosuggestDropdownWrapper = AutosuggestDropdownWrapper;
var PortalAutosuggestDropdownWrapper = /** @class */ (function (_super) {
    __extends(PortalAutosuggestDropdownWrapper, _super);
    function PortalAutosuggestDropdownWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PortalAutosuggestDropdownWrapper.prototype.findOpenDropdown = function () {
        return (0, selectors_1.createWrapper)().find(".".concat(styles_selectors_js_6.default.dropdown, "[data-open=true]"));
    };
    return PortalAutosuggestDropdownWrapper;
}(AutosuggestDropdownWrapper));
exports.PortalAutosuggestDropdownWrapper = PortalAutosuggestDropdownWrapper;
var AutosuggestWrapper = /** @class */ (function (_super) {
    __extends(AutosuggestWrapper, _super);
    function AutosuggestWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    AutosuggestWrapper.prototype.findDropdown = function (options) {
        if (options === void 0) { options = {
            expandToViewport: false
        }; }
        return options.expandToViewport ? (0, selectors_1.createWrapper)().findComponent(".".concat(styles_selectors_js_6.default.dropdown, "[data-open=true]"), PortalAutosuggestDropdownWrapper) : new AutosuggestDropdownWrapper(this.getElement());
    };
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    AutosuggestWrapper.prototype.findStatusIndicator = function (options) {
        if (options === void 0) { options = {
            expandToViewport: false
        }; }
        return this.findDropdown(options).findByClassName(styles_selectors_js_2.default.root);
    };
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    AutosuggestWrapper.prototype.findErrorRecoveryButton = function (options) {
        if (options === void 0) { options = {
            expandToViewport: false
        }; }
        return this.findDropdown(options).findByClassName(styles_selectors_js_4.default.recovery);
    };
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    AutosuggestWrapper.prototype.findEnteredTextOption = function (options) {
        if (options === void 0) { options = {
            expandToViewport: false
        }; }
        return this.findDropdown(options).findByClassName(styles_selectors_js_3.default['has-background']);
    };
    AutosuggestWrapper.rootSelector = styles_selectors_js_1.default.root;
    return AutosuggestWrapper;
}(input_1.default));
exports.default = AutosuggestWrapper;
//# sourceMappingURL=index.js.map