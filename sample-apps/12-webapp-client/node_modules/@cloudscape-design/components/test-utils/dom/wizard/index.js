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
var styles_selectors_js_1 = require("../../../form/styles.selectors.js");
var styles_selectors_js_2 = require("../../../wizard/styles.selectors.js");
var button_1 = require("../button");
var form_1 = require("../form");
var header_1 = require("../header");
var WizardWrapper = /** @class */ (function (_super) {
    __extends(WizardWrapper, _super);
    function WizardWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardWrapper.prototype.findHeader = function () {
        return this.findByClassName(styles_selectors_js_2.default['form-header-component']);
    };
    WizardWrapper.prototype.findInfo = function () {
        return this.findComponent(".".concat(styles_selectors_js_2.default['form-header']), header_1.default).findInfo();
    };
    WizardWrapper.prototype.findCancelButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_2.default['cancel-button']), button_1.default);
    };
    WizardWrapper.prototype.findSkipToButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_2.default['skip-to-button']), button_1.default);
    };
    WizardWrapper.prototype.findPreviousButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_2.default['previous-button']), button_1.default);
    };
    WizardWrapper.prototype.findPrimaryButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_2.default['primary-button']), button_1.default);
    };
    WizardWrapper.prototype.findMenuNavigationLinks = function () {
        return this.findAllByClassName(styles_selectors_js_2.default['navigation-link']);
    };
    /**
     * Returns a link for a given step number.
     *
     * @param stepNumber 1-based step index
     * @param state
     *
     * [optional] State of the link. The method returns null if the specified step does not match the state. It can be
     *  - "disabled": for disabled menu entries
     *  - "active": for the active menu entry
     *  - undefined: for any entry
     */
    WizardWrapper.prototype.findMenuNavigationLink = function (stepNumber, state) {
        var additionalClassName = state ? ".".concat(styles_selectors_js_2.default["navigation-link-".concat(state)]) : '';
        return this.find(".".concat(styles_selectors_js_2.default['navigation-link-item'], ":nth-child(").concat(stepNumber, ") .").concat(styles_selectors_js_2.default['navigation-link']).concat(additionalClassName));
    };
    WizardWrapper.prototype.findSecondaryActions = function () {
        return this.findByClassName(styles_selectors_js_1.default['secondary-actions']);
    };
    WizardWrapper.rootSelector = styles_selectors_js_2.default.root;
    return WizardWrapper;
}(form_1.default));
exports.default = WizardWrapper;
//# sourceMappingURL=index.js.map