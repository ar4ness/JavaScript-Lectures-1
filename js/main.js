/*http://jquery.page2page.ru/index.php5/Callbacks.fired*/
//Changes the properties of the first object using the properties of subsequent objects:
/*
var firstObject = { foo: "bar", a: "b" };
var secondObject = { foo: "baz" };
 
var newObject = $.extend( firstObject, secondObject );
 
console.log( firstObject.foo ); // "baz"
console.log( newObject.foo ); // "baz"
If you don't want to change any of the objects you pass to $.extend(), pass an empty object as the first argument:


var firstObject = { foo: "bar", a: "b" };
var secondObject = { foo: "baz" };
 
var newObject = $.extend( {}, firstObject, secondObject );
 
console.log( firstObject.foo ); // "bar"
console.log( newObject.foo ); // "baz"*/


// $("div").each(function(index, element) {
	// //$(element);
	// console.log(index, element);
// });
// var target = {
	// test: 25
// }
// var source1 = {
	// test1: 234,
	// test2: 15
// }
// var source2 = {
	// test2: 30,
	// test3: 25
// }
// console.log($.extend(target, source1, source2));// Object test: 25 test1: 234 test2: 30 test3: 25 __proto__: Object

// var divsArray = $.makeArray($("div"));
// console.log(divsArray);

// test(1, 2, 3);
// function test() {
	// console.log($.makeArray(arguments));//[1, ,2, 3];
// }

// test(1, 2, 3);
// function test() {
	// console.log(arguments.forEach);//undefined
	// console.log($.makeArray(arguments).forEach);//function forEach() { [native code] }
// }

// function fnWithCallback(callback){
	// callback("and");
// }

// fnWithCallback(function() {});
// fnWithCallback($.noop);

// function fnWithCallback(callback){
	// console.log("and");
	// callback("and");//and
// }

// var currentTimestamp = new Date().getTime();
// var now = $.now();
// console.log(currentTimestamp);//1488910603387
// console.log(now);//1488910603387

// console.log($.type(""));//string
// console.log($.type(new RegExp()));//egexp



//============CALLBACKS=====

//var callbacks = $.callbacks();


/*.add()
добавляет функцию в объект callbacks.
.disable()
«отключает» объект callbacks, в результате чего тот теряет возможность выполняться.
.empty()
удаляет все функций из текущего объекта callbacks.
.fire()
выполняет все функции объекта callbacks (если тот не отключен).
.fireWith()
выполняет все функции объекта callbacks с заданным контекстом.
.fired()
проверяет, выполнялся ли текущий объект callbacks хотя бы один раз.
.has()
проверяет наличие заданной функции в объекте callbacks.
.remove()
удаляет заданную функцию из объекта callbacks.*/


var func1 = function (data) {console.log("1", data);}
var func2 = function (data) {console.log("2", data);}
var func3 = function (data) {console.log("3", data, this);}

// //Flags


// //Flags "once"

/*once — выполнение объекта callbacks будет возможно только один раз (подобно объектам deferred). Если эта опция не указана, то вызывать набор функций объекта callbacks можно будет любое количество раз.*/
// var callbacks = $.Callbacks("once");
// callbacks.add(func1);
// callbacks.fire('test');
// callbacks.fire('test');
// callbacks.add(func1);
// callbacks.add(func2);
// callbacks.fire('test');

// //flags "once memory"

/*memory — объект callbacks будет запоминать все совершенные вызовы. При добавлении в callbacks новых функций, они будут тотчас выполняться в контексте запомненных ранее вызовов (подобно deferred).*/
// var callbacks = $.Callbacks("once memory");
// callbacks.add(func1);//1 test
// callbacks.fire('test');
// callbacks.fire('test 2');//nothing
// callbacks.add(func1);
// callbacks.add(func2);
// callbacks.fire('test 3');//nothing

// //flag "unique"

/*unique — одну и ту же функцию нельзя будет включать в один callbacks более одного раза.*/
// var callbacks = $.Callbacks("unique");
// callbacks.add(func1);//
// callbacks.fire('test');
// callbacks.fire('test 2');//
// callbacks.add(func1);

// //flag "stopOnFalse" 

// /*stopOnFalse — если один из функций-участников callbacks вернет false, то оставшиеся функции вызваны не будут.*/
// var callbacks = $.Callbacks("stopOnFalse");
// callbacks.add(func1);//
// callbacks.add(func2);//
// callbacks.fire('test');


// var callbacks = $.Callbacks();
// callbacks.add(func1);
// callbacks.fire('test');
// callbacks.add(func2);
// callbacks.fire('test 2');
// callbacks.remove(func1);
// callbacks.fire('test 3');

// console.log(callbacks.fired());
//var callbacks = $.Callbacks();
// callbacks.add(func3);
// callbacks.fire('test');
// callbacks.fired('test');

// callbacks.fireWith((key: "value"), ['test 2']);

// console.log(callbacks.fired());

// console.log(callacks.has(func1));//false
// console.log(callacks.has(func3));

// callbacks.add(func1);
// callbacks.add(func2);
// callbacks.add(func3);
// callbacks.fire("test");
// callbacks.empty();
// callbacks.fire("test 2");



// callbacks.add(func1);
// callbacks.add(func2);
// callbacks.add(func3);
// callacks.fire('test 1');
// callacks.disable();
// callacks.fire('test 2');
// console.log(callacks.disabled());

// callbacks.add(func1);
// callbacks.add(func2);
// callbacks.add(func3);
// callacks.fire('test 1');
// callacks.lock();
// callacks.fire('test 2');
// console.log(callacks.locked());

// //lock with "memory"
// var callacks = $.Callbacks("memory");
// callbacks.add(func1);
// callbacks.add(func2);
// callbacks.add(func3);
// callacks.fire('test 1');
// callacks.lock();
// callacks.fire('test 2');
// console.log(callacks.locked());
// callbacks.add(func1);

//=====PROMISE==========


/*.done()
.fail()
.then()
.always()
регистрируют обработчики перехода объекта deferred в состояние "выполнено"/"ошибка выполнения" (rejected/rejected) (.then() регистрирует два обработчика сразу, а .always() общий обработчик на оба события).
.progress()
регистрирует обработчики прогресса выполнения объекта deferred.
.resolved()
.reject()
переводят объект deferred из состояния "не выполнено" в "успешно выполнено"/"ошибка выполнения".
.notify()
вызывает событие частичного выполнения deferred (его прогресса выполнения).
.resolveWith()
.rejectWith()
переводят объект deferred из состояния "не выполнено" в "успешно выполнено"/"ошибка выполнения", с указанием и контекста выполнения (значение переменной this) обработчиков.
.notifyWith()
вызывает событие частичного выполнения deferred (его прогресса выполнения), с указанием и контекста выполнения (значение переменной this) обработчика.
.isResolved()
.isRejected()
проверяют, находится ли объект deferred в состоянии resolve/reject.
.state()
возвращает состояние объекта deferred ('pending'/'resolve'/'reject').
.pipe()
позволяет производить предварительную обработку параметров, которые в итоге будут переданы в обработчики.
.promise()
возвращает заместителя объекта deferred, отличающегося от последнего отсутствием методов изменения состояния.
$(...).promise()
(применяется к объекту jQuery!) создает заместителя, следящего за выполнением очереди событий (например анимаций) на выбранных элементах.
$.when()
на основе нескольких заданных объектов, создает новый deferred-объект, следящий за состоянием всех заданных.
*/

// var promise = $.Deferred();
// console.log(promise);

var resolver, rejecter, notifier;
function callToServer() {
	var promise = $.Deferred();
	//console.log(promise);
	resolver = function () {
		promise.resolve("some resolved data");
	}
	rejecter = function () {
		promise.reject("some rejected data");
	}
	notifier = function () {
		promise.notify("some notify data");
	}
	return promise.promise();
}
var promise = callToServer();
//console.log(callToServer());
promise.then(
	function resolverFn(data) {
		console.log(data);
	},
	function rejecterFn(data) {
		console.log(data);
	},
	function notifierfn(data) {
		console.log(data);
	}
);

// // setTimeout(resolver, 2000);//some resolved data
// // setTimeout(rejecter, 2001);//noyhing
// setTimeout(rejecter, 2000);//some rejected data
// setTimeout(resolver, 2001);//nothing
// setTimeout(function () {
	// promise.catch(function (data) {
		// console.log(data);
	// });
// }, 2000);

// setInterval(notifier, 200);
// setTimeout(resolver, 2000);


// promise.done(function done(data) {
	// console.log("done", data);
// }, function done2(data) {
	// console.log("done2", data);
// });
// // setInterval(notifier, 200);
// setTimeout(resolver, 2000);
// //or another writing
// promise.done([function done(data) {
	// console.log("done", data);
// }, function done2(data) {
	// console.log("done2", data);
// }]);
// setInterval(notifier, 200);
// setTimeout(resolver, 2000);



// promise.fail(function done(data) {
	// console.log("fail", data);
// }, function done2(data) {
	// console.log("fail 2", data);
// });
// setInterval(notifier, 200);
// setTimeout(resolver, 2000);

// promise.progress(function done(data) {
	// console.log("progress", data);
// }, function done2(data) {
	// console.log("progress 2", data);
// });
// setInterval(notifier, 200);
// setTimeout(resolver, 2000);


// promise.always(function (data) {
	// console.log("always", data);/*some notify data
// main.js:260 some resolved data
// main.js:320 always some resolved data*/

// });
// setInterval(notifier, 200);
// setTimeout(resolver, 2000);

// promise.always(function (data) {
	// console.log("always", data);
	// console.log(promise.state());

// });
// console.log(promise.state());
// setInterval(notifier, 200);
// setTimeout(resolver, 2000);


var promise2 = $.Deferred();

promise2.resolve(" || promise2 data");

// promise.always(function (data) {
	// console.log("always", data);
	// console.log(promise.state());

// });

setInterval(notifier, 200);
setTimeout(resolver, 2000);
$.when(promise, promise2).done(function (data1, data2) {
	console.log(data1, data2);
}).done(function () {
	console.log("done");
});





















