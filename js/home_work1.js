// 21.ex1
// var x='jh';
// var y= 10.0;
// var z= '15';
 // console.log(typeof x==="string" && y===10 && z>=y);

// 21.ex2 
// var x=11;
// var y='10';
// var z=8;
// console.log(x>10 && x>y && typeof y === "number" || (z%2 == 0));

// 21.ex3

// x='60';
// y='50';
// z=75;
// console.log((x+y)%10==0);
// console.log(((x+y+z)/3)*2>100);
// console.log((x+y)%10===0 && (((x+y+z)/3)*2>100) );

// 21.ex4
// var x;
// var y = 4;
// var z = 3;
// var x = (y%3===0) ? y  : (z>y) ? z : y+z;
// console.log(x);

// 22.ex1
// var x;
// var y = "string";
// var z = '80';
// if (typeof y!= "number" || y!= null) {
	 // x=y;
 // }
 // else if (typeof z!= "number" || z!= null) {
	 // x=z;
 // }
 // else {
	 // x = null;
 // }
// console.log(x);

// 22.ex2.
// var x;
// var y = '10';
// var z = 2;
// if (y!==false) {
	// x="true";
// }
 // else {
 // x=z
// }
// console.log(x);

//22.ex3
// var x;
// var y = 10;
// var z = "9";
// switch (y) {
// case y=0: 
	// x=y;
	// break;
// case y = false:
	// x=y;
	// break;
// case y = undefined:
	// x=y;
	// break;
// case y = null:
	// x=y;
	// break;
	// default:
	// x= +z;
// }
// console.log(x);

// //22.ex4
// var x;
// var y = NaN;
// var z = "9";
// switch (y) {
// case 0: 
// case false:
// case undefined:
// case null:
	// x=y;
	// break;
	// default:
	// x= +z;
// }
// console.log(x);

//23.ex1

// var array = ["", "0", 0, true, undefined, NaN, 234, "ololo", -1, [], {}];
// var newArray = [];
// var currentElement = array.length;
// console.log(currentElement);
// console.log(array[2]);
// for(var i = 0; i < currentElement; i++ ){
	// if (array[i]) {
		// newArray.push(array[i]);
	// }
// } console.log(newArray);

//23.ex2

// var arr = ["0", 0, undefined, 234, 15, -29, "-287", "", [1, 2, 3], {key:"value"}, "test", false];
// var newArr = [];
// var currentElement = arr.length;
// for (var i=0; i<currentElement; i++) {
	// if ((typeof arr[i] === "number" || +arr[i]) && arr[i] > 0) {
		// newArr.push(arr[i]);
	// }
// } console.log(newArr);

// var arr = ["0", 0, undefined, 234, 15, -29, "-287", "", [1, 2, 3], {key:"value"}, "test", false];
// var newArr = [];
// var currentElement = arr.length;
// var i=0;
// while (i<currentElement) {
	// if ((typeof arr[i] === "number" || +arr[i]) && arr[i] > 0) {
		// newArr.push(arr[i]);
	// }
	// i++;
// } console.log(newArr); 

// var arr = ["0", 0, undefined, 234, 15, -29, "-287", "", [1, 2, 3], {key:"value"}, "test", false];
// var newArr = [];
// var currentElement = arr.length;
// var i=0;
	// do {
	// if ((typeof arr[i] == "number" || +arr[i]) && arr[i] > 0 ){
		
	// newArr.push(arr[i])};
	 // i++;
	// }
	// while (i<currentElement);
// console.log(newArr);

//24.ex1
// var arr = [],
	// newArr1 = [],
	// newArr2 = [],
	// newArr3 = [];
// for (var i = 0; i < 100; i++) {
	// arr.push(i);
// }
// console.log(arr);
// var counter = 0;
// for (var i=0; i<arr.length; i++) {
	// if (counter===0) {
		// newArr1.push(arr[i]);
		// counter++;
	// } else if (counter===1) {
		// newArr2.push(arr[i]);
		// counter++;
	// } else {
		// newArr3.push(arr[i]);
		// counter=0;
	// }
// }
// console.log(newArr1);
// console.log(newArr2);
// console.log(newArr3);

// var arr = [],
	// newArr1 = [],
	// newArr2 = [],
	// newArr3 = [];
// for (var i = 0; i < 100; i++) {
	// arr.push(i);
// }
// console.log(arr);
// var counter = 0;
// var lenghtArr = arr.length;
// while (counter<arr.length) {
		// newArr1.push(arr[counter]);
		// newArr2.push(arr[counter + 1]);
		// newArr3.push(arr[counter + 3]);
		// counter+=3;
	// }
// console.log(newArr1);
// console.log(newArr2);
// console.log(newArr3);


// for (var i = 0; i < arr.length; i++) {
	// arr.push(Math.floor(Math.random() *  (max - min + 1) + min));
// }
// var rand = 0 + Math.floor(Math.random() * (100 + 1 - 0));
// arr.push(arr[rand]);
// console.log(arr);


/////New!!!!!

// s.5 ex.1 +
// function forSummator(x, y) {
	// if (typeof x === "number" || x == 0 && typeof y === "number" && y > x) {
		// var z = 0;
		// for (var i = x; i <= y; i++) {
		// z+=i;
		// }
	// return z;
// }
// }
// console.log(forSummator(-10, 0));


//s5. ex.2 +?

// function positiveMultiplier(x, y, z) { 
// var a, x, y, z;
// if (typeof x === 'number' && x > 0 && z > y) {
	
	// for (x = 1; x <= z; x++) {
		// a = y * z;
	// } 
	
	// }return a;
// }
// console.log(positiveMultiplier(3, 3, 5));


// // // function positiveMultiplier(x, y, z) {
// // // var result = true;
	// // // for(y; y<=x; y+=x){
		// // // if (isPositive(y)) result *=y;
	// // // }
// // // return result === true ? 0 : result;
// // // }
// // // console.log(positiveMultiplier(3, 3, 5));


// s5. ex.3 +
// var array = [];
// function arraySummator(array) {
	// if(!Array.isArray(array) || !array.length) {
		// return 'invalid data';
	// }
	
	// var z = 0;
	// for (var i = 0; i < array.length; i++) {
		// z += array[i];	
	// }
		// return z;
// }
// console.log(arraySummator([7, 8, 0, 5, 4]));

// // function range(start, end, step) {
  // // if (step == null) step = 1;
  // // var array = [];

  // // if (step > 0) {
    // // for (var i = start; i <= end; i += step)
      // // array.push(i);
  // // } else {
    // // for (var i = start; i >= end; i += step)
      // // array.push(i);
  // // }
  // // return array;
// // }

// s5. ex.4 +++

// // var array = [];
// // function arrayToConcatString(array) {
	// // for (var i = 0; i < array.length; i++){
		// // if (typeof array[i] === "string"){
			// // var result = array.join(" ");	
			// // return result;
		// // }
	// // }return "no matches";
	// // }
// // console.log(arrayToConcatString(['v', 25, 35, null, NaN, [], 5]));

// var array = [];
// var stringArray = [];
// function arrayToConcatString(array) {
	 // if(!Array.isArray(array)) {
		// return 'invalid data';
	// for (var i = 0; i < array.length; i++) {
		// if (typeof array[i] === "string"){
			 // stringArray.push(array[i]);	
		// }
	// }return stringArray.join(" ");
	// }
// console.log(arrayToConcatString(["i",  25,  "learn", null,  "java", undefined, [], '-', 'script', '6']));

// // // function arrayToConcatString(array) {
	 // // // if(!Array.isArray(array)) {
		// // // return 'invalid data';
		// // // var result = 0;
	// // // for (var i = 0; i < array.length; i++) {
		// // // if (typeof array[i] === "string"){
			 // // // result += array[i];	
		// // // }
	// // // }return result;
	// // // }
// // // }
	// // // console.log(arrayToConcatString(["i",  25,  "learn", null,  "java", undefined, [], '-', 'script', '6']));
	
	
// s.6 ex.1 ---

// var matrix = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ];
// function getPositionOfFive (matrix) {
	// return (matrix[1][1]);
// }
// console.log(getPositionOfFive (matrix))

//return "no matches found"

// var matrix = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ];
// // console.log(matrix);
// // function getPositionOfFive (matrix, x) {
	// // for(var i = 0; i < matrix.length; i++) {
		// // if (matrix[i] == 5) return i;
	// // } return i;
	
// // }
// // console.log(getPositionOfFive (matrix, 5))

// function getPositionOfFive (matrix, x) {
	// for(var i = 0; i < matrix.length; i++) {
		// for(var j = 0; j < matrix[i].length; j++) {
			// if (matrix[i] === x || matrix[j] === x) {
				// return (matrix[i][j]);
				// break;
			// }
			// return "no matches";	
		// }
	// }
	
// }
//console.log(getPositionOfFive(matrix, 5));





// s.6 ex.2+++

// function getArrayOfOdds(x, y) {
	// var arrayOfOdds = [];
	// if (typeof x === "number" && typeof y === "number" ) {
		// for (var i = x; i <= y; i++) {
			// if (i % 2 === 1) arrayOfOdds.push(i)
	// }
// }return arrayOfOdds;
// }
// console.log(getArrayOfOdds(-7, 10));


//s.7 ex.1 +++
	// // var a = 0;
	// // var b = 1;
	// // function elementFib(x) {
		// // for (var i = 2; i <= x; i++) {
			// // var z = a + b;
			// // a = b;
			// // b = z;
		// // };
		// // return z + i;
	// // }
	// // console.log(elementFib(7));	
	
	
	// var a = 0;
	// var b = 1;
	// var z = 1;
	// var s = 0;
	// function summOfFibonachi(x) {
		// for (var i = 1; i <= x; i++) {
			// z = a + b;
			// a = b;
			// b = z;
			// s = s + z;
		// }
		// return s;
	// }
	// console.log(summOfFibonachi(5));

// s.7 ex.2

// var newArray = [];
// var x = []; 
// var y = '';
// var z = newArray.length;
// function getElementByType(x, y, z) {
	
	// for (var i = 1; i <= x.length; i++) {
		// switch(true) {
		// case (typeof y === "string" && x[i] === 'string'): newArray.push(x[i]);
		// break;
		// case (typeof y  === "number" && x[i] === "number"): newArray.push(x[i]);
		// break;
		// case typeof y === "boolean": newArray.push(x[i]);
		// break;
		// case array.isArray(y): newArray.push(x[i]);
		// break;
		// case typeof y === "object": newArray.push(x[i]);
		// break;
		// default:
		// return 'undefined';
  // }	
// } return newArray;
// }	
// console.log(getElementByType([1, 2, 3, 5, 9], "number", 3));	

// s.7 ex.3

var array = [];
var stringArray = [];
var elseArray = [];
function arrayToObject(array) {
	for (var i = 0; i < array.length; i++) {
		if (typeof array[i] === 'string'){
			stringArray.push(array[i]);
		}else (typeof array[i] !== 'string')
			elseArray.push(array[i]);		
	} 
	var object = {};
	for (var i = 0; i < stringArray.length; i++) {
		i < elseArray.length ? obj[stringArray[i] = elseArray[i] : obj[stringArray[i]] = null];
	} return obj;
}
console.log(arrayToObject([1, 5, 'gh', null, 'key', NaN]));


		
	