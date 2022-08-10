/**
 * Functions to get first day of week.
 * 
 * @module api
 */


/**
 * Return first day of week for country/region code.
 *
 * @example
 * getWeekStartByRegion('PNG', {});   // 1
 * getWeekStartByRegion('png', {BR: 0, PNG: 3, EG: 6});   // 3
 * getWeekStartByRegion('qa', {QA: 6});   // 6
 * getWeekStartByRegion(50, {BD: 5, 50: 5, SD: 6});   // 5
 *
 * @param {number | string} regionCode
 *      ISO 3166 Alpha-2, Alpha-3 or numeric code.
 * @param {object} regionDayMap
 *      Mapping of country/region code to first day of week that should be used to get result.
 *      Country codes should be in upper case.
 * @return {number}
 *      Code of first day of week for the given country/region code:
 *      0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday.
 * @alias module:api.getWeekStartByRegion
 */
export function getWeekStartByRegion(regionCode, regionDayMap) {
    /* eslint-disable indent */
    const code = regionDayMap[typeof regionCode === 'string'
                                ? regionCode.toUpperCase()
                                : regionCode];
    /* eslint-enable indent */

    return typeof code === 'number'
        ? code
        : 1;
}

/**
 * Return first day of week for locale identifier.
 *
 * @example
 * getWeekStartByLocale('no', {}, {});   // 1
 * getWeekStartByLocale('no', {no: 'abc'}, {ABC: 3});   // 3
 * getWeekStartByLocale('KK_arab', {kk_arab: 'CN'}, {CN: 0});   // 0
 * getWeekStartByLocale('fr-DZ', {fr: 'FR'}, {FR: 1, DZ: 6});   // 6
 *
 * @param {string} locale
 *      Locale identifier.
 * @param {object} langRegionMap
 *      Mapping of language code to country/region code that should be used to get result.
 *      Language codes should be in lower case.
 * @param {object} regionDayMap
 *      Mapping of country/region code to first day of week that should be used to get result.
 *      Country codes should be in upper case.
 * @return {number}
 *      Code of first day of week for the given locale identifier:
 *      0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday.
 * @alias module:api.getWeekStartByLocale
 */
export function getWeekStartByLocale(locale, langRegionMap, regionDayMap) {
    if (locale) {
        // Locale form: http://www.unicode.org/reports/tr35/tr35.html#Unicode_Language_and_Locale_Identifiers
        const data = locale.toLowerCase().split(/[-_]/);
        let language = data[0];
        let country;
        if (data[1] && data[1].length === 4) {
            language += `_${data[1]}`;
            country = data[2];
        }
        else {
            country = data[1];
        }
        if (! country) {
            country = langRegionMap[language];
        }
        if (country) {
            return getWeekStartByRegion(
                country.match(/^\d+$/)
                    ? Number(country)
                    : country,
                regionDayMap
            );
        }
    }

    return 1;
}
