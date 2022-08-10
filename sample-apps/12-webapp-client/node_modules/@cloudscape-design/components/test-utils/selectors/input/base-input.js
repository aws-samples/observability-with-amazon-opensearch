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
var styles_selectors_js_1 = require("../../../input/styles.selectors.js");
var BaseInputWrapper = /** @class */ (function (_super) {
    __extends(BaseInputWrapper, _super);
    function BaseInputWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseInputWrapper.prototype.findNativeInput = function () {
        // Input component always have native input
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.find(".".concat(styles_selectors_js_1.default.input));
    };
    return BaseInputWrapper;
}(selectors_1.ComponentWrapper));
exports.default = BaseInputWrapper;
//# sourceMappingURL=base-input.js.map