/**
 * Created by Techniv on 23/05/2014.
 */

var Formatter = require('./formatter');

var formats = {};
Object.defineProperties(formats, {
    ISO8601: {value: "yyyy-MM-ddThh:mm:ss.sssZ"},
    DATETIME: {value: "yyyy-MM-dd hh:mm:ss"}
});

module.exports = {
    standardFormat: formats,
    format: format,
    createFormatter: createFormatter
}

function format(formatString, date, local){
    if(typeof date == "string" && Date.parse(date) != NaN){ date = new Date(date); }

    if(typeof date == "undefined"){
        if(this instanceof Date) date = this;
        else{ date = new Date }
    }

    if( ! (date instanceof Date) ) throw new Error("The second parameter of the function, if given," +
                                                   "must be a Date object or a date string");

    return new Formatter(formatString, local).format(date);
}

function createFormatter(formatString, local){
    return new Formatter(formatString, local);
}

// UTILITY

function parseFormatString(string){
    var formater = [];
    var data = [];

    for(var i = 0; i<string.length; i++){

    }
}