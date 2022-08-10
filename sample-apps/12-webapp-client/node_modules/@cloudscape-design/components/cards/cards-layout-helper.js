var WIDTHS = [1920, 1400, 1200, 992, 768];
// Transform the array of widths into a valid cardsPerRow property that is used as default
var defaultCardsPerRow = WIDTHS.map(function (value, index, widths) { return ({
    minWidth: value,
    cards: widths.length + 1 - index
}); });
export var getCardsPerRow = function (width, config) {
    if (config.length === 0) {
        config = defaultCardsPerRow;
    }
    var cardsPerRow = 1;
    // sort them by descending order of minWidth
    var sortedConfig = config
        .slice()
        .map(function (value) { return ({
        minWidth: value.minWidth || 0,
        cards: value.cards
    }); })
        .sort(function (a, b) { return b.minWidth - a.minWidth; });
    sortedConfig.some(function (layout) {
        if (width >= layout.minWidth) {
            cardsPerRow = layout.cards;
            return true;
        }
    });
    return cardsPerRow;
};
//# sourceMappingURL=cards-layout-helper.js.map