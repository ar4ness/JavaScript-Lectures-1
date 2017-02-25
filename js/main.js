//------ 1 exercize
// ---- functional
/*Написать функцию конструктор Animal, которая создаёт новый экземпляр класса, с параметрами name, type, weight в кг, maxSpeed м/с и методами getName, getType, getWeight, setWeight, run, который возвращает текущую скорость животного, если она не указана или указывает текущую скорость животного или выдаёт ошибку если она ниже 0 или больше maxSpeed и coverDistance который принимает расстояние в метрах и возвращает сколько секунд животное будет преодолевать это расстояние с текущей скоростью.
*/
function Animal(name, type, weight, maxSpeed) {
	var name = name;
	var type = type;
	var weight = weight;
	var maxSpeed = maxSpeed;
	var speed = maxSpeed;
	
	this.getName = function() {return name;};
	this.getWeight = function() {return weight + " kg";};
	this.setWeight = function (newWeight) {return weight = newWeight ;};
	this.getType = function() {return type;};
	
	this.run = function run(newSpeed) {
		if(newSpeed) {
			if(newSpeed <= 0) {
				return "error";
			}
			else if(newSpeed > maxSpeed) {
				return "error";
			} 
			else {
				speed = newSpeed;
			}
		}
		else {return speed + " m/s"};
	},
	this.coverDistance = function coverDistance(distance) {
		
		return  distance / parseFloat(this.run()) + " sec";
	};
}

// var firstDog = new Animal ("Jack", "dog", "10", "40" );
// console.log(firstDog.getName());//jack
// console.log(firstDog.getType());//dog
// console.log(firstDog.getWeight());//10kg
// console.log(firstDog.setWeight(12));//12kg
// console.log(firstDog.getWeight());//12kg
// console.log(firstDog.run());//40 m/s
// console.log(firstDog.run(30));//undefined
// console.log(firstDog.coverDistance(90));//3

//------prototypes
function AnimalProto(name, type, weight, maxSpeed) {
	this._name = name;
	this._type = type;
	this._weight = weight;
	this._maxSpeed = maxSpeed;
	this._speed = maxSpeed;
}
AnimalProto.prototype = {
	getName: function () {return this._name},
	getType: function () {return this._type},
	getWeight: function () {return this._weight + "kg"},
	setWeight: function (newWeight) {return this._weight = newWeight},
	
	run: function (newSpeed) {
		if(newSpeed!==undefined) {
			if(newSpeed <= 0) {
				throw ("It's too low");
			}
			else if(newSpeed > this._maxSpeed) {
				throw ("Too hight!");
			} 
			else {
				this._speed = newSpeed;
			}
		}
		else {return this._speed + " m/s"};
	},
	
	coverDistance: function (distance) {
		return  distance / parseFloat(this.run()) + " sec";
	}
}	

var secDog = new AnimalProto ("Jess", "dog", "20", "50" );

// console.log(secDog.getName());//jess
// console.log(secDog.getType());//dog
// console.log(secDog.getWeight());//20kg
// console.log(secDog.setWeight(18));//18
// console.log(secDog.getWeight());//18kg

// console.log(secDog.run());//50 m/s
// secDog.run(40);//
//console.log(secDog.run());
// console.log(secDog.coverDistance(100));//2.5 sec




//-----2 exercize
//-----function
/*Написать функцию конструктор Bird, которая наследует класс Animal и получает дополнительные  параметры, canFly, maxFlySpeed и добавляет методы fly который работает аналогично run, за исключением если canFly равно false, в этом случае изначальная скорость полёта 0 и при попытке изменения функция fly должна выдавать ошибку. Расширяет метод coverDistance таким образом, что для покрытия дистанции будет использована та скорость fly или run, которая в данный момент выше.
*/
// function Bird (name, type, weight, maxSpeed, canFly, maxFlySpeed) {
	// Animal.apply(this, arguments);
	// var name = name;
	// var type = type;
	// var weight = weight;
	// var maxSpeed = maxSpeed;
	// var canFly = canFly;
	// var maxFlySpeed = maxFlySpeed;
	// var speed = maxSpeed;
	// var flySpeed = canFly ? maxFlySpeed : 0;
	// this.fly = function(newSpeed) {
		// if (newSpeed !== undefined) {
			// if (!canFly) {
				// throw ("error");
			// } else if(newSpeed <= 0) {
				// return "The bird is not moving";
			// }
			// else if(newSpeed > maxSpeed) {
				// return "Birds can't fly like a rocket";
			// } 
			// else {
				// flySpeed = newSpeed;
			// }
		// }
		// else {return flySpeed + " m/s"};
		// }
	// this.run = function run(newSpeed) {
		// if(newSpeed) {
			// if(newSpeed <= 0) {
				// return "error";
			// }
			// else if(newSpeed > maxSpeed) {
				// return "error";
			// } 
			// else {
				// speed = newSpeed;
			// }
		// }
		// else {return speed + " m/s"};
	// },
	
	// this.coverDistance = function coverDistance(distance) {
		// if (flySpeed < speed) {
			// return  distance / parseFloat(this.run()) + " sec";
		// } else if (flySpeed > speed) {
			// return  distance / parseFloat(this.fly()) + " sec";
		// }
	// };
// }

// var Robbin = new Bird ("J", "bird", "0.2", 60, "true", 90);
// console.log(Robbin.getName());//j
// console.log(Robbin.getType());//bird
// console.log(Robbin.getWeight());//0.2 kg
// console.log(Robbin.run());//60
// console.log(Robbin.fly());//90
// console.log(Robbin.coverDistance(100));//1.11111111sec


function BirdProto (name, type, weight, maxSpeed, canFly, maxFlySpeed) {
	AnimalProto.apply(this, arguments);
	this._name = name;
	this._type = type;
	this._weight = weight;
	this._maxSpeed = maxSpeed;
	this._canFly = canFly;
	this._maxFlySpeed = maxFlySpeed;
	this._speed = maxSpeed;
	this._flySpeed = canFly ? maxFlySpeed : 0;
}

BirdProto.prototype = {
	getName: function () {return this._name},
	getType: function () {return this._type},
	getWeight: function () {return this._weight + "kg"},
	setWeight: function (newWeight) {return this._weight = newWeight},
	run: function (newSpeed) {
		if(newSpeed!==undefined) {
			if(newSpeed <= 0) {
				throw ("It's too low");
			}
			else if(newSpeed > this._maxSpeed) {
				throw ("Too hight!");
			} 
			else {
				this._speed = newSpeed;
			}
		}
		else {return this._speed + " m/s"};
	},
	fly: function(newFlySpeed) {
		if (newFlySpeed!== undefined) {
			if (!canFly) {
				throw ("error");
			} else if(newFlySpeed <= 0) {
				return "The bird is not moving";
			}
			else if(newFlySpeed > this._maxFlySpeed) {
				return "Birds can't fly like a rocket";
			} 
			else {
				this._flySpeed = newFlySpeed;
			}
		}
		else {return this._flySpeed + " m/s"};
	},
	coverDistance: function (distance) {
		if (this._flySpeed < this._speed) {
			return AnimalProto.prototype.coverDistance.call(this)
		} else if (this._flySpeed > this._speed) {
		return  distance / parseFloat(this.fly()) + " sec";
		}
	}
}	

var Owl = new BirdProto ("J", "bird", "0.2", 60, "true", 90);
console.log(Owl.getName());//j
console.log(Owl.getType());//bird
console.log(Owl.getWeight());//0.2 kg
console.log(Owl.run());//60
console.log(Owl.fly());//90
console.log(Owl.coverDistance(100));//1.11111sec

//-----exercize 3
/*Написать конструктор Zoo, который вызывается с параметрами сagesAmount и birdCagesAmount и методами addAnimal, который будет добавлять животное в одну из клеток, для птиц или для обычных животных в зависимости от того какое это животное, а если клеток не достаточно то возвращать ошибку(в качестве животных используются экземпляры классов Animal и Bird), feedAnimal который будет кормить животное по имени и сохранять время кормления и getHungryAnimals, который возвращает список имён голодных животных, животное считает голодным, если со времени последнего кормления прошло 4 часа. Работа со временем осуществляется использую часы зоопарка, при создании в них устанавливается текущее время, которое можно изменить используя метод класса Zoo, setClockTime, который принимает часы и минуты. 
*/
 // function Zoo (cagesAmount, birdCagesAmount) {
	// Animal.apply(this, arguments);
	// Bird.apply(this, arguments);
	// var cagesAmount = cagesAmount;
	// var birdCagesAmount = birdCagesAmount;
	// var name = name; 
	// var zooClock = new Date();
	
	
	// var animalCages = [];
	// animalCages.length = cagesAmount;
	// var birdCages = [];
	// birdCages.length = birdCagesAmount;
	
	// this.addAnimal = function(newAnimal) {
		// if(newAnimal!==undefined){
			// if (newAnimal.type == "bird") {
				// if 	(birdCages[i] <= birdCages.length) {
					// return birdCages.push[];
				// }
				// else {return "there is no more free cages left"};
			// } else if (newAnimal.type !== "bird") {
				// if 	(animalCages[i] <= animalCages.length-1) {
					// return animalCages.push[];
				// }
				// else {return "there is no more free cages left"};
				// };
				
			// }else {throw "There is no such animal"};
	// }	
	
	
	
	// this.feedAnimal = function(name) {
		// for (this.name in animalCages || this.name in birdCages) {
			
		// }
		// return feedTime;};
	// this.getHungryAnimals = function () {return hungryAnimals ;};


// }
// Zoo.addAnimal(Owl);


function Zoo(cagesAmount, birdCagesAmount) {
	this._cagesAmount = cagesAmount;
	this._birdCagesAmount = birdCagesAmount;
	this._allAnimal = [];
	this._allBirds = [];
	this._zooClock = new Date();
}
Zoo.prototype = {
	setClockTime: function (hour, minute) {
		this._zooClock.setHours(hours, minute);
	},
	
	addAnimal: function (newAnimal) {
	newAnimal._time = new Date(2017,0,0);
		if(newAnimal instanceof Bird) {
			if (this._allBird.length < this._birdCagesAmount) {
				this._allBird.push(newAnimal);
			} else {
				throw "There's no free birdcage";
			}
		} else if (newAnimal instanceof Animal) {
			if (this._allAnimal.length < this._cagesAmount) {
				this._allAnimal.push(newAnimal);
			}
		}	else {
			throw "There's no free animal cage";
		}
	},
	feedAnimal: function (name) {
		for (var i=0; i < this._allAnimal.length; i++) {
			if (this._allAnimal[i]._name == name) {
				this._allAnimal[i]._feedTime = new Date();
			}
		}
		for (var i=0; i < this._allBirds.length; i++) {
			if (this._allBirds[i]._name == name) {
				this._allBirds[i]._feedTime = new Date();
			}
		}
	},
	getHungryAnimal: function () {
		var hungryAnimals = [];
		for (var i=0; i < this._allAnimal.length; i++) {
			if (this._zooClock - this._allAnimal[i]._feedTime >= 14400000) {
				hungryAnimals.push(this._allAnimal[i]._name);
			}
		}
		for (var i=0; i < this._allBirds.length; i++) {
			if (this._zooClock - this._allBirds[i]._feedTime >= 14400000) {
				hungryAnimals.push(this._allBirds[i]._name);
			}
		}
		return hungryAnimals.join(', ')
	}
}


function Zoo(cagesAmount, birdCagesAmount) {
	var cagesAmount = cagesAmount,
		birdCagesAmount = birdCagesAmount,
		clockTime = new Date(),
		allAnimals = [];
		
		this.addAnimal = function(animal) {
			if(animal) {
				if(animal instanceof Bird) {
					if(birdCagesAmount > 0) {
						birdCagesAmount--;
					}else{
						throw "There's no free cages for birds!"
					}
				}else {
					if(cagesAmount > 0) {
						cagesAmount--;
					} else {
						throw "There's no free cages for animal!"
					}
				}
			}else {
				throw "Add animal";
			}
			allAnimals.push(animal);
			this.feedAnimal(animal.getName());
		};
		this.feedAnimal = function(name) {
			for(var i=0; i < allAnimals.length; i++) {
				if(allAnimals[i].getName() === name) {
					allAnimals[i].feedTime = clockTime;
					break;
				}
				if(i === allAnimals.length-1) {
					throw ("there's no animal named" + name + "in Zoo!");
				}
			}
		};
		this.getHungryAnimal = function() {
			return allAnimals.reduce(function(animalsName, animal) {
				if ((clockTime - animal.feedTime) / (1000*60*60) >4) {
					animalsName.push(animal.getName());
				}
				return animalsName;
			
			}, []);
		};
		this.setClockTime = function(hh,mm) {
			clockTime = new Date().setHours(hh, mm);
		};
};



/*Создадим форму, в которой будет 3 text инпута, name, email и phone, 3 radio инпута Student, Employee, Head, 1 checkbox инпут Confirm our rules и один submit button. Перед каждым элементом, кроме submit, должен быть lable с именем поля и каждая пара lable и input должна быть обёрнута в общий контейнер, к примеру div. Для каждого lable и input должен быть стиль для родительского класса invalid, при котором текст lable и бордер инпута(если он текстовый), должны становится красными.
При клике на кнопку submit, $("button:submit").on("click", validateAndSubmit); должна вызывать функция validateAndSubmit которая должна провалидировать поля со следующими действиями:
name, email, phone, один из radio и confirm дожны быть обязательными, если они не заполнены или не отмечены, выдавать ошибку, через alert, что эти поля должны быть заполнены и подсвечивать все не валидные через invalid класс родителя или убирать этот класс, если поле стало валидным. В случае с radio input, подсвечиваться должны все 3. 
Далее поля email и phone должны провалидироваться на корректность через регулярные выражения и точно также подсветиться те, которые не корректны и вывестись ошибка(и) в alert что поле/поля ,заполнены не верно и должны быть в формате xxxx@xxxx.xx для email и +xx(xxx)xxx-xx-xx для phone.
Если все поля валидны, то функция должна вывести в консоль объект формата {name:"", email:"", phone:"", type:"student|employee|head", confirmed: true} и выдать alert("Success!");
Используя событие on("change") для полей которые подсвечены как invalid валидировать их на ходу и убирать класс invalid как только они становятся валидными не дожидаясь повторного нажатия на кнопку submit.
Не хранить ошибки в JS коде, а брать их из атрибута error-text на тэге контейнера.

*/



// // // $(document).ready(function(){

 // // // function validateAndSubmit() {
  // // // $('div').addClass('invalid');
  // // // $('label > input').addClass('required');
  
  

  // // // jQuery.fn.exists = function() {
	  // // // return jQuery(this).length;
  // // // }
// // // $(function() {

  // // // $('.required').each(function(){
    // // // // Объявляем переменные (форма и кнопка отправки)
	// // // var form = $(this),
        // // // btn = form.find('.btn_submit');

    // // // // Добавляем каждому проверяемому полю, указание что поле пустое
	// // // form.find('.invalid').addClass('empty_field');

    // // // // Функция проверки полей формы
    // // // function checkInput(){
      // // // form.find('.invalid').each(function(){
		// // // else if($(this).is(":checkbox")) {
			// // // var checkbox = $(this);
			// // // if(checkbox.is(":checked")) {
				// // // checkbox.removeClass('empty_field')
			// // // } else {
		// // // checkbox.addClass('empty_field');
		// // // } 
		// // // } else if($(this).val() != ''){
          // // // // Если поле не пустое удаляем класс-указание
		// // // $(this).removeClass('empty_field');
        // // // } else {
          // // // // Если поле пустое добавляем класс-указание
		// // // $(this).addClass('empty_field');
        // // // }
      // // // });
    // // // }

    // // // // Функция подсветки незаполненных полей
    // // // function lightEmpty(){
      // // // form.find('.empty_field').css({'border-color':'red'});
      // // // // Через секунды удаляем подсветку
      // // // setTimeout(function(){
        // // // form.find('.empty_field').removeAttr('style');
      // // // },1000);
    // // // }

    // // // // Проверка в режиме реального времени
    // // // setInterval(function(){
      // // // // Запускаем функцию проверки полей на заполненность
	  // // // checkInput();
      // // // // Считаем к-во незаполненных полей
      // // // var sizeEmpty = form.find('.empty_field').length();
      // // // // Вешаем условие-тригер на кнопку отправки формы
      // // // if(sizeEmpty > 0){
        // // // if(btn.hasClass('btn_submit')){
          // // // return false
        // // // } else {
          // // // btn.addClass('btn_submit')
        // // // }
      // // // } else {
        // // // btn.removeClass('btn_submit')
      // // // }
    // // // },500);

    // // // // Событие клика по кнопке отправить
    // // // btn.click(function(){
      // // // if($(this).hasClass('btn_submit')){
        // // // // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
		// // // lightEmpty();
        // // // return false
      // // // } else {
        // // // // Все хорошо, все заполнено, отправляем форму
        // // // form.submit();
      // // // }
    // // // });
  // // // });
// // // });

// // // });
  
  
  
  // // // /* Изначально форма не заполнена и по этому считаем что все возможные ошибки есть  */
// // // var errorNull = true, errorMail = true, errorPass = true;

// // // /* Для удобства и уменьшения размера кода выносим функцию проверки поля на null в отдельную переменную */
// // // var checkNull = function(){
  // // // $(this).val($(this).val().trim());
  // // // if ($(this).val() =="") {
    // // // /* Выводим сообщение об ошибке под элементом.
       // // // This в данном случае это элемент, который инициировал вызов функции */
    // // // $(this).notify("Поле нужно заполнить", "error"); 
    // // // $(this).addClass("errtextbox");
    // // // errorNull = true;
  // // // } else {
    // // // errorNull = false;
    // // // $(this).removeClass("errtextbox");
  // // // }
// // // };

// // // /* Проверяем значения полей Имя и Информация на null в момент когда они теряют фокус */
// // // $("#name").focusout(checkNull);
// // // $("#info").focusout(checkNull);
  
  // // // /* Проверка поля Имя на соответствие длинны */
// // // $("#name").keyup(function(){
  // // // var value = $(this).val();
  // // // if (value.length > 24){ 
    // // // $(this).notify("Максимум 25 символов", "info");
    // // // $(this).val(value.slice(0,24));
  // // // }
// // // });

// // // /* Проверяем корректность E-mail */
// // // $("#mail").focusout(function(){
  // // // var value = $(this).val().trim();
// // // /* Для этого используем регулярное выражение  */
  // // // if (value.search(/^[a-z0-9]{3,}@mail\.com$/i) != 0) {
    // // // $(this).notify("E-mail введён не корректно", "error");
    // // // $(this).addClass("errtextbox");
    // // // errorMail = true;
  // // // } else { 
    // // // $(this).removeClass("errtextbox");
    // // // errorMail = false;
  // // // }
// // // });
// // // /* В результате клика по кнопке отправить если ошибок заполнения нет то форма отправляется иначе получаем сообщение об ошибке */
// // // $("#send").click(function(){
  // // // if (!(errorNull || errorMail || errorPass)) {
    // // // $("#regForm").submit();
  // // // } else {
    // // // alert("Форма пустая или заполнена не корректно", "error");
  // // // }
// // // });
  
  
 // // // }

 // // // $('button:submit').on('click', validateAndSubmit);

// // // });





 $(function () {
	var textInputs = $(":text");
	var radios = $(":radio");
	var checkbox = $(":checkbox");
	
	function checkInput(){
		var formValid = true;
		textInputs.each(function(){
			if($(this).val() != ''){
				$(this).parent().removeClass('invalid');
				model[$(this).attr("name")] = $(this).val();
			} else {
				$(this).parent().addClass('invalid');
				formValid = false;
			}
		});

		var checked = false;
		var checkedRadio = radios.filter(":checked");
		
			if(checkedRadio.length){
				
				model.type = $(checkedRadio).val();
				checked = true;
			};
			
		if(checked){
			$(":radio").parent().parent().removeClass("invalid");
		} else {
			$(":radio").parent().parent().addClass("invalid");
			formValid = false;
		}

		if (checkbox.is(":checked")){
			model.confirmed = true;
			$(":checkbox").parent().removeClass('invalid');
		}else{
			$(":checkbox").parent().addClass('invalid');
			formValid = false;
		}
		return formValid;
	};

	var form = $(".formContainer");
	var model = {
		name: "",
		email: "",
		phone: "",
		type: "",
		confirmed: true
	}

	
	$("button:submit").on("click", function(event){
				
		event.preventDefault();
		if(checkInput()){
			form.submit(model);
			console.log(model);
			// alert("Success!");
			} else {
				// alert("Please, fill the form.");
			}
	});
	
});








//==========================================================================

(function ($) {

	var form = $(".formContainer");
	var model = {
		name: "",
		email: "",
		phone: "",
		type: "",
		confirmed: true
	}

	function isNotEmpty (str) {
		return str !== '';
	}

	function checkEmail (email) {
		return /^\w+@\w+\.{1}\w{2,}$/.test(email);
	}

	function checkPhone (phone) {
		return  /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(phone);
	}

	function checkInput(){
		var formValid = true;

		var nameForm = $("input[name = 'name']").val();
		var emailForm = $("input[name = 'email']").val();
		var phoneForm = $("input[name = 'phone']").val();

		if(isNotEmpty(nameForm)) {
			model.name = nameForm;
			$("input[name='name']").parent().removeClass('invalid');
		} else {
			$("input[name='name']").parent().addClass('invalid');
			formValid = false;
		}

		if(isNotEmpty(emailForm) && checkEmail(emailForm)){
			model.email = emailForm;
			$("input[name='email']").parent().removeClass('invalid');
		} else {
			$("input[name='email']").parent().addClass('invalid');
			formValid = false;
		}

		if(isNotEmpty(phoneForm) && checkPhone(phoneForm)){
			model.phone = phoneForm;
			$("input[name='phone']").parent().removeClass('invalid');
		} else {
			$("input[name='phone']").parent().addClass('invalid');
			formValid = false;
		}

		var checked = false;
		form.find(":radio").each(function(){
			if($(this).prop("checked")){
				checked = true;
				model.type = $(this).val();
			}
		});
		
		if(checked){
			$(":radio").parent().parent().removeClass("invalid");
		} else {
			$(":radio").parent().parent().addClass("invalid");
			formValid = false;
		}

		if (form.find(":checkbox").prop("checked")){
			model.confirmed = true;
			$(":checkbox").parent().removeClass('invalid');
		}else{
			$(":checkbox").parent().addClass('invalid');
			formValid = false;
		}
		return formValid;
	};


	$(document).ready(function () {

		var pushedSubmit = false;
		
			$("button:submit").on("click", function(event){
				pushedSubmit = true;
				event.preventDefault();
				if(checkInput()){
					console.log(model);
					// alert("Success!");

					} else {
						// alert("Please, fill the form.");
					}
			});

				$("input[name = 'name']").on("change", function(event){
					if (pushedSubmit){
						if(isNotEmpty($("input[name = 'name']").val())) {
							model.name = $("input[name = 'name']").val() ;
							$("input[name='name']").parent().removeClass('invalid');
						} else {
							$("input[name='name']").parent().addClass('invalid');
						}
					} else {
						return false;
					}
				});
				
				$("input[name = 'email']").on("change", function(event){
					if (pushedSubmit){
						if(!isNotEmpty($("input[name = 'email']").val())) {
							alert($("input[name = 'email']").attr("required-error"));
							$("input[name='email']").parent().addClass('invalid');
						} else if (!checkEmail($("input[name = 'email']").val())) {	
							alert($("input[name = 'email']").attr("validation-error"));
							$("input[name='email']").parent().addClass('invalid');
						} else {
							$("input[name='email']").parent().removeClass('invalid');
						}
					}
				});
				
				$("input[name = 'phone']").on("change", function(event){
					if (pushedSubmit){
						if(isNotEmpty($("input[name = 'phone']").val()) &&
							checkPhone($("input[name = 'phone']").val())) {
							model.phone = $("input[name = 'phone']").val() ;
							$("input[name='phone']").parent().removeClass('invalid');
						} else {
							$("input[name='phone']").parent().addClass('invalid');
						}
					} else {
						return false;
					}
				});
				
				
				$(":radio").on("change", function(event){
					if (pushedSubmit){
						if ($(":radio:checked").length){
							model.type = $(":radio:checked").val();
							$(":radio").parent().parent().removeClass('invalid');
						}else{
							$(":radio").parent().parent().addClass('invalid');
						}
					}
				});
				
				
				$(":checkbox").on("change", function(event){
					if (pushedSubmit){
						if ($(":checkbox").prop("checked")){
							model.confirmed = true;
							$(":checkbox").parent().removeClass('invalid');
						}else{
							$(":checkbox").parent().addClass('invalid');
						}
					}
				});
				
				

		});
})(jQuery);


























