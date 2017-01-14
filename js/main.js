//To get random number integer in interval from min to max:
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//// ----1-----// WRONG!!
// function addOpacity(hexColor, opacity) {
	// if (hexColor.length > 1) {
	// var red = parseInt(hexColor[1] + hexColor[1]);
	
	// rgba[0] = parseInt(rgba[0], 16);
	// rgba[1] = parseInt(rgba[1], 16);
	// rgba[2] = parseInt(rgba[2], 16);
	// return(rgba.join('\n'));
	// }
// };
// console.log(addOpacity(#8040fb));


// function getRandomInt(min, max) {
  // return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function addOpacity(hexColor, opacity){
 // var stringColor = hexColor.slice(1);
 
 // var  r = parseInt(stringColor.substring(0, 2), 10);
 // var  g = parseInt(stringColor.substring(2, 4), 10);
 // var  b = parseInt(stringColor.substring(4), 10);
 
 // return '(' + r + ',' + g + ',' + b + ',' + opacity + ')';
// }

// function addOpacity(hexColor, opacity) {
 // var a = hexColor.slice(1, 3),
  // b = hexColor.slice(3, 5),
  // c = hexColor.slice(5, 7);
 // return 'rgba ' + '(' + parseInt(a, 16) + ', ' + parseInt(b, 16) + ', ' + parseInt(c, 16) + ', ' + opacity + ')';
 
// }

// console.log(addOpacity('#fafafa', 0.5));


//// ----2-----//
// function blockGrower(width, height) {
	// var block = {};
	// var w = parseFloat(width);
	// var h = parseFloat(height);
	// w = w * 1.5;
	// h = h * 1.5;
	
	// return {"width:" + w.toFixed(4), "height:"+ h.toFixed(4)}
	// // if () {
		
		// // return width:"", height:""
	// // }
// }
// console.log(blockGrower(100px, 500px));


// function blockGrower(width, height) {
 // var result = {},   
     // newWidth = (parseFloat(width) * 1.5).toFixed(4),
  // newHeight = (parseFloat(height) * 1.5).toFixed(4),
  // metricOfWidth = width.slice(parseFloat(width).toString().length);
  // metricOfHeight = height.slice(parseFloat(width).toString().length);

  // result['width'] = newWidth + metricOfWidth;
  // result['height'] = newHeight + metricOfHeight;
  
  // return result;
// }

// console.log(blockGrower('120.5px', '150.7px'));


///////-----3---------
// function getTwoNumbers(min, max) {
	// var arr = [];
	// var result = {};
	// for (var i = 0; i < 5; i++) {
		// var random = getRandom(min, max);
		// arr.push[random];
	// }
	// return Math.floor(Math.random() * (max - min + 1)) + min;	
// }
// console.log(getTwoNumbers(10, 50))

// function getTwoNumbers(min,max){

    // var arr = [];
    // for(var i=0;i<5;i++){
        // arr.push(getRandom(min,max));
    // }

    // return {
        // "min":Math.min.apply(Math,arr),
        // "max":Math.max.apply(Math,arr),
    // }
// }
// function getRandom(min, max)
// {
  // return Math.floor(Math.random() * (max - min+1))  + min;
// }

// function getTwoNumbers(min, max){
 // var arr = [];
 // var obj = {};
 // for (var i = 0; i < 5; i++) {
  // arr[i] = getRandom(min, max);
 // } 
 // obj.min = Math.min(arr[0],arr[1],arr[2],arr[3],arr[4]);
 // obj.max = Math.max(arr[0],arr[1],arr[2],arr[3],arr[4]);
 // return obj;
// }

// function getTwoNumbers(min,max){
 // var a=[];
 // for(var i=0;i<5;i++){
  // a[i]=getRandomInt(min,max);
 // }
 // var sortA=a.sort();
 // return {"min":sortA[0],"max":sortA[4]};
// }
// console.log(getTwoNumbers(24,48));


//console.log(getTwoNumbers(4,123));

///////-----4---------
// function checkNumberType(n) {
	// if (n%1 == 0) {
		// return 'integer';
	// }else {
		// return 'float';	
	// }
 // };
// console.log(checkNumberType(254589)); // integer
// console.log(checkNumberType(254.589));//float

// function checkNumberType(number){
  // return number%1==0?"integer":"float";
// }
// console.log(checkNumberType(243));
// console.log(checkNumberType(24.3));


////----strings---

// function getRandomPart(string){ 
	// var i = getRandomInt(0, (string.length-1));
	// var j = getRandomInt(0,( string.length-1));
	
	// return string.substring(i,j);
	
// };
// console.log(getRandomPart('qwerty '));

// function getRandomParts(string){
 // var start = getRandomInt(0, (string.length - 1));
 // var end = getRandomInt(0, (string.length - 1));
 // return string.substring(start, end);
// }
// console.log(getRandomParts('abcd'));


// function getRandomPart(string){
    // var value1 = getRandomInt(0,string.length);
    // var value2 = getRandomInt(0,string.length);
    // return string.substring(value1,value2);
// }


//---------



// function getTwoSymbols(string) {
	// var value1 = string[getRandomInt(0,string.length)];
	// var value2 = string[getRandomInt(0,string.length)];
	// if (value1.toLowerCase() === value2.toLowerCase ()) {
		// return value1;
	// }else {
		// return value1 + value2;
	// }
	
// }console.log(getTwoSymbols("strinqstring"));


// function getTwoSymbols(string){
 // var s1=string[getRandomInt(0,string.length)];
 // var s2=string[getRandomInt(0,string.length)];
 // if (s1!=s2){
  // s1=s1+s2;
  // return s1;
  // }
 // else{return s1;}
// }
// console.log(getTwoSymbols("DGDHHJgdudjj"));

// function getTwoSymbols(string){
    // var value1 = getRandomInt(0,string.length);
    // var value2 = getRandomInt(0,string.length);  
    // var stringArray = string.split("");
    // var symbol1,symbol2;
    // symbol1 = stringArray[value1];
    // symbol2 = stringArray[value2];

    // return symbol1.toLowerCase() === symbol2.toLowerCase() ? symbol1:symbol1+symbol2;

// }

// console.log(getTwoSymbols("this is a string"));

function wordRemove(word, string) {
	var arrOfStrings = string.split(' ');
	for (var i = 0; i < arrOfString.length; i++)
	if (word === arrOfStrings[i]) {
		string.replace(word, "");
		return arrOfStrings.join(' ');
	} else 
	return string;
}

console.log(wordRemove("word", " from word to work"));

// function wordRemover(word, string){
 // var arrString = string.split(" ");
 // for (var i = 0; i < arrString.length; i++){
  // if (word === arrString[i]){
   // arrString.splice(i, 1); 
  // }
 // }
 // return arrString.join(" ");
// }


































