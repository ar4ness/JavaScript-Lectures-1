/*_.chunk(array, [size=1]) - делит массив array на массивы с количеством элементов size. Возвращает массив массивов._.chunk(['a', 'b', 'c', 'd'], 2);// => [['a', 'b'], ['c', 'd']]
_.difference(array, [values]) - возвращает массив тех значения первого массива, которых нет во втором._.difference([2, 1], [2, 3]);// => [1]
_.differenceBy(array, [values], [iteratee=_.identity]) - то же самое, что и предыдущий метод, но принимает 3м аргументом функцию которая вызывается для каждого элемента массива перед сравнением или ключ/ключи свойства в объекте по котором будет проходить сравнение._.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);// => [1.2]_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');// => [{ 'x': 2 }]
_.differenceWith(array, [values], [comparator]) - то же что и предыдущие 2 метода, но 3м аргументом принимает функцию компаратор, и вернёт массив тех элементов для которых функция вернёт false.var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);// => [{ 'x': 2, 'y': 1 }]
*/

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


/*_.findIndex(array, [predicate=_.identity], [fromIndex=0]) - возвращает индекс первого найденного в array по predicate начиная с индекса fromIndex элемента или -1.var users = [  { 'user': 'barney',  'active': false },  { 'user': 'fred',    'active': false },  { 'user': 'pebbles', 'active': true }];_.findIndex(users, function(o) { return o.user == 'barney'; }); // => 0_.findIndex(users, { 'user': 'fred', 'active': false }); // => 1_.findIndex(users, ['active', false]); // => 0_.findIndex(users, 'active'); // => 2
_.find(collection, [predicate=_.identity], [fromIndex=0]) - метод аналогичный _.findIndex, но возвращает не индекс элемента, а сам элемент и умеет искать не только в массивах, но и в объектах.
*/

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


/*_.findLastIndex(array, [predicate=_.identity], [fromIndex=0]) и _.findLast(collection, [predicate=_.identity], [fromIndex=0]) - методы аналогичные _.findIndex и _.find, но ищут элемента не с начала коллекции, а с конца.
_.head(array), _.first(array) - возвращают первый элемент массива или первый символ строки. В отличии от array[0] никогда не бросает ошибок, а возвращает undefined если значения не найдено.
_.last(array) - метод аналогичен _.head и _.first, но возвращает последний элемент или символ.
_.intersection, _.intersectionBy и _.intersectionWith - методы обратные _.difference, _.differenceBy и _.differenceWith находят не отличающиеся элементы, а совпадающие.
*/

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

/*_.pull(array, [values]) - удаляет из массива array все элементы values.var array = ['a', 'b', 'c', 'a', 'b', 'c'];_.pull(array, 'a', 'c');console.log(array); // => ['b', 'b']
_.pullAll(array, [values]) - метод аналогичный pull, но значения для удаления принимает в виде массива. var array = ['a', 'b', 'c', 'a', 'b', 'c']; _.pull(array, ['a', 'c']); console.log(array); // => ['b', 'b']
_.pullAllBy(array, values, [iteratee=_.identity]) - метод аналогичный pullAll, но третьим аргументом принимает ключ для сравнения или метод который будет вызываться для каждого элемента массива перед сравнением. var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }]; _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x'); // => [{ 'x': 2 }] console.log(array); // => [{ 'x': 2 }]
_.pullAllWith(array, values, [comparator]) - метод аналогичный другим _.pull методами, но с функцией компаратором в третьем параметре. Удаляет из массива те элемены для которых функция вернёт true.var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];_.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);console.log(array); // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
_.pullAt(array, [indexes]) - удаляет из массива элементы по указанным вторым аргументом индексам и возвращает массив удалённых элементов.var array = ['a', 'b', 'c', 'd'];var pulled = _.pullAt(array, [1, 3]);сonsole.log(array); // => ['a', 'c']сonsole.log(pulled); // => ['b', 'd']

*/

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


/*_.remove(array, [predicate=_.identity]) - удаляет из массива все элементы для которых predicate true.var array = [1, 2, 3, 4];var evens = _.remove(array, function(n) {  return n % 2 == 0;});console.log(array); // => [1, 3]console.log(evens); // => [2, 4]
_.uniq(array) - возвращает массив уникальных значений исходного массива._.uniq([2, 1, 2]); // => [2, 1]
_.uniqBy(array, [iteratee=_.identity]) - метод аналогичный _.uniq, но принимает вторым аргументом функцию, которая будет вызываться для каждого элемента перед сравнением или ключ для сравнения объектов._.uniqBy([2.1, 1.2, 2.3], Math.floor); // => [2.1, 1.2]_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');// => [{ 'x': 1 }, { 'x': 2 }]
_.uniqWith(array, [comparator]) - то же самое, но с функцией компаратором.
*/

//console.log(_.remove(users, {'active': false}));//Array[2]0: Objectactive: falseuser: "barney"__proto__: Object1: Objectactive: falseuser: "fred"__proto__: Objectlength: 2__proto__: Array[0]

//console.log(users);//Array[1]0: Objectactive: trueuser: "pebbles"__proto__: Objectlength: 1__proto__: Array[0]


// console.log(_.uniq([1,1,2,3,4]));// [1, 2, 3, 4]

// console.log(_.uniqBy(users, 'active'));
// console.log(_.uniqWith(users, function (object) {
	// return object.active;
// }));

/*_.union([arrays]) - создаёт массив из уникальных значений всех переданных массивов._.union([2], [1, 2]); // => [2, 1]
_.unionBy и _.unionWith - то же самое что и _.union, но с характерными для By и With дополнительными параметрами.
_.without(array, [values]) - метод аналогичный _.pull, но он не меняет исходный массив, а возвращает новый._.without([2, 1, 2, 3], 1, 2); // => [3]
*/

//var array1 = [{user: 'bob',active: false},{user: 'pebbles',active: true}];

// console.log(_.union([1,2], [2,3], [3,6]));//[1, 2, 3, 6];
// console.log(_.union(users, array1));//Array[5]0: Object1: Object2: Object3: Object4: Objectlength: 5__proto__: Array[0]
// console.log(_.unionBy(users, array1, 'user'));//Array[4]0: Object1: Object2: Object3: Objectlength: 4__proto__: Array[0]
// console.log(_.unionWith(users, array1, _.isEqual));//Array[4]0: Object1: Object2: Object3: Objectlength: 4__proto__: Array[0]

// console.log(_.without(users, _.last(users)));//Array[2]0: Objectactive: falseuser: "barney"__proto__: Object1: Objectactive: falseuser: "fred"__proto__: Objectlength: 2__proto__: Array[0]

// console.log(users);//Array[3]0: Object1: Object2: Objectlength: 3__proto__: Array[0]

//////////////==========functions==============

/*_.after(n, func) - создаёт функцию, которая вызовет func только после n вызовов.var afterFunc = _.after(3, function() {   console.log("Called");});afterFunc(); // NothingafterFunc(); // Nothing afterFunc(); // "Called"
_.before(n, func) - создаёт функцию которая вызовет func только n-1 раз.var beforeFunc = _.after(3, function() {    console.log("Called"); })afterFunc(); // "Called" afterFunc(); // "Called" afterFunc(); // Nothing
_.bind(func, thisArg, [partials]) - работает так же как и обычный bind, но мы можем также задать значения аргументов.function greet(greeting, punctuation) {  return greeting + ' ' + this.user + punctuation;}var object = { 'user': 'fred' };var bound = _.bind(greet, object, 'hi');bound('!'); // => 'hi fred!'// Bound with placeholders.var bound = _.bind(greet, object, _, '!');bound('hi'); // => 'hi fred!'
*/

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

/*_.bindKey(object, key, [partials]) - реализация техники позднего связывания, вторым параметром передаётся ключ метода в objectvar object = {  'user': 'fred',  'greet': function(greeting, punctuation) {    return greeting + ' ' + this.user + punctuation;  }};var bound = _.bindKey(object, 'greet', 'hi');bound('!'); // => 'hi fred!'object.greet = function(greeting, punctuation) {  return greeting + 'ya ' + this.user +      punctuation;};bound('!'); // => 'hiya fred!'var bound = _.bindKey(object, 'greet', _, '!');bound('hi'); // => 'hiya fred!'
*/

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
/*var debounced = _.debounce(func, [wait=0], [options={   leading: false,   maxWait: (number),   trailing: true}]) - создаёт функцию(debounced) которая вызовет func через заданное время wait, после вызова. Если в течении wait функция(debounced) вызвалась снова, то задержка обновится. Если параметр leading установлен в true, то функция func вызывается перед началом задержки. Если установлен maxWait, то функция func вызывается не позже чем через заданное время. Если параметр trailing установлен в true, то функция func будет вызываться по окончании wait.
*/

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

/*var throttled = _.throttle(func, [wait=0], [options={   leading: true,   trailing: true}]) - создаёт функцию(throttled) которая вызовет func сразу и далее не чаще чем раз в wait, после вызова. Функция (throttled) создаётся с методом cancel, который сбрасывает задержку и функцию func ожидающую вызова, если она есть. Если параметр leading установлен в true, то функция func вызывается перед началом задержки. Если параметр trailing установлен в true, то функция func вызывается по окончании задержки, если функция(throttled) была вызвана во время задержки.
*/

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


//////objects=====//////

//===clone

/*_.clone(value) - Создаёт и возвращает клон value, но без дублирования дочерних объектов.
_.cloneDeep(value) - Создаёт и возвращает клон value, со всеми дочерними объектами.
_.assign(object, [sources]) - копирует собственные свойства объекта/объектов sourсes в object, справа на лево.
_.assignIn(object, [sources]) - копирует свойства объекта/объектов sourses в object, справа на лево, включая наследуемые, но без дочерних.
_.defaults(object, [sources]) - копирует в object, недостающие свойства, из объекта/объектов sources слева на право. Не клонируя дочерние объекты.
_.defaultsDeep(object, [sources]) - копирует в object, недостающие свойства, из объекта/объектов sources слева на право. Клонируя дочерние объекты.
*/

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










































