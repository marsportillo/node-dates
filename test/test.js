/**
 * Created by Vincent on 24/05/2014.
 */

var dates = require('../libs/dates');

console.log(dates.format(dates.standardFormat.ISO8601));

var formatter = dates.createFormatter("The date is: ddd dd MMMM yyyy - hh:mm:ss.sss $a");

console.log(formatter.format(new Date));