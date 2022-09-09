# weekstart <a name="start"></a>

[![NPM version](https://badge.fury.io/js/weekstart.png)](http://badge.fury.io/js/weekstart)

Library to get first day of week.

```js
getWeekStartByRegion('MAC');   // 0

getWeekStartByLocale('ary');   // 6
```

The library is based on the following data from Unicode (especially from Common Locale Data Repository) and from ISO:
* [https://github.com/unicode-cldr/cldr-core/blob/master/supplemental/weekData.json](https://github.com/unicode-cldr/cldr-core/blob/master/supplemental/weekData.json)
* [http://www.unicode.org/cldr/charts/28/supplemental/territory_information.html](http://www.unicode.org/cldr/charts/28/supplemental/territory_information.html)
* [http://www.unicode.org/cldr/charts/28/supplemental/territory_language_information.html](http://www.unicode.org/cldr/charts/28/supplemental/territory_language_information.html)
* [http://www.unicode.org/cldr/charts/28/supplemental/language_territory_information.html](http://www.unicode.org/cldr/charts/28/supplemental/language_territory_information.html)
* [http://www.unicode.org/reports/tr35/tr35.html#Unicode_Language_and_Locale_Identifiers](http://www.unicode.org/reports/tr35/tr35.html#Unicode_Language_and_Locale_Identifiers)
* [https://www.iso.org/iso-3166-country-codes.html](https://www.iso.org/iso-3166-country-codes.html)

There are 2 variants of the library having identical [API](#api):
* `main` - uses base mapping of language code to country code from [langRegionMap](https://github.com/gamtiq/weekstart/blob/master/src/langRegionMap.js).
* `full` - uses full mapping of language code to country code from [fullLangRegionMap](https://github.com/gamtiq/weekstart/blob/master/src/fullLangRegionMap.js).

[langRegionMap](https://github.com/gamtiq/weekstart/blob/master/src/langRegionMap.js) contains only main language codes.
It is data subset from [fullLangRegionMap](https://github.com/gamtiq/weekstart/blob/master/src/fullLangRegionMap.js).

## Table of contents

* [Installation](#install)
* [Usage](#usage)
* [Examples](#examples)
* [API](#api)
* [Contributing](#contributing)
* [License](#license)

## Installation <a name="install"></a> [&#x2191;](#start)

### Node

    npm install weekstart

### [Bower](http://bower.io)

    bower install weekstart

### AMD/UMD, &lt;script&gt;

Use `dist/main.js` or `dist/min/main.js` (minified version).
Use `dist/full.js` or `dist/min/full.js` (minified version) when you need full locale data.

## Usage <a name="usage"></a> [&#x2191;](#start)

### ECMAScript 6

```js
import {getWeekStartByLocale, getWeekStartByRegion} from 'weekstart';
```

If you need full data:

```js
import {getWeekStartByLocale, getWeekStartByRegion} from 'weekstart/full';
```

### Node

```js
const getWeekStartByLocale = require('weekstart').getWeekStartByLocale;
const getWeekStartByRegion = require('weekstart').getWeekStartByRegion;
```

If you need full data:

```js
const getWeekStartByLocale = require('weekstart/full').getWeekStartByLocale;
const getWeekStartByRegion = require('weekstart/full').getWeekStartByRegion;
```

### AMD/UMD

```js
define(['path/to/dist/main.js'], function(weekstart) {
    const getWeekStartByLocale = weekstart.getWeekStartByLocale;
    const getWeekStartByRegion = weekstart.getWeekStartByRegion;
});
```

If you need full data:

```js
define(['path/to/dist/full.js'], function(weekstart) {
    const getWeekStartByLocale = weekstart.getWeekStartByLocale;
    const getWeekStartByRegion = weekstart.getWeekStartByRegion;
});
```

### Bower, &lt;script&gt;

```html
<!-- Use bower_components/weekstart/dist/main.js and bower_components/weekstart/dist/full.js if the library was installed by Bower -->
<script type="text/javascript" src="path/to/dist/main.js"></script>
<script type="text/javascript">
    // weekstart is available via weekstart field of window object
    const getWeekStartByLocale = weekstart.getWeekStartByLocale;
    const getWeekStartByRegion = weekstart.getWeekStartByRegion;
</script>
```

If you need full data use `path/to/dist/full.js` instead of `path/to/dist/main.js`.

## Examples <a name="examples"></a> [&#x2191;](#start)

```js
getWeekStartByRegion('dj');   // 6
getWeekStartByRegion('No');   // 1
getWeekStartByRegion('CAN');   // 0
getWeekStartByRegion(50);   // 5

getWeekStartByLocale('Jam');   // 0
getWeekStartByLocale('Fa');   // 6
getWeekStartByLocale('vi');   // 1
getWeekStartByLocale('es_MX');   // 0
getWeekStartByLocale('az-Arab-IRN');   // 6
```

In the following examples results are given for the function from `full.js`.
The same calls for the function from `main.js` will return `1`.

```js
getWeekStartByLocale('CCP');   // 5
getWeekStartByLocale('UZ-arab');   // 6
```

## API <a name="api"></a> [&#x2191;](#start)

#### getWeekStartByLocale(locale): number

Return first day of week for locale identifier:
0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday.

#### getWeekStartByRegion(regionCode): number

Return first day of week for country/region code:
0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday.

See [`docs`](https://gamtiq.github.io/weekstart/) for details.

## Contributing <a name="contributing"></a> [&#x2191;](#start)
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality.
Lint and test your code.

## License <a name="license"></a> [&#x2191;](#start)
Licensed under the [MIT license](https://github.com/gamtiq/weekstart/blob/master/LICENSE).
