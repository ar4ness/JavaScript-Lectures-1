//===========JQuery animation===========

/*В jQuery есть несколько методов для наиболее распространённых анимаций и один универсальный метод, который позволяет анимировать практически любое числовое свойство.
Все анимации принимают стандартный набор параметров, который состоит из длительности, тайминговой функции и коллбэка или объекта с целым рядом параметров.
$("div").hide(500, "swing", function callback() {});
$("div").hide({
	   duration: 400, // длительность
	   easing: "swing", // тайминговая функция
	  queue: true, // в порядке очереди
	   specialEasing: {}, // тайминговые функции для отдельных CSS свойств 
	   step: function () {}, // функция, которая вызывается для каждого анимируемого свойства
	   progress: function () {}, // функция которая вызывается на каждом шаге анимации
	   complete: function () {}, // коллбэк функция, которая вызывается по окончании анимации,
	   done/fail/always: function (promise, jumpedToEnd) {}, // функции которые вызываются по окончании анимации, в которые передаются resolved или rejected промисы и булевый параметр, который указывает была ли завершена досрочно
	})
*/

var $anim1 = $(".animate1");
var $anim2 = $(".animate2");
var $anim3 = $(".animate3");

/*hide, show, toggle - методы скрывают, показывают, или и скрывают и показывают элемент. Без параметров элемент скрывается и показывается мгновенно. Со скоростью у элемента width и height между 0 и auto.
slideUp, slideDown, slideToggle - блок схлопывается по высоте, без параметров схлопывание длится 400 мс.
fadeIn, fadeOut, fadeToggle - блок становится полностью прозрачным, без параметров схлопывание длится 400 мс.
fadeTo - метод анимирует прозрачность блока до заданного уровня(от 0 до 1), он отличается от остальных тем, что он не принимает объект параметров, а вторым параметром у него идёт уровень прозрачности, в остальном всё то же самое.
*/

//$anim1.hide();

//$anim1.hide(2000);

//$anim1.hide(2000, function () {
 // $anim1.show(1000);
//});

//$("h1").on("click", function() {
//  $anim1.toggle(1000);
//})

/*$("h1").on("click", function() {
  $anim1.stop().toggle(1000);
  $anim2.stop().slideToggle(1000);
})
*/
//$anim2.slideUp().slideDown();

/*$("h1").on("click", function() {
  $anim1.stop().toggle(1000);
  $anim2.stop().slideToggle(1000);
  $anim3.stop().fadeToggle(1000);
})

$anim3.fadeOut().fadeIn()*/

/*$("h1").on("click", function() {
  $anim1.stop().toggle(1000);
  $anim2.stop().slideToggle(1000);
  $anim3.stop().fadeToggle(1000);
  $(this).fadeTo(500, 0.5, "swing", function() {
    alert("complete")
  });
})*/


/*$anim1.hide({
  duration: 1000,
  queue: true,
  step: function (param1, param2) {
    conole.log(param2.prop, param2.now, param2.end);
  },
  done: function (promise) {
    promise.then(function() {
      console.log("All ok");
    }).done(function () {
      console.log("All nice");
    });
  }
});*/
/*$anim1.fadeOut({
  duration: 1000,
  queue: true,
  step: function (param1, param2) {
    console.log(param2.prop, param2.now, param2.end);
  },
  done: function (promise) {
    promise.then(function() {
      console.log("All ok");
    }).done(function () {
      console.log("All nice");
    });
  }
})*/


/*animate - метод позволяет создавать свои собственные анимации, кроме остальных параметров первым параметром он принимает объект со значениями свойств, до которых нужно проанимировать элемент/элементы.
$("div").animate({"height": "100px", "width": "200px"}, 400, "swing", function callback() {});

Также есть ряд методов, которые помогают управлять анимациями на элементе.
stop - метод, который позволяет отменить текущую анимацию и вернуть элемент в исходное состояние. Метод принимает 2 булевых параметра, первый указывает сбросить всю очередь анимаций, а второй указывает сбрасывать анимацию не в исходное состояние, а в конечное, оба параметра по умолчанию false.
delay - метод позволяющий установить задержку между анимациями.
finish - метод аналогичный stop(true, true), но он сбрасывает в конечное состояние не только текущую анимацию, а и всю очередь.
queue - позволяет добавить в очередь анимаций свои дейcтвия, метод принимает в себя функцию коллбэк, которую вызывает когда доходит его очередь, однако прерывает очередь.
dequeue - метод, который позволяет выполнить метод вне очереди и не прерывать очередь в случае с queue.
$("div").slideUp().queue(function () { $(this).css("color", "red").dequeue() }).slideDown();


*/

/*$anim1.animate({"width": "25%"}).fadeOut({
  duration: 1000,
  queue: true,
}).slideUp({
  duration: 1000,
  queue: true
})

$anim1.fadeOut({
  duration: 1000,
  queue: true,
}).slideUp({
  duration: 1000,
  queue: false
}) */
/*$anim3.css("position", "relative").animate({
  width: "50%",
  height: "100px",
  left: "100px"
}, 400, "swing", function() {
  alert("complete");
})*/

/*$("body").animate({
  "scrollTop": 500
})*/

//$anim3.delay(2000).fadeOut(1000).css("background", "red")

/*$anim3.delay(2000).queue(function() {
  $(this).css("background", "red");
}).fadeOut(1000);

$anim3.delay(2000).queue(function() {
  $(this).css("background", "red").dequeue();
}).fadeOut(1000);*/

/*$("h1").on("click", function () {
  $anim3.css({"height": "300px", "width": "100%"});
  $anim3.stop().animate({"height": "100px"}, 1000).animate({"width": "26%"}, 1000)
});*/

/*$("h1").on("click", function () {
  $anim3.css({"height": "300px", "width": "100%"});
  $anim3.stop(true).animate({"height": "100px"}, 1000).animate({"width": "26%"}, 1000)
});*/

/*$("h1").on("click", function () {
  $anim3.css({"width": "100%", "height": "300px"});
  $anim3.stop(true, true).animate({"height": "100px"}, 1000).animate({"width": "26%"}, 1000)
});*/

/*$("h1").on("click", function () {
  $anim3.css({"width": "100%", "height": "300px"});
  $anim3.finish().animate({"height": "100px"}, 1000).animate({"width": "26%"}, 1000)
});*/


//======AJAX====

/*Ajax запросы в jQuery создаются с помощью метода $.ajax, метод принимает 2 параметра, URL, ссылка на которую отправляется запрос и объект с параметрами и возвращает объект promise, к которому можно добавлять слушателей. Параметров довольно много, но мы рассмотрим только самые основные.
Многие функции, передаваемые в объекте параметров получают при вызове параметром jqXHR объект - это объект deffered(promise), который позволяет подписаться на получение данных по окончании запроса.
Теперь перейдём к самом параметрам.
async - параметр отвечат будет ли запрос асинхронным, по умолчанию он установлен в true, если установить его в false, то запрос станет синхронным, то есть браузер не будет ничего делать до тех пор пока не придёт ответ.
beforeSend - функция, которая вызывается перед началом запроса. Она получает 2 параметра, jqXHR и объект параметров и может модифицировать их перед запросом.

cache - булевый параметр, который указывает, может ли ответ браться их кэша или нет, по умолчанию true, false для данных в формате script и jsonp. Значение false будет работать только для HEAD и GET запросов.
complete – функция коллбэк, которая срабатывает по завершении запроса, функция получает 2 параметра, jqXHR и текстовый параметр статуса запроса. Вот список возможных статусов: "success", "notmodified", "nocontent", "error", "timeout", "abort" or "parsererror"
data - передаваемые данные, чаще всего используется обычный JS объект, для POST, PUT запросов или строка, для GET. Строка выглядит так "?key1=value1&key2=value2&etc.. "
dataType - ожидаемые от сервера данные, "xml", "html", "script", "json", "jsonp", "text". По умолчанию jQuery сам пытается определить тип возвращаемых данных.
error - функция, которая вызывается когда запрос возвращает ошибку, функция получает jqXHR, текстовый статус ошибки "timeout", "error", "abort", and "parsererror" и текстовое представление ошибки "Not found", "Internal server error", etc...
global - булевый флаг, который указывает создавать ли глобальные события "ajaxStart" и "ajaxStop" или нет. По умолчанию true.


headers  - объект, в котором передаются дополнительные заголовки запроса.
ifModified - запрос считается успешным только в том случае, если ответ сервера отличается от предыдущего.
method - "GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "PATCH", "TRACE", "CONNECT". По умолчанию "GET". В старых версиях jQuery параметр называется type.
statusCode - объект, который позволяет назначить вызов функций по статус коду, пример:
statusCode: {
  404: function() {
	       alert( "page not found" );
	    }
	 }
success - функция, которая будет вызвана, если запрос был успешен, функция принимет в виде параметров data - данные, которые вернул сервер, статус запроса, в строковом виде и jqXHR.
url  - адрес запроса, в случае если вы не передаёте его первым параметром.

В jQuery есть события, которые срабатывают при ajax запросах, которые можно отследить подписавшись на них используя специальные методы.
Все методы должны вызываться после $(document).
ajaxStart и ajaxStop - срабатывают когда отправляется  первый(в данный момент времени) ajax запрос или возвращается последний соответственно. Коллбэк функция получает параметром event запроса.
$(document).ajaxStart(function (event) {});
ajaxSend - срабатывает перед отправкой любого ajax запроса, коллбэк функция получает параметрами event, jqXHR, settings(параметры запроса).
$(document).ajaxSend(function (event, jqXHR, settings) {});

ajaxSuccess - срабатывает после возврата успешного ajax запроса, коллбэк функция получает параметрами event, jqXHR, settings и data(данные, которые вернул сервер).  
$(document).ajaxSuccess(function (event, jqXHR, settings, data) {});
ajaxError - срабатывает после возврата ajax запроса c ошибкой, коллбэк функция получает параметрами event, jqXHR, settings и errorText(текстовое представление ошибки).  
$(document).ajaxError(function (event, jqXHR, settings, errorText) {});
ajaxComplete - срабатывает после возврата любого ajax запроса, коллбэк функция получает параметрами event, jqXHR  и settings(параметры запроса). 
$(document).ajaxComplete (function (event, jqXHR, settings) {}); 

*/

/*$.ajax("http://www.mocky.io/v2/58c19609110000c31663f033").done( function (response) {
  alert(response);
})*/



//JSON - allways in ""
/*{
  "key": "value",
    "key2":true,
      "someKey"
  {
    "someInnerKey":256
  }
,
  "array":[1, 2, 3]
}*/


// XML
/*<container>
    <key>value</key>
    <key>true</key>
    <someKey>
      <someInnerKey></someInnerKey>
    </someKey>
  <array>
    <value>1</value>
    <value>2</value>
    <value>3</value>
    </array>
</container>*/

// Query parameters

//http://www.mocky.io/v2/58c19609110000c31663f033?param=value&param2=value2#test

// /deleteSomeEntity/entityId
// /deleteSomeEntity?entityId=ghdgfhdfhfdsgh4765

/*$.ajax({
  url: "http://www.mocky.io/v2/58c1a2f5110000461863f07c",
  async: false
}).done(function(data){
  console.log(data);
})
console.log($.now());


$("h1".fadeOut(10000));*/

/*console.log($.now());
$.ajax({
  url: "http://www.mocky.io/v2/58c1a2f5110000461863f07c",
  async: false,
  beforeSend: function(jqXHR, settings){
    console.log(jqXHR);
    console.log(settings);
  }
}).done(function(data){
  console.log(data);
})
console.log($.now());*/

/*console.log($.now());
$.ajax({
  url: "http://www.mocky.io/v2/58c1a2f5110000461863f07c",
  async: false,
  beforeSend: function(jqXHR, settings){
    console.log(jqXHR);
    console.log(jqXHR);
    console.log(settings);
  }
}).done(function(data, status, jqXHR){
  console.log(jqXHR);
})
console.log($.now());*/

/*console.log($.now());
$.ajax({
  url: "http://www.mocky.io/v2/58c1a2f5110000461863f07c",
  async: false,
  beforeSend: function(jqXHR, settings){
    console.log(jqXHR);
   jqXHR.someCustomData = "text";
    console.log(settings);
  },
  cache: true
}).done(function(data, status, jqXHR){
  console.log(jqXHR);
})
console.log($.now());*/



/*$.ajax({
  url: "http://www.mocky.io/v2/58c1a2f5110000461863f07c",
  async: true,
  beforeSend: function(jqXHR, settings){
    //console.log(jqXHR);
//   jqXHR.someCustomData = "text";
   // console.log(settings);
  },
  cache: true,
  complete: function(jqXHR, status) {
    console.log(jqXHR, status);
  },
  data: {
    key1: "value1",
    key2: "value2"
  },
  method: "POST"
}).done(function(data, status, jqXHR){
  console.log(jqXHR);
})
console.log($.now());*/

/*//success url: "http://www.mocky.io/v2/58c1a2f5110000461863f07c"
// error url: "http://www.mocky.io/v2/58c1aabf110000b31863f090"
$.ajax({
  url: "http://www.mocky.io/v2/58c1a2f5110000461863f07c",
  async: true,
  beforeSend: function(jqXHR, settings){
    //console.log(jqXHR);
//   jqXHR.someCustomData = "text";
   // console.log(settings);
  },
  cache: true,
  complete: function(jqXHR, status) {
    console.log(jqXHR, status);
  },
  data: {
    key1: "value1",
    key2: "value2"
  },
  method: "POST",
  dataType: "json" /*'text'*/
 /* error: function (jqXHR, errorStatus, errorText) {
    console.log(jqXHR, errorStatus, errorText);
  }
}).done(function(data, status, jqXHR){
  console.log(data);
});*/

/*$.ajax({
  url: "http://www.mocky.io/v2/58c1aabf110000b31863f090",
  async: true,
  beforeSend: function(jqXHR, settings){
    //console.log(jqXHR);
//   jqXHR.someCustomData = "text";
   // console.log(settings);
  },
  cache: true,
  complete: function(jqXHR, status) {
    console.log(jqXHR, status);
  },
  data: {
    key1: "value1",
    key2: "value2"
  },
  method: "POST",
  dataType:  "text",
  error: function (jqXHR, errorStatus, errorText) {
    console.log(jqXHR, errorStatus, errorText);
  },
  global: true,
  headers: {
    "my-sample-header": "test"
  }
}).done(function(data, status, jqXHR){
  console.log(data);
});*/

/*$.ajax({
  url: "http://www.mocky.io/v2/58c1aabf110000b31863f090",
  async: true,
  beforeSend: function(jqXHR, settings){
    //console.log(jqXHR);
//   jqXHR.someCustomData = "text";
   // console.log(settings);
  },
  cache: true,
  complete: function(jqXHR, status) {
    console.log(jqXHR, status);
  },
  data: {
    key1: "value1",
    key2: "value2"
  },
  method: "POST",
  dataType:  "text",
  error: function (jqXHR, errorStatus, errorText) {
    console.log(jqXHR, errorStatus, errorText);
  },
  global: true,
  headers: {
   // "my-sample-header": "test"
  },
  statusCode: {
    200: function() {
      alert("all ok")
    },
    404: function() {
      alert("not found")
    }
  }
}).done(function(data, status, jqXHR){
  console.log(data);
});*/

$(document).on("ajaxStart", function() {
  console.log("START");
}).on("ajaxStop", function() {
  console.log("stop");
}).on("ajaxSend", function() {
    console.log("send");

}).on("ajaxSuccess", function() {
    console.log("success");

})
$.ajax("http://www.mocky.io/v2/58c1a2f5110000461863f07c");
$.ajax("http://www.mocky.io/v2/58c1a2f5110000461863f07c");
$.ajax("http://www.mocky.io/v2/58c1a2f5110000461863f07c");















