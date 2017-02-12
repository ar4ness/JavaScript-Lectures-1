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
function Zoo (cagesAmount, birdCagesAmount) {
	Animal.apply(this, arguments);
	Bird.apply(this, arguments);
	var cagesAmount = cagesAmount;
	var birdCagesAmount = birdCagesAmount;
	var name = name; 
	
	
	
	var animalCages = [];
	animalCages.length = cagesAmount;
	var birdCages = [];
	birdCages.length = birdCagesAmount;
	
	this.addAnimal = function(newAnimal) {
		if(newAnimal!==undefined){
			if (newAnimal.type == "bird") {
				if 	(birdCages[i] <= birdCages.length) {
					return birdCages.push[];
				}
				else {return "there is no more free cages left"};
			} else if (newAnimal.type !== "bird") {
				if 	(animalCages[i] <= animalCages.length-1) {
					return animalCages.push[];
				}
				else {return "there is no more free cages left"};
				};
				
			}else {throw "There is no such animal"};
	}	
	
	
	
	this.feedAnimal = function() {return feedTime;};
	this.getHungryAnimals = function () {return hungryAnimals ;};


}



/*Создадим форму, в которой будет 3 text инпута, name, email и phone, 3 radio инпута Student, Employee, Head, 1 checkbox инпут Confirm our rules и один submit button. Перед каждым элементом, кроме submit, должен быть lable с именем поля и каждая пара lable и input должна быть обёрнута в общий контейнер, к примеру div. Для каждого lable и input должен быть стиль для родительского класса invalid, при котором текст lable и бордер инпута(если он текстовый), должны становится красными.
При клике на кнопку submit, $("button:submit").on("click", validateAndSubmit); должна вызывать функция validateAndSubmit которая должна провалидировать поля со следующими действиями:
name, email, phone, один из radio и confirm дожны быть обязательными, если они не заполнены или не отмечены, выдавать ошибку, через alert, что эти поля должны быть заполнены и подсвечивать все не валидные через invalid класс родителя или убирать этот класс, если поле стало валидным. В случае с radio input, подсвечиваться должны все 3. 
Далее поля email и phone должны провалидироваться на корректность через регулярные выражения и точно также подсветиться те, которые не корректны и вывестись ошибка(и) в alert что поле/поля ,заполнены не верно и должны быть в формате xxxx@xxxx.xx для email и +xx(xxx)xxx-xx-xx для phone.
Если все поля валидны, то функция должна вывести в консоль объект формата {name:"", email:"", phone:"", type:"student|employee|head", confirmed: true} и выдать alert("Success!");
Используя событие on("change") для полей которые подсвечены как invalid валидировать их на ходу и убирать класс invalid как только они становятся валидными не дожидаясь повторного нажатия на кнопку submit.
Не хранить ошибки в JS коде, а брать их из атрибута error-text на тэге контейнера.

*/