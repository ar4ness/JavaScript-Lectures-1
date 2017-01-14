// Lecture 6. Recursion
// 1.
// recursion pow
// function pow(x, y, z) {
	// if (!y)
		// return 1;	
	// z = z || x;
	// y--;
	// if (y > 0) {
		// x *= x;
		// return pow(x, y, z);
	// } 
	// else {
		// return x;
	// }
// }
// console.log(pow(2, 3));

// function pow(x, y,) {
// return y < 1 ? x = 1 : pow(x,y-1) * x;
// }

//2.
// recursion toOneDimension
// function toOneDimension (array, newArray) {
	// newArray = newArray || [];
	// for (var i = 0; i < array.length; i++) {
		// if (Array.isArray(array[i])) {
			// toOneDimension(array[i], newArray);
		// }
		// else {
			// newArray.push(array[i]);
		// }
	// }
	// return newArray;
// }
// console.log(toOneDimension ([[1, 2, 3, [5, 6, 7, [13, 14, 15]]], [4, 5, 6], [7, 8, 9, [40, 41]]], ['asd', 'test']));

// 3. Types 
// Numbers
// var x =123; //123
// var x = 0xF; //15
// var x = 5e3; // 5000
// var x = 5e-3; // 0.005

// Infinity
// var Infinity = Infinity;
// var nan = NaN;
// var number = 123;
// console.log(isFinite(Infinity)); // false
// console.log(isFinite(nan)); //false
// console.log(isFinite(number)); // true


// mathematical methods

// console.log(+'56'); //56
// console.log(+''); //0
// console.log(parseInt('12px')); //12
// console.log(parseInt('')); //NaN
// console.log(parseInt('10.5.5')); //10
// console.log(parseFloat('10.5.5')); //10.5
// console.log(parseFloat('as10.5.5')); //NaN
// console.log(parseInt('FF', 16)); //255

// console.log(isNaN(12)); // false
// console.log(isNaN(''));// false
// console.log(isNaN('25.5'));// false
// console.log(isNaN(null));// false
// console.log(isNaN(true));// false
// console.log(isNaN('test'));// true

// function isNumber(n) {
	// return !isNaN(parseFloat(n)) && isFinite(n);
// }
// console.log(isNumber(12)); // true
// console.log(isNumber(''));// false
// console.log(isNumber('25.5'));// ftrue
// console.log(isNumber(null));// false
// console.log(isNumber(true));// false
// console.log(isNumber('test'));// false


// console.log(Math.round(1.5)); // 2
// console.log(Math.round(1.4)); //1

// console.log(Math.ceil(1.1)); //2
// console.log(Math.floor(1.9)); //1

// console.log(10.567.toFixed(2)); /*10.57 this method (toFixed) returns string ( output value is black in console while others are blue) and this method can round number 1.5 to 2 or to 1 - thats why it's not recomended to use this method  for rounding*/
// console.log(Math.round(10.255*100)/100);// 10.26

// not accurate measurements
// var x = 0.1 + 0.2; // 0.30000000000000004
// console.log(x); // 
// console.log((0.1 * 10 + 0.2 * 10)/10); //0.3
// console.log(+(0.1 + 0.2).toFixed(10));// 0.3
// console.log(Math.round((0.1 + 0.2)*10) /10);//0.3
// console.log(9999999999999999); // 100000000000000000


// Strings

/* Your code will include strings which are very long. There are two ways you can do this:

1)You can use the + operator to append multiple strings together, like this:
let longString = "This is a very long string which needs " +

                        "to wrap across multiple lines because " +

                        "otherwise my code is unreadable.";

2) you can use the backslash character ("\") at the end of each line to indicate t

let longString = "This is a very long string which needs \

       to wrap across multiple lines because \

                        otherwise my code is unreadable.“;

  About Comparing strings: String Objects are Type Object, not String! String objects are rarely used, so the following results might be surprising.

  When comparing a number and a string, the string is converted to a number value. JavaScript attempts to convert the string numeric literal to a Number type value. First, a mathematical value is derived from the string numeric literal. Next, this value is rounded to nearest Number type value.*/

// creating a string
// var string = "string";
// var string = 'string';
// var string = "It\'s test string";
// console.log('first line \n next line');// first line and on the second line will be nexy line;
// console.log('\\'); // \


/*charAt - Returns a string containing the character at the specified index. If there is no character at the index, charAt returns an empty string. The first character is located at index 0

charCodeAt - Returns the Unicode value of the character at the specified index. If there is no character at the index, charCodeAt returns NaN (Not a Number).

concat(string) - Concatenates its argument to the end of the string that invokes the method. The string invoking this method is not modified; instead a new String is returned. This method is the same as adding two strings with the string concatenation operator + (e.g., s1.concat( s2 ) is the same as s1 + s2).

fromCharCode - Converts a list of Unicode values into a string containing the corresponding characters.

Indexof(substring, index) - Searches for the first occurrence of substring starting from position index in the string that invokes the method. The method returns the starting index of substring in the source string or –1 if substring is not found. If the index argument is not provided, the method begins searching from index 0 in the source string.

LastIndexf(Indexof(substring, index) - Searches for the last occurrence of substring starting from position index and searching toward the beginning of the string that invokes the method. The method returns the starting index of substring in the source string or –1 if substring is not found. If the index argument is not provided, the method begins searching from the end of the source string. */


// console.log('test'.length); // 4
// console.log('test   '.length); // 7  - JS output all symbols including 
// console.log('test'.charAt(0)); //t;
// console.log('test'[0]); //t;
// console.log('its empty string', 'test'.charAt(5)); // its empty string
// console.log('test'[5]); // undefined

// var x = "A and B";
// console.log(x.toUpperCase()); // A AND B
// console.log(x.toLowerCase());// a and b
// console.log(x);// A and B
// x = x.toLowerCase(); 
// console.log(x);// a and b


// For working with substrins in JS there are 3 methods : substring, substr, slice

// substring return string from position start to end
var string = "test string";
// console.log(string.substring(1, 5)); // est;


// substr return string from position start to set length

// console.log(string.slice(1, 5)); // est;
// console.log(string.substr(1, 5)); // est s;


// substring return string from position start to end

// console.log(string.substring(5, 1)); // est;

/*slice( start, end ) Returns a string containing the portion of the string from index start through index end. If the end index is not specified, the method returns a string from the start index to the end of the source string. A negative end index specifies an offset from the end of the string starting from a position one past the end of the last character (so –1 indicates the last character position in the string).*/

// console.log(string.slice(5, 1)); //  returns nothing - empty string
// console.log(string.substring(5, -1)); // test  - if substring sees minus number - it takes from 0 to bigger number
// console.log(string.slice(5, -1)); // strin - he counts minus numbers from the end of string;
// console.log(string.slice(-5, -1)); // strin -



// console.log(string.indexOf('t')); //0;
// console.log(string.lastIndexOf('t')); //6;

// console.log(string.indexOf('est')); //1;
// console.log(string.lastIndexOf('ing')); //8;

// var x = ~25;
// console.log(x); // -26  becouse -(25+1);

// var x = ~-10;
// console.log(x); // 9  becouse -(-10+1);


// console.log(~-1); // 0
// console.log(~0); //-1;

var x = "srting";
console.log(~string.indexOf('t')); // -1
console.log(~string.indexOf('rest'));// 0


if (~string.indexOf(x)) {
	console.log("string has variable x");
}

if (string.indexOf(x) != -1) {
	console.log("string has variable x");
}



//split( string ) Splits the source string into an array of strings (tokens) where its string argument specifies the delimiter (i.e., the characters that indicate the end of each token in the source string). 
