// regular expression
// regExp = /abc/g;
//var regExp = newRegExp("abc", "g");

var string = 'soMe text email@test.com';
var email = 'email@test.com';
var email2 = 'eMail@test.com\nemail2@test.com';
var phone = "soMe text +7(564)789-45-56";
var phone2 = "soMe text +73(564)789-45-56";
var phone3 = "soMe text 735647894556";

function testRegexp(string, regExp) {
	return string.match(regExp);
}
console.log(testRegexp(string, /some/));
console.log(testRegexp(string, /some/i));
console.log(testRegexp(string, /^some/i));
console.log(testRegexp(string, /^text/i));
console.log(testRegexp(string, /text/i));

console.log(testRegexp(email, /\w+@\w+\.{1}\w{2,}/i));

console.log(testRegexp(email2, /^\w+@\w+\.{1}\w{2,}/i));
console.log(testRegexp(string, /\w+@\w+\.{1}\w{2,}/i));

//check it|^!!
//console.log(testRegexp(email2, (\w+)@[^]+/));
console.log(testRegexp(email2, /([a-z]+)@\w+\.{1}\w{2,}/));
console.log(testRegexp(email2, /(?:[a-z]+)@\w+\.{1}\w{2,}/));
console.log(testRegexp(email2, /(?:[a-z]+)@(\w+)\.{1}(\w{2,})/));

console.log(testRegexp(phone, /\+?\d{1,2}\(?\d{1,3}\)?\d{3}-?\d{2}-?\d{2}/));
//

var testText = "'asb', 'bac', 'img'";

console.log

