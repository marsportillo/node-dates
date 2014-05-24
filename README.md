= DATES =

This is date formatter with caching system for decoded format string for Node.JS

=== Example ===
```javascript
var dates = require('../libs/dates');
var formatter = dates.createFormatter(dates.standardFormat.ISO8601);
console.log(formatter.format(new Date));
```
