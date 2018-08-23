/*
Scripts loader.
This file loading the scripts from repo by calling a function.
*/
function load(name){
var script = document.createElement('script');
script.src = "https://raw.githubusercontent.com/misha-marinenko-official/my-tmScripts/master/"+name;
document.head.appendChild(script);
}
