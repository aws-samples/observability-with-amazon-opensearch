'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var api = require('./api.js');
var langRegionMap = _interopDefault(require('./langRegionMap.js'));
var regionDayMap = _interopDefault(require('./regionDayMap.js'));

function getWeekStartByRegion(regionCode) {
    return api.getWeekStartByRegion(regionCode, regionDayMap);
}

function getWeekStartByLocale(locale) {
    return api.getWeekStartByLocale(locale, langRegionMap, regionDayMap);
}

exports.getWeekStartByRegion = getWeekStartByRegion;
exports.getWeekStartByLocale = getWeekStartByLocale;
//# sourceMappingURL=main.js.map
