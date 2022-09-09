// Created on the basis of http://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html

export as namespace weekstart;

export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

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
 */
export function getWeekStartByRegion(
    regionCode: number | string
): DayOfWeek;

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
 * getWeekStartByLocale('Pa_Guru');   // 0
 * getWeekStartByLocale('fr-DZ');   // 6
 *
 * @param {string} locale
 *      Locale identifier.
 * @return {number}
 *      Code of first day of week for the given locale identifier:
 *      0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday.
 */
export function getWeekStartByLocale(
    locale: string
): DayOfWeek;
