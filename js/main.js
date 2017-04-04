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
	"myComponent"
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
	
	myCtrl.$inject = ["$scope", "$filter", "$http", "$q", "$sce", "$templateCache", "$interval"];	
	function myCtrl($scope, $filter, $http, $q, $sce, $templateCache, $interval){
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
		
		myCtrl.options = [
		{value: "", label: "select item"},
		{value: "item1", label: "item 1 label"},
		{value: "item2", label: "item 2 label"},
		{value: "item3", label: "item 3 label"},
		{value: "item4", label: "item 4 label"},
		{value: "item5", label: "item 5 label"}
		]
		
		myCtrl.onBlur = onBlur;
		myCtrl.askUser = askUser;
		myCtrl.usersFilterMethod = usersFilterMethod;
		
		function onBlur($event) {
			console.log($event);
		}
		
		function usersFilterMethod(elem, index, array) {
			return ~elem.name.toLowerCase().indexOf(myCtrl.usersFilter.toLowerCase());
		}

		$scope.$applyAsync(function () {
			myCtrl.serverData = {"myKey1": "asdasd"};
		})
		
		$http.get("http://www.mocky.io/v2/58d4161a100000db0cd7a6b5").then(function (data) {
			/*console.log(data);*/
			myCtrl.serverData = data.data;
		});
		/*console.log($scope);*/
		
		function askUser () {
			myModal().then(function (userAnswer) {
				myCtrl.userAction = userAnswer;
				myCtrl.imageSrc = "image/logo.png";
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
		return (
		template: <div><h1>Component title </h1><ng-transclude></div>
		)
		transclude: true;
	}
})()

/*http://www.worldometers.info/*/





























