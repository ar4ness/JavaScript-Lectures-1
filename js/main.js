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

// ------Manipulations with attributes------

// mainTitle.addClass('test');
// console.log(mainTitle.hasClass('test'));// true;

// ------$([selector]).addClass([className]); -- add class to all selected elements;

// mainTitle.removeClass('test');
// console.log(mainTitle.hasClass('test'));//false

// ------$([selector]).removeClass([className]); -- remove class from all selected elements;

// mainTitle.toggleClass('test');
//------$([selector]).toggleClass([className]); -- add class to all selected elements if there is no such class or delete class from all selected elements if there is such element;

//------$([selector]).hasClass([className]); -- return true if there is  such class or false;

// console.log($("img").attr("src"));//images/logo.png
// $("img").attr('src', "image/ggdhfshgdf.gif");
// $("img").removeAttr("src");

// //------$([selector]).attr([attributeName], [attributeValue]); -- return attribute of first checked element or set the value of attribute to all choosen elements;
// //------$([selector]).removeAttr([attributeName]); -- delete attribute for all choosen elements;

// //method prop
// console.log($("img").prop("src"));
// $("img").prop('src', "imag");//GET file:///D:/JS1/JavaScript-Lectures-1/imag net::ERR_FILE_NOT_FOUND
// $("img").removeProp("src");
// console.log(mainTitle[0]);



// //jquery always get back array
// console.log(mainTitle.html());//return string just with html with all elements inside
// console.log(mainTitle[0].innerHTML);// the same - [0] - чтоб обратиться к обычному тэгу минуя обертку jqueryж

// mainTitle.html("<div>text</div>");//заменил весь html на див с тестом text
// mainTitle[0].innerHTML = "<div>text 2</div>";// делает то же самое

//$([selector]).html([html]);//возвращает вложенный html первого элемента или заменяет html всей выборки на переданный;
//$([selector]).val([value]);//возвращает значение аттрибута value первого элемента или заменяет value всей выборки на переданный;


//jquery can create tegs

console.log($("<div>text</div>"));// [div]; ---просто создаст тэг, а потом этот тэг можно вставить в html
var clickableButton = $("<div>clickable Button</div>").css("color", "red").on("click", function () {alert("asd")});// заменили
mainTitle.find("span.text").html(clickableButton);

//value - для элементов формы
//value - in input it is text

console.log($("input").val());// - -output is nothing
$("input").val("test");
console.log($("input").val());//test













