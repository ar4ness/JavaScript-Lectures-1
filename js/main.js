// var i = 0;
// while (i < 10) {
	// i++; 
	// console.log(i);
// }

// The do...while loop runs at least once
// var i = 0;
// do {
	// i++;
	// console.log(i);
// } while (i < 10); // 1 to 10

// var i = 0;
// do { // runs at least once
	// i++;
	// console.log(i);
// } while (false); //1

// ----------The for loop
// for (var i = 0; i < 10; i++) {
	// console.log(i); // 0 to 9
// }

// for (var i = 10; i > 5; i--) {
	// console.log(i); // 10 to 6
// }
// for (var i = 10; i > 5; i-=2) { //  for even numbers
	// console.log(i); // 10 8 6
// }

// for (; ;){
// i--	// infinite loop	
// }

// var i = 10;
// for (; i > 5; i--) {
	// console.log(i); // 10 to 6
// }

// var i = 10;
// for (; i > 5; ) {
	// i--
	// console.log(i); // 9 to 5 -- because decrement i-- is in loop body
// }

// var i = 0;
// while (true) {
	// console.log(i);// 0 1...10
	// i++;
	// if (i > 10) {
		// break; // we break infinite loop by using break
	// }
// } // 0 to 10

// var i = 0;
// do {
	// console.log(i);
	// i++;
	// if (i > 10) {
		// break; // we break infinite loop by using break
	// }
// } while (i < 100);// if there is no break loop will count from 0 to 99

// for (var i = 0; i < 100; i++){
	// console.log(i);
	// if (i > 10) {
		// break; // we break infinite loop by using break
	// }
// } ; // 0 to 11

// var i = 0;
// while (i <10) {
	// i++;
	// if (i > 5 && i < 8) {
		// continue; // continue - to break iteration
	// }
	// console.log(i);
// } // 1 2 3 4 5 8 9 10
// var i = 0;
// do {
	// i++;
	// if (i > 5 && i < 8) {
		// continue;
	// }
	// console.log(i); // 1 2 3 4 5 8 9 10
// } while (i < 10);

// for (var i = 0;i < 10; i++){
	// if (i > 5 && i < 8) {
		// continue;
	// }
	// console.log(i);
// } // 0 1 2 3 4 5 8 9

// !!!!!!!----in ternary you should not use break or continue:
// for (var i = 0;i < 10; i++){
	// i > 5 && i <8 ? continue : null; // It's an error
	// console.log(i);
// } // break and continue do not return any value, they are not operators or comands, they are just directives. in ternary operator there must be returned some value - thats why we do not use them with ternary

//--------breaking a loop with a key
// var i = 0;
// outerFor: while(true) {
	// console.log("outer i = ", i);
	// while(true) {
		// i++
		// console.log("inner i = ", i);
		// if (i > 10) {
			// break outerFor;	// first founded key is breaking
		// }
	// }
// }// outer i =  0
// main.js:108 inner i =  1
// main.js:108 inner i =  2
// main.js:108 inner i =  3
// main.js:108 inner i =  4
// main.js:108 inner i =  5
// main.js:108 inner i =  6
// main.js:108 inner i =  7
// main.js:108 inner i =  8
// main.js:108 inner i =  9
// main.js:108 inner i =  10
// main.js:108 inner i =  1

// var i = 0;
// outerFor: do {
	// console.log("outer i = ", i);
	// do {
		// i++
		// console.log("inner i = ", i);
		// if (i > 10) {
			// break outerFor;	
		// }
	// } while(true);
// } while(true);

// 


// outer: for (var i = 0; i < 1000;) {
	// console.log("outer i = ", i);
	// for (;;) {
		// i++;
		// console.log("inner i = ", i);
	// if (i > 10) {
		// continue outer;
	// }
// }
// }

// var i = 0;
// outer: while (i < 30) {
	// console.log("outer i = ", i);
	// while(true) {
		// console.log("inner i = ", i);
		// i++;
		// if (i > 10); {
		// continue outer;
	// }
// }
// }
// var i = 0;
// outer: do {
	// console.log("outer i = ", i);
	 // do {
		// i++;
		// console.log("inner i = ", i);
		// if (i > 10); {
		// continue outer;
		// }
	// } while(true);
// } while (i < 30)
	
// var i = 11;
// outer: do {
	// console.log("outer i = ", i);
	 // do {
		// i++;
		// console.log("inner i = ", i);
		// if (i > 10); {
		// break outer;
		// }
	// } while(true);
// } while (i < 30)

// -----------------The for in loop
// var object = {
	// key1: "value1",
	// key2: "value2",
	// key3: "value3",
	// anyKeyName: "any data",
	// isObject: {
		// test: "test"
	// },
	// isArray: [1, 2, null]
// }
	// console.log(object.key1); //value1
	// console.log(object["key2"]);//value2
	
// for (var key in object) {
	// console.log(key); // key1 kwy2 key3
	// console.log(object[key]); // value1  value2 value3 
// }

// var array = [1, 2, 3, "string", null];
// array.someKey = "some value"; //dicrease work speed with array
// // index of 1 is 0
// // index of "string" is 3
// // 
// for (var index in array) {
	// console.log(index);
	// console.log(array[index]);
// }	

//Arrays
// var arr = [];
// var arr = [2, "string", null];
// var arr = new Array(); // []
// var arr = new Array(2, "string", null); // [2, "string", null]


  // var arr = new Array(2); // [undefined, undefined]

// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr);
// arr[0]= 'test';
// console.log(arr[0]);
// arr[0]= 'test';

// console.log(arr[0]== 'test');
// arr[0]= 'test';

// var arr = [1, 2, 3];
// console.log(arr.length); // 3
// console.log(arr.push(10)); //4 push add an element to the end of array
// console.log(arr.length); //4
// arr.push('test') > 4 ? console.log("We have a big array"): null; // We have a big array - we had already declined 4 elements in array, and now we pushed there 5 element"test". 5>4(true) so console.log("We...")
// // arr.push('test') > 5 ? console.log("We have a big array"): null; // nothing
// // arr.push('test') > 4 && console.log("We have a big array"); // We have a big array -- if left side is true so right side is working
// var newLength = arr.push("rest");
// console.log(newLength);//

// var z;
// if (z = 8 > 6) {
	// console.log('z = 8 > 6=', z); // z = 8 > 6=true
// }
// console.log ("Our array = ", arr); our array=[1, 2, 3, 10, "test", "rest"];

// to define is this exactly an array - return true or false
// console.log(Array.isArray(arr));

// ------to choose only objects
// var array = ['test', 123, [], {}, null]; 
// for (var i = 0; i < array.length; i++) {
	// var currentElement = array[i];
	// if (typeof currentElement == 'object') {
		// console.log(currentElement);
		// break;
	// }
	// console.log('iteration =', i+1);
// }
// var array = ['test', 123, [], {}, null]; 
// for (var i = 0; i < array.length; i++) {
	// var currentElement = array[i];
	// if (typeof currentElement == 'object' && !Array.isArray) {
		// console.log(currentElement);
		// break;
	// }
	// console.log('iteration =', i+1);
// }

// 
 // var array = ['test', 123, [], {}, null];
// var newArray = []; 
// for (var i = 0; i < array.length; i++) {
	// var currentElement = array[i];
	// if (typeof currentElement != 'object' && typeof currentElement != "function" || currentElement === null) {
		
		// newArray.push(currentElement);
	// }
		
	// console.log('iteration =', i+1);
// }
// console.log(newArray);

// cleaning up the array:
// array.length = 0;
// console.log(array);

var y =0; 
y+=y++;
document.write(3*(y%1)); //0