// Objects
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


// // // perebor of values (by using for in loop)
// for (var key in object) {
	// console.log(object[key]); // new added values are set to back
// }	

var obj = {
	'1': 'value1',
	'25': 'value2',
	'10': 'value3',
	'test': 'value4',
	'and': 'value5',
	'11': 'value6' 
} // console.log will console it: 1 10 11 25 test and

for (var key in obj) {
	console.log(key);
}
for (var key in obj) {
	console.log(+key);
} //console.log will console it: 1 10 11 25 NaN  - string cant be turned to number


// // 
var keys = Object.keys(obj);
console.log(keys); // output will be massiv

for (var i = 0; i < keys.length; i++) {
	console.log(keys[i], obj[keys[i]]);
}

/* configurable - if itis set to rue - it forbit changing attribtes of values and deleting it.  False by default.
enumerable - show will the property counting in Object.keys() or by loop for...in. False by default.
value - attribute , can be any acceptable property.Undefined bu default
writable - can we change property to another property.False by default
get - function-getter. Undefined bu default.
set - function-setter. Undefined bu default
 */
// attributes of values
// !!!!thre's some mistake in this code/ check it!
// var object = {
	// 'key1': 10,
	// 'key2': 15
// }

// object.defineProperty(object, 'key1', (
	// writable: false
// ));
// object.key1 = 25;
// console.log(object);

// object.defineProperty(object, 'key1', (
	// writable: true
// ));


// object.key1 = 25;
// console.log(object);

// object.defineProperty(object, 'key1', (
// configurable: false,
	// writable: false,
	// enumerable: false
// ));
// console.log(Object.keys(object));
// object.key1 = 'test';
// console.log(object.key1);

// object.defineProperty(object, 'key1', {
	// enumerable: false
// });

// Object.defineProperty(object, 'key1', [
// value:10,
// get.function () {return this.key1 / 3 },
// set.function (newValue) {this.key * 2},

// ])

// console.log(object)

// !!!!check it immediately!!!!

var object = {
	firstName: "test",
	lastName: "test2"
}

// Object.defineProperty(object, 'fullname', {
// get: function() {
	// return this.firstName+""+this.lastName; 
	// },
// set: function(newValue) {
	// this.firstName = newValue.split(" ")[0];
	// this.lastName = newValue.split(" ")[1];
	// }
// });
// console.log(object.fullName);

// Object.defineProperties(object, {
	// 'fullname':  {
		// get: function() {
			// return this.firstName+""+this.lastName; 
		// },
		// set: function(newValue) {
			// this.firstName = newValue.split(" ")[0];
			// this.lastName = newValue.split(" ")[1];
	// },
	// },
	// 'age': {
		// value: 10,
		// enumerable : true,
		// writable: false
	// }
	// })
// console.log(object.fullname);
// console.log(object.age);


// Methods of arrays

// var array = [0, 1];
// console.log('push 10:', array.push(10)); //3
// console.log(array); // [0, 1, 10]

// console.log(array.pop()); //10
// console.log(array); // [0, 1]

// console.log(array.unshift(2656)); //3
// console.log(array); // [2656, 0, 1]

// console.log(array.shift()); //2656
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

// var url = 'http://google.com.mail';
// var urlArray = url.split('/');
// console.log(urlArray);
// if (urlArray[urlArray.length - 1] === 'mail') {
	// console.log("We are on mail");
// }

// var objectString = 'test:value1, test2:value2';
// function stringToObject(string) {
	// var newObject = {};
	// var keysWithValues = string.split(',');
	// for (var i = 0; i< keysWithValues.length; i++) {
		// var keyAndValue = keysWithValues[i].split(':');
		// newObject[keysWithValues[0]] = keyAndValue[i];
	// }
	// return newObject;
// }
// console.log(stringToObject(objectString));


// var string = 'some String';
// console.log(string.split(' ')); // ['some', 'string']

// var array = ['ab', 'bc', 'cd'];
// console.log(array.join()); // ab,bc,cd
// console.log(array.join('!'));// ab!bc!cd;


// console.log(['a', 'b', 'c', 'd'].slice(1, 3));// ['b', 'c'];
// console.log(['a', 'b', 'c', 'd'].slice(1));// ['b', 'c', 'd'];
// console.log(['a', 'b', 'c', 'd', 'e'].slice(-3, -1));// ['c', 'd'];

// console.log([1, 2, 19].sort()); //[1, 19, 2];

// var sortedArray = [1, 2, 15, 10, 9];
// sortedArray.sort(function (a, b) {
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

//var sortedArray = []; // write it down!!


//revers to change the 
// var arr = [1, 2, 3];
// arr.reverse(); // without parameters
// console.log(arr); //[3, 2, 1];

// var newArray = array.concat([3, 4], 5);
// console.log(newArray);
// console.log(arr);

// var array = ['test', 2, 25];
// array.forEach(function(element, index, array) {
	// console.log(element, index, array)
// })
 
 // var array = ['test', 2, 25];
// array.forEach(function(element, index, array) {
	
	// if (typeof element === 'number')
		// array[index] = element.toString();
	// console.log(element, index, array)
// })

 // var array = ['test', 2, 25];
 // var arrayOfNumbers = array.filter(function(element, index, array) {
	
	// return typeof element === 'number';
		
	
// })
// console.log(arrayOfNumbers); // [2, 25];



// var newArray = array.map(function (element, index, array) {
	// return element * 10;
// var array = [1, 2, 3, 4, 5];
// });
// console.log(array); // [1, 2, 3, 4, 5]
// console.log(newArray);// [10, 20, 30, 40, 50];

// var array = [25, 456, 345, 'string'];
// var isAllNumbers = array.every(function(element) {
	// return typeof element === 'number';
// })
// console.log(isAllNumbers);// false

// array.pop();
// isAllNumbers = array.every(function(element) {
	// return typeof element === 'number';
// })
// console.log(isAllNumbers); // true

// var isArrayHasNull = array.some(function(element) {
	// return element === null;
// })
// console.log(isArrayHasNull);// false
// array.push(null);
// var isArrayHasNull = array.some(function(element) {
	// return element === null;
// })
// console.log(isArrayHasNull);// true



// var array = [1, 2, 3, 4, 5];
// var summOfNumbers = array.reduce(function (startValue, element, index, array ) {
	// return startValue + element;
// }, 0);
// console.log(summOfNumbers); //15

// var array = [1, 2, 3, 4, 5];
// var summOfNumbers = array.reduce(function (startValue, element, index, array ) {
	// return startValue + element;
// }, -10);
// console.log(summOfNumbers); //15

// var array = [1, 2, 3, 4, 5];
// var summOfNumbers = array.reduce(function (startValue, element, index, array ) {
	// return startValue + element;
// });
// console.log(summOfNumbers); //15

// var users = [{
	// user1: 'name1',
// }, {
	// user2: 'name2',
// }, {
	// user3: 'name3',
// }
// ];

// var objectsWithNames = users.reduce(function (startValue, element, index, array ) {
	// startValue['user'+(index + 1)] = element['user'+(index + 1)];
	// return startValue;
// }, {});
// console.log(objectsWithNames); //15





