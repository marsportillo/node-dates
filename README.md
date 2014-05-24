# DATES

This is date formatter with caching system for decoded format string for Node.JS

## Example
```javascript
var dates = require('../libs/dates');
var formatter = dates.createFormatter("The date is: ddd dd MMMM yyyy - hh:mm:ss.sss $a");
console.log(formatter.format(new Date));
```

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


