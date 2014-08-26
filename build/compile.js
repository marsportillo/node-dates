/**
 * Created by Techniv on 24/05/2014.
 */

var fs          = require('fs'),
    path        = require('path'),
    readline    = require('readline'),
    stream      = require('stream');
    util       = require('util');

println("---- DATES - DICTIONARY COMPILATION ----\n");
println("Starting configuration:              ");
var libPath = path.resolve(path.join(__dirname, '..', 'libs'));
var workPath = __dirname;
var dicFile = "dictionary.js";

var dictionary = require(path.join(libPath,dicFile)).wordDef;
var sti, sto, stob;
println("OK!\n");


var tree = {};
println("Compiling tree dictionary:           ");
for(var word in dictionary){
    var node = tree;
    for( var i = 0; i < word.length; i++){
        var newNode = node[word[i]];
        if(typeof newNode == "undefined"){
            newNode = {};
            node[word[i]] = newNode;
        }
        node = newNode;
    }
    node.end = true;
}
println("OK!\n");

println("Opening file stream:                 ");
sto = fs.createWriteStream(path.join(workPath, dicFile));
stob = fs.createWriteStream(path.join(workPath, dicFile+".bak"));
sti = fs.createReadStream(path.join(libPath, dicFile));
println("OK!\n");

println("Write original dictionary:           ");
var buff = "";
var last = false;
var read = true;
sti.on('readable',function(){
    while((chunk = sti.read(1)) != null && read){
        sto.write(chunk);
        stob.write(chunk);
        if(chunk.toString() == "/" || chunk.toString() == "$"){
            buff += chunk.toString();
            continue;
        }
        if(chunk.toString() == "#" && buff == "//$$" ){
            last = true;
        }

        buff = "";

        if(last && chunk.toString() == "\n"){
            read = false;
            afterCopy();
        }
    }
});

function afterCopy(){
    stob.end();
    println("OK!\n");

    println("Write tree dictionary:               ");
    sto.write("// COMPILED CODE START\n\n");
    sto.write("module.exports.tree = ");
    sto.write(util.inspect(tree, {depth: null}));
    sto.write(";\n\n");
    sto.write("// COMPILED CODE END\n\n");
    sto.end();
    println("OK!\n");

    println("Moving final file:                   ");
    sto.on('finish', function(){
        println("OK!\n");
        println("\nCOMPILATION SUCCESS\n");
        println("MOVE build/dictionary.js IN THE libs/ FOLDER\n");
        println("--------------------------------------------\n\n");
    });

}
function println(str){
    process.stdout.write(str);
}