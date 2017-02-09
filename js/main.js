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

var firstDog = new Animal ("Jack", "dog", "10", "40" );
console.log(firstDog.getName());//jack
console.log(firstDog.getType());//dog
console.log(firstDog.getWeight());//10kg
console.log(firstDog.setWeight(12));//12kg
console.log(firstDog.getWeight());//12kg

console.log(firstDog.run());//40 m/s
console.log(firstDog.run(30));//undefined

console.log(firstDog.coverDistance(90));//3







































function Bird (name, type, weight, maxSpeed, canFly, maxFlySpeed) {
	Animal.apply(this, arguments);
	var name = name;
	var type = type;
	var weight = weight;
	var maxSpeed = maxSpeed;
	var canFly = canFly;
	var maxFlySpeed = maxFlySpeed;
	var flySpeed = canFly ? maxFlySpeed : 0;
	this.fly = function() {}
	
	this.coverDistance = function coverDistance(distance) {
		
		return  distance / parseFloat(this.run()) + " sec";
	};
}

var Robbin = new Bird ("J", "bird", "0.2", "true", 90);
console.log(Robbin.getName());//j
console.log(Robbin.getType());//bird
console.log(Robbin.getWeight());//0.2 kg
console.log(Robbin.run());













