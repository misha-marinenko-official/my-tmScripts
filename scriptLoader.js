/*
Scripts loader.
This file loading the scripts from repo by calling a function.
*/
function load(name){
var script = document.createElement('script');
script.src = name;
document.head.appendChild(script);
}
