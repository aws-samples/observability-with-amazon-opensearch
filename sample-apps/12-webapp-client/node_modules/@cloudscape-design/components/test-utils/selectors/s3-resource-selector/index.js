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
var selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
var __1 = require("../");
var input_1 = require("../input");
var button_1 = require("../button");
var modal_1 = require("../modal");
var table_1 = require("../table");
var styles_selectors_js_1 = require("../../../s3-resource-selector/styles.selectors.js");
var styles_selectors_js_2 = require("../../../s3-resource-selector/s3-in-context/styles.selectors.js");
var styles_selectors_js_3 = require("../../../s3-resource-selector/s3-modal/styles.selectors.js");
var S3ModalWrapper = /** @class */ (function (_super) {
    __extends(S3ModalWrapper, _super);
    function S3ModalWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    S3ModalWrapper.prototype.findSubmitButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_3.default['submit-button']), button_1.default);
    };
    return S3ModalWrapper;
}(modal_1.default));
var S3InContextWrapper = /** @class */ (function (_super) {
    __extends(S3InContextWrapper, _super);
    function S3InContextWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    S3InContextWrapper.prototype.findUriInput = function () {
        return this.findComponent(".".concat(styles_selectors_js_2.default['layout-uri']), input_1.default);
    };
    S3InContextWrapper.prototype.findVersionsSelect = function () {
        var select = this.findByClassName(styles_selectors_js_2.default['layout-version']);
        return select && select.findSelect();
    };
    S3InContextWrapper.prototype.findViewButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_2.default['view-button']), button_1.default);
    };
    S3InContextWrapper.prototype.findBrowseButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_2.default['browse-button']), button_1.default);
    };
    return S3InContextWrapper;
}(selectors_1.ComponentWrapper));
var S3ResourceSelectorWrapper = /** @class */ (function (_super) {
    __extends(S3ResourceSelectorWrapper, _super);
    function S3ResourceSelectorWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    S3ResourceSelectorWrapper.prototype.findAlertSlot = function () {
        return this.findByClassName(styles_selectors_js_1.default.alert);
    };
    S3ResourceSelectorWrapper.prototype.findInContext = function () {
        return this.findComponent(".".concat(styles_selectors_js_2.default.root), S3InContextWrapper);
    };
    S3ResourceSelectorWrapper.prototype.findModal = function () {
        var modal = (0, __1.default)().findModal();
        return modal && new S3ModalWrapper(modal.getElement());
    };
    S3ResourceSelectorWrapper.prototype.findTable = function () {
        var modal = this.findModal();
        return modal && modal.findComponent(".".concat(table_1.default.rootSelector), table_1.default);
    };
    S3ResourceSelectorWrapper.rootSelector = styles_selectors_js_1.default.root;
    return S3ResourceSelectorWrapper;
}(selectors_1.ComponentWrapper));
exports.default = S3ResourceSelectorWrapper;
//# sourceMappingURL=index.js.map