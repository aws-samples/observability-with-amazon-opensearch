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
exports.CardWrapper = exports.CardSectionWrapper = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
var styles_selectors_js_1 = require("../../../cards/styles.selectors.js");
var styles_selectors_js_2 = require("../../../table/styles.selectors.js");
var collection_preferences_1 = require("../collection-preferences");
var container_1 = require("../container");
var pagination_1 = require("../pagination");
var text_filter_1 = require("../text-filter");
var CardSectionWrapper = /** @class */ (function (_super) {
    __extends(CardSectionWrapper, _super);
    function CardSectionWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardSectionWrapper.prototype.findSectionHeader = function () {
        return this.findByClassName(styles_selectors_js_1.default['section-header']);
    };
    CardSectionWrapper.prototype.findContent = function () {
        return this.findByClassName(styles_selectors_js_1.default['section-content']);
    };
    return CardSectionWrapper;
}(selectors_1.ComponentWrapper));
exports.CardSectionWrapper = CardSectionWrapper;
var CardWrapper = /** @class */ (function (_super) {
    __extends(CardWrapper, _super);
    function CardWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Note: for integration/selector-based tests you should add `1` to the expected section index,
     * for example, `.findSections().get(sectionIndex+1)`. The `get` call in this context
     * is '2-indexed', that is, the first section in a card has an index of `2`.
     */
    CardWrapper.prototype.findSections = function () {
        return this.findAllByClassName(styles_selectors_js_1.default.section).map(function (c) { return new CardSectionWrapper(c.getElement()); });
    };
    CardWrapper.prototype.findCardHeader = function () {
        return this.findByClassName(styles_selectors_js_1.default['card-header-inner']);
    };
    CardWrapper.prototype.findSelectionArea = function () {
        return this.findByClassName("".concat(styles_selectors_js_1.default['selection-control'], " label"));
    };
    return CardWrapper;
}(selectors_1.ComponentWrapper));
exports.CardWrapper = CardWrapper;
var CardsWrapper = /** @class */ (function (_super) {
    __extends(CardsWrapper, _super);
    function CardsWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.containerWrapper = new container_1.default(_this.getElement());
        return _this;
    }
    CardsWrapper.prototype.findItems = function () {
        return this.findAllByClassName(styles_selectors_js_1.default.card).map(function (c) { return new CardWrapper(c.getElement()); });
    };
    CardsWrapper.prototype.findSelectedItems = function () {
        return this.findAllByClassName(styles_selectors_js_1.default['card-selected']).map(function (c) { return new CardWrapper(c.getElement()); });
    };
    CardsWrapper.prototype.findHeader = function () {
        return this.containerWrapper.findHeader();
    };
    /**
     * Alias for findHeader method for compatibility with previous versions
     * @deprecated
     */
    CardsWrapper.prototype.findHeaderRegion = function () {
        return this.findHeader();
    };
    /**
     * Alias for findEmptySlot method for compatibility with previous versions
     * @deprecated
     */
    CardsWrapper.prototype.findEmptyRegion = function () {
        return this.findEmptySlot();
    };
    CardsWrapper.prototype.findEmptySlot = function () {
        return this.findByClassName(styles_selectors_js_1.default.empty);
    };
    CardsWrapper.prototype.findLoadingText = function () {
        return this.findByClassName(styles_selectors_js_1.default.loading);
    };
    CardsWrapper.prototype.findTextFilter = function () {
        return this.findComponent(".".concat(styles_selectors_js_2.default['tools-filtering']), text_filter_1.default);
    };
    CardsWrapper.prototype.findPagination = function () {
        return this.findComponent(".".concat(styles_selectors_js_2.default['tools-pagination']), pagination_1.default);
    };
    CardsWrapper.prototype.findCollectionPreferences = function () {
        return this.findComponent(".".concat(styles_selectors_js_2.default['tools-preferences']), collection_preferences_1.default);
    };
    CardsWrapper.rootSelector = styles_selectors_js_1.default.root;
    return CardsWrapper;
}(selectors_1.ComponentWrapper));
exports.default = CardsWrapper;
//# sourceMappingURL=index.js.map