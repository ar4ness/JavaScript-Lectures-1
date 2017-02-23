//=====EVENTS
// $(window).on("resize", function (e) {
	// console.log(e, window.innerWidth); // e mean event
// })

// $(window).on("scroll", function (e) {
	// console.log($(window).scrollTop()); // 
// })

// //--3 methods for writing/ the last one is reconended
// $(document).ready(function () {});
// $(document).on("ready", function () {});
// $(function () {
	// $("h1").hide();
// });

// $(document).on("keydown", function (e) {
	// console.log(e.keyCode);
	
// })

// $(":text:eq(0)").on("keyup", function (e){
	// console.log("input" + e.keyCode);
// })

// $("button").on("click", function (e) {
	// e.preventDefault();
	// console.log(e.clientX, e.clientY);
// })

// $("img").on("contextmenu", function (e) {
	// e.preventDefault();
	// console.log(e.clientX, e.clientY);
// })

// $("h1, img").on("dblclick", function (e) {
	
	// console.log(e.target);
// })

//===mousemove event

// $("button").on("mousedown", null, "it's mousedown event", function(e) {
	
	// console.log(e.data);
// }).on("mousemove",  null, "it's mousemove event", function(e) {
	// console.log(e.data);
// }).on("mouseup",  null, "it's mouseup event", function(e) {
	// console.log(e.data);
// }).on("click", false);

// $("input").on("focus", function (e) {
	// console.log("focus", e.target);
// }).on("blur", function (e) {
	// console.log("blur", e.target);
// });

// $("input").on("change", function (e) {
	// console.log(e.target.value);
// })

// Select

 // $("input").on("change", function (e) {
	 // console.log(e.target.value);
 // }).on("select", function (e) {
	 // console.log("selected");// selected
 // })
 // $("input").on("change", function (e) {
	 // console.log(e.target.value);
 // }).on("select", function (e) {
	 // console.log(e.target.value.slice(e.target.selectionStart, e.target.selectionEnd));//
 // })

 // $("form").on("submit", function (e) {
	 // e.preventDefault();
	 // console.log("submit");
 // });
 
 
  // $("h1, img").on("click", function (e) {
	 // console.log("test" + this.tagName);
	
 // }).eq(1).on('click', function (e) {
	 // console.log("test 2" + this.tagName);
 // });
 
 // $("h1, img").on("click", function (e) {
	 // console.log("test" + this.tagName);
	 // e.stopPropagation();
 // }).eq(1).on('click', function (e) {
	 // console.log("test 2" + this.tagName);
 // });
 
 // $("h1, img").on("click", function (e) {
	 // console.log("test" + this.tagName);//testIMG
	 // e.stopImmediatePropagation();
 // }).eq(1).on('click', function (e) {
	 // console.log("test 2" + this.tagName);
 // });

//==========WORKING with DOM

$("img").wrap("<div class='imageWrapper' />");
$("img").wrap("span.text");
$("img").wrap("input");

var newElem = $("<div class='universalWrapper'>text</div>").on("click", function () { console.log(this.className) });

var $test = $(".jqueryTestContainer");

//$("span", $test).wrap(newElem);
// $("span, br", $test).wrapAll(newElem);


// $("h5", $test).wrapInner(newElem);
// $("ul", $test).wrapInner(newElem);

//$("ul", $test).unwrap();

//$("span", $test).unwrap("h5");

// $("ul", $test).append("<li>test</li>");
// $("ul", $test).append(newElem);
// $("ul", $test).append(["<li>test</li>", newElem]);
// $("ul, span", $test).append(["<li>test</li>", newElem]);// to moove elements inside

// var firstLi = $("ul li:first", $test)
// $("ul", $test).append(firstLi);


// $("ul", $test).prepend("ul li:last", $test);

// $("ul li:last", $test).prependTo($("ul", $test));
// $("ul li:first", $test).appendTo($("ul", $test));

// $("h5", $test).after("<div>after</div>")
// $("h5", $test).before("<div>before</div>")
// $("h5", $test).before($("ul li:first", $test))

 // $("ul li:last", $test).insertAfter($("ul", $test));
// $("ul li:first", $test).insertBefore($("ul", $test));

// $("span", $test).html(function (index, html) {
	// return html + index;
// });

// $("h5", $test).html("<em> new text </em>");
// $test.html("");// to clean up content of html


//console.log($test.text());
//$test.text('test text');
//$test.text('<em>test text</em>');

//$("span", $test).remove();
//$("span", $test).remove(".one");
////$test.remove()

//=====detach
// var tempTest = $test.detach();

// $("h1").on('click', function () {
	// $(this).after(tempTest);
// })

//===empty
//$("h5", $test).empty();


//replaceWith
//////$("h5", $test).replaceWith($(this).children());
//$("h5", $test).replaceWith($('ul', $test));

//$("h5", $test).replaceWith($('ul', $test).clone());
// $("ul", $test).on("click", function () { alert('safdgfa')});
// $("h5", $test).replaceWith($('ul', $test).clone());

// $('ul', $test).clone().replaceAll($("h5", $test));


// $("li, span", $test).each(function (index, element) {
	// console.log(index, element);
// });

// console.log("index", $("li").index());
// console.log("index", $("li").eq(1).index());
console.log($("li.first").index());//0
console.log($("li.second").index());//1
console.log($("h5").index());//5
console.log($("gfiuyggfd").index());//-1 if no element found




















