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
var selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
var styles_selectors_js_1 = require("../../../textarea/styles.selectors.js");
var TextareaWrapper = /** @class */ (function (_super) {
    __extends(TextareaWrapper, _super);
    function TextareaWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaWrapper.prototype.findNativeTextarea = function () {
        return this.find(".".concat(styles_selectors_js_1.default.textarea));
    };
    TextareaWrapper.rootSelector = styles_selectors_js_1.default.root;
    return TextareaWrapper;
}(selectors_1.ComponentWrapper));
exports.default = TextareaWrapper;
//# sourceMappingURL=index.js.map