// ---1---
// // my
// function summ(x, y) {
	// var z=x+y;
	// return z;
// }
// console.log(summ(2 ,3));

// //Artem's
// function summ(x, y) {
		// return x + y;
// }
// console.log(summ(10 ,-10.1));

//my
// function isPositive(x) {
	// return typeof x === "number" && x > 0;
	
// }
// console.log(isPositive("25"));
// console.log(isPositive(-1));
// console.log(isPositive(0.1));

// // my
// function toBoolean(x){
	// return typeof x === "boolean";
	// x;
// }
// console.log(toBoolean("9"));
// console.log(toBoolean(null));

// //Artem's
// function toBoolean(x) {
	// return !!x;
// }
// console.log(toBoolean(1));
// console.log(toBoolean(0));
// console.log(toBoolean("as"));
// console.log(toBoolean(null));
// console.log(toBoolean([]));
// console.log(toBoolean(undefined));

//---2----
//my
// function greeting (name) {
	// if (typeof name === "string"){
	// return"Hello " + name;
	// }
	// else {
		// return('Wrong name!');
	// }
// }
// console.log(greeting(null));

// my
// function square(x) {
	// if (typeof x === "number"){
		// return Math.pow(x,2);
		// console.log("square x= ", square);
		// } 
// }
// console.log("square x = ", square(2));

// Artem's 1
// function square(x) {
// return typeof x === "number" && x === x && "square x= " + x * x || "wrong x"
		// } 
// console.log("square x = ", square(2));

// Artem's 2
// function square(x) {
// if (typeof x === "number" && x === x && "square x= " + x * x || "wrong x"){
		// return "square x= " + x * x 
		// } 
		// return "wrong x";
// }
// console.log("square x = ", square(2));

// my
// // function powerOrNot(x) {
	// // if (typeof x === "number" && x % 2 === 0){
		// // return x*x;
	// // }
	// // else if( typeof x === "number" && x % 3 === 0) {
		// // return x * x *x;
	// // }
	// // else return x;
// // }
// // console.log(powerOrNot(4));


//Artem's
// function powerOrNot(x) {
	// switch (true) {
		// case x % 2 === 0:
		// return x * x;
		// case x % 3 === 0:
		// return x * x * x;
		// default:
		// return x;
	// }
// }
// console.log (powerOrNot(2));
// console.log (powerOrNot(3));
// console.log (powerOrNot(6));
// console.log (powerOrNot(5));

// or using ternary operator:
// return x%2 == 0 ? x*x : x%3 == 0 ? x*x*x : x;


// // ---- 3
// function getType(x) {
	// switch (true) {
		// case typeof x === "string":
		// return typeof x;
		// case typeof x === 'number':
		// return "number";
		// case typeof x === "NaN":
		// return "NaN";
		// case typeof x === "Boolean":
		// return "Boolean";
		// case typeof x === "null":
		// return "null";
		// case typeof x === "array":
		// return 'array';
		// case typeof x === "object":
		// return "object";
		// default:
		// return "undefined"
	// }
// } 
//console.log(getType(1));
// console.log(getType("23"));
// console.log(getType("ad"));
// console.log(getType(null));
// console.log(getType(NaN));
// console.log(getType([]));
// console.log(getType({}));
// console.log(getType());

// function getLengthOfHyp(x1, x2, y1, y2, x3, y3, x4, y4) {
	// var l1 = (Math.sqrt(Math.pow(y2 - y1) + Math.pow(x2 - x1)));
	// var l2 = (Math.sqrt(Math.pow(y4 - y3) + Math.pow(x4 - x3)));
	
	// return Math.sqrt( Math.pow(l1,2) + Math.pow(l2,2))
// }
// console.log(getLengthOfHyp(1, 3, 0, 3, 1, 3, 2, 5));

// function isTruePrimitive(x) {
	// if (typeof x == "string" || !null && !false ) {
	// return !!x;
// }else {
	// return "false"
// }
// }
// console.log(isTruePrimitive('23'));
// console.log(isTruePrimitive(23));
// console.log(isTruePrimitive(0));
// console.log(isTruePrimitive(NaN));
// console.log(isTruePrimitive(''));
// console.log(isTruePrimitive(null));

// console.log(getType(null));
// console.log(getType(NaN));
// console.log(getType("ad"));
// console.log(getType(undefined));
// console.log(getType(NaN));
// console.log(getType([]));
// console.log(getType(function {} ()));
// console.log(getType());


// function getType(x) {
	// switch (true) {
		// case typeof x === "string":
		// // return typeof x;
		// // case typeof x === 'number':
		// // return "number";
		// // case typeof x === "NaN":
		// // return "NaN";
		// // case typeof x === "Boolean":
		// // return "Boolean";
		 // case  x === null:
		// return "null";
		// case  Array.isArray":
		// return 'array';
		// // case typeof x === "object":
		// // return "object";
		// default:
		// return "undefined"
	//}

function isTruePrimitive(x) {
	return typeof x !== "object" && typeof x !== "function"&& !!x; 

}
console.log(isTruePrimitive(''));
console.log(isTruePrimitive("abc"));
console.log(isTruePrimitive({}));
console.log(isTruePrimitive([]));
//console.log(isTruePrimitive(function{} ()));
console.log(isTruePrimitive(25));
console.log(isTruePrimitive('23'));
console.log(isTruePrimitive(0));
console.log(isTruePrimitive(null));
console.log(isTruePrimitive(undefined));
console.log(isTruePrimitive(NaN));

