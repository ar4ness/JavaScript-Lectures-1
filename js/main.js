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

// function blockGlower(width, height){
  
 // var w = parseFloat(width);
 // var h = parseFloat(height);
 
 // var wEnd = width.slice((""+w).length);
 // var hEnd = width.slice((""+h).length);
 // // var hEnd  ;
 
 // return 'width:' + w*2 + wEnd + ',' + 'height:' + h*2 + hEnd +',';
// }

// console.log(blockGlower("12px", "20%"));

// function blockGrower(width,height){
 // var widthDim = width.slice(width.length - 2);
 // var heightDim = height.slice(height.length - 2);
 
 
 // var widthValue = Math.round(((parseFloat(width))  1.5)  10000)/10000;
 // var heightValue = Math.round(((parseFloat(height))  1.5)  10000)/10000;
 
  
 
 // var obj = {};
 // obj.widthOb = widthValue + widthDim;
 // obj.heightOb = heightValue + heightDim;
 // return obj;
// }


// function blockGrower(width,height){
    // var RATE = 1.5;
    // var w = round4Digits(parseFloat(width)*RATE);
    // var h = round4Digits(parseFloat(height)*RATE);
    // return {
        // "width":w+getMetric(width),
        // "height":h+getMetric(height)

    // }
// }
// function round4Digits(number){
    // return Math.round((parseFloat(number)*10000)/10000);   
// }
// function getMetric(value){
    // return value.slice(parseFloat(value).toString().length)
// }
// console.log(blockGrower('220.5px', '50.7%'));

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

// function getTwoNumbers(from, to) {
 // var arr = [], 
  // result = {};
  
 // for (var i = 0; i < 5; i++) {
  // arr.push(getRandomint(from, to));
 // }
 
 // result['min'] = Math.min(arr[0], arr[1], arr[2], arr[3], arr[4]);
 // result['max'] = Math.max(arr[0], arr[1], arr[2], arr[3], arr[4]);
 
 
 // return result;
// }

// console.log(getTwoNumbers(1, 20));

// function getTwoNumbers(minRandomForArray, maxRandomForArray){
 
 // var tempArray = [];
 // for(var i = 0; i < 5; i++){
  // tempArray.push(getRandomInt(minRandomForArray, maxRandomForArray));
 // }
 
 // tempArray.sort(function compare(a, b) {return a-b;});
 
 // console.log(tempArray);
 // return '{min:' + tempArray[0] + ',' + 'max:' + tempArray[4] + '}';
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
// console.log(getTwoNumbers(4,123));

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
//console.log(getRandomPart("this is a string"));

//---------
// function getRandomPart(string) {
 
 // var result = '',
  // arr = [];
  
 // for (var i = 0; i < 2; i++) {
  // arr. push(getRandomint(0, string.length));
 // }

 // arr.sort();
 
 // result = string.slice(arr[0], arr[1]);
 
 // return result;
  
// }

// console.log(getRandomPart('string'));


// function getRandomPart(string){
  // var min = 1;
  // var max = 12;
  // var arr = [];
  // for (var i = 0; i < 2; i++){
   // arr[i]= getRandom(min, max);
  // }
 // return string.substring(arr[0],arr[1]);
// }



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

// function getTwoSymbols(string){
 // var first = string[getRandomInt(0, string.length)];
 // console.log(first);
 // var second = string[getRandomInt(0, string.length)];
 // console.log(second);
 // return first.toLowerCase() === second.toLowerCase() ? first :  first + second; 
// }

// console.log(getTwoSymbols('abcd aaaaaaa'));

// function getTwoSymbols(string){
 // string = string.toUpperCase();
 // var arr = [];
 // var min = 0;
 // var max = string.length - 1;
 // for (var i = 0; i < 2; i++){
   // arr[i]= getRandom(min, max);
 // }
 
 // return string.charAt(arr[0]) === string.charAt(arr[1]) ? string.indexOf(arr[0]) : string.charAt(arr[0]) + string.charAt(arr[1]);
// }



// /// -----
// //1 
// function wordRemove(word, string) {
	// var arrOfStrings = string.split(' ');
	// for (var i = 0; i < arrOfString.length; i++)
	// if (word === arrOfStrings[i]) {
		// string.replace(word, "");
		// return arrOfStrings.join(' ');
	// } else 
	// return string;
// }

// console.log(wordRemove("word", " from word to work"));

// //2
// function wordRemover (word, string) {
	// var nextWordIndex = null;
	// while(~(nextWordIndex = string.indexOf(word))) {
		// var start = string.slice(0, nextWordIndex);
		// var end = string.slice(nextWordIndex + word.length);
		// string = start + end;
	// } 
	// return string;
// }

// //3 with array
// function wordRemove(word, string) {
	// var arrayOfWords = string.split(' ');
	// var nextWordIndex = null;
	// while(~(nextWordIndex = arrayOfWords.indexOf(word))) {
		// arrayOfWords.splice(nextWordIndex, 1);
	// }
	// return arrayOfWords.join(' ');
// }
// //4 with filter
// function wordRemover (word, string) {
	// return string.split(' ')
		// .filter(function (elem) {return elem !== word})
		// .join(' ');
// }


// // function wordRemover(word, string){
 // // var arrString = string.split(" ");
 // // for (var i = 0; i < arrString.length; i++){
  // // if (word === arrString[i]){
   // // arrString.splice(i, 1); 
  // // }
 // // }
 // // return arrString.join(" ");
// // }

// function wordRemover(word,string){
 // var a=string.split("word");
 
 // return a.join("");
// }
// console.log(wordRemover("word","There ara two words: word, word, sort"));


// --------5 ex.1----

// function findBiggestApple(tree) {

// var newArray=[];
// function toOneDimension (tree, newArray) {
	// //newArray = newArray || [];
	// for (var i = 0; i < tree.length; i++) {
		// if (Array.isArray(tree[i])) {
			// toOneDimension(tree[i], newArray);
		// }
		// else {
			// newArray.push(tree[i]);
		// }
	// }
	// return(newArray);
// }
// var x = newArray;
// return Math.max.apply(Math, x);
// }
// console.log(findBiggestApple([123, 45, [59, 1000]]));

// function toOneDimension (tree, newArray) {
	// //newArray = newArray || [];
	// for (var i = 0; i < tree.length; i++) {
		// if (Array.isArray(tree[i])) {
			// toOneDimension(tree[i], newArray);
		// }
		// else {
			// newArray.push(tree[i]);
		// }
	// }
	// return(Math.max.apply(newArray);
// }
// console.log(toOneDimension ([123, 45, [59, 1000,[2000, 1],200]], []))


//-------slide 6 ex.1
// function getSortedString(string) {
	// return string.split('').sort();
// }
// console.log(getSortedString('cvcxv 12 df 45 bf12'));



// function getSortedString(string){
// return Number(string.replace(/\D+/g, ''));
// }

function getSortedString(string){
	
	var temp = string.split(' ');
	for (var i = 0; i < temp.length; i++){
  // if (typeof temp[i] === 'number'){
	var a = parseInt(temp[i])
  }
  return a;
	
}
console.log(getSortedString('cvcxv 12 df 45 bf12'));


// function getSortedString(string) {
	// var temp = new Array();
	// temp = string.split(' ');
	// console.log(temp);
	// var arrayOfNumbers = temp.filter(function(element, index, temp) {
	// return typeof element === 'number';
// })
// console.log(arrayOfNumbers);
	// arrayOfNumbers.sort(function (a, b) {
		 // return a - b;
 // });
	// // if (typeof temp[i] == 'number') {
		// // return var a = temp.sort();
	// // }
	// // if (typeof temp[i] == 'string') {
		
	// // }
	// //string.substring();
	// // string.sort(function (a, b) {return a-b;})
	// //return (a + b);
// }
// console.log(getSortedString('cvcxv 12 df 45 bf12'));

//------slide 6 ex.2 +++

// function getInvertedNumbers(arrInverted) {
	// if (!arrayOfNumber.isArray) {
		// var arrInverted = [];
		// for (var i = 0; i < arrayOfNumber.length; i++) {
			// var currentElement = arrayOfNumber[i];
		// // // return arrayOfNumber[i].reverse().push(arrInverted[i]);
			// if (typeof currentElement == 'number' && currentElement > 0 || currentElement < 0) {
				// arrInverted.push(-currentElement);
			// }
			// }return arrInverted;
// } else {
	// return "It's not an array of number";
// }
// }
// console.log(getInvertedNumbers([1, 5, -6, 10, -12, null, 0, 25, 'bvb']));


//-------slide 6 ex.3 +++
// function getReversedString(string) {
	// return string.split('').reverse().join('')
// }
// console.log(getReversedString('script'));		







// var x="2*2";
// var y=4;
// var z=eval(x+y);
// console.log(z);//48 why???

// var x="2+2";
// var y=4;
// var z=eval(x+y);
// console.log(z);//26 why???

// // str = prompt('','2+2*2');
// // f = new Function('','return '+str);
// // alert(f());//6


// function f(x,y, z=2) {
	// return x + y **z;
// }
// console.log(f(3, 4));//19 (3+4*4);


// var a=0;
// for (b=1; b<=7; b+=a) {
	// console.log(b);//console.log outputs all values of b in a column while document.write output one string
	// a++;
// }//1247 +++




// var a = 4;
// var b =4.0;
// var c = "4";
// var d = [4];
// console.log(a+b+c+d);//844

// var x=0, y=0;
// for(var i=0; i<=2; i++) {
	// x=i; 
	// console.log(x); //0 1 2
	// console.log(i); //0 1 2
	// switch (x) {
		// case 0:
		// y=100;
		// case 1:
		// y+=10;
		// case 2:
		// y+=1;
	// }
// }
// console.log(y);//123 - because there is no break 

// function howMuch(x) {
	// x++;
	// var y=5%x;
	// console.log(y);
	// var z=y*x-1;
	// return z-y;
// }
// console.log(howMuch(2));//3

// var a = 1, x;
// x = ++a + ++a;
// x+=a;
// document.write(x);//8







