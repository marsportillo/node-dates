/**
 * Created by Vincent on 24/05/2014.
 */

var dates = require('../libs/dates');

console.log(dates.format(dates.standardFormat.ISO8601));

var formater = dates.createFormatter(dates.standardFormat.ISO8601);

console.log(formater.format(new Date));