// 모두 숫자 타입이다.
var integer = 10;
var double = 10.12;
var negative = -20;

var binary = 0b01000001; // 2진수
var octal = 0o101;       // 8진수
var hex = 0x41;          // 16진수

// 표기법만 다를 뿐 모두 같은 값이다.
console.log(binary); // 65
console.log(octal);  // 65
console.log(hex);    // 65
console.log(binary===octal);  // true
console.log(octal===hex);     // true

console.log(1===1.0); // true
console.log(4/2);     // 2
console.log(3/2);     // 1.5

console.log(10/0);       // Infinity (양의 무한대)
console.log(10/-0);      // -Infinity (음의 무한대)
console.log(1*'String'); // NaN

// 문자열 타입
var string;
string = '문자열';
string = "문자열";
string = `문자열`;

var string = hello; // ReferenceError

var template = `Template literal`;
console.log(template); // Template literal

// 에러 예시
var str = 'Hello
world';
// Syntax Error : Invalid or unexpected token

// 줄바꿈과 들여쓰기 적용
var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template);

var first = 'Seyeon';
var last = 'Jang';
console.log(`My name is '+first+' '+last+'.`);
console.log(`My name is ${first} ${last}.`);
// 표현식을 삽입하려면 ${}로 표현식을 감싼다.
console.log(`1 + 2 = ${1 + 2}`);

var foo = true;
console.log(foo); //true

foo = false;
console.log(foo); //false

var foo;
console.log(foo); // undefined

var key = Symbol('key');
console.log(typeof key); //symbol
// 객체 생성
var obj = {};
// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 값으로 사용
obj[key] = 'value';
console.log(obj[key]); //value