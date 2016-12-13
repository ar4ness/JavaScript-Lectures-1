window.jQuery
"use strict";
//alert("Hello World!");
//console.log("Hello World!"); to console
//it's a method for breaking a code
//debugger;
//var x = "My x";
//x = "Another x";
//console.log(x);
//var x = "string";
//console.log(
	//typeof x// "string";
//);
//var x = 123;
//console.log(typeof x); //"number"
//var x = true;
//console.log(typeof x); //boolean;
//var x = null;
//console.log(typeof x); //"object" - it is a mistake; 
//var x = undefined;
//console.log(typeof x); //'undefined";

// var x = {
	//key1: "value1",
	//key2: "value2",
	//"key3": "value3"
// };
// x.key1 = "new value";
// x["key2"] = "new value2";
// console.log(typeof x); // "object";

// var x = ["element1", "element2", "element3", 25, {}, [], null];
// console.log(x[3]); //25
// x[3] = 56;
// console.log(x[3]); //56
// console.log(typeof x); // "object";
// x.test = 123;
// console.log(x.test);
// Array.isArray(x);

// var x = function (){};
// x.key1 = "test";
// console.log(x.key1); // "test"
// console.log(typeof x); // "function";

// var x = ["element1", "element2", "element3", 25, {}, [], null];
// x.test = 123;
// console.log(x.test);
var x = ['123'];
console.log(x); // ["123"];
var y = x;
console.log(y); // ["123"];
y[0]=456;
console.log(y); // [456];
console.log(x); // [456];
