var dataElem = $("[data-test]");
// console.log(dataElem.data("test"));//test value
// console.log(dataElem.data("test2"));//test value2

// dataElem.data("test", "new value");
// console.log(dataElem.data("test"));// new value

// dataElem.data({
	// "test": "new value 1",
	// "test2": "new value 2",
// });
// console.log(dataElem.data("test"));// new value 1
// console.log(dataElem.data("test2"));// new value 2

// dataElem.data("test2", {"isValid":true});
// console.log(dataElem.data("test2"));//Object {isValid: true}

// dataElem.removeData("test2");
// console.log(dataElem.data("test2"));//test value 2

// dataElem.removeAttr("data-test2");
// dataElem.removeData("test2");
// console.log(dataElem.data("test2"));//undefined
// console.log(dataElem.attr("data-test2"));//undefined


// dataElem.removeAttr("data-test");
// dataElem.removeAttr("data-test2");
// dataElem.removeData(["data-test", "data-test2"]);
// console.log(dataElem.data("test"));// new value 1
// console.log(dataElem.data("test2"));//undefined


//==========manipulation with styles====

 var logoImage = $(".logo");
// console.log(logoImage.css("width")); //100px- string;
// console.log(logoImage.css(["position", "height"])); //Object {position: "static", height: "100px"}
// logoImage.css({
	// "position": "relative",
	// "height": "200px"
	
// })
// console.log(logoImage.css(["position", "height"]));//Object {position: "relative", height: "200px"}

// logoImage.css("width", "200px");
// console.log(logoImage.css("width")); //200px


// console.log(window.getComputedStyle(logoImage[0]));// to output all styles for this element

// console.log($(":radio:eq(0)")[0].value);//student;
// //$(":radio:eq(2)")[0].value === $(":radio:eq(2)").val();//shead;


//////====width and heihgt
// console.log(logoImage.height());//100
// logoImage.height(200);
// console.log(logoImage.height());//200

// console.log(logoImage.width());//100
// logoImage.width(200);
// console.log(logoImage.width());//200

// logoImage.width("10rem");
// console.log(logoImage.css("width"));//160px - string
// console.log(logoImage.width());//160

// //====innerWidth and innerHeight - works same
// console.log(logoImage.innerWidth());//180;
// logoImage.innerWidth(200);
// console.log(logoImage.width());//180
// console.log(logoImage.innerWidth());//200

// //====outerWidth and outerHeight - works same
// console.log(logoImage.outerWidth());//210 = width + border +padding
// console.log(logoImage.outerWidth(true));//210+margin=226 - it is all width of block

// logoImage.outerWidth(200);
// console.log(logoImage.outerWidth());//200
// logoImage.outerWidth(200,true);
// console.log(logoImage.outerWidth());//184


////===positioning

// console.log(logoImage.offset());//Object {top: 129.4375, left: 343.984375}
// console.log(logoImage.position());//Object {top: 0, left: 327.984375}

// logoImage.offset({"left": 0, "top": 50});
// console.log(logoImage.offset());//Object {top: 50, left: 0}


//console.log(logoImage.position());//Object {top: 0, left: 327.984375}


//======scroll
// var body = $(window);
// console.log(body.scrollLeft());//0
// console.log(body.scrollTop());//0

// // setTimeout(function () {
	// // body.scrollTop(0);
// // }, 1000);

// setTimeout(function () {
	// body.scrollTop(0);
	// body.scrollLeft(50);
// }, 1000);


//=============EVENTS

// logoImage.on("click", function () {
	// console.log("handler1");
	// return false; // events still works
// }).on("click", function () {
	// console.log("handler2");
// }).on("click", function () {
	// console.log("handler3");
// })


// logoImage.on("click", function (e) {
	// console.log("handler1");
	// console.log(e); 
// }).on("click", function () {
	// console.log("handler2");
// }).on("click", function () {
	// console.log("handler3");
// })


// logoImage.parent().on("click", function () {
	// console.log("Bubbled event");
// }); 
// logoImage.on("click", function () {
	// console.log("handler1");
// }).on("click", function () {
	// console.log("handler2");
// }).on("click", function () {
	// console.log("handler3");
// })


// logoImage.parent().on("click", function () {
	// console.log("Bubbled event");
// }); 
// logoImage.on("click", function (e) {
	// console.log("handler1");
	// e.stopPropagation();
// }).on("click", function () {
	// console.log("handler2");
// }).on("click", function () {
	// console.log("handler3");
// })

// logoImage.parent().on("click", function () {
	// console.log("Bubbled event");
// }); 
// logoImage.on("click", function (e) {
	// console.log("handler1");// handler 1
	// e.stopImmediatePropagation();
// }).on("click", function () {
	// console.log("handler2");
// }).on("click", function () {
	// console.log("handler3");
// })

// $(":text").on("keydown", function (e) {
	// if (e.keyCode === 13) {
		// alert("enter!")
	// }
// });

// $(":text").on("keydown", function (e) {
	// if (e.keyCode === 13) {
		// alert("enter!");
		// e.preventDefault();
	// }
// });

$("a").on("click", function(e) {
	console.log(e);
	e.preventDefault()
})

$("a").on("click", false) -// for breaking input//
$("a").on("click", false).on("click", function () {
	
})















