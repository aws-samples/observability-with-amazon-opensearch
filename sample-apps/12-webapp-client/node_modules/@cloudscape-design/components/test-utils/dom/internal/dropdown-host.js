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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalDropdownContentWrapper = exports.DropdownContentWrapper = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var test_utils_1 = require("react-dom/test-utils");
var dom_1 = require("@cloudscape-design/test-utils-core/dom");
var utils_1 = require("@cloudscape-design/test-utils-core/utils");
var dropdown_1 = require("./dropdown");
var options_list_1 = require("./options-list");
var option_1 = require("./option");
var styles_selectors_js_1 = require("../../../internal/components/selectable-item/styles.selectors.js");
var styles_selectors_js_2 = require("../../../internal/components/dropdown/styles.selectors.js");
var styles_selectors_js_3 = require("../../../internal/components/dropdown-status/styles.selectors.js");
var styles_selectors_js_4 = require("../../../internal/components/option/styles.selectors.js");
var DropdownHostComponentWrapper = /** @class */ (function (_super) {
    __extends(DropdownHostComponentWrapper, _super);
    function DropdownHostComponentWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    DropdownHostComponentWrapper.prototype.assertOpenDropdown = function (options) {
        var _a;
        if (options === void 0) { options = { expandToViewport: false }; }
        var isOpen = !!((_a = this.findDropdown(options)) === null || _a === void 0 ? void 0 : _a.findOpenDropdown());
        if (!isOpen) {
            throw new Error('Unable to select an option when dropdown is closed');
        }
    };
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    DropdownHostComponentWrapper.prototype.findDropdown = function (options) {
        if (options === void 0) { options = { expandToViewport: false }; }
        return options.expandToViewport
            ? (0, dom_1.createWrapper)().findComponent(".".concat(styles_selectors_js_2.default.dropdown, "[data-open=true]"), PortalDropdownContentWrapper)
            : new DropdownContentWrapper(this.getElement());
    };
    DropdownHostComponentWrapper.prototype.openDropdown = function () {
        var _this = this;
        (0, test_utils_1.act)(function () {
            _this.findTrigger().fireEvent(new MouseEvent('mousedown', { bubbles: true }));
        });
    };
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    DropdownHostComponentWrapper.prototype.closeDropdown = function (options) {
        if (options === void 0) { options = { expandToViewport: false }; }
        if (document.activeElement &&
            (this.element.contains(document.activeElement) ||
                this.findDropdown(options).getElement().contains(document.activeElement)) &&
            document.activeElement instanceof HTMLElement) {
            var element_1 = document.activeElement;
            (0, test_utils_1.act)(function () {
                element_1.blur();
            });
        }
    };
    /**
     * Selects an option for the given index by triggering corresponding events.
     *
     * This utility does not open the dropdown of the given select and it will need to be called explicitly in your test.
     * On selection the dropdown will close automatically.
     *
     * Example:
     * ```
     * wrapper.openDropdown();
     * wrapper.selectOption(1);
     * ```
     *
     * @param index 1-based index of the option to select
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    DropdownHostComponentWrapper.prototype.selectOption = function (index, options) {
        if (options === void 0) { options = { expandToViewport: false }; }
        if (index < 1) {
            throw new Error('Option index should be a 1-based integer number');
        }
        this.assertOpenDropdown(options);
        var option = this.findDropdown(options).findOption(index);
        if (!option) {
            throw new Error("Can't select the option, because there is no option with the index ".concat(index, "."));
        }
        (0, test_utils_1.act)(function () {
            option.fireEvent(new MouseEvent('mouseup', { bubbles: true }));
        });
    };
    /**
     * Selects an option for the given value by triggering corresponding events.
     *
     * This utility does not open the dropdown of the given select and it will need to be called explicitly in your test.
     * On selection the dropdown will close automatically.
     *
     * Example:
     * ```
     * wrapper.openDropdown();
     * wrapper.selectOptionByValue('option_1');
     * ```
     *
     * @param value value of the option
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    DropdownHostComponentWrapper.prototype.selectOptionByValue = function (value, options) {
        if (options === void 0) { options = { expandToViewport: false }; }
        this.assertOpenDropdown(options);
        var option = this.findDropdown(options).findOptionByValue(value);
        if (!option) {
            throw new Error("Can't select the option, because there is no option with the value ".concat(JSON.stringify(value), "."));
        }
        (0, test_utils_1.act)(function () {
            option.fireEvent(new MouseEvent('mouseup', { bubbles: true }));
        });
    };
    __decorate([
        dom_1.usesDom
    ], DropdownHostComponentWrapper.prototype, "openDropdown", null);
    __decorate([
        dom_1.usesDom
    ], DropdownHostComponentWrapper.prototype, "closeDropdown", null);
    __decorate([
        dom_1.usesDom
    ], DropdownHostComponentWrapper.prototype, "selectOption", null);
    __decorate([
        dom_1.usesDom
    ], DropdownHostComponentWrapper.prototype, "selectOptionByValue", null);
    return DropdownHostComponentWrapper;
}(dom_1.ComponentWrapper));
exports.default = DropdownHostComponentWrapper;
var DropdownContentWrapper = /** @class */ (function (_super) {
    __extends(DropdownContentWrapper, _super);
    function DropdownContentWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownContentWrapper.prototype.findDisabledOptions = function () {
        return this.findAllByClassName(styles_selectors_js_1.default.disabled).map(function (elementWrapper) { return new option_1.default(elementWrapper.getElement()); });
    };
    DropdownContentWrapper.prototype.findFooterRegion = function () {
        return this.findByClassName(styles_selectors_js_3.default.root);
    };
    DropdownContentWrapper.prototype.findHighlightedAriaLiveRegion = function () {
        return this.find('[aria-live]');
    };
    /**
     * Returns highlighted text fragments from all of the options.
     * Options get highlighted when they match the value of the input field.
     */
    DropdownContentWrapper.prototype.findHighlightedMatches = function () {
        return this.findAllByClassName(styles_selectors_js_4.default['filtering-match-highlight']);
    };
    DropdownContentWrapper.prototype.findHighlightedOption = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default.highlighted), option_1.default);
    };
    DropdownContentWrapper.prototype.findOpenDropdown = function () {
        var dropdown = new dropdown_1.default(this.getElement());
        return dropdown.findOpenDropdown();
    };
    /**
     * Returns an option from the dropdown.
     *
     * @param optionIndex 1-based index of the option to select.
     */
    DropdownContentWrapper.prototype.findOption = function (optionIndex) {
        return this.findComponent(".".concat(styles_selectors_js_1.default['selectable-item'], "[data-test-index=\"").concat(optionIndex, "\"] .").concat(option_1.default.rootSelector), option_1.default);
    };
    DropdownContentWrapper.prototype.findOptionByValue = function (value) {
        var toReplace = (0, utils_1.escapeSelector)(value);
        return this.findComponent(".".concat(option_1.default.rootSelector, "[data-value=\"").concat(toReplace, "\"]"), option_1.default);
    };
    /**
     * Returns an option from the dropdown.
     *
     * @param groupIndex 1-based index of the group to select an option in.
     * @param optionIndex 1-based index of the option to select.
     */
    DropdownContentWrapper.prototype.findOptionInGroup = function (groupIndex, optionIndex) {
        return this.findComponent(".".concat(styles_selectors_js_1.default['selectable-item'], "[data-group-index=\"").concat(groupIndex, "\"][data-child-index=\"").concat(optionIndex, "\"] .").concat(option_1.default.rootSelector), option_1.default);
    };
    DropdownContentWrapper.prototype.findOptions = function () {
        return this.findAll(".".concat(styles_selectors_js_1.default['selectable-item'], "[data-test-index] .").concat(option_1.default.rootSelector)).map(function (elementWrapper) { return new option_1.default(elementWrapper.getElement()); });
    };
    /**
     * Use this element to scroll through the list of options
     */
    DropdownContentWrapper.prototype.findOptionsContainer = function () {
        return this.findByClassName(options_list_1.default.rootSelector);
    };
    DropdownContentWrapper.prototype.findSelectedOptions = function () {
        return this.findAllByClassName(styles_selectors_js_1.default.selected).map(function (elementWrapper) { return new option_1.default(elementWrapper.getElement()); });
    };
    return DropdownContentWrapper;
}(dom_1.ComponentWrapper));
exports.DropdownContentWrapper = DropdownContentWrapper;
var PortalDropdownContentWrapper = /** @class */ (function (_super) {
    __extends(PortalDropdownContentWrapper, _super);
    function PortalDropdownContentWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PortalDropdownContentWrapper.prototype.findOpenDropdown = function () {
        return (0, dom_1.createWrapper)().findComponent(".".concat(styles_selectors_js_2.default.dropdown, "[data-open=true]"), dropdown_1.default);
    };
    return PortalDropdownContentWrapper;
}(DropdownContentWrapper));
exports.PortalDropdownContentWrapper = PortalDropdownContentWrapper;
//# sourceMappingURL=dropdown-host.js.map