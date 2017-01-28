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
		return regExp.match(string);
	};
	
	function getPartedPhone(string) {};
	
	
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



(function () {
	api.addModule("dateServices", {
		getDayByDate: getDayByDate,
		isYearLeap: isYearLeap,
		getWeekendsCount: getWeekendsCount,
		getPayDate: getPayDate
	});
	
	//functions
	
	 function getDayByDate(year, month, day) {
			var day = new Date(year, month, day).getDay();
			switch (day) {
				case 0: return "sunday";
				case 1: return "monday";
				case 2: return "tuesday";
				case 3: return "wednesday";
				case 4: return "thursday";
				case 5: return "friday";
				case 6: return "suturday";
			}
	 };
	//console.log(getDayByDate(2017, 0, 2));
	
	function isYearLeap(year) {
		return year%4 == 0;
	};
	//console.log(isYearLeap(2017));//false
	
	
	// function isYearLeap(year) {
  // var year = new Date(year,1, 29);
  // return year.getMonth() === 1;
 // };
	
	function getWeekendsCount(year, month) {
		var day = new Date(year, month).getMonth()
		if (getDayByDate(year, month) == 0 || getDayByDate(year, month) == 1)
		
		return day+=day;
	};
	console.log(getWeekendsCount(2017, 1));
	
	function getPayDate(year, month, notification) {};
	
})();




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








