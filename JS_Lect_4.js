// //it's a function
// function fn () {
	
// }
// // var object = (); // [], function () {};

// // it's  a method
// object.method = function () {};

// // it's a functional expression
// var functionX = function () {
	// return "test";
// };

// // it's a named functional expression
// var functionY = function (fnName) {
	// if (true){
		// fnName();
	// }
// };

// console.log(functionX());

// var newFnName = new function('x', "return x");
// console.log(newFnName(254));

// (function () {
	// console.log('test 1');
// }) ();

// (function () {
	// console.log('test 2');
// } ());

// var test = (function privatName(x) {
	
	// if (x<10) {
		// return privatName(x+1);
	// }
	// return x;
// }) (0);
// console.log(test);

// (function privatName() {
	
	// }
 // ());
 
 // var arrayWithFunctions = [
	// function () {return 0;},
	// function () {return 1;},
	// function () {return 3;}
// ];
// arrayWithFunctions.methodOfArray = function () {
	// return "I'm a method"
// }	
// console.log (arrayWithFunctions[1]());
// console.log (arrayWithFunctions.methodOfArray());

// function fnName () {
	// return "I'm a function";
// }
// fnName.methodOfFunction = function () {
	// return "I'm a method";
// }
// console.log(fnName());
// console.log(fnName.methodOfFunction());
// console.log(fnName["methodOfFunction"]());

// console.log(fnName); // to see what is in body of function

// var newFunction = fnName;
// console.log(fnName());
// console.log(fnName.methodOfFunction());
// console.log(fnName["methodOfFunction"]());
// console.log(newFunction);

// var obj = {
	// x:10
// }
// console.log(obj.x);
// changeX(obj);
// function changeX() {
	// obj.x = 15;
// }
// console.log(obj.x); // 15 -  it works because object is linked element 

// var x=10

// console.log(x);
// changeX(x);
// function changeX (test) {
	// test = 15;
// }
// console.log(x); // 10 because variable is not linked element

// var x=10
// var y = x;
// console.log(x);
// console.log(y);
// x++;
// changeX(x);
// function changeX(test) {
	// test = 15;
// }
// console.log("new x = ", x);
// console.log("new y = ", y);

// var x = true ? function() {return 25;} () : false;
// console.log(x); //25
// var fn = x == 25 && function () {return 50};
// console.log(fn); // body of function  i.e function () {return 50};

// function test () {
	// console.log(arguments);
// }
// test(1, 2, null, [], 256, "test");

// function test (number, name) {
	// console.log(arguments);
	// console.log(number +=10);
	// console.log("Hello", name);
// }
// test(1, "Vasya", null, [], 256, "test");

// function test (number, name) {
	// console.log(arguments);
	// console.log(number +=10);
	// console.log("Hello", name);
	// var x = Array.apply(null, arguments);
	// console.log(x);
// }
// test(1, "Vasya", null, [], 256, "test");

// var y = "asd";
// function test (number, name) {
	 // console.log(arguments);
	// // console.log(number +=10);
	 // console.log("Hello", name);
	// var x = Array.apply(null, arguments);
	// console.log(x);
	// y+= " test"; // y=y+"test";
	// function z() {
		// var rest = "rest value";
	// }
	// console.log(rest);
 // }
 // test(1, "Vasya", null, [], 256, "test");
// console.log(y)

function getAllNulls(array) {
	if (!Array.isArray(array)) {
		throw("Attribute array is not array");
	}
	var nullsArray = [];
	for (var i=0; i<array.length; i++) {
		if (array[i] === null)  {
			nullsArray.push(array[i]);
		}
	}
	return nullsArray;

	//getAllNulls("asd");
	console.log(
		getAllNulls([1, 32, null, undefined, [0, 2, null], ('null': null), null])
)