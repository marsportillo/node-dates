/**
 * Created by Vincent on 23/05/2014.
 */

var Formater = require('./formater');

var formats = {};
Object.defineProperties(formats, {
    ISO8601: {value: "yyyy-MM-dd hh:mm:ss.sss"},
    DATETIME: {value: "DATETIME"}
});

module.exports = {
    standardFormat: formats,
    format: format
}

function format(formatString, date){
    if(typeof date == "string" && Date.parse(date) != NaN){ date = new Date(date); }

    if(typeof date == "undefined"){
        if(this instanceof Date) date = this;
        else{ date = new Date }
    }

    if( ! (date instanceof Date) ) throw new Error("The second parameter of the function, if given," +
                                                   "must be a Date object or a date string");

    return new Formater(formatString).format(date);
}

// UTILITY

function parseFormatString(string){
    var formater = [];
    var data = [];

    for(var i = 0; i<string.length; i++){

    }
}