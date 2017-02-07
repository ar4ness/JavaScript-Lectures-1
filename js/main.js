//Awaiting document loading:
//first way:
$(document).ready(function () {
	// console.log("Ready 1");
});

//second:
$(document).on("ready", function () {
	// console.log("Ready 2");
});

//third
$(function () {
	// console.log("Ready 3");
});

// Navigation
var mainTitle = $("h1.mainTitle");
var spanText = $("span.text");

console.log(mainTitle.children());//[img.logo, span.text, input, prevObject: n.fn.init[1], context: document]
console.log(mainTitle.children('input'));//[input, prevObject: n.fn.init[1], context: document]
console.log(mainTitle.parent());//[body, prevObject: n.fn.init[1], context: document]
console.log(mainTitle.parent("div"));//[prevObject: n.fn.init[1], context: document]
console.log(mainTitle.parents());//[body, html, prevObject: n.fn.init[1], context: document]
console.log(mainTitle.parents("body"));//[body, prevObject: n.fn.init[1], context: document]
console.log(mainTitle.find("*"));// all children elements
console.log(mainTitle.find(".text"));// [span.text, prevObject: n.fn.init[1], context: document, selector: "h1.mainTitle .text"]

console.log(spanText.prev());//[img.logo, prevObject: n.fn.init[1], context: document]
console.log(spanText.prev('div'));//[prevObject: n.fn.init[1], context: document]
console.log(spanText.next());//[input, prevObject: n.fn.init[1], context: document]
console.log(spanText.next("input")); //[input, prevObject: n.fn.init[1], context: document]


// mainTitle.addClass('test');
// console.log(mainTitle.hasClass('test'));// true;
// mainTitle.removeClass('test');
// console.log(mainTitle.hasClass('test'));//false
// mainTitle.toggleClass('test');

// console.log($("img").attr("src"));//images/logo.png
// $("img").attr('src', "image/ggdhfshgdf.gif");
// $("img").removeAttr("src");


// //method prop
// console.log($("img").prop("src"));
// $("img").prop('src', "imag");//GET file:///D:/JS1/JavaScript-Lectures-1/imag net::ERR_FILE_NOT_FOUND
// $("img").removeProp("src");

// console.log(mainTitle[0]);



// //jquery always get back array
// console.log(mainTitle.html());
// console.log(mainTitle[0].innerHTML);

// mainTitle.html("<div>text</div>");
// mainTitle[0].innerHTML = "<div>text 2</div>";




//jquery can create tegs


var clickableButton = $("<div>clickable Button</div>").css("color", "red").on("click", function () {alert("asd")});
mainTitle.find("span.text").html(clickableButton);


//value - in input it is text

console.log($("input").val());// - -output is nothing
$("input").val("test");
console.log($("input").val());//test













