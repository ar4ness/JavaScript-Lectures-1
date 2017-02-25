//=====EVENTS

/*События в jQuery не являются событиями самого jQuery это просто абстракция поверх встроенных событий браузера, но с помощью jQuery с ними гораздо удобнее работать, поэтому рассмотрим их в рамках этой библиотеки.
Практически у всех событий есть одно свойство, они всплывают, то есть о событии можно узнать не только на элементе на котором оно сработало, но и на всех его родителях.
Контекстом функции слушателя события является элемент на котором находился слушатель в момент срабатывания события.
Если для одного и того же события в коде есть несколько слушателей, то выполнятся они все, в том порядке в котором они были добавлены.
В большинстве случаев стандартное поведение браузера при событии можно отменить.


Все события можно добавить через jQuery метод on, первым параметром он принимает имя события или событий через пробел, вторым селектор-фильтр, который укажет что событие срабатывает только если элемент соответствует данному селектору, третьим данные, которая будут передаваться вместе с событием(данные могут быть любого типа), а четвёртым функцию обработчик которая будет вызываться в момент срабатывания события и принимает как параметр объект события или event. Второй и третий параметры можно пропустить и указать только имя события и функцию обработчик.
Если событие нужно отследить только один раз используется метод one, он принимает те же параметры что и on.

Для отмены слежения за событиями используется метод off, который принимает в себя объект события или его имя и те же параметры что и on за исключением передаваемых данных. 

Для вызова события из кода используется метод trigger, он принимает в себя 2 параметра, событие, или его объект, и передаваемые данные в виде массива или объекта.

*/

/*resize -  событие, которое срабатывает, при изменении размера окна браузера, срабатывает только на window.$(window).on("resize", handler);

scroll - событие, которое срабатывает когда элемент скроллится, работает на любом элементе со скроллом.
$(".elementWithScroll").on("scroll", handler);

ready -  событие, которое срабатывает когда документ загружен, требуется если скрипт выполняется до загрузки html, хотя обычную запись можно встретить довольно часто рекомендуется использовать другую запись.
$(document).ready(handler);  // Не рекомендуется
$(document).on("ready", handler);  // Не рекомендуется
$(handler) // Рекомендуется  
*/

// $(window).on("resize", function (e) {
	// console.log(e, window.innerWidth); // e mean event
// })

// $(window).on("scroll", function (e) {
	// console.log($(window).scrollTop()); // 
// })

// //--3 methods for writing/ the last one is recomended
// $(document).ready(function () {});
// $(document).on("ready", function () {});
// $(function () {
	// $("h1").hide();
// });

/*keydown, keypress, keyup - это три стадии события нажатия клавиши клавиатуры, срабатывают в этом же порядке, если отменено какое-то из них, то последующие не сработают. Работают только на текстовых input, textarea и document.
$(document).on("keydown", handler);
$("input").on("keyup", handler);

click - событие, которое срабатывает при клике на элемент, кликом считается если на одном и том же элементе была и отжата клавиша мыши.
$("button").on("click", handler);

contextmenu - событие которое срабатывает, когда на элементе открывается контекстное меню.
$("img").on("contextmenu", handler);

dblclick - событие, которое срабатывает при двойном клике на элемент.
$("button").on("dblclick", handler);

*/

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

//==============mousemove event

/*mousedown, mousemove, mouseup - события, которые срабатывают при нажатии, движении и отпускании клавиши мыши на элементе. mousemove срабатывает постоянно, пока курсор движется над элементом.
$("div").on("mousedown", handler);
$("div").on("mousemove", handler);
$("div").on("mouseup", handler);
*/

// $("button").on("mousedown", null, "it's mousedown event", function(e) {
	
	// console.log(e.data);
// }).on("mousemove",  null, "it's mousemove event", function(e) {
	// console.log(e.data);
// }).on("mouseup",  null, "it's mouseup event", function(e) {
	// console.log(e.data);
// }).on("click", false);

/*focus, focusin, blur, focusout - события, которые срабатывают при получении и потере фокуса элементами формы.
$("input").on("focus", handler);
$("input").on("focusin", handler);
$("input").on("blur", handler); 
$("input").on("focusout", handler);

change - событие, которое срабатывает когда какой-то элемент формы меняет своё состояние.
$("input, textarea, select").on("change", handler);
*/

// $("input").on("focus", function (e) {
	// console.log("focus", e.target);
// }).on("blur", function (e) {
	// console.log("blur", e.target);
// });

// $("input").on("change", function (e) {
	// console.log(e.target.value);
// })

// ===========Select

/*select – событие, которое срабатывает при выделении текста в input или textarea.
$("input, textarea").on("select", handler);

submit - событие, которое срабатывает при отправке формы
$("form").on("submit", handler);
*/

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

 /*В функцию handler, которая вызывается при срабатывании события, всегда передаётся объект event, в котором есть множество параметров о сработавшем событии, в зависимости от события параметры могут отличаться, рассмотрим самые полезные.
 
event.target - DOM элемент на котором произошло событие, в отличии от this в параметре хранится элемент на котором произошло событие, а не элемент на котором висит обработчик.

event.pageX, event.pageY, event.offsetX, event.offsetY, event.clientX, event.clientY, event.screenX, event.screenY - координаты события, в основном полезно для получения координат курсора мыши.

event.type - тип сработавшего события, полезно в случае если для нескольких событий стоит одна функция обработчик.

event.keyCode, event.charCode - код нажатой клавиши клавиатуры.

event.data - данные переданные из слушателя события.

Кроме параметров в объекте event имеется также несколько полезных методов.

event.preventDefault() - отменяет стандартное поведение браузера, если это клик по ссылке, то переход по ссылке и т.д.

event.stopPropagation() - отменяет всплытие события, то есть, если каком то из родительских элементов также есть слушатель этого события, то он не сработает.

event.stopImmediatePropagation() - отменяет не только всплытие события, но и вообще выполнение всех последующих слушателей этого события.

event.isDefaultPrevented() - возвращает true, если событие было отменено.

event.isPropagationStopped() - возвращает true, если всплытие было отменено.
event.isImmediatePropagationStopped() -  - возвращает true, если всплытие было отменено. 

event.isPropagationStopped() - возвращает true, если всплытие было отменено.
 
event.isImmediatePropagationStopped() - возвращает true, если было отменено выполнение всех последующих слушателей события. 

*/
 
//===================WORKING with DOM

/*wrap - метод принимает в себя строку селектор, строку HTML, jQuery объект или DOM объект. Он находит или создаёт DOM элемент или элементы и оборачивает в него/их каждый элемент выборки.
<div class="inner"></div>
<div class="inner"></div>
$(".inner").wrap("<div class='new' />");
<div class="new"><div class="inner"></div></div>
<div class="new"><div class="inner"></div></div> 

wrapAll - метод аналогичный методу wrap, с тем лишь отличием, что он старается оборачивает все элементы выборки в один общий контейнер(wrapper).
<div class="inner"></div> 
<div class="inner"></div> 
$(".inner").wrapAll("<div class='new' />"); 
<div class="new">     
<div class="inner"></div>     
<div class="inner"></div>
</div>
*/

$("img").wrap("<div class='imageWrapper' />");
$("img").wrap("span.text");
$("img").wrap("input");

var newElem = $("<div class='universalWrapper'>text</div>").on("click", function () { console.log(this.className) });

var $test = $(".jqueryTestContainer");

//$("span", $test).wrap(newElem);
// $("span, br", $test).wrapAll(newElem);

/*wrapInner - метод аналогичный первым двум, но он оборачивает в новый контейнер весь дочерний контент элементов выборки.*/
// $("h5", $test).wrapInner(newElem);
// $("ul", $test).wrapInner(newElem);


/*unwrap - метод удаляет родителя с каждого элемента выбоки, метод может принимать в себя селектор, чтобы удалить только тех родителей, которые ему соответствуют*/
//$("ul", $test).unwrap();

//$("span", $test).unwrap("h5");


/*append - метод принимает один или два аргумента, аналогичных аргументам wrap, а также массивы этих аргументов и добавляет его/их в конец дочернего DOM ко всем элементам выборки. Если DOM элемент уже существует, а целевой элемент только один, то он не дублируется, а переносится в конец целевого элемента. Метод также может принимать функция которая будет возвращать добавляемый в конец элемента для каждого элемента выборки.*/
// $("ul", $test).append("<li>test</li>");
// $("ul", $test).append(newElem);
// $("ul", $test).append(["<li>test</li>", newElem]);
// $("ul, span", $test).append(["<li>test</li>", newElem]);// to moove elements inside

// var firstLi = $("ul li:first", $test)
// $("ul", $test).append(firstLi);

/*prepend -  метод аналогичный append с той лишь разницей, что вставка осуществляется не в конец, а начало дочернего DOM.*/
// $("ul", $test).prepend("ul li:last", $test);


/*appendTo, prependTo - методы аналогичные append и prepend, с той лишь разницей что все элементы выборки добавляются к аргументу/аргументам метода.*/
// $("ul li:last", $test).prependTo($("ul", $test));
// $("ul li:first", $test).appendTo($("ul", $test));


/*after, before - методы аналогичный append и prepend, с той лишь разницей что элементы добавляются не в конец/начало, а до или после элеменета/элементов выборки.
*/
// $("h5", $test).after("<div>after</div>")
// $("h5", $test).before("<div>before</div>")
// $("h5", $test).before($("ul li:first", $test))


/*insertAfter, insertBefore - методы аналогичные appendTo и prependTo, с той лишь разницей что элементы добавляются не в конец/начало, а до или после элеменета/элементов выборки.
*/
 // $("ul li:last", $test).insertAfter($("ul", $test));
// $("ul li:first", $test).insertBefore($("ul", $test));


/*html - метод возвращает, в виде строки, весь дочерний HTML первого элемента выборки, или заменяет весь дочерний HTML, всех элементов выборки на переданный. Также может принимать параметром функцию, которая вызывается для каждого элемента, получает аргументами индекс элемента в выборке и HTML строку и возвращает новую HTML строку для нового элемента.*/
// $("span", $test).html(function (index, html) {
	// return html + index;
// });

// $("h5", $test).html("<em> new text </em>");
// $test.html("");// to clean up content of html

/*text - метод возвращает весь текстовый контент всех элементов выборки и их дочерних элементов или указывает текстовый контент для каждого элемента выборки. Метод принимает в себя текст, числа или булевые значения. Все они будут приведены к строке. Также метод принимает в себя функцию с аналогичным методу html функционалом.*/
//console.log($test.text());
//$test.text('test text');
//$test.text('<em>test text</em>');


/*remove - метод удаляет все элементы выборки из DOM дерева, метод принимает в себя селектор, который используется как фильтр при удалении элементов.

detach - метод аналогичный remove, но он возвращает удалённые элементы, которые мы можем сохранить и после вернуть в DOM.

empty - метод удаляет все дочерние элементы и текст выбранных элементов.

replaceWith - метод с аналогичными append аргументами. Отличается от него тем что не добавляет элементы в конец выборки, а заменяет каждый элемент выборки.

replaceAll - метод с аналогичными appendTo аргументами. Отличается от него тем что не добавляет элементы в конец выборки, а заменяет каждый элемент выборки.
*/
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



/*index - метод, который возвращает позицию элемента относительно элементов того же уровня.
<ul>     
<li class="first"></li>     
<li class="second"></li>      
<li class="third"></li> 
</ul>
$(".first").index(); // 0
$(".second").index(); // 1 
$(".third").index(); // 2
*/

// console.log("index", $("li").index());
// console.log("index", $("li").eq(1).index());
console.log($("li.first").index());//0
console.log($("li.second").index());//1
console.log($("h5").index());//5
console.log($("gfiuyggfd").index());//-1 if no element found




















