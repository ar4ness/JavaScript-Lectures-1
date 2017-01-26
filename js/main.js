/*Regular expressions are patterns used to match character combinations in strings.

  The RegExp constructor creates a regular expression object for matching text with a pattern.

RegExp.prototype.exec() – Executes a search for a match in its string parameter.

RegExp.prototype.test() – Tests for a match in its string parameter.

  The match() method retrieves the matches when matching a string against a regular expression.

  The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.

  The search() method executes a search for a match between a regular expression and this String object.



// regular expression - it is an object
// var regExp = /abc/g;
//var regExp = newRegExp("abc", "g");

//in strings there are 3 methods, which let us use regExp for working with strings: match(), search(), replace()

// methods in regular expressions :
//test()  or exec() - for searching in string

//search let us find  in string



Metacharacters:

.   (any character)

*   (zero of more of the preceding)

+   (one or more of the preceding)

{}  (minimum to maximum quantifier)

?  (ungreedy modifier)

!   (at start of string means "negative pattern")

^   (start of string, or "negative" if at the start of a range)

$   (end of string)

[]   (match any of contents)

-   (range if used between square brackets)

()  (group, backreferenced group)

|   (alternative, or)

\   (the escape character itself)
// [0-9] любая цифра, т.е. любой символ от 0 до 9

// [0-9a-z] любая цифра или буква

// [0-9a-zA-Z] цифра, буква или большая буква

// [0-9a-zA-Z'"\\.] цифры и буквы и еще плюс символы кавычек одинарная и двойная и точка

// [0-9a-zA-Z'"\\.]{1,} и нужно найти их повторение длиной более одного символа

// /[0-9a-zA-Z'"\\.]{1,}/g теперь мы берем этот текст в символы / и он превращается в регулярное выражение и добавляем параметр g который говорит, что таких блоков в строке может быть много


.  - any character except newline
a  - the character a
ab - the string ab
a|b - a or b;
a*  - 0 or more a's;
\  - escapes a special character;

regular expression quantifiers:
*  - 0 or more;
+  - 1 or more;
?  - 0 or 1;
{2} - exactly 2;
{2, 5} - between 2 and 5;
{2,} - 2 or more;
default is greedy. Append ? for reluctant.

regular expression character classes
[ab-d] - one character of: a, b, c, d;
[^ab-d] - one character except: a, b, c, d.
[\b]  - backspace character;
\d - one digit;
\D - one non-digit;
\s - one whitespace;
\S - one non-whitespace;
\w - one word character;
\W - one non-word character;

regular expression assertions:
^  - start of string;
$  - end of string;
\b - word boundary;
\B - non-word boundary;
(?=...) - positive lookahead;
(?!...) - negative lookahead;

regular expression flags:
g - global match;
i - ignore case;
m - ^ and $ match start and end of line;

regular expression groups:
(...) - capturing group;
(?...) - non-capturing group;
\Y - match the Y'th captured group*/



var string = 'soMe text email@test.com';
var email = 'email@test.com';
var email2 = 'eMail@test.com\nemail2@test.com';
var phone = "soMe text +7(567)789-45-56";
var phone2 = "soMe text +73(567)789-45-56";
var phone3 = "soMe text 735647894556";

function testRegexp(string, regExp) {
	return string.match(regExp);
}
console.log(testRegexp(string, /some/)); // null;
console.log(testRegexp(string, /some/i)); //["soMe", index: 0, input: "soMe text email@test.com"]
console.log(testRegexp(string, /^some/i));//["soMe", index: 0, input: "soMe text email@test.com"]
console.log(testRegexp(string, /^text/i));// null
console.log(testRegexp(string, /text/i));//["text", index: 5, input: "soMe text email@test.com"]

console.log(testRegexp(email, /\w+@\w+\.{1}\w{2,}/i));//["email@test.com", index: 0, input: "email@test.com"]

console.log(testRegexp(email2, /^\w+@\w+\.{1}\w{2,}$/i)); // null
console.log(testRegexp(email2, /^\w+@\w+\.{1}\w{2,}$/im));//["email@test.com", index: 0, input: "email@test.com"]
console.log(testRegexp(email2, /^\w+@\w+\.{1}\w{2,}$/img));//["eMail@test.com", "email2@test.com"]
console.log(testRegexp(email2, /^\w+@\w+\.{1}\w{2,}$/mg));//["eMail@test.com", "email2@test.com"]
console.log(testRegexp(email2, /^\w+@\w+\.{1}\w{2,}$/g));//null
//console.log(testRegexp(email2, (\w+)@[^]+/));
console.log(testRegexp(email2, /([a-z]+)@\w+\.{1}\w{2,}/));
console.log(testRegexp(email2, /(?:[a-z]+)@\w+\.{1}\w{2,}/));//["ail@test.com", index: 2, input: "eMail@test.com↵email2@test.com"]
console.log(testRegexp(email2, /(?:[a-z]+)@(\w+)\.{1}(\w{2,})/)); //["ail@test.com", "test", "com", index: 2, input: "eMail@test.com↵email2@test.com"]

console.log(testRegexp(phone, /\+?\d{1,2}\(?\d{1,3}\)?\d{3}-?\d{2}-?\d{2}/)); //["+7(567)789-45-56", index: 10, input: "soMe text +7(567)789-45-56"]

console.log(testRegexp(phone, /\+?\d{1,2}[^]?\d{3}[^]?\d{3}-?\d{2}-?\d{2}/));//["+7(567)789-45-56", index: 10, input: "soMe text +7(567)789-45-56"]
console.log(testRegexp(phone2, /\+?\d{1,2}[^]?\d{3}[^]?\d{3}-?\d{2}-?\d{2}/));//["+73(567)789-45-56", index: 10, input: "soMe text +73(567)789-45-56"]
console.log(testRegexp(phone3, /^\+?\d{1,2}[^]?\d{3}[^]?\d{3}-?\d{2}-?\d{2}$/));// null


var testText = '"asd", "bac", "ifg"';

console.log(testRegexp(testText, /"(.+)"/g)); //[""asd", "bac", "ifg""]
console.log(testRegexp(testText, /"(.+?)"/g));//[""asd"", ""bac"", ""ifg""]
console.log(testRegexp(testText, /\b".+\b"/g));//["", "bac", "ifg""]
console.log(testRegexp(testText, /.+/g));//[""asd", "bac", "ifg""]
console.log(testRegexp(testText, /[^"].+[^"]/g));//["asd", "bac", "ifg"]

console.log(testText.replace(/"(.+?)"/g, function (elem) { // "asd", 123, 123
	if (elem === "\"asd\"") {
		return elem;
	}
	else {
		return 123;
	}
}))


