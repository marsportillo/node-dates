# DATES

This is date formatter with caching system for decoded format string for Node.JS

## Examples
```javascript
var dates = require('dates');

// Format a date without cache using a standard format.
console.log(dates.format(dates.standardFormat.ISO8601), new Date());

// Format a date with cache and custom format.
var formatter = dates.createFormatter("The date is: ddd dd MMMM yyyy - hh:mm:ss.sss $a");
console.log(formatter.format(new Date));

// Format a date with a different local (here french).
formatter = dates.createFormatter("La date est : www dd MMMM yyyy - HH:mm:ss.sss", 'fr');
console.log(formatter.format(new Date));
```

# API
* **format( *{string} formatString* [, *{Date} date* ] [, *{string} local* ]) -> {string}** - format a date.
* **createFormatter( *{string} formatString* [, *{string} local* ]) -> {DateFormatter}** - return a date formatter.
* -
* **DateFormatter::format( *{Date} date* ) -> {string}** - format a date.

## Patterns
* ***dd***: The day in the month with 0 before if necessary.
* ***ww***: The number of  the day in the week (from 1 to 7).
* ***www***: The day in the week in 3 letters (*Sun* for Sunday).
* ***wwww***: The day in the week in full letter.
* ***MM***: The month with 0 before if necessary.
* ***MMM***: The month in 3 letters (*Jan* for January).
* ***MMMM***: The month in full letters.
* ***yy***: The year on 2 digits (*14* for 2014 or 1914).
* ***yyyy***: The full year.

* ***hh***: The hour in official 12 hours system (*12* for midnight an midday).
* ***HH***: The hour in 24 hours system (*0* for midnight).
* ***$a***: The day period indicator in lower case (*am* or *pm*).
* ***$A***: The day period indicator in upper case (*AM* or *PM*).
* ***mm***: The minutes.
* ***ss***: The seconds.
* ***sss***: The milliseconds.

## The standard formats
* **ISO8601**:	"yyyy-MM-ddThh:mm:ss.sssZ"
* **DATETIME**:	"yyyy-MM-dd hh:mm:ss"

## How work the cache
When you create a formatter the format string is read to extract the format process and compile it in an array.

The compiler search two type of element:
* **date symbols**: referenced previously
* **user string**: string not recognized

The **user string** is store as it in the array and the **date symbols** are converted in **formatting functions** what
referenced in *dictionary.js*.

When you call the method format, the array is read to concatenate the **user string** and the result of **formatting
functions**.

Your original format string is never read again as long you keep the same formatter object.

## Internationalization
You can change the local of the name of the days and mouths with the *local* parameter. The available locals are stored
at *./libs/i18n/*.
