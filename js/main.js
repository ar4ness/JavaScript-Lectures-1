// function Pet(name) {
	// var name = name;
	// this.getName = function () {return name;};
// }
// var myPet = new Pet("Tom");
// //console.log(myPet.getName()); //Tom;

// function Cat (name, weight) {
	// Pet.apply(this, arguments);
	// var weight = weight;
	// this.getWeight = function () {return weight;}
// }
// var myCat = new Cat ("Tomcat", 5);
// // console.log(myCat.getName()); //Tomcat
// // console.log(myCat.getWeight());//5
// // console.log(myPet.getName()); //Tom;

// function Pet(name) {
	// this._name = name;
	// this.getName = function () {return this._name;};
// }
// // console.log(myCat.getName()); //Tomcat
// // console.log(myCat.getWeight());//5
// // console.log(myPet.getName()); //Tom;
// // console.log(myCat);//Cat {_name: "Tomcat"}
// // console.log(myPet); //Pet {_name: "Tom"};


// function Cat (name, weight) {
	// Pet.apply(this, arguments);
	// var weight = weight;
	// this._name = "Cat " + name;
	// this.getWeight = function () {return weight;}
	// this.setWeight = function (newWeight) {weight =  newWeight;}
	
// }

// // console.log(myCat.getName()); //Cat Tomcat;
// // console.log(myPet.getName()); //Tom;

// // function CatV2 (name, weight) {
	// // Cat.apply(this, arguments);
	// // this.getWeight = function () {return weight + "kg";}
// // }

// var myCatV2 = new CatV2("TomV2", 4);
// console.log(myCatV2.getName()); //TomV2;
// console.log(myCatV2.getWeight()); //4kg;

 // function CatV2 (name, weight) {
	// Cat.apply(this, arguments);
	 // this.getWeight = function () {return this.getWeight() + "kg";}
// }


// function CatV2 (name, weight) {
	// Cat.apply(this, arguments);
	// var oldGetWidth = this.getWeight;
	// this.getWeight = function () {return oldGetWidth() + "kg";}
// }


////Prototypes

// var object1 = { test1: "test1" };
// var object2 = { test2: "test2" };
// object2.__proto__ = object1;
// console.log(object2.test2);//test2;
// console.log(object2.test1);//test1;
// object2.test1 = "new object 1";
// console.log(object2.test1);//new object1;
// console.log(object1.test1);//test1;

// function OOPet(name) {
// this._name = name;
	
// }
// OOPet.prototype.getName = function () { return this._name; }

// var myOOPet = new OOPet("Tom");
//console.log(myOOPet.getName());// Tom;
//console.log(myOOPet); //OOPet {_name: "Tom"};

// // console.log(new Object()); /*Object
// // __proto__:Object
// // __defineGetter__:__defineGetter__()
// // __defineSetter__:__defineSetter__()
// // __lookupGetter__:__lookupGetter__()
// // __lookupSetter__:__lookupSetter__()
// // constructor:Object()
// // hasOwnProperty:hasOwnProperty()
// // isPrototypeOf:isPrototypeOf()
// // propertyIsEnumerable:propertyIsEnumerable()
// // toLocaleString:toLocaleString()
// // toString:toString()
// // valueOf:valueOf()
// // get __proto_:__proto__()
// // set __proto__:__proto__()*/


// function OOCat(name, weight) {
	// OOPet.apply(this, arguments);
	// this._weight = weight;
// }

// OOCat.prototype = Object.create(OOPet.prototype);
// OOCat.prototype.constructor = OOCat;
// OOCat.prototype.getWeight = function () { return this._weight; };

// var myOOCat = new OOCat('My OOCat', 5);
// //console.log(myOOCat);

// // function OOCatV2(name, weight) {
	// // OOCat.apply(this, arguments);
// // }
// // OOCatV2.prototype = Object.create(OOCat.prototype);
// // OOCatV2.prototype.constructor = OOCatV2;
// // OOCatV2.prototype.getWeight = function () { return this._weight + "kg"; };
// // var myOOCatV2 = new OOCatV2("OOCatV2 ", 6);
// // console.log(myOOCatV2.getWeight());//6kg

// function OOCatV2(name, weight) {
	// OOCat.apply(this, arguments);
// }

// //chtoby rasshirit'
// OOCatV2.prototype = Object.create(OOCat.prototype);
// OOCatV2.prototype.constructor = OOCatV2;
// OOCatV2.prototype.getWeight = function () { return OOCat.prototype.getWeight.call(this) + "kg"; };

// var myOOCatV2 = new OOCatV2("OOCatV2 ", 6);

// console.log(OOPet.prototype.isPrototypeOf(myOOCatV2));//true
// console.log(OOCat.prototype.isPrototypeOf(myOOCatV2));//true
// console.log(OOCatV2.prototype.isPrototypeOf(myOOCatV2));//true, but in my work it was = false. Why? Artem ctr v 131 string
// console.log(Array.prototype.isPrototypeOf(myOOCatV2));//false
// console.log(Object.prototype.isPrototypeOf(myOOCatV2));//true

// //console.log(Object.prototype.isPrototypeOf([]));//true

// console.log(myOOCatV2 instanceof OOPet);//true
// console.log(myOOCatV2 instanceof OOCat);//true
// console.log(myOOCatV2 instanceof OOCatV2);//true
// console.log(myOOCatV2 instanceof Object);//true
// console.log(myOOCatV2 instanceof Array);//false


// // console.log(Array.prototype.isPrototypeOf([]));//true
// // console.log(Array.prototype.isPrototypeOf({}));//false
// // console.log(Array.prototype.isPrototypeOf(""));//false
// // console.log(Array.prototype.isPrototypeOf(null));//false


////////////-------------------JQUERY


// // // console.log(window);

// // (function($) {
	
// // })(jQuery);


// !!!!!!styles set in js are written in style in html, not in css

// (function($) {
	// $('a').css("color", "red");
// })(jQuery);


// (function($) {
	// $('a').each(function (index, elem) {
		// console.log(elem);
	// });
// })(jQuery);



// (function($) {
	// var links = $('a');
	// links.each(function (index, elem) {
		// console.log(elem);
	// });
	// links.on("click", function (event) {
		// event.preventDefault();
		// $(this).css("color", $(this).text());
	// });
// })(jQuery);


// (function($) {
	// var links = $('a');
	// links.each(function (index, elem) {
		// console.log(elem);
	// });
	// links.on("click", function (event) {
		// event.preventDefault();
		// links.css("color", $(this).text());
	// });
// })(jQuery);

// (function($) {
	// var ul = $("ul");
	// var links = ul.find('a');
	// //var links = $('a', ul);
	// links.each(function (index, elem) {
		// //console.log(elem);
	// });
	// links.on("click", function (event) {
		// event.preventDefault();
		// links.css("color", $(this).text());
	// });
// })(jQuery);


(function($) {
	var ul = $("ul");
	var links = ul.find('a');
	//var links = $('a', ul);
	links.each(function (index, elem) {
		//console.log(elem);
	});
	links.on("click", function (event) {
		event.preventDefault();
		links.css("color", $(this).text());
	});
	links.filter(".blue").on("click", function() {
		ul.css({
			"opacity": 0.5,
			"margin": "0 0 0 50px"
			});
	});
	links.filter(":has(span)").on("click", function() {
		ul.css({
			"opacity": 1,
			"margin": "0"
			});
	});
	
	// console.log($("li", ul).filter(":has(a span)").index());//3
	// console.log($("li", ul).filter(":has(>span)").index());//1
	// console.log($("li:eq(2)", ul));//1
	// console.log($("ul li [href='#']"));//1
	// console.log($("ul li [title]"));//1
	
	
	console.log($(":checked"));
	$(".send").on("click", function () {
		console.log($(":checked"));;
	})
	
	//selectors
	// "ul.class #id"
	// "ul > .class"
	// "ul + .class"
	// "ul ~ .class"
	// $("ul").prev(); //previous element;
	// $("ul").next(); //next element;
	// $("ul li:eq(1)"); $("ul li"):eq(1); // element by index;
	// $("ul li:first"); $("ul li:last"); // first or last element ;
	
	//$("ul li"
	
	// $("ul li:first-child"); $("ul li:last-child"); // first or last element ;
	// $("ul li:has(span)"); $("ul li").has("span"); // is there such element ;
	
// $("ul li[href]");
    // $("ul li[href="#"]);//find element by attribute
	
	
	// $(":text");
	// $(":text:radio:checkbox");//get elements with type text
	// $(":checked") // get all selected/checked elements of form
	// $(":selected") // get all selected options of form
	
	
	
})(jQuery);





