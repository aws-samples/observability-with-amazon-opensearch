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
var dom_1 = require("@cloudscape-design/test-utils-core/dom");
var toggle_1 = require("../toggle");
var styles_selectors_js_1 = require("../../../collection-preferences/styles.selectors.js");
var getClassName = function (suffix) { return styles_selectors_js_1.default["visible-content-".concat(suffix)]; };
var VisibleContentPreferenceWrapper = /** @class */ (function (_super) {
    __extends(VisibleContentPreferenceWrapper, _super);
    function VisibleContentPreferenceWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisibleContentPreferenceWrapper.prototype.findTitle = function () {
        return this.findByClassName(getClassName('title'));
    };
    VisibleContentPreferenceWrapper.prototype.findOptionsGroups = function () {
        return this.findAllByClassName(getClassName('group'));
    };
    VisibleContentPreferenceWrapper.prototype.findOptions = function () {
        return this.findAllByClassName(getClassName('option'));
    };
    /**
     * Returns a content selector toggle.
     *
     * @param groupIndex 1-based index of the content group.
     * @param optionIndex 1-based index of the option to return within the group.
     */
    VisibleContentPreferenceWrapper.prototype.findToggleByIndex = function (groupIndex, optionIndex) {
        var groupSelector = ".".concat(getClassName('groups'), " > *:nth-child(").concat(groupIndex, ")");
        var optionSelector = ".".concat(getClassName('option'), ":nth-child(").concat(optionIndex, ")");
        return this.findComponent("".concat(groupSelector, " ").concat(optionSelector, " .").concat(getClassName('toggle')), toggle_1.default);
    };
    VisibleContentPreferenceWrapper.rootSelector = styles_selectors_js_1.default['visible-content'];
    return VisibleContentPreferenceWrapper;
}(dom_1.ComponentWrapper));
exports.default = VisibleContentPreferenceWrapper;
//# sourceMappingURL=visible-content-preference.js.map