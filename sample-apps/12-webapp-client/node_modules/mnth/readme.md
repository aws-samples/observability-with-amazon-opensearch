# mnth ![npm](https://flat.badgen.net/npm/v/mnth)

Framework-agnostic base block to build calendars, datepickers, etc by rendering 2d array of Dates.

## Install

```sh
$ yarn add mnth
```

## Usage

```ts
type Options = {
  firstDayOfWeek: number // `1` (Monday) by default, Sunday is `0`, Saturday is `6`
}

getCalendarMonth(date: Date, options?: Options) => Date[][]
```

```ts
import { getCalendarMonth } from 'mnth'

const date = new Date('2018-04-01')
const calendarMonth = getCalendarMonth(date).map((week) =>
  week.map((day) => day.getDate())
)

console.log(calendarMonth)
/*
[
  [ 26, 27, 28, 29, 30, 31, 1 ],
  [ 2, 3, 4, 5, 6, 7, 8 ],
  [ 9, 10, 11, 12, 13, 14, 15 ],
  [ 16, 17, 18, 19, 20, 21, 22 ],
  [ 23, 24, 25, 26, 27, 28, 29 ],
  [ 30, 1, 2, 3, 4, 5, 6 ]
]
*/
```
