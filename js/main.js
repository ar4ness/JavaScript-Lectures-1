/*AngularJS - это фреймворк, основной задачей которого является, построение максимально эффективного и легко масштабируемого приложения.
Фрэймворк предоставляет богатый функционал для разработки и, что более важно, удобную систему добавления и встраивания своего функционала в экосистему проекта на ряду с существующим.
Есть много разных подходов к разработке на AngularJS, но наиболее востребованный в данный момент компонентный.
<!>Всем настоятельно рекомендую максимально внимательно изучить https://docs.angularjs.org/guide/introduction и разделы function, directive, service и filter в https://docs.angularjs.org/api

Модуль(module) - основной структурный элемент, вокруг него собираются другие элементы приложения обеспечивающие функционирование отдельной его части или же всего приложения.
Скоуп($scope) - хранилище моделей и всего активного в данный момент кода. Также является контекстом работы отдельной части HTML который находится в данном $scope.
Рут скоуп($rootScope) - вершина иерархии $scope, все остальные $scope наследуют его и(если скоуп не изолированый(isolated)) также наследуют его свойства методы, которые мы можем добавлять. Абсолютно любой $scope, может обратиться к $rootScope через специальное свойство $root.
Вью(view) - HTML код который управляется AngularJS.

Модули - модули можно подключать друг к другу, когда к модулю module1 подключён module2, module1 может использовать всё что подключено к module2, включая другие модули.
Сервисы(service) - это набор методов и, иногда, данных, которые мы хотим использовать в разных частях приложения.
Фабрики(factory) - это практически то же самое что и сервис, но сервисы создают новый экземпляр класса, а фабрики служат для генерации сущностей любого типа.
Константы(cоnstant) - это хранилища неменяющихся в ходе работы программы данных.
Значения(value) - то же самое что и константы, но значения в них могут меняться.

Директивы(directives) - это элементы которые могут добавлять дополнительные свойства HTML элементам, встраивать их, удалять и вообще манипулировать DOM деревом. 
Компоненты(component) - почти то же самое что и директивы, но более простые и с одной основной функцией, добавлять в DOM, новые элементы, которые будут управляться компонентом.
Контроллеры(controller) - функции, которые управляют отдельной частью вью, в которой вызван этот контроллер.
Фильтры(filter) - основной задачей фильтров является модификация данных перед их встраиванием во вью, не меняя саму модель.


Интерполяция(Interpolation) - возможность выполнять указанные в вью выражения и взаимодействовать с $scope. По сути является основой вывода данных из модели в view.
Теперь немного об основных функциональных элементах, которые предоставляет сам AngularJS.
Функции:
angular.module - наиболее полезная нам функция, через неё создаются и вызываются модули.При создании первым аргументом принимает имя модуля, а вторым массив подключаемых модулей.При вызове передаётся только имя модуля.
angular.noop - функция которая ничего не делает :) Она полезна тем, что её можно вызывать из вью, если нам вдруг нужно, к примеру, не выполнять ничего в "else" тернарного оператора.

Сервисы:
$filter - сервис который позволяет вызывать фильтры из контроллеров, сервисов и т.д.
$http - сервис который позволяет делать ajax запросы, у него есть методы get, post, put и delete, head, patch, jsonp для соответствующих запросов, а также можно передавать параметры запроса прямо в функцию $http. Все запросы возвращают promise. У которого, на ряду с прочими, есть методы success, который вызывается если запрос был успешным и в который передаются данные, который вернул сервер и error, который вызывается если сервер вернул ошибку и в который передаются данные которые вернул сервер.

*/

(function () {
	"use strict";
	angular.module("app", [
	"price",
	"toHtml",
	"myComponent",
		"scrollService",
    "scrollToTop"
	]).run(function($templateCache) {
		$templateCache.put("myTemplate.html", "This is the <br/> content");
	});
})();

(function () {
	"use strict";
	angular.module("price", [])
	.filter("price", price);
	
	function price() {
		return function(number, symbol) {
			return (symbol || "$") + number;
		};
	}
})();

/*$q - сервис который позволяет создавать собственные промисы, основными методами сервиса являются defer, который создаёт defered объект, resolve - который резолвит промис, reject - который реджектит промис и all который принимает массив промисов и создаёт свой собственный, который резолвится или реджектится только когда все его промисы зарезолвились или зареджектились. У самого промиса (defered.promise) есть метод then, который работает так же как и в jQuery.

$rootScope - предоставляет доступ к $rootScope, на той стадии загрузки приложения, когда $scope ещё не доступны, но им, при желании, можно пользоваться и дальше.

$sce - ангуляр не позволяет встраивать в HTML любую разметку. Когда HTML вернулся, скажем, как одно из JSON полей, то чтобы встроить его в разметку его нужно добавить в список разрешённых. Для это используется метод $sce trustAsHtml.
*/

(function () {
	"use strict";
	angular.module("toHtml", [])
	.filter("toHtml", toHtml);
	
	toHtml.$inject = ['$sce'];
	function toHtml($sce) {
		return function(html) {
			return $sce.trustAsHtml(html);
		};
	}
})();



(function () {
	"use strict";
	angular.module("app")
		.controller("myCtrl", myCtrl);
	
	myCtrl.$inject = ["$scope", "$filter", "$http", "$q", "$sce", "$templateCache", "$interval", "testConstant", "testConstant2", "message", "messages"];
	function myCtrl($scope, $filter, $http, $q, $sce, $templateCache, $interval, testConstant, testConstant2, message, messages){
		var myCtrl = this;
		/*$scope.price=25;*/
		//myCtrl.price = 25;
		/*console.log($scope);*/
		myCtrl.price = $filter("price")(25, "#");
		myCtrl.serverData = {};
		myCtrl.userAction = "";
		myCtrl.html = '<h1>test</h1>';
		myCtrl.html2 = $templateCache.get('myTemplate.html');
		myCtrl.timer = new Date().getSeconds();
		myCtrl.date =  new Date(); /*or use(as we have jquery) $.now()*/
		myCtrl.usersFilter = "";
		myCtrl.names = [];
		myCtrl.selectedOptions = "";
		myCtrl.imageSrc = "";

    console.log("testConstant", testConstant);

		myCtrl.options = [
		{value: "", label: "Select item"},
		{value: "item1", label: "item 1 label"},
		{value: "item2", label: "item 2 label"},
		{value: "item3", label: "item 3 label"},
		{value: "item4", label: "item 4 label"},
		{value: "item5", label: "item 5 label"}
		];
		
		myCtrl.onBlur = onBlur;
		myCtrl.askUser = askUser;
		myCtrl.usersFilterMethod = usersFilterMethod;
		myCtrl.getMessage = getMessage;
		myCtrl.getMessagesCount = getMessagesCount;

		function getMessage () {
			return messages.message;
		}
		function getMessagesCount () {
			return messages.list.length;
		}


		function onBlur($event) {
			console.log($event);
		}
		
		function usersFilterMethod(elem, index, array) {
			return ~elem.name.toLowerCase().indexOf(myCtrl.usersFilter.toLowerCase());
		}

		$scope.$applyAsync(function () {
			myCtrl.serverData = {"myKey1": "asdasd"};
		});
		
		$http.get("http://www.mocky.io/v2/58d4161a100000db0cd7a6b5").then(function (data) {
			/*console.log(data);*/
			myCtrl.serverData = data.data;
		});
		/*console.log($scope);*/
		
		function askUser () {
			myModal().then(function (userAnswer) {
				myCtrl.userAction = userAnswer;
				myCtrl.imageSrc = "images/logo.png";
			})
		}
		
		/*$templateCache - сервис который позволяет кешировать шаблоны чтобы не дожидаться их загрузки с сервера, зачастую используется чтобы загрузить все angular шаблоны вместе с сайтом одним файлом.
$timeout и $interval - расширенные версии нативных setInterval и setTimeout, основной особенностью является то, что они инициируют digest loop(о том что это мы поговорим позже).
*/
		
		function myModal() {
			var deffered = $q.defer();
			setTimeout(function() {
				deffered.resolve("user click OK");
			}, 5000);
			return deffered.promise;
		}
		
		$interval(function(time) {
			console.log(time);
			myCtrl.timer = new Date().getSeconds();
		}, 1000, 5, true, new Date().getSeconds());
		
	}	
})();


(function () {
	"use strict";
	angular.module("myComponent", [])
	.component("myComponent", myComponent());
	function myComponent() {
		return {
			template: "<div><h1>Component title </h1><ng-transclude></div>",
			transclude: true
		}
	}
})();
////////////==============LECTURE 23--------------
/*Фильтры:
 date - фильтр, который позволяет преобразовывать дату в разные форматы. Кроме даты принимает формат и тайм зону.
 filter - применяетcя к массиву чтобы отфильтровать его, как правило для фильтрации используется строка, если строка фигурирует в элементе, то такой элемент проходит фильтрацию  объект, если объекты в массиве содержат те же ключи и значения что и шаблонный, то такие элементы проходят фильтрацию или функция компаратор с ней в конечный массив попадут только те элементы, для которых она вернёт true.
 limitTo - принимает в себя массив, число или строку и лимит, возвращает первые n знаков для числа и строки и первые n элементов для массива.

 <<<<<<< HEAD
 /*http://www.worldometers.info/
		lowercase и uppercase - приводят текст к соотвтетствующему регистру.
		orderBy - используется для сортировки массива, может сортировать по полям объектов, реверсить напрявление сортировки, с помощью функции копаратора и не только.
		number - делит число по 3 знака, разделяет запятыми и округляет его, по умолчанию до 3го знака после точки, формат может меняться.
>>>>>>> 35d51445e6f1483c51453ece1d03e08e708753e8

Директивы:
		ngApp - основная точка входа в приложение, может быть всего одна на странице, как правило указывается в html или body и принимает аргументом имя модуля, который будет основным на сайте.
		ngBindHtml - используется для вывода html разметки на страницу, зачастую html требуется сначало "прогнать" через $sce.trustAsHtml.
		ngBlur - используется на элементах формы и срабатывает при потере элементом фокуса.
		ngChange - используется на элементах формы и срабатывает каждый раз когда в них что-либо меняется.

		ngChecked - используется на чекбоксах и радиобаттонах, если выражение переданное в директиву истинно, то элемент становится выбраным.
		ngClass - используется для добавления и удаления классов на элементах, чаще всего используется синтаксис объекта, где класс(классы) выступаеют ключами, а выражения, которые определяют применить класс или убрать значениями.
		ngClick - переданное выражение вызывается при кликена элемент.
		ngController - используется для вызова контроллера для данной части разметки, рекомендуется использовать синтаксис controllerAs, но об этом позже.
		ngDisabled - используется на элементах формы, если переданное выражение истинно, то элемент становится отключён.

		ngFocus - переданное выражение вызывается при фокусе элемента.
		ngForm - используется в том случае, если вы не можете использовать тэг form, как его замена.
		ngHide/ngShow - если выражение истинно, то элемент показывается или скрывается. Обе директивы работают в обе стороны(уменют и показывать и скрывать).
ngIf - если выражение истинно, то элемент и все его потомки добавляются в DOM дерево, иначе удаляются.
		ngInit - позволяет выполнить выражение когда элемент появляется в DOM.
		ngKeydown/ngKeypress/ngKeyup - срабатывают при нажатии клавиш клавиатуры, как правило на input или textarea.

		ngModel - связывает элемент формы с моделью таким образом, что любые изменения модели тут же меняют элемент, а измения элемента записываюстя в модель.
		ngModelOptions - позволяет задать дополнительные опции для ngModel, такие как debounce.
		ngMousedown/ngMousemove/etc... - события мыши которые можно отслеживать на элементе на котором находится директива.
		ngOptions - специальная директива для построения списка опций для select, но основе модели.
		ngRepeat - директива позволяющая дублировать данный элемент и всех его потомков на основе перебора коллекции, у неё довольно много настроек, но основная track by, которая указывает по чему будет определяться уникальность элемента. В случае её отсутствия повторение в массиве приведёт к ошибке.

		ngRequired - элемент формы будет считаться обязательным для заполнения только если выражение в директиве истинно.
		ngSrc - используется как замена src на тэге img. Нужна для того чтобы не было ошибок из-за неправильного src у картинокесли эти ссылки вставляются динамически.
		ngSwitch – используется как switch case для view. Показывает только те элементы для которых выражение истинно.
		ngTransclude - используется для директив, когда нужно передать им шаблон извне.



*/
/*http://www.worldometers.info/*/

////////////////=============LECTURE 24++++++++++++++++
(function () {
  "use strict";
  angular.module("app")
      .constant("testConstant", "testConstantValue")
      .constant("testConstant2", {
        "key1": "value1",
        "key2": "value2"
      })
}) ();

(function () {
  angular.module("app")
      .value("message", "")
      .value("messages", {
        list: [],
				message: ""
        //"key2": "value2"
      })
}) ();

(function () {
	"use strict";

  angular.module("app")
      .controller("messagesController", messagesController);
	messagesController.$inject = ["message", "messages", "scrollService"];
	function messagesController(message, messages, scrollService) {
		var messagesController = this;
		messagesController.messageField = "";
		messagesController.sendMessage =sendMessage;

		function sendMessage(newMessage) {
      scrollService.scrollTop(0);
			messages.list.push(newMessage);
			messages.message = newMessage;
		}
	}
}) ();


(function () {
	"use strict";

	angular.module("scrollService", [])
	  .service("scrollService", scrollService);
  scrollService.$inject =["testFactory"];
	function scrollService(testFactory) {
		return {
			scrollTop: scrollTop
		};

    function scrollTop(position) {
      console.log(testFactory);
      testFactory.method();
			$("html, body").animate({"scrollTop": position}, 500);
		}
	}
}) ();

(function () {
  "use strict";
  angular.module("app")
      .factory("testFactory", testFactory);

  function testFactory() {
    return {
      key1: "value1",
      key2: "value2",
      obj: {"test": "test"},
      method: method
    };
    function method() {
      console.log("Hi, I'm method");
    }
  }
}) ();

(function () {
  "use strict";
  angular.module('app').component("myMessenger", myMessenger());
      function myMessenger() {
        myMessengerCtrl.$inject = ['messages'];
        return {
          templateUrl: "componentTemplate.html",
          //template: "<div><h1></h1></div>",
          controller: myMessengerCtrl,
          controllerAs: "myMessenger",
          transclude: false,
          bindings: {
            title: "@",
            onMessageSent: "&"
          }
        };

      function myMessengerCtrl(messages) {
        var myMessengerCtrl = this;
        myMessengerCtrl.messageField = "";
        myMessengerCtrl.sendMessage = sendMessage;
        function sendMessage(message) {
          myMessengerCtrl.onMessageSent({"message": message});
          messages.message = message;
          messages.list.push(message);
        }
      }
      }
}) ();

(function () {
  "use strict";

  angular.module("scrollToTop", ["scrollService"]).directive("scrollToTop", scrollToTop);

  scrollToTop.$inject = ["scrollService"];
  function scrollToTop (scrollService) {
    return {
      restrict: "A",
    //templateUrl: "",
      //template: "",
      //controller: controller,
      //controllerAs: "controllerAs",
      link: link
      //require:"",
      //transclude: false,
      //bindToController: false,
      //scope: false
    }
    function link($scope, $element) {
      $element.on("click", function() {
        scrollService.scrollTop(0);
      })
    }
  }
}) ();

(function() {
  angular.module("app").factory("myInterceptors", myInterceptors).config(interceptorsConfig);
  myInterceptors.$inject =["$q"];
  function  myInterceptors($q) {
    return {
      request: function(config) {
        console.log(config);
        return config;
      },
      response: function(response) {
        console.log(response);
        return response;
      },
      requestError: function (rejectReason) {
        return $q.reject(rejectReason);
      },
      responseError: function(response) {
        return $q.reject(response);
      }
    }
  }
  interceptorsConfig.$inject = ['$httpProvider'];
  function interceptorsConfig ($httpProvider) {
    $httpProvider.interceptors.push('myInterceptors');
  }
} ) ();















