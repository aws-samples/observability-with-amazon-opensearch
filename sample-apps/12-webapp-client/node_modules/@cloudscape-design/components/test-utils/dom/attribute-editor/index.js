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
exports.AttributeEditorRowWrapper = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var dom_1 = require("@cloudscape-design/test-utils-core/dom");
var styles_selectors_js_1 = require("../../../attribute-editor/styles.selectors.js");
var styles_selectors_js_2 = require("../../../grid/styles.selectors.js");
var button_1 = require("../button");
var form_field_1 = require("../form-field");
var AttributeEditorRowWrapper = /** @class */ (function (_super) {
    __extends(AttributeEditorRowWrapper, _super);
    function AttributeEditorRowWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns all fields. Fields are supplied in the `definition` property of the component.
     */
    AttributeEditorRowWrapper.prototype.findFields = function () {
        return this.findAllByClassName(styles_selectors_js_1.default.field).map(function (f) { return new form_field_1.default(f.getElement()); });
    };
    /**
     * Returns a field for a given index
     *
     * @param column 1-based column index
     */
    AttributeEditorRowWrapper.prototype.findField = function (column) {
        return this.findComponent(".".concat(styles_selectors_js_1.default['row-control'], " > .").concat(styles_selectors_js_2.default.grid, " > .").concat(styles_selectors_js_2.default['grid-column'], ":nth-child(").concat(column, ") > div > .").concat(styles_selectors_js_1.default.field), form_field_1.default);
    };
    AttributeEditorRowWrapper.prototype.findRemoveButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['remove-button']), button_1.default);
    };
    return AttributeEditorRowWrapper;
}(dom_1.ElementWrapper));
exports.AttributeEditorRowWrapper = AttributeEditorRowWrapper;
var AttributeEditorWrapper = /** @class */ (function (_super) {
    __extends(AttributeEditorWrapper, _super);
    function AttributeEditorWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AttributeEditorWrapper.prototype.findEmptySlot = function () {
        return this.findByClassName(styles_selectors_js_1.default.empty);
    };
    /**
     * Returns a row for a given index.
     *
     * @param row 1-based row index
     */
    AttributeEditorWrapper.prototype.findRow = function (row) {
        return this.findComponent(".".concat(styles_selectors_js_1.default.row, ":nth-child(").concat(row, ")"), AttributeEditorRowWrapper);
    };
    /**
     * Returns all rows.
     *
     * To find a specific row use the `findRow(n)` function as chaining `findRows().get(n)` can return unexpected results.
     * @see findRow
     */
    AttributeEditorWrapper.prototype.findRows = function () {
        return this.findAllByClassName(styles_selectors_js_1.default.row).map(function (i) { return new AttributeEditorRowWrapper(i.getElement()); });
    };
    AttributeEditorWrapper.prototype.findAddButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['add-button']), button_1.default);
    };
    AttributeEditorWrapper.prototype.findAdditionalInfo = function () {
        return this.findByClassName(styles_selectors_js_1.default['additional-info']);
    };
    AttributeEditorWrapper.rootSelector = styles_selectors_js_1.default.root;
    return AttributeEditorWrapper;
}(dom_1.ComponentWrapper));
exports.default = AttributeEditorWrapper;
//# sourceMappingURL=index.js.map