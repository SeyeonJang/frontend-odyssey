// 이항 산술 연산자 =====
5+2;
5-2;
5*2;
5/2;
5%2;

// 단항 산술 연산자 =====
var x=1;

x++;
console.log(x); // 2

x--;
console.log(x); // 1

var y = 5, result;

// 선할당 후증가
result = y++;
console.log(result, y); // 5 6
// 선증가 후할당
result = ++y;
console.log(result, y); // 7 7
// 선할당 후감소
result = x--;
console.log(result, y); // 7 6
// 선감소 후할당
result = --x;
console.log(result, y); // 5 5

+10; // 10
+(-10); // -10

// 문자열 연결 연산자 =====
'1'+2; // '12'
1+'2'; // '12'

1 + true; // 2
1 + false; // 1
1 + null; // 1
1 + undefined; // NaN

// 할당 연산자 =====

var z;

x=10;
console.log(z); //10
x+=5;
console.log(z); //15

var str = 'My name is ';
str += 'Seyeon';
console.log(str); // 'My name is Seyeon

// 동등/일치 비교 연산자 =====
5 == 5; // true
5 == '5'; // true (타입은 다르지만 암묵적 변환을 통해 타입을 일치시키면 동등하다!!!) ⭐️
5 === '5'; // false

// 안티 패턴
// 가독성, 성능, 유지보수 등에 부정적인 영향을 줄 수 있어 지양하는 패턴
'0'==''; // false
0==''; // true
0=='0'; // true
false == 'false'; // false
false == '0'; // true
false == null; // false
false == undefined; // false

// 삼항 조건 연산자 =====
var x = 10;
var result = if (x%2) { result = '홀수'; } else { result = '짝수'; }; // SyntaxError
var result = x%2 ? '홀수' : '짝수';
console.log(result); // 짝수

// 논리연산자 =====
true || true; // true
true || false; // true
false || true; // true
false || false; // false

true && true; // true
false && true; // false

!true; // false
!false; // true

// 쉼표 연산자 =====
var x, y, z;
x=1, y=2, z=3;

// 그룹 연산자 =====
10 * 2 + 3; //23
10 * (2+3); //50

