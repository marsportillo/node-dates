/**
 * Created by Techniv on 23/05/2014.
 */

module.exports.wordDef = {
    'dd': function(date){
        return formatNumber(date.getDate());
    }
    , 'ww': function(date){
        return (date.getDay()+1).toString();
    }
    , 'www': function(date){
        return this._i18n.days3[date.getDay()];
    }
    , 'wwww': function(date){
        return this._i18n.days[date.getDay()];
    }
    , 'MM': function(date){
        return formatNumber(date.getMonth()+1);
    }
    , 'MMM': function(date){
        return this._i18n.month3[date.getMonth()];
    }
    , 'MMMM': function(date){
        return this._i18n.month[date.getMonth()];
    }
    , 'yy': function (date) {
        return date.getFullYear().toString().substr(-2);
    }
    , 'yyyy': function (date) {
        return date.getFullYear().toString();
    }
    , 'hh': function(date){
        var hour = date.getHours();
        if(hour == 0) hour = 12;
        if(hour > 12) hour = hour - 12;
        return formatNumber(hour);
    }
    , 'HH': function(date){
        return formatNumber(date.getHours());
    }
    , '$a': function(date){
        return date.getHours() < 12 ? "am" : "pm";
    }
    , '$A': function(date){
        return date.getHours() < 12 ? "AM" : "PM";
    }
    , 'mm': function(date){
        return formatNumber(date.getMinutes());
    }
    , 'ss': function(date){
        return formatNumber(date.getSeconds());
    }
    , 'sss': function(date){
        var milli = date.getMilliseconds();
        if(milli < 10) milli = "00"+milli.toString();
        else if(milli < 100) milli = "0"+milli.toString();
        else milli = milli.toString();

        return milli;
    }
};

function formatNumber(num){
    return num < 10 ? "0"+num.toString() : num.toString();
}


//$$# DO NOT WRITE ANYTHING AFTER
// COMPILED CODE START

module.exports.tree = { d: { d: { end: true } },
  w: { w: { end: true, w: { end: true, w: { end: true } } } },
  M: { M: { end: true, M: { end: true, M: { end: true } } } },
  y: { y: { end: true, y: { y: { end: true } } } },
  h: { h: { end: true } },
  H: { H: { end: true } },
  '$': { a: { end: true }, A: { end: true } },
  m: { m: { end: true } },
  s: { s: { end: true, s: { end: true } } } };

// COMPILED CODE END

