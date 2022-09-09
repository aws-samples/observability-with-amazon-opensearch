/*
 * weekstart
 * https://github.com/gamtiq/weekstart
 */

/**
 * Library to get first day of week.
 * 
 * Uses data from {@link module:fullLangRegionMap fullLangRegionMap.js} and
 * {@link module:regionDayMap regionDayMap.js}.
 * 
 * @module full
 */

import * as api from './api';
import langRegionMap from './fullLangRegionMap';
import regionDayMap from './regionDayMap';

/**
 * Return first day of week for country/region code.
 *
 * Based on data from:
 * - [https://github.com/unicode-cldr/cldr-core/blob/master/supplemental/weekData.json](https://github.com/unicode-cldr/cldr-core/blob/master/supplemental/weekData.json)
 * - [http://www.unicode.org/cldr/charts/28/supplemental/territory_information.html](http://www.unicode.org/cldr/charts/28/supplemental/territory_information.html)
 * - [https://www.iso.org/iso-3166-country-codes.html](https://www.iso.org/iso-3166-country-codes.html)
 *
 * @example
 * getWeekStartByRegion('PNG');   // 1
 * getWeekStartByRegion('qa');   // 6
 * getWeekStartByRegion(50);   // 5
 *
 * @param {number | string} regionCode
 *      ISO 3166 Alpha-2, Alpha-3 or numeric code.
 * @return {number}
 *      Code of first day of week for the given country/region code:
 *      0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday.
 * @alias module:full.getWeekStartByRegion
 * @see module:api.getWeekStartByRegion
 */
export function getWeekStartByRegion(regionCode) {
    return api.getWeekStartByRegion(regionCode, regionDayMap);
}

/**
 * Return first day of week for locale identifier.
 *
 * Based on data from:
 * - [http://www.unicode.org/cldr/charts/28/supplemental/territory_language_information.html](http://www.unicode.org/cldr/charts/28/supplemental/territory_language_information.html)
 * - [http://www.unicode.org/cldr/charts/28/supplemental/language_territory_information.html](http://www.unicode.org/cldr/charts/28/supplemental/language_territory_information.html)
 * - [http://www.unicode.org/cldr/charts/28/supplemental/territory_information.html](http://www.unicode.org/cldr/charts/28/supplemental/territory_information.html)
 * - [http://www.unicode.org/reports/tr35/tr35.html#Unicode_Language_and_Locale_Identifiers](http://www.unicode.org/reports/tr35/tr35.html#Unicode_Language_and_Locale_Identifiers)
 *
 * @example
 * getWeekStartByLocale('no');   // 1
 * getWeekStartByLocale('KK_arab');   // 0
 * getWeekStartByLocale('fr-DZ');   // 6
 *
 * @param {string} locale
 *      Locale identifier.
 * @return {number}
 *      Code of first day of week for the given locale identifier:
 *      0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday.
 * @alias module:full.getWeekStartByLocale
 * @see module:api.getWeekStartByLocale
 */
export function getWeekStartByLocale(locale) {
    return api.getWeekStartByLocale(locale, langRegionMap, regionDayMap);
}
