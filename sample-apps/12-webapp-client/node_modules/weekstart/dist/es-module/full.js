import { getWeekStartByRegion, getWeekStartByLocale } from './api.js';
import langRegionMap from './fullLangRegionMap.js';
import regionDayMap from './regionDayMap.js';

function getWeekStartByRegion$1(regionCode) {
    return getWeekStartByRegion(regionCode, regionDayMap);
}

function getWeekStartByLocale$1(locale) {
    return getWeekStartByLocale(locale, langRegionMap, regionDayMap);
}

export { getWeekStartByRegion$1 as getWeekStartByRegion, getWeekStartByLocale$1 as getWeekStartByLocale };
//# sourceMappingURL=full.js.map
