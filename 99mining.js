// ==UserScript==
// @name         99mining mod
// @namespace    https://github.com/misha-marinenko-official/my-tmScripts
// @version      0.1
// @description  Mod for https://99mining.cloud/
// @author       Misha Marinenko
// @downloadURL  https://raw.githubusercontent.com/misha-marinenko-official/my-tmScripts/master/99mining.js
// @updateURL    https://raw.githubusercontent.com/misha-marinenko-official/my-tmScripts/master/99mining.js
// @match        https://99mining.cloud/*
// @grant        none
// ==/UserScript==
function a(i){
    document.querySelector(i).outerHTML="";
}
if(location.href=="https://99mining.cloud/index.php"){
document.querySelector("#addr").input="1GvCfYLfakCTejuceqagFbF764QyXMcFZ7";
}else{
a("body > div.nofification-sec");
a("body > div.banner-upgared > div > div.col-md-7");
a("body > div.banner-upgared > div > div.col-md-5");
a("body > header > nav > div > div.navbar-header > a");
a("#bs-example-navbar-collapse-1 > ul > li:nth-child(6)");
a("#bs-example-navbar-collapse-1 > ul > li:nth-child(5)");
a("#bs-example-navbar-collapse-1 > ul > li:nth-child(3)");
a("body > header > nav");
a("body > div.version-sec > footer");
a("body > div.version-sec");
//body > div.earning-bal
document.querySelector("body > div.earning-bal").style.background="black";
document.querySelector("body").style.background="black";
}
