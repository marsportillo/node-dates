/**
 * Created by Vincent on 24/05/2014.
 */

var dictionaries = require('./dictionary');
module.exports = DateFormatter;


function DateFormatter(formatString){
     Object.defineProperties(this,{
         _formatString: {value:formatString},
         _formatProcess: {value:[]}
     });

    compile.call(this);
};

DateFormatter.prototype.format = function format(date){
    var result = "";
    for(var i in this._formatProcess){
        if(typeof this._formatProcess[i] == "function"){
            result += this._formatProcess[i](date);
        } else {
            result += this._formatProcess[i];
        }
    }
    return result;
};

function compile(){
    var str = this._formatString,
        format = this._formatProcess,
        node = dictionaries.tree,
        buff = "";

    for(var i = 0; i < str.length; i++){
        node = dictionaries.tree;
        var c = str[i];
        var d = 0;
        var m = "";
        while(node[c]){
            node = node[c];
            m += c;
            d++;
            c = str[i+d];
        }
        if(d > 0 && node.end && dictionaries.wordDef[m]){
            if(buff != "") format.push(buff);
            format.push(dictionaries.wordDef[m]);
            i = i+d-1;
            buff = "";
            continue;
        }
        buff += str[i];
    }
    format.push(buff);
}
