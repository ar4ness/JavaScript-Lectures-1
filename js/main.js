//JQuery animation

var $anim1 = $(".animate1");
var $anim2 = $(".animate2");
var $anim3 = $(".animate3");

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















