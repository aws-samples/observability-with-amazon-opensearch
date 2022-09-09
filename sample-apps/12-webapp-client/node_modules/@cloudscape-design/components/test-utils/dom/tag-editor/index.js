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
exports.TagEditorRowWrapper = void 0;
var styles_selectors_js_1 = require("../../../tag-editor/styles.selectors.js");
var styles_selectors_js_2 = require("../../../attribute-editor/styles.selectors.js");
var link_1 = require("../link");
var attribute_editor_1 = require("../attribute-editor");
var TagEditorRowWrapper = /** @class */ (function (_super) {
    __extends(TagEditorRowWrapper, _super);
    function TagEditorRowWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TagEditorRowWrapper.prototype.findUndoButton = function () {
        return this.findComponent(".".concat(styles_selectors_js_1.default['undo-button']), link_1.default);
    };
    return TagEditorRowWrapper;
}(attribute_editor_1.AttributeEditorRowWrapper));
exports.TagEditorRowWrapper = TagEditorRowWrapper;
var TagEditorWrapper = /** @class */ (function (_super) {
    __extends(TagEditorWrapper, _super);
    function TagEditorWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a row for a given index.
     *
     * @param row 1-based row index
     */
    TagEditorWrapper.prototype.findRow = function (row) {
        return this.findComponent(".".concat(styles_selectors_js_2.default.row, ":nth-child(").concat(row, ")"), TagEditorRowWrapper);
    };
    /**
     * Returns all rows.
     *
     * To find a specific row use the `findRow(n)` function as chaining `findRows().get(n)` can return unexpected results.
     * @see findRow
     */
    TagEditorWrapper.prototype.findRows = function () {
        return this.findAllByClassName(styles_selectors_js_2.default.row).map(function (i) { return new TagEditorRowWrapper(i.getElement()); });
    };
    TagEditorWrapper.prototype.findLoadingText = function () {
        return this.findByClassName(styles_selectors_js_1.default.loading);
    };
    TagEditorWrapper.rootSelector = styles_selectors_js_1.default.root;
    return TagEditorWrapper;
}(attribute_editor_1.default));
exports.default = TagEditorWrapper;
//# sourceMappingURL=index.js.map