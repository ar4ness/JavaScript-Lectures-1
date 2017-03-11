//=================JQuery utilities===========

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

/*В jQuery есть набор утилит которые упрощают повседневную разработку, рассмотрим наиболее полезные из них.
each - метод аналогичный forEach, но для jQuery выборок, он перебирает все элементы выборки и вызывает для каждого из них функцию коллбэк, которая принимает 2 аргумента индекс элемента и сам элемент.
$("div").each(function (index, element) {});
extend - метод который копирует в первый объект, все свойства последующих объектов, если первых параметром передать не объект, а true, то будет работать рекурсивно и копировать также дочерние объекты и массивы.
$.extend(deep, target, source1, source2, sourceN);
makeArray - метод который преобразовывает псевдо массивы в массив.
var argumentsArray =  $.makeArray(arguments);
var divsArray = $.makeArray($("div"));
noop - пустая функция, полезна в том случае, если нам нужно обязательно вызывать функцию, но делать ничего не нужно.
x > 0 ? myFunction : $.noop
now - сокращённая форма записи для new Date().getTime().
$.now();
type - возвращает корректный тип объекта, включая regExp и date используя метод toString класса Object.
*/

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
  
  
  /*В jQuery есть функционал который позволяет создавать и управлять списками коллбэков, списков функций которые будут вызываться в ответ на какое то действие.
Создание списка коллбэков.
var callbacks = $.Callbacks(flags);
Флаги, это параметр конструктора Callbacks который указывает дополнительные опции работы конструктора. Флаги передаются в виде строки, через пробел и могут использоваться одновременно.
once - коллбэки вызываются только один раз.
memory - запоминает предыдущее значение и если в момент вызова есть функции, которые с ним не вызывались, то они вызовутся и с ним и с текущим значением.
unique – не позволяет дублировать функции в списке.
stopOnFalse - прерывает вызов последующих функции списка, если функции вернёт false.
*/

/*add - метод, который добавляет коллбэк в список. Метод принимает в себя функцию или массив функций. 
callbacks.add(fn); 
remove - метод, который удаляет функцию из списка. Метод принимает в себя фунцию или массив функций. 
callbacks.remove(fn); 
fire - метод который вызывает функции в списке коллбэков. Метод принимает в себя список аргументов с которыми будут вызваны коллбэки. 
callbacks.fire("arg1", "arg2", "argN"); 
fireWith - метод аналогичный предидущему, но первым аргументом передаётся контекст вызова коллбэков.
fired - метод возвращает true, если метод fire вызывался хотя бы один раз. 
callbacks.fired();
has - метод, который возвращает true, если функция уже есть в списке.
callbacks.has(fn);
empty - удаляет все методы их списка.
callbacks.empty(fn);
fireWith - метод аналогичный предидущему, но первым аргументом передаётся контекст вызова коллбэков.
disable - блокирует список на выполнение каких либо других дейтвий.
disabled - возвращает true, если список заблокирован.
lock- метод аналогичный disable, но, в отличии от него, позволяет добавлять и вызывать функции после блокирования, если список создан с флагом "memory". 
locked - возвращает true, если список был заблокирован через lock.


*/

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

/*promise - это объект особого типа, который используется, чаще всего, для асинхронных операций, у объекта есть ряд методов, которые или добавляют к promise функции слушатели или вызывают их.
В promise есть 3 типа событий, это resolve - успешное выполнение, reject - неуспешное выполнение и notify - статусное сообщение или прогресс, каждое событие вызывает собственным методом объекте на promise.
resolve и reject вызываются только один раз и взаимоисключающие(выполнится только один из них), после этого promise считается выполненным и работать перестаёт.
notify может вызываться сколько угодно раз, до тех пор пока не сработает или resolve или reject.
*/
/*Для создание promise нам нужно вызывать конструктор  $.Deferred(function), метод может принимать в себя функцию, которая вызовется до того как конструктор вернёт promise, функция получает этот promise объект, как аргумент.
var defer = $.Deferred();
Для вызова событий у promise есть несколько методов, resolve, resolveWith, reject, rejectWith, notify, notifyWith.
resolve и resolveWith вызывают событие resolve, во все функции слушатели передаются все переданные метода аргументы. Метод resolveWith отличается тем, что первым аргументом принимает контекст, в котором вызовутся все функции слушатели.
defer.resolve(arg1, arg2...argN);
reject и rejectWith работают также как resolve и resolveWith, только вызывают событие reject.
defer.reject(arg1, arg2...argN); 
notify и notifyWith работают так же как resolve и resolveWith, только вызывают событие notify и могут вызываться любое количество раз до тех пор пока не сработает resolve или reject.
defer.notify(arg1, arg2...argN);  
*/

/*Также в объекте есть целый ряд методов для добавления слушателей на события, это then, done, catch, fail, progress, always. 
Все эти методы возвращают исходный promise, а значит могут вызываться по цепочке. 
Все эти методы, кроме then принимают в себя любое количество аргументов функций или массивов функций которые вызовутся при соответствующем событии.
then - принимает в себя 3 аргумента функции, которые вызываются, первая - при resolve, вторая - при reject, третья - при notify.
defer.than(function resolve(){}, function reject(){}, function notify(){});
done  - функции вызовутся при resolve.
defer.done(function resolve(){});
catch и fail - функции вызовутся при reject, разницы между методами никакой.
defer.catch(function reject(){}); 
progress - функции вызовутся при notify.
defer.progress (function notify(){});  
always - функции вызовутся при resolve или reject.
defer.always (function resolveOrReject(){});   
*/

/*.done()
.fail()
.then()
.always()
регистрируют обработчики перехода объекта deferred в состояние "выполнено"/"ошибка выполнения" (resolved/rejected) (.then() регистрирует два обработчика сразу, а .always() общий обработчик на оба события).
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

/*Также в объекте есть метод state, который возвращает "pending", "resolved" или "rejected" в зависимости от состояния объекта.
В объекте также есть метод promise, который возвращает новый promise к которому можно добавлять слушателей, как и к родитель, но события вызывать нельзя.
var defer = $.Deferred();
defer.notify("test") // All ok
var childDefer = defer.promise();
childDefer.notify("test") // Error!
Если нужно дождаться выполнения нескольких promise объектов, в jQuery есть метод when, который принимает в качестве аргументов promise и создаёт один общий promise к которому можно добавить функции слушатели которые сработают только после всех promise и если все promise закончатся с ожидаемым событием(resolve, reject), и вернёт данные из всех promise в качестве аргументов.
$.when(promise1, promise2...promiseN)
  .done(function (promise1DoneData, promise2DoneData...promiseNDoneData) {});
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





















