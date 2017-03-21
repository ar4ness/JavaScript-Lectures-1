// var array = [1, 2, 3, 4, 5];
// //console.log(_.chunk(array, 2));// to break array for some quantity of columns;

// // console.log(_.difference(array, [1, 3]));//[2,4,5]
// // console.log(_.difference(array, [1, 3], [4]));//[2,5]

// var array = [1.2, 2.3, 3.3, 4, 5.6];

// // console.log(_.differenceBy(array, [1, 3], [4], Math.floor));//[2.3, 5.6]

// console.log(_.differenceBy( [
// {
	// 'x': 1,
	// "y": 1
// },{
	// 'x': 2,
	// "y": 2
// }
// ],[
// {
	// 'x': 1,
	// "y": 2
// }
// ], 'x'));//Array[1]0: Object x: 2 y: 2__proto__: Objectlength: 1__proto__: Array[0]

// console.log(_.differenceWith( [
// {
	// 'x': 1,
	// "y": 1
// },{
	// 'x': 2,
	// "y": 2
// }
// ],[
// {
	// 'x': 1,
	// "y": 2
// }
// ], _.isEqual));//Array[2]0: Objectx: 1y: 1__proto__: Object1: Objectx: 2y: 2__proto__: Objectlength: 2__proto__: Array[0]

var users = [
{user: 'barney',active: false},
{user: 'fred',active: false},
{user: 'pebbles',active: true},
] 
// console.log(_.findIndex(users, function(object) {//0;
	// return object.user === "barney";
// }));
// //or
// console.log(_.findIndex(users, {'user': 'barney', 'active': false}));// 0 //keys must be in string formats
// //or
// console.log(_.findIndex(users, [ 'active', false]));//0
// //or
// console.log(_.findIndex(users, 'active'));//2

// console.log(_.find(users, 'active'));// Object {user: "pebbles", active: true}

// var object = {
	// key1: {name: 'test'},
	// key2: {name: 'rest'}
// }

// console.log(_.find(object, {name: 'rest'}));//Object {name: "rest"}

// console.log(_.findLastIndex(users, {'active': false}));//1

// console.log(_.head(users));//Object {user: "barney", active: false};
// console.log(_.first(users));//Object {user: "barney", active: false};
// console.log(_.last(users));//Object {user: "pebbles", active: true}

// console.log(_.intersection(users, [_.last(users)]));// Array[1]0: Objectactive: trueuser: "pebbles"__proto__: Objectlength: 1__proto__: Array[0]

// console.log(_.intersectionBy(users, [{user: 'pebbles', active: true}], 'user'));//Array[1]0: Objectactive: trueuser: "pebbles"__proto__: Objectlength: 1__proto__: Array[0]

/*Removes all given values from array using SameValueZero for equality comparisons.

Note: Unlike _.without, this method mutates array. Use _.remove to remove elements from an array by predicate.*/

//console.log(_.pull(users, _.last(users), users[0]));//Array[1]0: Objectactive: falseuser: "fred"__proto__: Objectlength: 1__proto__: Array[0]

//console.log(users);//Array[1]0: Objectactive: falseuser: "fred"__proto__: Objectlength: 1__proto__: Array[0]

//console.log(_.pullAll(users, [_.last(users), users[0]]));//Array[1]0: Objectactive: falseuser: "fred"__proto__: Objectlength: 1__proto__: Array[0]

//console.log(_.pullAllBy(users, [{'some' : 'rest', 'active': true}], 'active'));//Array[2]0: Objectactive: falseuser: "barney"__proto__: Object1: Objectactive: falseuser: "fred"__proto__: Objectlength: 2__proto__: Array[0]

// console.log(_.pullAllWith(users, [{'some' : 'rest', 'active': true}], function (obj1, obj2) {
	// //console.log(obj1);
	// //console.log(obj2);
	// return obj1.active == obj2.active;//Array[2]0: Objectactive: falseuser: "barney"__proto__: Object1: Objectactive: falseuser: "fred"__proto__: Objectlength: 2__proto__: Array[0]
// }));

// console.log(_.pullAt(users, [1, 3]));//Array[2]0: Objectactive: falseuser: "fred"__proto__: Object1: undefinedlength: 2__proto__: Array[0]
// console.log(_.pullAt(users, [0, 2]));//Array[2]0: Objectactive: falseuser: "barney"__proto__: Object1: undefinedlength: 2__proto__: Array[0]
// console.log(users);//Array[1]0: Objectactive: trueuser: "pebbles"__proto__: Objectlength: 1__proto__: Array[0]

//console.log(_.remove(users, {'active': false}));//Array[2]0: Objectactive: falseuser: "barney"__proto__: Object1: Objectactive: falseuser: "fred"__proto__: Objectlength: 2__proto__: Array[0]

//console.log(users);//Array[1]0: Objectactive: trueuser: "pebbles"__proto__: Objectlength: 1__proto__: Array[0]


// console.log(_.uniq([1,1,2,3,4]));// [1, 2, 3, 4]

// console.log(_.uniqBy(users, 'active'));
// console.log(_.uniqWith(users, function (object) {
	// return object.active;
// }));

//var array1 = [{user: 'bob',active: false},{user: 'pebbles',active: true}];

// console.log(_.union([1,2], [2,3], [3,6]));//[1, 2, 3, 6];
// console.log(_.union(users, array1));//Array[5]0: Object1: Object2: Object3: Object4: Objectlength: 5__proto__: Array[0]
// console.log(_.unionBy(users, array1, 'user'));//Array[4]0: Object1: Object2: Object3: Objectlength: 4__proto__: Array[0]
// console.log(_.unionWith(users, array1, _.isEqual));//Array[4]0: Object1: Object2: Object3: Objectlength: 4__proto__: Array[0]

// console.log(_.without(users, _.last(users)));//Array[2]0: Objectactive: falseuser: "barney"__proto__: Object1: Objectactive: falseuser: "fred"__proto__: Objectlength: 2__proto__: Array[0]

// console.log(users);//Array[3]0: Object1: Object2: Objectlength: 3__proto__: Array[0]

//////////////==========functions==============
//==after
function test() {
	console.log('test');
}
// var newTest = _.after(3, test);
// $('h1').on("click", newTest);

//==before
// function test() {
	// console.log('test');
// }
// var newTest = _.before(3, test);
// $('h1').on("click", newTest);

//==bind
// function test(arg1, arg2) {
	// console.log(arg1 + arg2);
// }
// var newTest = _.bind(test, null, 'test 1');
// newTest(' arg 2');//test 1 arg 2


// var newTest = _.bind(test, null, _, 'test 1');
// newTest(' arg 2');// arg 2test 1

// var object = {};
// var newBind = _.bindKey(object, "someMethod", 1, 5);
// object.someMethod = function (arg1, arg2) {
		// console.log(arg1, arg2)
	// };

// newBind(); // 1  5


// //==debounced
// var debounce = _.debounce(function() {
	// console.log('you stop clicking, at last!');
// }, 1000);
// $('h1').on("click", debounce);

// //==methods of debounce - loading
// var debounce = _.debounce(function() {
	// console.log('you stop clicking, at last!');
// }, 1000, {
	// loading: true
// });
// $('h1').on("click", debounce);

// //==methods of debounce - maxWait
// var debounce = _.debounce(function() {
	// console.log('you stop clicking, at last!');
// }, 1000, {
	// maxWait: 5000,
	// loading: true
// });
// $('h1').on("click", debounce);
//==methods of debounce - trailing
// var debounce = _.debounce(function() {
	// console.log('you stop clicking, at last!');
// }, 1000, {
	// //maxWait: 5000,
	// loading: true,
	// trailing: false
// });
// $('h1').on("click", debounce);

//==throttled

// function onScroll(e) {
	// console.log(window.scrollY);
// }
// $(window).on('scroll', onScroll);

// function onScroll(e) {
	// console.log(window.scrollY);
// }
// var newOnScroll = _.throttle(onScroll,100);
// $(window).on('scroll', newOnScroll);

// //==methods of throttle
// function onScroll(e) {
	// console.log(window.scrollY);
// }
// // var newOnScroll = _.throttle(onScroll,500);
// // $("h1").on('click', newOnScroll);


// var newOnScroll = _.throttle(onScroll,5000, {
	// leading: false
// });
// $("h1").on('click', newOnScroll);

// var newOnScroll = _.throttle(onScroll,5000, {
	// leading: true,
	// traillig: false
// });
// $("h1").on('click', newOnScroll);

//===clone
var object = {
	key1: 1,
	key2: 2,
	innerObject: {
		key1: 25,
		key2: 15
	}
}
// console.log(_.clone(object));//ObjectinnerObject: Objectkey1: 1key2: 2__proto__: Object
// console.log(_.clone(object) === object);//false
// console.log(_.clone(object).innerObject === object.innerObject);//true

// console.log(_.cloneDeep(object).innerObject === object.innerObject);//false

//console.log(_.assign({}, object));// main.js:236 Object {key1: 1, key2: 2, innerObject: Object}


object.__proto__ = {
	proto1: 40
}
//console.log(_.assignIn({}, object));
/*Object
innerObject
:
Object
key1
:
1
key2
:
2
proto1
:
40
__proto__
:
Object*/

//console.log(_.assign({}, object, [key1: 25]));


//console.log(_.defaults(object, {key1: 30, key25: 125}));
/*Object
innerObject
:
Object
key1
:
1
key2
:
2
key25
:
125
__proto__
:
Object*/

// console.log(_.defaultsDeep(object, {key1: 30, key25: 125, 
// innerObject: {
	// key1: 'rest',
	// key3: 'test'
// }}));

// function test (a, b, c) {
	// console.log(a + b + c);
// }
// var newTest = _.curry(test);

// //newTest (1)(2)(3);//6
// //newTest (1, 2, 3);//6
// //newTest (1, 2), (3);//6


// var newTest = newTest(1, 2);
// $("h1").on('click', function () {
	// newTest(25);//28
// });


function test (a, b, c) {
	console.log(a - b + c);
}
var newTest = _.curry(test);
var newTest = newTest(_, 2, 10);
$("h1").on('click', function () {
	newTest(25);//33
})










































