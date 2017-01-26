//"use strict"
// |^ it is for functions



////Dates
//var currentDate =  new Date();
// console.log(currentDate); //Thu Jan 26 2017 18:38:49 GMT+0200 (FLE Standard Time);
// console.log(new Date(1000));// Thu Jan 01 1970 02:00:01 GMT+0200 (FLE Standard Time);
// console.log(new Date(-1000)); //Thu Jan 01 1970 01:59:59 GMT+0200 (FLE Standard Time);
// console.log(new Date(2000, 0, 1, 0, 0, 0, 0)); //Sat Jan 01 2000 00:00:00 GMT+0200 (FLE Standard Time);
// console.log(new Date(2000, 0, 1)); //Sat Jan 01 2000 00:00:00 GMT+0200 (FLE Standard Time);
// console.log(new Date("2000-01-01T00:00:01.500+2:00"));
// console.log(new Date("2000-01-01"));


// //Methods to get some values from date
// console.log(currentDate.getFullYear());//2017;
// console.log(currentDate.getMonth());//0
// console.log(currentDate.getDate());//26
// console.log(currentDate.getHours());//18 
// console.log(currentDate.getMinutes())//53 
// console.log(currentDate.getSeconds()) //22
// console.log(currentDate.getMilliseconds());//85

// console.log(currentDate.getDay());//4
// console.log(currentDate.getTime());//1485449772528
// console.log(currentDate.getTimezoneOffset());//-120

// console.log(new Date());// --our date without  Thu Jan 26 2017 18:57:49 GMT+0200 (FLE Standard Time);
// console.log(new Date().getHours());//18
// console.log(new Date().getUTCHours());//16 -- for all methods except getTime and getTimezoneOffset  

// var date = new Date(2000, 0, 0);
// date.setFullYear(2001);
// console.log(date);//Mon Dec 31 2001 00:00:00 GMT+0200 (FLE Standard Time)
// date.setMonth(2);
// console.log(date);//Sat Mar 31 2001 00:00:00 GMT+0300 (FLE Daylight Time)
// date.setDate(5);
// console.log(date);// Mon Mar 05 2001 00:00:00 GMT+0200 (FLE Standard Time)
// date.setHours(10);
// date.setMinutes(10);
// date.setSeconds(10);
// console.log(date//Mon Mar 05 2001 10:10:10 GMT+0200 (FLE Standard Time)
// console.log(date.getMilliseconds());//0
// date.setMilliseconds(350);
// console.log(date.getMilliseconds());//350;

// var date = new Date(2000, 0, 0);

// date.setDate(5);
// console.log(date);//Sun Dec 05 1999 00:00:00 GMT+0200 (FLE Standard Time)
// date.setDate(35);
// console.log(date);//Tue Jan 04 2000 00:00:00 GMT+0200 (FLE Standard Time);

// date.setDate(0);
// console.log(date);//Fri Dec 31 1999 00:00:00 GMT+0200 (FLE Standard Time)
// date.setDate(-1);
// console.log(date);//Mon Nov 29 1999 00:00:00 GMT+0200 (FLE Standard Time)
// console.log(date.getDay());//1


// var date1 = new Date(2000, 0, 0);
// var date2 = new Date(2000, 0, 0, 0, 0, 0, 500);
// console.log(date1 > date2);// false;
// console.log(date2 - date1);// 500;

// console.log(date1.getDay()===date2.getDay());// true - it is the same day
// console.log(date1.getDate()===date2.getDate());// true - it is the same day

/////////////////////////////////////////////////////////

// function test () {
	// console.log(this);
// }
// test(); //Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}

// function test () {
	// console.log(this);//Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}
	// test2();
	// function test2() {
		// console.log(this);//Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}
	// }
// }
// test();//Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}

// "use strict"
// function test () {
	// console.log(this);//// undefined
	// test2();
	// function test2() {
	// console.log(this);// undefined
	// }
// }
// test();

// function test (arg1, arg2) {
	// console.log(this);// object {key: value}
	// if (arg1 || arg2)
		// console.log(arg1, arg2);// call test
	
// }
// test();
// var obj = {
	// method: test
// }
// obj.method();

// test();
// var object = {
	// key:"value"
// }
// test.call(object);
// test.apply(object);
// test.call(object, "call", "test");
// test.apply(object, ["call", "test"]);

// function mediator(number1, number2) {
	// if (number1 > 0) {
		// return summ.apply(this, arguments);
	// }
	// else {
		// return multiply.apply(this, arguments);
	// }
// }

// function summ(number1, number2){
		// return number1 + this.number + number2;
	// }

// function multiply(number1, number2){
		// return number1 * this.number * number2;
	// }

// var object2 = {
	// number:10
// }

// console.log(mediator.call(object2, 10, 10));//30

// var bindedMediator = mediator.bind(object2);
// console.log(bindedMediator(10, 10));//30
// console.log(bindedMediator(-1, 10));//100;

// object2.number = 25;
// console.log(bindedMediator(10, 10));//45;



// function mediator(number1, number2) {
	// if (number1 > 0) {
		// return summ.apply(this, arguments);
	// }
	// else {
		// return multiply.apply(this, arguments);
	// }
// }

// function summ(number1, number2){
		// return number1 + this.number + number2;
	// }

// function multiply(number1, number2){
		// return number1 * this.number * number2;
	// }

// var object2 = {
// number:10
// }
	
// var obj = {
	// mediator: mediator
// }
// // var bindedMediator = obj.mediator.bind(object2);
// // console.log(bindedMediator(10, 10));//30;
// // obj.mediator = function() {return this};
// // console.log(bindedMediator(10, 10));//30;

// // bindLater create a new function which is called in our current context
// function bindLater(context, methodName) {
	// return function () {
		// return context[methodName].apply(context, arguments);
	// }
// }

// var bindedMediator = bindLater(obj, "mediator").bind(object2);
// console.log(bindedMediator(10, 10));//30;
// obj.mediator = function() {return this};
// console.log(bindedMediator(10, 10));//30;






// document.querySelector("img").addEventListener("click", function () {
	// console.log(this);
// })


// function listener() {
	// console.log(this);
// }
// listener();
// document.querySelector("img").addEventListener("click", listener);
// document.querySelector("span").addEventListener("click", listener);

////$("a").addClass('link').css({"color": "green"});

// var object = {
	// counter: 0,
	// increment: function (number) { 
		// this.counter += number;
		// console.log("increment to", number, this.counter);
		// return this;
		// },
	// decrement: function (number) { 
	// this.counter -= number;
	// console.log("decrement to", number, this.counter);
	// return this;
	// },
// }
// // chaining
// object.increment(10).decrement(5).decrement(1).increment(8);// increment to 10 10
			// //main.js:219 decrement to 5 5
			// //main.js:219 decrement to 1 4
			// //main.js:214 increment to 8 12

///////////////// functions with callback

// function fn1(callback, argument) {
	// argument = "Argument "+argument;
	// callback(argument);
// }
// function fn2(argument) {
	// console.log(argument);
// }
// fn1(fn2, "sample text");//Argument sample text


//timeout

// function closureWithTimeout () {
	// var x = 10;
	// setTimeout(function() {
		// console.log(x); // 10
	// }, 2000);
// }
// closureWithTimeout (); //10


// function closureWithListener () {
	// var x = 10;
	// document.querySelector("img").addEventListener("click", function() {
		// x++;
		// console.log(x)
	// });
// }
// closureWithListener();

// function closureWithJS () {
	// var x = 10;
	// return function () {
		// x++;
		// console.log(x);//11  12
	// }
// }
// var JSClosuredFn1 = closureWithJS();
// JSClosuredFn1() ; //11
// JSClosuredFn1(); // 12;
// var JSClosuredFn2 = closureWithJS();
// JSClosuredFn2() ; //11
// JSClosuredFn2(); // 12


//////////////
(function () {
	var myApplication = {};
	myApplication.modules = {};
	myApplication.method1 = function () {console.log(1)};
	myApplication.method2 = function () {console.log(2)};
	myApplication.method3 = function () {console.log(3)};
	myApplication.methodN = function () {console.log("N")};
	myApplication.addMethod = function (name, method) {
		if (!myApplication[name] && typeof method === "function") {
			myApplication[name] = method;
		}
		};
	myApplication.addModule = function(name, module) {
		if (!myApplication.modules[name]) {
		myApplication.modules[name] = method;
	}
	};
	myApplication.getModule = function(name) {
		if (myApplication.modules[name]) 
			return myApplication.modules[name];
		else throw("Module does not exist!");
	};
	window.myApplication = myApplication;
}) ();

myApplication.method1();// 1
myApplication.method2();// 2
myApplication.method3();// 3
myApplication.methodN();// N

myApplication.addMethod("getDate", function () {return new Date() });
console.log(myApplication.getDate());//Thu Jan 26 2017 21:01:36 GMT+0200 (FLE Standard Time);

myApplication.addModule("classWorker", {
	addClass: function (className) {console.log(className, "added")},
	removeClass: function (className) {console.log(className, "removed")}
});
var classWorker = myApplication.getModule("classWorker");
classWorker.addClass("test");
classWorker.removeClass("rest");
// myApplication.getModule("adsafsdfasd");


function getType(entity) {
	return {}.toString.call(entity).slice(8, -1);
}

console.log(getType(new Date()));
console.log(getType(/a/));























