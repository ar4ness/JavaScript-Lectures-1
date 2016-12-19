// console.log("2 + 2 * 2 = ", 2 + 2 * 2); // 6
// console.log("2 + 2 = ", 2 + 2); // 4
// console.log("5 - 3 = ", 5 - 3); //2
// console.log("5 * 3 = ", 5 * 3); //15
// console.log("5 % 3 = ", 5 % 3); //2
// var x = 25;
// console.log("- x = ", - x); //-25
// var y = '25';
// console.log("y = ", y); // string "25"
// console.log("typeof y = ", typeof y); // string
// console.log("+ y = ", + y); //  number 25
// console.log("typeof y=", typeof +y); // number

// var z = "10";
// z = +z;
// console.log("typeof z=", typeof z); // number

// console.log("5 > 3 =", 5 > 3); // true
// console.log("5 < 3 =", 5 < 3); // false
// console.log("3 >= 3 =", 3 >= 3); // true
// console.log("3 <= 5 =", 3 <= 5); // true
// console.log("5 != "5" =", 5!= "5"); // false
// console.log("5 !== "5" =", 5!== "5"); // true
// console.log("null == undefined =", null == undefined); // true
// console.log("null === undefined =", null === undefined); // false
// console.log(0 && 6); // false

// function test (){
	// return("test success");
// }
// console.log(true && test() && "test" && "end of ands list") // "end of ands list"
// console.log(true && test() && 0 && "end of ands list") // 0
// console.log(false && 6); // false

// console.log(false || 6); // 6
// console.log(true || 6); // true
// console.log(false || "end" || 0); // "end"
// console.log("start" || true || 0); // "start"

// console.log(!0) // true;
// console.log(!"") // true;
// console.log('!"true because contains text"', !"true because contains text") // false
// console.log("!\"true because \\ contains text\"", !"true because contains text") // false
// console.log("!true =", !true) // false
// console.log('!!"I am string and I want ot become bool" = ', !!"I am string and I want ot become bool") //true

// var x = (3, 4, 5);
// console.log(x); // 5

// var x = 10, y = 5, z = x + y;
// console.log(z); // 15
// console.log("undefined + 25 =", undefined + 25); //NaN
// console.log("NaN == NaN = ", NaN == NaN); // false
// console.log("NaN === NaN = ", NaN === NaN); // false
// console.log("typeof NaN = ", typeof NaN); // number
// console.log("2 * (2 + 3) = ", 2 * (2 + 3)); // 10

// Increment
// var x = 10; 
// x++; // 10
// console.log(x); // 11
// var y = 10; 
// ++y; //11
// console.log(y); // 11
// console.log(x++); // 11
// console.log(++y); // 12

// Decrement
// var x = 10; 
// x--; // 10
// console.log(x); // 9
// var y = 10; 
// --y; //9
// console.log(y); // 9
// console.log(x--); // 9
// console.log(--y); // 8

// Comparison
// console.log('x' > 'y') // false
// console.log('x' > 'Y') // true
// console.log('test' > 'tes') // true
// console.log('test' > 'zes') // false
// console.log('1' > '2') // false
// console.log('12' > '2') // false
// console.log(+'12' > +'2') // true

//Comparison of different data types
// console.log("'2' > 1 =", '2' > 1); // true
// console.log("'1.0' == 1 = ", '1.0' == 1); // true
// console.log("true == 1", true == 1); // true
// console.log("false == 0 && false == '' =", false == 0 && false == ''); // true
// console.log("false == 0 =", false == 0); // true

// Comparison of null and undefined
// console.log(null == undefined); // true
// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null < 0); // false
// console.log(null >= 0); // true
// console.log(null <= 0); // true

//  To boolen type in JS can be modified everything exept of empty string:
// true == !"", !false, !null, !undefined, !NaN, {}, [], function();
// false == "", 0, null, undefined, NaN;

// Operator if
// if (true) {
	// console.log(true);
// }
// // without curves (only for one-string) - better not to use
// if(true)
	// console.log("1");

// if (25 && 0 || "text")
	// console.log("success?");
// else
	// console.log("Not success:(");
// if (25 && 0 || false){
	// console.log("success?");
// }else{
	// console.log("Not success:(");
// }

// var userName = 325;
// if (userName == "Vasya"){
	// alert("Hello admin" + userName);
// }
// else if (typeof userName == "string"){
	// alert("Hello user" + userName);
// }
// else {
	// alert("You enter not a name!");
// }

// if(10>15) {
	// var x = "test";
// }else {
	// var x = "rest";
// }
// // instead of this constuction we can write in one line:
// // var x = /*if*/ 10 > 15 ? /*then*/ "test" : /*else*/ "rest";
// var y = /*if*/ 10 < 15 ? /*then*/ "test" : /*else*/ "rest";
// console.log(x); //rest
// console.log(y); //test

// var z = 10 > 15 ? "test": true ? "last" : "best";
// console.log(z); //"last"

// var x = "25";
// switch (x) {
	// case "text":
		// console.log("Action 1");
	// break;
	// case "lost":
		// console.log("Action 2");
	// break;
	// case true:
		// console.log("Action 3");
	// break;
	// case 25:
		// console.log("Action 4");
	// break;
	// default:
		// console.log("Default action!");
// }

// if (typeof x == "string" && x >= 25 || x != "some text"){
	// console.log("Action 1");
// } // action 1

// var x = [];
// if (typeof x == "array" && x [0] === undefined){
	// console.log("Action 1");
// } else {
	// console.log("Nope, because typeof x =", typeof x);
// } // Nope, becouse typeof x =", typeof x = object

// var x = [];
// if (x [0] === undefined){
	// console.log("Action 1");
	// console.log("Because any not defined entity is 'undefined'...")
// } else {
	// console.log("Action2");
// }

 // var x = 125, y = "";
 // if (x * 0){
	 // console.log("Action 1");
	 // console.log("Because any not defined entity is 'undefined'...")
 // } else if (!x + y){
	 // console.log("Action2");
	// console.log(!x + y);
 // } else {
	// console.log("Action 3");
// }



// Homework
var x='', y=10, z = '';
console.log(typeof x == 'string'&& y == 10 && z >=y);