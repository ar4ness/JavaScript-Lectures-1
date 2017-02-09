(function () {
	"use strict";
	var modules = {};
	var ourAwesomeApi = {};
	ourAwesomeApi.addModule = addModule;
	ourAwesomeApi.getModule = getModule;
	ourAwesomeApi.addMethod = addMethod;
	window.api = ourAwesomeApi;
	
	//Functions
	function addModule(name, module) {
		if(modules[name]) {
			throw("Module already exist");
		}
		else {
			var fn = new Function( "return function " + name + "(){}")();
			fn.prototype = module;
			modules[name] = fn;
		}
	}
	
	
	
	function addMethod(moduleName, name, method) {
		if(!modules[moduleName]) {
			throw("Module does not exist");
		}
		else if(modules[moduleName].prototype[name]) {
			throw("Module already exist");
		}
		else {
			modules[moduleName].prototype[name] = method;
		}
	}
	
	
	function getModule(name) {
		if (modules[name]) {
			return new modules[name]();
		}
		else {
			throw("Modules does not exist");
		}
	};
	
})();


// // api.addModule('test', {});

// // api.addMethod("test", "testMethod", function () {console.log("Hooray")});

// // var testModule = api.getModule("test");

// // console.log(testModule);
// // testModule.testMethod();




(function () {
	api.addModule("regExpService", {
		hasTextBySample: hasTextBySample,
		getMatches: getMatches,
		getPartedPhone: getPartedPhone,
		checkEveryLineMatch: checkEveryLineMatch
	});
	
	//functions
	
	function hasTextBySample(string, regExp) {
		return regExp.test(string);
				
	 };
//console.log(hasTextBySample(string, /some/i));//false
	
	function getMatches(string, regExp) {
		var regExp = new RegExp(regExp,"g");
		return string.match(regExp);
		//return regExp.match(string);
	};
	
	function getPartedPhone(string) {
	  var str = string.match(/\+?(\d{1,2})[^]?(\d{3})[^]?(\d{3}[^]?\d{2}[^]?\d{2})/);
  if(!str){ throw("Invalid phone number")}
  
  var obj = {};  
  obj.countryCode = str[1]
  obj.cityCode = str[2]
  obj.phone = str[3]
    
  return obj;	
	};
	
	
	function checkEveryLineMatch(string, regExp) {};
	
})();

// var string = 'soMe text 35 email@test.com soMe text38 email@test.com soMe text email@test.com';
// var phone = "soMe text +7(567)789-45-56";

	// function hasTextBySample(string, regExp) {
		// return regExp.test(string);
	 // };
	// console.log(hasTextBySample(string, /some/i));//true
	
// function getMatches(string, regExp) {
	// var newRegExp = new RegExp(regExp,"g")
	// var result = string.match(regExp);
		// //result || []; //string.match(regExp);
	// for (var i=0; i < result.length; i++) {
		// return string.match(regExp);
		// return result[i];
	// }
	
	// // if (hasTextBySample(string, regExp)) {
		// // return string.match(regExp);
		// // };
		// // return [];
// };
// console.log(getMatches(string, /(\d+)(\d+)/));

// // function getPartedPhone(string) {
		// // if(regExp.match(string)){
			// // var a = 'countryCode:'  +  (/\+?\d{1,2}[^]?/.match(string);
		// // return {a , cityCode:"", phone""};
		// // }
		// // else {
			// // throw("Invalid phone");
		// // }
// // };
 // // console.log(getPartedPhone(string, (/\+?\d{1,2}[^]?)\d{3}[^]?\d{3}-?\d{2}-?\d{2}/));


 // function hasTextBySample(string,regExp){
  // return regExp.test(string);
 // }
// function getMatches(string,regExp){
  // var str=regExp.toString();
  // var newStr=str.substr(1,str.length-2);
  // var newRegExp=new RegExp(newStr,"g");
  // var arr=arr||[];
  // return arr=string.match(newRegExp);
// }
 
 // function getMatches(string, regExp) {
  // var regExp = new RegExp(regExp,"g");
  // return string.match(regExp);
 // };

 
  // function getPartedPhone(string) {
  // var result = {};
  // if ((/\d{1,2}\(\d{1,}\)\d{3}\-?\d{2}\-?\d{2}/).test(string)) {
  // result['countryCode'] = string.match(/\d{2}/)[0];
  // result['cityCode'] = string.match(/\d{3}/)[0];
  // result['phone'] = string.match(/\d{3}-\d{2}-\d{2}/)[0];
  // console.log(result);
  // } else {
   // throw ('Invalid phone');
  // }
 // };
 
 // // function getPartedPhone(string){
  // // var re=/[0-9]/;
  // // var arr=getMatches(string,re);
  
  // // var obj={};
  // // obj.countryCode=arr[0]+arr[1];
  // // obj.cityCode=arr[2]+arr[3]+arr[4];
  // // obj.phone=arr[5]+arr[6]+arr[7]+arr[8]+arr[9]+arr[10]+arr[11];
  // // return obj;
 // // }
 
 
 
 
// // function hasTextBySample(string, regExp) {
        // // return string.match(regExp)!==null; 
    // // };
    // // function getMatches(string, regExp) { 
        // // if(hasTextBySample(string,regExp)){
            // // return string.match(regExp);
        // // }
        // // return [];
    // // };
    // // function getPartedPhone(string) {
     // // if (hasTextBySample(string,/\+\d{1,2}\(\d{1,3}\)\d{3}-\d{2}-\d{2}/)){
         // // var matches = getMatches(string,/\+\d{1,2}\(\d{1,3}\)\d{3}-\d{2}-\d{2}/);
         // // var result = {};
         
         // // result.countryCode= matches[0].match(/\+\d{1,2}/)[0];
         // // result.cityCode = matches[0].match(/\(\d{1,3}\)/)[0];
         // // result.phone = matches[0].match(/\d{3}-\d{2}-\d{2}/)[0]
         // // return result;
         
     // // } 
     // // throw ("Invalid phone");  
     // // };
    // // function checkEveryLineMatch(string, regExp) { 
        // // var subStrings = string.split("\n");
        
        // // var counter=0;
        // // for (var i=0;i<subStrings.length;i++)
        // // {
            // // if (hasTextBySample(subStrings[i],regExp)){
                // // counter++;
            // // }
        // // }
        // // return counter===subStrings.length;
    // // };



// (function () {
	// api.addModule("dateServices", {
		// getDayByDate: getDayByDate,
		// isYearLeap: isYearLeap,
		// getWeekendsCount: getWeekendsCount,
		// getPayDate: getPayDate
	// });
	
	// //functions
	
	 // function getDayByDate(year, month, day) {
			// var day = new Date(year, month, day).getDay();
			// switch (day) {
				// case 0: return "sunday";
				// case 1: return "monday";
				// case 2: return "tuesday";
				// case 3: return "wednesday";
				// case 4: return "thursday";
				// case 5: return "friday";
				// case 6: return "suturday";
			// }
	 // };
	// //console.log(getDayByDate(2017, 0, 2));
	
	// function isYearLeap(year) {
		// return year%4 == 0;
	// };
	// //console.log(isYearLeap(2017));//false
	
	
	// // function isYearLeap(year) {
  // // var year = new Date(year,1, 29);
  // // return year.getMonth() === 1;
 // // };
	
	// // function getWeekendsCount(year, month) {
		// // var day = new Date(year, month).getMonth()
		// // if (getDayByDate(year, month) == 0 || getDayByDate(year, month) == 1)
		
		// // return day+=day;
	// // };
	// // console.log(getWeekendsCount(2017, 1));
	
	// // function getPayDate(year, month, notification) {};
	
// })();




// api.addMethod("dateServices", "getDayByDate", function (year, month, day) {
            // return new Date(year, month, day).getDay();

        // })
        // api.addMethod("dateServices", "isYearLeap", function (year) {
            // return year % 4 == 0;

        // })
// api.addMethod("dateServices", "getWeekendsCount", function (year, month) {
            // var d = new Date(year, month);
            // var result = {
                // saturdays:[],
                // sundays:[],
                // totalWeekDays :function(){return this.saturdays.length+this.sundays.length;}
            // }
            // for (var i = 1; i <= daysInMonth(year,month); i++) {    //looping through days in month
                // var newDate = new Date(d.getFullYear(), d.getMonth(), i)
                // if (newDate.getDay() == 0) {   //if Sunday
                    // result.sundays.push(i);
                // }
                // if (newDate.getDay() == 6) {   //if Saturday
                    // result.saturdays.push(i);
                // }

            // }
            // return result;

        // });
// function daysInMonth(month, year) {
            // return new Date(year, month, 0).getDate();
        // }


// // function getDayByDate(year, month, day) {
  // // var weekDay = new Date(year, month, day);
  // // switch(weekDay.getDay()){
   // // case 0: 
    // // return "su";
    // // break;
   // // case  1: 
    // // return "mo";
    // // break;
   // // case 2: 
    // // return "tu";
    // // break;
   // // case 3: 
    // // return "we";
    // // break;
   // // case 4: 
    // // return "th";
    // // break;
   // // case 5: 
    // // return "fr";
    // // break;
   // // case 6: 
    // // return "sa";
    // // break;
   // // default: 
   // // throw("wrong date");
  // // }
 // // };
 
 // // function isYearLeap(year) {
  // // var year = new Date(year,1, 29);
  // // return year.getMonth() === 1;
 // // };


// function getDayByDate(year,month,day){
  // var date=new Date(year,month,day);
  // var day=date.getDay();
  // switch (day) {
   // case 0:return "Sunday";
      // case 1:return "Monday";
   // case 2:return "Tuesday";
   // case 3:return "Wednesday";
   // case 4:return "Thursday";
   // case 5:return "Friday";
   // case 6:return "Saturday";
   // default: return "Invalid date"
  // }
 // }


 // function isYearLeap (year) {
  // var date = new Date(year, 2, 0);
  // console.log(date);
  // return (date.getDate() === 29);  
 // };
 
 // function isYearLeap(year){
  // var date=new Date(year,2,5);
  // var newDate=date.setDate(0);
  // if(newDate.getDate==28){
   // return false;
  // }
  // else{return true;}
 // }
 
 
 // api.addMethod("dateServices","getPayDate",function(year,month,notification){
            // var d= new Date(year,month);
            // var today = new Date();
            // var daysCount = daysInMonth(month,year);
            // fridays = [];
            // for (var i = 1; i <= daysCount; i++) {    //looping through days in month
                // var newDate = new Date(d.getFullYear(), d.getMonth(), i)
            
                // if (newDate.getDay() == 5) {   //if Friday
                    // fridays.push(i);
                // }
                // if (fridays.length==2)
                // break;
            // }
            // if(today.getFullYear()==year&&today.getMonth()==month){
                // if(today.getDate()>fridays[1])
                    // return "Payment already has been";
                // else
                    // notification(fridays[1]);
            // } 


        // })
		
		
	// //Дмитрий Тарасенко:
	// function getWeekendsCount (year, month) {
  // var date = new Date(year, month + 1, 0);
  // var counterWeekEnds = 0;
  // for (var i = 1; i <= date.getDate(); i++) {
   // if(getDayByDate(year, month, i) == "Saturday" || getDayByDate(year, month, i) == "Sunday"){
    // counterWeekEnds++;
   // }
  // }
  // return counterWeekEnds;
  
 // };
// //Igor V	
	// function getWeekendsCount(year, month) {
  // var weekendsCount = 0;
  // var daysInMonthCount = new Date(year, month + 1, 0).getDate();
  // for (var i=1; i <= daysInMonthCount; i++) {
   // if (getDayByDate(year, month, i) === 0 || getDayByDate(year, month, i) === 6) {
    // weekendsCount++;
   // }
  // }
  // return weekendsCount;
 // };
// //исправленный вариант	
		
		
		
		
(function () {
	api.addModule("commonServices", {
		getTypeOf: getTypeOf,
		isYearLeap: isYearLeap,
		getWeekendsCount: getWeekendsCount,
		getPayDate: getPayDate
	});		
		
	function getTypeOf(elem) {
		return {}.toString.call(elem).slice(8, -1);
	}	
	console.log(getTypeOf('elem'));
	
	// function combine(elem1, elem2, stringSeparator) {
		// if (getTypeOf(elem1) == getTypeOf(elem2) && getTypeOf(elem1) == "string" ||getTypeOf(elem1) == "array") {
			// return elem1.concat(elem2);
		// }
		// else if (getTypeOf(elem1) == getTypeOf(elem2) && getTypeOf(elem1) == "number") {
			// return elem1 + elem2;
		// }
		// else if (getTypeOf(elem1) == getTypeOf(elem2) && getTypeOf(elem1) == "object") {
		
			// return {
				// elem1: elem2
			// } 
		// }
		// else {return elem1, elem2;}
	// }

// console.log(combine(23, 2, ";") );

	
	});		
	
	function getTypeOf(elem) {
		return {}.toString.call(elem).slice(8, -1);
	}	
	
	
	function combine(elem1, elem2, stringSeparator) {
		function getTypeOf(elem1) {
		return {}.toString.call(elem1).slice(8, -1);
		}

		switch (getTypeOf(elem1)) {
		case "Array": return elem1.concat(elem2);
		case "Number": return elem1+elem2;
		case "String": return elem1 + stringSeparator + elem2;
		case "Object": return Object.assign({}, elem1, elem2);
		default: return elem1, elem2;
		}
	}

console.log(combine([1, 2,3], [5, 6]) );//[1, 2, 3, 5, 6]
console.log(combine(23, 44) );//67
console.log(combine("here", "is", "|") );// here|is
//console.log(combine({a: 5}, {b: "10"}) );
	
	
function limitTo(element, limit) {
	function getTypeOf(element) {
	return {}.toString.call(element).slice(8, -1);
}
var start = Math.min.appply(limit);
var end = Math.max.apply(Math, limit);
switch (getTypeOf(element)) {
	case "Array": return element.slice(start, end);
	case "Number": return ;
	case "String": return element.slice(start, end);
	
	default: return element;
	}
}
console.log(limitTo("fjdhgjdgfgdj", [1,3,5]))	;
	
	//------wrong
function filterByField(array, field) {
	function compareField(a, b) {
		return a.field - b.field;
	}
	var newArray = [];
	newArray.sort(compareField);
	for (var i = 0; i < newArray.length; i++) {
		return (newArray[i].field);
	}
}

//++++++++++++
function findByField(array, field, value) {
	for (var i = 0; i < array.length; i++) {
		if (array[i][field] === value) {
			return array[i];
		}
	}
}



function sortByField(array, field, direction) {
	if(!array.length)
		return array;
	var sortType = getTypeOf(array[0][field]);
	var sortedArray = null;
	if(sortType === "String") {
		sortedArray = sortStrings(array, field, direction);
	}
	else if (sortType === "Number" || sortType === "Date") {
		sortedArray = sortNumbers(array, field, direction);
	}
	if (sortedArray) 
		return direction === "descending" ? sortedArray.reverse() : sortedArray;
	else 
		return array;
	
}
function sortStrings(array, field) {
	return array.sort(function(a, b){
		var aStr = a[field].toLowerCase(),
			bStr = b[field].toLowerCase();
		return aStr > bStr ? 1 : aStr < bStr ? -1 : 0;	
	});
	//var sortedArray = array.sort
}


function sortNumbers(array, field) {
	return array.sort(function(a, b) {
		return a[field] - b[field];
	}); 
}


(function(){
    api.addModule("storagesServices", {
        createNumbersStorage: createNumbersStorage
	});
	//Function
	
    function createNumbersStorage() {
		var newArray = [];

    	return {
            "addNewNumber": function (newNumber) {
                newArray.push(newNumber);
    			return this;
        	},
            "removeNumberByIndex": function (index) {
                newArray.splice(index, 1);
                return this;
            },
			"getAllNumbers": function () {
            	return [].concat(newArray);
            },
			"getNumbersInRange": function (from, to) {
				return newArray.filter(function (item) {
					return item >= from && item <= to;
                });
            }
		};
		
    }
})();
//


(function(){
    api.addModule("usersStorageServices", {
        createUsersStorage: createUsersStorage
	});
    //Function
   
	function createUsersStorage() {
        var arrayServices = api.getModule("arrayServices");
        var newArray = [];

        return {
            "addNewUser": function (firstName, lastName, birthDate, id) {
                //{firstName: "", lastName:"", birthDate: Date(), id: "", friends: ["id1", "id2",…"idN"]}
                var user =  {
					firstName: firstName, 
					lastName: lastName, 
					birthDate: birthDate, 
					id: id, 
					friends: []
					};
                //newArray.push(user);
				return this;
            },
            "removeUserById": function (id) {
            	if(!id){
					throw "incorrect id"
				}
                newArray.forEach(function (item, index, array) {
					if(item.id === id){
						array.splice(index,1);
					}
                });
                return this;
            },

			//methods - where do they locate ?
            "getFullName": function (id) {
				var user = arrayServices.findByField(newArray, "id", id);
				return user ? user.firstName + user.LastName : undefined;
            },

            "getAge": function(id){
				var user = arrayServices.findByField(newArray, "id", id)
				return user ? newDate().getFullYear() - user.birthDate.getFullYear() : undefined;
			},
			"getFriendsIds": function (searchBy) {
                var findedUsersArray = this.searchingValueInArray(searchBy);
                findedUsersArray = findedUsersArray.map(function (item) {
					return item.friends;
                });
                return findedUsersArray
            },

            "addFriendId": function (id, friendId) {
                var user = arrayServices.findByField(newArray, "id", id);
				if(!user)
					throw("User is not exist");
				if (!~user.friends.indexOf(freiendId)) {
					var isFriendReal = arrayServices.findByField(newArray, "id", friendId);
					if(isFriendReal) {
						user.friends.push(friendId);
					}
					else {
						throw("Friend Id is not real");
					}
				}
            	
				// //checking on id repeat
                // newArray.forEach(function (item, i, array) {
					// item["friends"].forEach(function (item, i, array) {if(array[i] === friendId){throw("this user already hav that friend")}})
                // });

                // newArray.forEach(function (item, i, array) {
                    // for(var key in array[i]){
                        // if(array[i][key] === searchBy){array[i]["friends"].push(friendId);}
                    // }
                // });
                // return true;
            },
			
            "removeFriendById": function (id, friendId) {
				var user = arrayServices.findByField(newArray, "id", id);
				if(!user)
					throw("User is not exist");
				var friendIndex = user.friends.indexOf(friendId);
				if (~friendIndex) {
					user.friends.splice(friendIndex, 1);
				};
			},		
               
                
            

			// //repeated code
			// "searchingValueInArray": function(searchBy){
				// var findedUsersArray = newArray.filter(function (item, i, array) {
					// for(var key in array[i]){
						// if(array[i][key] === searchBy){return true;}
					// }
				// });
				// return findedUsersArray;
			// },
			//array for checking
			"returnArrOfUsers": function () {
				return newArray;
            }
        };

    }
})();









//Dima's
(function (){
	api.addModule("dataServices",{
		getDayByDate: getDayByDate,
		isYearLeap: isYearLeap,
		getWeekendsCount: getWeekendsCount,
		getPayDayDate: getPayDayDate
	});
	//Functions
	function getDayByDate(year, month, day) {
		var weekDay = new Date(year, month, day),
        daysOfWeekArray = ["su", "mo", "tu", "we", "th", "fr", "sa"];
		return daysOfWeekArray[weekDay.getDay()];
	}
	
	function isYearLeap(year) {
		year = new Date(year,1, 29);
		return year.getMonth() === 1;
	}
	
	function getWeekendsCount(year, month) {
		var monthInYear = new Date(year, month + 1, 0).getDate();
		var	counter = 0;
		for(var i = 1; i <= monthInYear; i++){
			var monthLooping = new Date(year, month, i).getDay();
			if(monthLooping === 0 || monthLooping === 6){
				counter++;
			}
		}
		return counter;
	}
	//
	function getPayDayDate(year, month /*, notificationFunction*/){
		var counter = 0,
			todayDate = new Date(),
        	todayArray = [todayDate.getDate(), todayDate.getMonth(), todayDate.getFullYear()],
        	paymentDayArray = notification(year, month);
        if(todayArray[1] === paymentDayArray[1]) {
        	if(todayArray[0] <= paymentDayArray[0]){
        		for (var i = todayArray[0]; i < paymentDayArray[0]; i++) {
                counter++;
            }
            	return !counter ? "Today is PayDay!!!" : "Payment day will be in " + counter + " days. Date of payment " + paymentDayArray;
        	} else {
        		return "Payment already has been this month.";
			}
        }
		var diffDays = getDifferenceBetweenDays(todayArray, paymentDayArray);
        return "You will get pay in - " + (diffDays - 1) + " days. Date of payment: " + paymentDayArray;
    }
	
	//function notification for getting second friday date array
    function notification(year, month) {
        var dateOfMonthInYear = year && month ? (new Date(year, month + 1, 0).getDate()) : (new Date().getDate()),
            fridaysDateArray = [];
        for(var i = 1; i <= dateOfMonthInYear; i++){
            var monthLooping = new Date(year, month, i);
            if(monthLooping.getDay() === 5){
                fridaysDateArray.push([monthLooping.getDate(), monthLooping.getMonth(), monthLooping.getFullYear()]);
            }
        }
        return fridaysDateArray[1];
    }
	//function difference between dates
    function getDifferenceBetweenDays(arrayOfFirstYearMonthDate, arrayOfSecondYearMonthDate) {
        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        var firstDate = new Date(arrayOfFirstYearMonthDate[2], arrayOfFirstYearMonthDate[1], arrayOfFirstYearMonthDate[0]);
        var secondDate = new Date(arrayOfSecondYearMonthDate[2], arrayOfSecondYearMonthDate[1], arrayOfSecondYearMonthDate[0]);
        return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    }

	// console.log(getDayByDate(2017, 0, 28));
	// console.log(isYearLeap(2017));
	// console.log(getWeekendsCount(2017, 0));
	// console.log(notification(2017, 0));
	//console.log(getPayDayDate(2017, 1));

})();








//work at home
//page 6
(function (){
    api.addModule("commonServices",{
        getTypeOf: getTypeOf,
        combine: combine,
        limitTo: limitTo
    });
    //Functions
	function getTypeOf(elem){
		return {}.toString.call(elem).slice(8, -1);
	}

	function combine(elem1, elem2, stringSeparator){
		var elem3 = [elem1, elem2],
            typeOfElement = getTypeOf(elem1);
		if(typeOfElement === "String" || typeOfElement === "Array"){
			elem3 = !stringSeparator ? elem1.concat(elem2): elem1.concat(stringSeparator, elem2);
		}else if (typeOfElement && typeOfElement === "Number"){
			elem3 = elem1 + elem2;
		}else if(typeOfElement === "Object"){
			elem3 = Object.assign({}, elem1, elem2);
		}
		return elem3;
	}

    function limitTo(element, limit) {
		var returnedElement = element,
			typeOfElement = getTypeOf(element);
		if(typeOfElement === "String" || typeOfElement === "Array"){
            returnedElement = element.slice(0, limit);
		}else if(isFinite(element) && typeOfElement === "Number"){
            returnedElement = element < limit ? element : limit;
		}
		return returnedElement;
	}

    // console.log(getTypeOf(null));

    // console.log(combine("123", "123", ", "));
    // console.log(combine([1, 2, 3, 5], ["a", "b", "c"]));
    // console.log(combine(123, 123));
    // console.log(combine({"a": 1, "ab": 55, "ac": "was"}, {"b": true, "bb": [1,2,3], "bc": 11}));
    // console.log(combine(/asd/, null));

    // console.log(limitTo("12345abcde", 2));
    // console.log(limitTo([1, 2, 3, 4, 5], 2));
    // console.log(limitTo(123, 122));
    // console.log(limitTo({"a": 1, "ab": 55, "ac": "was"}));
    // console.log(limitTo(/asd/, null));
})();
//page 7
(function (){
    api.addModule("arrayServices", {
        filterByField: filterByField,
        findByField: findByField,
        sortByField: sortByField
    });
    //using commonServices module and methods from
    var newCommonServices = api.getModule("commonServices");
    var getTypeOf = newCommonServices.getTypeOf;
    //Functions
	function filterByField(array, field) {
		return array.filter(function(element, i, array) {
            var currentEl = element[field];
           return !(currentEl === false || currentEl === null || currentEl === undefined);
		});
	}

    function findByField(array, field, value) {
		var obj = undefined;
		array.forEach(function(element, i, array){
			for(var key in array[i]){
                if(array[i].hasOwnProperty(key)){
					if(key === field && array[i][key] === value){
						obj = {};
						obj[key] = value;
					}
                }
			}
		});
		return obj;
	}

    function sortByField(array, field, direction) {
		return array.sort(sortingArray(array, field, direction));
	}
	function sortingArray(array, sortBy, order){
		return array.sort(function (a, b) {
			var a = a[sortBy],
				b = b[sortBy];
			var elemA = getTypeOf(a),
				elemB = getTypeOf(b);
			if (elemA === "String" && elemB === "String"){
                var aStr = a.toLowerCase(),
                    bStr = b.toLowerCase();
				return order === "descending" ? (aStr < bStr ? 1 : aStr > bStr ? -1 : 0) :
					(aStr > bStr ? 1 : aStr < bStr ? -1 : 0);
			}
			return order === "descending" ? b - a : a - b; //for Numbers and Dates
		});
	}

	/*
    var arr = [
        {"str": "avc", 1:1, first: false, second: undefined, "third": new Date(2017, 3, 1)},
        {"str": "aaa", 2:2, first: -1, second: "asd", "third": new Date(2011, 5, 17)},
        {"str": "vdf", 3:3, first: 0, second: 123, "third": new Date(2011, 3, 30)},
        {"str": "bgf", 4:4, first: "1111",second: "dsa" , "third": new Date(2017, 3, 30)},
        {"str": "nqq", 5:5, first: 12.2, second: null , "third": new Date(1200, 10, 17)},
        {"str": "zwe", 6:6, first: "135", second: [1,2,3] , "third": new Date(2017, 1, 6)},
        {"str": "AAA", 7:7, first: null, second: Infinity, "third": new Date(1950, 7, 7)}
    ];*/
	//arr = filterByField(arr, "third");

    //console.log(findByField(arr, "first", 12.21));


    //console.log(sortByField(arr, "first"/*, "descending"*/));
})();
//page 8
(function(){
    api.addModule("storagesServices", {
        createNumbersStorage: createNumbersStorage
	});
	//Function
	function newArrayCreate() {
        return [];
    }

    function createNumbersStorage() {
		var newArray = newArrayCreate();

    	var object = {
            "addNewNumber": function (newNumber) {
                newArray[newArray.length] = newNumber;
    			return this;
        	},
            "removeNumberByIndex": function (index) {
                newArray.splice(index, 1);
                return this;
            },
			"getAllNumbers": function () {
            	var test = [];
            	newArray.forEach(function(item, i, arr){ test[i] = arr[i] });
            	return test;
            },
			"getNumbersInRange": function (from, to) {
				return newArray.filter(function (item) {
					return item >= from && item <= to;
                });
            }
		};
		Object.freeze(object);
    	return object;
    }
})();
//
/*
var test = api.getModule("storagesServices");
test = test.createNumbersStorage();
test.addNewNumber(1).addNewNumber(9).addNewNumber(8).addNewNumber(7).removeNumberByIndex(1);
var best = test.getNumbersInRange(5, 10);
console.log(test.getAllNumbers());
var test2 = api.getModule("storagesServices");
test2 = test2.createNumbersStorage();
test2.addNewNumber(555);
console.log(test2.getAllNumbers());
*/
//
//page 9
(function(){
    api.addModule("usersStorageServices", {
        createUsersStorage: createUsersStorage
	});
    //Function
    function newArrayCreate() {
        return [];
    }
	function createUsersStorage() {
        var newArray = newArrayCreate();

        var object = {
            "addNewUser": function (firstName, lastName, birthDate, friends) {
                //{firstName: "", lastName:"", birthDate: Date(), id: "", friends: ["id1", "id2",…"idN"]}
                newArray[newArray.length] = {firstName: firstName, lastName: lastName, birthDate: birthDate, id: newArray.length, friends: friends};
                return this;
            },
            "removeUserById": function (id) {
            	if(!id){throw "incorrect id"}
                newArray.forEach(function (item, i, array) {
					if(array[i].id === id){array.splice(i,1);}
                });
                return this;
            },

			//methods - where do they locate ?
            "getFullName": function (searchBy) {
                var findedUsersArray = this.searchingValueInArray(searchBy);
                findedUsersArray = findedUsersArray.map(function (item) {
					return item["firstName"] + " " + item["lastName"];
                });
                if(!findedUsersArray.length){ throw "no users with that searcher" }
                return findedUsersArray ;
            },

            "getAge": function(searchBy){
                var findedUsersArray = this.searchingValueInArray(searchBy);
                findedUsersArray = findedUsersArray.map(function (item) {
					var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
					var oneYear = 365;
					var firstDate = item.birthDate;
					var secondDate = new Date();
                return "userId: " + item.id + " age: " + Math.round((Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)))/(oneYear));
                });
                return findedUsersArray
			},
			"getFriendsIds": function (searchBy) {
                var findedUsersArray = this.searchingValueInArray(searchBy);
                findedUsersArray = findedUsersArray.map(function (item) {
					return item.friends;
                });
                return findedUsersArray
            },

            "addFriendId": function (searchBy, friendId) {
                var counter = 0;
            	newArray.forEach(function (item, i, array) {
					if(item.id === friendId){counter++;}
                });
                if(!counter){throw "no id in usersStorage"}

				//checking on id repeat
                newArray.forEach(function (item, i, array) {
					item["friends"].forEach(function (item, i, array) {if(array[i] === friendId){throw("this user already hav that friend")}})
                });

                newArray.forEach(function (item, i, array) {
                    for(var key in array[i]){
                        if(array[i][key] === searchBy){array[i]["friends"].push(friendId);}
                    }
                });
                return true;
            },
            "removeFriendById": function (searchBy, friendId) {
                newArray.forEach(function (item, i, array) {
                    for(var key in array[i]){
                        if(array[i][key] === searchBy){
                        	array[i]["friends"].forEach(function (item,i,array) {
                        		if(array[i] === friendId){array.splice(i, 1);}} );
                        }
                    }
                });
            },

			//repeated code
			"searchingValueInArray": function(searchBy){
				var findedUsersArray = newArray.filter(function (item, i, array) {
					for(var key in array[i]){
						if(array[i][key] === searchBy){return true;}
					}
				});
				return findedUsersArray;
			},
			//array for checking
			"returnArrOfUsers": function () {
				return newArray;
            }
        };

        Object.freeze(object);
        return object;
    }
})();

var userTest = api.getModule("usersStorageServices");
userTest = userTest.createUsersStorage();
userTest.addNewUser("Vasil", "Ivanov", new Date(2000, 0, 1), [])
	.addNewUser("Henry", "Ivanov", new Date(2011, 0, 1), [])
	.addNewUser("Petia", "Sidorov", new Date(1900, 11, 11), [])
	.addNewUser("Anka", "Kulemetova", new Date(2010, 3, 21), [])
	.addNewUser("Spiridon", "Okolonko", new Date(1911, 7, 7), [])
	.addNewUser("Gena", "Petrenko", new Date(1985, 5, 17), [])
	.removeUserById(3)
	.removeUserById(3);

console.log(userTest.getFullName("Gena"));
console.log(userTest.getAge("Ivanov"));
console.log("arrays of friends", userTest.getFriendsIds("Ivanov")); //not checked
userTest.addFriendId("Ivanov", 4);
userTest.addFriendId("Ivanov", 2);
userTest.removeFriendById("Ivanov", 4);

console.log(userTest);
var returnArrOfUsers = userTest.returnArrOfUsers();
console.log(returnArrOfUsers);

	