//////////////// Objects
// objects contain any number of properties
// each property has a name and a value
// Object.length has a value of 1
// Object.prototype - Allows the addition of properties to all objects of type Object
// Arrays use numbered indexes( we use them when we want the element names to be strings(text));
//Objects use named indexes( we use them when we want the element names to be numbers);
//////////////// creating an object:
// var obj = {};
// var obj = new Object();
// var object = {
	// key1: 'value1',
	// key2: null,
	// "user":{
		// 'firstname': "Vasya",
		// lastname: "Sidorov"
	// }
// };

// var object = {};
// object.key1 = 'value1';
// object.key2 = null;
// object["user"] = {
	// 'firstname': "Vasya",
	// lastname: "Sidorov"
// };
// console.log(object.key1); //-- value1
	// // value of object can be anything
	
// //////////////////////// deleting of values
//the delete operator removes a property from an object
/*It returns true if the deletion was successful, and false if the operand could not be deleted. Not all variables and properties can be deleted: some built-in core and client-side properties are immune from deletion, and user-defined variables declared with the var statement cannot be deleted. If delete is invoked on a nonexistent property, it returns true.*/
// console.log(object.key1);
// delete object.key1;
// console.log(object.key1); //-- undefined

// ////////// to check is there a value in object
// if(object.key1 !== undefined) {
	// // some action
// }	
// if('key1' in object) {/* in tells that property is in object even if it is undefined*/
	// // some action
// }	
// //example:
// object.key1 = undefined;
// if(object.key1 !== undefined) {
	// console.log('no result');
// }	
// if('key1' in object) {
	// console.log('has result');
// }	// -- has result


// // // value bust (by using for...in loop)
// for (var key in object) {
	// console.log(object[key]); // new added values are set to back
// }	

// var obj = {
	// '1': 'value1',
	// '25': 'value2',
	// '10': 'value3',
	// 'test': 'value4',
	// 'and': 'value5',
	// '11': 'value6' 
// } // console.log will console it: 1 10 11 25 test and

// // for (var key in obj) {//it works only with strings, it is sorted in right order - first numbers then strings!!
	// // console.log(key)//1 value1
					// // //10 value3
					// // //11 value6
					// // //25 value2
					// // //test value
// // }
// // for (var key in obj) {
	// // console.log(+key);
// // } //console.log will console it: 1 10 11 25 NaN  - string cant be turned to number

 // ////// value bust (by using Object.keys())
// // // difference between Object.keys() and array is that array output properties of prototype (nasledyemie), while Object.keys outputs only own properties (sobstvennie);
// var keys = Object.keys(obj);
// //console.log(keys); // output will be array

// for (var i = 0; i < keys.length; i++) {
	// console.log(keys[i], obj[keys[i]]);
// }


/////// attributes of properties
/* configurable - if it is set to true - it forbit changing attribtes of values and deleting it.  False by default.
enumerable - show if will be the property counting in Object.keys() or by loop for...in. False by default. if false - it will not be counting.
value - attribute , can be any acceptable property.Undefined bu default
writable - can we change property to another property.False by default
get - function-getter. Undefined bu default.
set - function-setter. Undefined bu default
 */
 
 // attributes for propertiies are used with methods object.defineProperty(), and object.defineProperties()

// !!!!thre's some mistake in this code/ check it! -done!
// var object = {
	// 'key1': 10,
	// 'key2': 15
// }

// Object.defineProperty(object, 'key1', {
	// writable: false // we forbit to write another property
// });
// object.key1 = 25;
// console.log(object.key1);//10
// console.log(object);//object {key1:10, key2: 15}

// Object.defineProperty(object, 'key1', {
// writable: true
// });
// object.key1 = 25;
// console.log(object.key1);//25

// Object.defineProperty(object, 'key1', {
	// configurable: false,
	// writable: false,
	// enumerable: false
// });
// console.log(Object.keys(object));// ['key2']
// object.key1 = 'test';
// console.log(object.key1); //10

// Object.defineProperty(object, 'key1', {
	// configurable: true // all properties are blocked for change
// });

// Object.defineProperty(object, 'test', {
	// enumerable: true
// });
// console.log(object.test);// undefined
// object.test = "rest"; 
// console.log(object.test);// still undefined

// Object.defineProperty(object, 'key1', {
	// get: function () { return this.key1 / 3 },
	// set: function (newValue) { this.key * 2 }

// });

// console.log(object); // Object {key2: 15}

// Object.defineProperty(object, 'test', {
	// get: function () { return this.value / 3 },
	// set: function (newValue) { this.value * 2 }

// });

// console.log(object.key1); // 10
// console.log(object.test); // NaN -- undefined/3 = NaN

// Object.defineProperty(object, 'test', {
	// get: function () { return this.value / 3 },
	// set: function (newValue) { this.value = newValue * 2 }

// });

// console.log(object.key1); // 10
// object.test = 10;
// console.log(object.test); // 6.666666666666667 - 10*2=20 20/3 = 6.666...

// // !!!!check it immediately!!!!

// var object = {
	// firstName: "test",
	// lastName: "test2"
// }

// Object.defineProperty(object, 'fullName', {
	// get: function() {
		// return this.firstName+" "+this.lastName; 
	// },
	// set: function(newValue) {
		// this.firstName = newValue.split(" ")[0];
		// this.lastName = newValue.split(" ")[1];
	// }
// });
// console.log(object.fullName); // test test2
// object.fullName = "Vasya Pupkin";
// console.log(object.fullName); // Vasya Pupkin
// console.log(object); //Object....
// object.firstName = "Sidor";
// console.log(object.fullName); // Sidor Pupkin


// var object = {
	// firstName: "test",
	// lastName: "test2"
// }

// Object.defineProperties(object, {
	// 'fullName':  {
		// get: function() {
			// return this.firstName+" "+this.lastName; 
		// },
		// set: function(newValue) {
			// this.firstName = newValue.split(" ")[0];
			// this.lastName = newValue.split(" ")[1];
	// },
	// },
	// 'age': {
		// value: 18,
		// enumerable : true,
		// writable: false
	// }
	// })
// console.log(object.fullName);// test test2;
// console.log(object.age);//18


///////////////////////////////// Methods of arrays


//push() - Adds new elements to the end of an array, and returns the new length
// var array = [0, 1];
// console.log('push 10:', array.push(10)); //3
// console.log(array); // [0, 1, 10]


//pop() - Removes the last element of an array, and returns that element
// console.log(array.pop()); //10
// console.log(array); // [0, 1]


////unshift() - Adds new elements to the beginning of an array, and returns the new length
// console.log(array.unshift(2656)); //3
// console.log(array); // [2656, 0, 1]


// shift() - Removes first element of an array, and returns that element
// console.log('shift;', array.shift()); //2656
// console.log(array); // [0, 1]


// splice
// var array = [0, 1, 2, 3];
// console.log(array.splice(1, 2, 5, 6, 7, 8));//[1, 2];
// console.log(array); //[0, 5, 6, 7, 8, 3];

// console.log(array.splice(1, 0, 'test'));//[];
// console.log(array); //[0, 'test', 5, 6, 7, 8, 3];


// //split
// var string = 'ab,bc,cd';
// console.log(string.split(',', 2)); //['ab', 'bc'];

// var url = 'http://google.com/mail';
// var urlArray = url.split('/');
// console.log(urlArray);// ["http:", "", "google.com", "mail"]
// if (urlArray[urlArray.length - 1] === 'mail') {
	// console.log("We are on email");
// }

// var objectString = 'test:value1,test2:value2';
// function stringToObject(string) {
	// var newObject = {};
	// var keysWithValues = string.split(',');
	// for (var i = 0; i< keysWithValues.length; i++) {
		// var keyAndValue = keysWithValues[i].split(':');
		// newObject[keyAndValue[0]] = keyAndValue[i];
	// }
	// return newObject;
// }
// console.log(stringToObject(objectString)); // Object {test: "test", test2: "value2"}


// var string = 'some String';
// console.log(string.split(' ')); // ['some', 'string']

// var array = ['ab', 'bc', 'cd'];
// console.log(array.join()); // ab,bc,cd
// console.log(array.join('!'));// ab!bc!cd;


// console.log(['a', 'b', 'c', 'd'].slice(1, 3));// ['b', 'c'];
// console.log(['a', 'b', 'c', 'd'].slice(1));// ['b', 'c', 'd'];
// console.log(['a', 'b', 'c', 'd', 'e'].slice(-3, -1));// ['c', 'd'];

// console.log([1, 2, 19].sort()); //[1, 19, 2];


/* method sort is sortins elements of array like strings, but he can use function comparator, which takes in 2 arguments, elements for comparison and to compare elements like you need*/

// method sort is changing  parent array!!!!
// var sortedArray = [1, 2, 15, 10, 9];
// sortedArray.sort(function (a, b) { // function comparator
	// if (a < b)
		// return -1;
	// if (a > b)
		// return 1;
// });
// console.log(sortedArray); //[1, 2, 9, 10, 15];

// or shorter:
// var sortedArray = [1, 2, 15, 10, 9];
// sortedArray.sort(function (a, b) {
		// return a - b;
// });
// console.log(sortedArray); //[1, 2, 9, 10, 15];

// var sortedArray = ['Art', "BEst", 'rest', 'cmd']; // write it down!!
// sortedArray.sort(function (string1, string2) {
	// if (string1.toLowerCase() > string2.toLowerCase())
		// return 1;
	// if (string1.toLowerCase() < string2.toLowerCase())
		// return -1;
	
// })
// console.log(sortedArray); //["Art", "BEst", "cmd", "rest"] 

// var sortedArray = ['art', "BEst", 'rest', 'cmd']; 
// sortedArray.sort(function (string1, string2) {
	// if (string1 > string2)
		// return 1;
	// if (string1 < string2)
		// return -1;
	
// })
// console.log(sortedArray); // "BEst", art", "cmd", "rest"]  // Upper symbol of letter is bigger then little letter


//////revers is changing porjadok of elements in array to  
// var arr = [1, 2, 3];
// arr.reverse(); // without parameters
// console.log(arr); //[3, 2, 1];

// var array = [1, 2, 3];
// var newArray = array.concat([3, 4], 5);
// console.log(newArray); // [1, 2, 3, 3, 4, 5]
// console.log(array);// [1, 2, 3]


// var arr1 = [1, 2, 3];
// var arr2 = [11, 12, 13];
// var arr3 = ['uy', 'dwqf', 'dfdg'];
// console.log(arr1.concat(arr2, {}, null, arr3)); // [1, 2, 3, 11, 12, 13, Object, null, "uy", "dwqf", "dfdg"]


// method indexOf() - Search the array for an element and returns its position
// var object = {
	// "test": "rest"
// };
// var array = [1, 'test', object, 1];
// console.log(array.indexOf(1)); //0
// console.log(array.indexOf('test')); //1
// console.log(array.indexOf(object)); //2
// console.log(array.indexOf({'test': 'rest'})); //-1
// console.log(array.lastIndexOf(1)); //3
// if (~array.indexOf('test'))
	// console.log('we have test in array');// we have test in array

// var array = ['test', 2, 25];
// array.forEach(function(element, index, array) {
	// console.log(element, index, array)
// })/*test 0 ["test", 2, 25]
//  2 1 ["test", 2, 25]
//  25 2 ["test", 2, 25]*/
 
 // var array = ['test', 2, 25];
// array.forEach(function(element, index, array) {
	// console.log(element, index, array);
	// if (typeof element === 'number')
		// array[index] = element.toString();
	// console.log(element, index, array)
// }) /*test 0 ["test", 2, 25]
 // 2 1 ["test", 2, 25]
 // 25 2 ["test", 2, 25]
 // test 0 ["test", '2', 25]
 // 2 1 ["test", '2', 25]
 // 25 2 ["test", '2', '25']
 // */

 // filter is filtring old array and return new with set parameters
 var array = ['test', 2, 25];
 var arrayOfNumbers = array.filter(function(element, index, array) {
	return typeof element === 'number';
})
console.log(arrayOfNumbers); // [2, 25];


/* map() - calls a provided  function once for each element in an array, in order, and constructs a new array from the results. It is invoked only for indexes of the array which have assigned values; it is not invoked for indexes that are undefined, those which have been deleted or which have never been assigned values.*/

// var newArray = array.map(function (element, index, array) {
	// return element * 10;
// var array = [1, 2, 3, 4, 5];
// });
// console.log(array); // [1, 2, 3, 4, 5]
// console.log(newArray);// [10, 20, 30, 40, 50];

/*every() calls a provided  function once for each element in an array, and return true if  for every element function returned true*/

// var array = [25, 456, 345, 'string'];
// var isAllNumbers = array.every(function(element) {
	// return typeof element === 'number';
// });
// console.log(isAllNumbers);// false

// array.pop();
// isAllNumbers = array.every(function(element) {
	// return typeof element === 'number';
// })
// console.log(isAllNumbers); // true


/* some() - calls a provided  function once for each element in an array, and return true if at least for one element function returned true*/

// var isArrayHasNull = array.some(function(element) {
	// return element === null;
// })
// console.log(isArrayHasNull);// false
// array.push(null);
// var isArrayHasNull = array.some(function(element) {
	// return element === null;
// })
// console.log(isArrayHasNull);// true


// reduce = callback
// var array = [1, 2, 3, 4, 5];
// var summOfNumbers = array.reduce(function (startValue, element, index, array ) {
	// return startValue + element;
// }, 0);// -- it is a start value
// console.log(summOfNumbers); //15

// var array = [1, 2, 3, 4, 5];
// var summOfNumbers = array.reduce(function (startValue, element, index, array ) {
	// return startValue + element;
// }, -10);
// console.log(summOfNumbers); //5

// var array = [1, 2, 3, 4, 5];
// var summOfNumbers = array.reduce(function (startValue, element, index, array ) {
	// return startValue + element;
// }); // we can do not provide this element start value -1 ,  perebor starts from 2
// console.log(summOfNumbers); //15

var users = [{
	user1: 'name1',
}, {
	user2: 'name2',
}, {
	user3: 'name3',
}
];

var objectsWithNames = users.reduce(function (startValue, element, index, array ) {
	startValue['user'+(index + 1)] = element['user'+(index + 1)];
	return startValue;
}, {});
console.log(objectsWithNames); // Object {user1: "name1", user2: "name2", user3: "name3"}





